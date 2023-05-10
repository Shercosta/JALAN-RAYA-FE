import axios from 'axios';
import {
  overwriteJalanRaya,
  setJalanRaya,
  updateJalanRaya,
} from './actions/jalanRaya';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const applyInterceptors = (dispatch) => {
  instance.interceptors.request.use(
    (config) => {
      if (config.headers) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (Boolean(config.headers.overwrite))
          config.overwrite = config.headers.overwrite;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  instance.interceptors.response.use((res) => {
    const { config, data } = res;

    if (config.overwrite) {
      dispatch(overwriteJalanRaya(data));
    } else if (config.method === 'patch') {
      dispatch(
        updateJalanRaya({
          gid: data.data.gid,
          data: data.data,
        })
      );
    } else {
      dispatch(setJalanRaya(data));
    }

    return res;
  });
};

export default instance;
