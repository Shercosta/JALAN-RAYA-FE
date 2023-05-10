import axios from '../axios';
import { JALAN_RAYA_TYPE } from '../../utils/constant';

export const addJalanRaya = (payload) => ({
  type: JALAN_RAYA_TYPE.ADD,
  payload,
});

export const setJalanRaya = (payload) => ({
  type: JALAN_RAYA_TYPE.SET,
  payload,
});

export const updateJalanRaya = (payload) => ({
  type: JALAN_RAYA_TYPE.UPDATE,
  payload, // { gid, data }
});

export const overwriteJalanRaya = (payload) => ({
  type: JALAN_RAYA_TYPE.OVERWRITE,
  payload,
});

export const deleteJalanRaya = (payload) => ({
  type: JALAN_RAYA_TYPE.DELETE,
  payload, // gid
});

export const getAllData =
  (query = '', overwrite = true) =>
  async () => {
    const { data } = await axios.get(`/api/jalan-rayas?${query}`, {
      headers: {
        overwrite,
      },
    });

    return data.data;
  };

export const getDataByGid =
  (gid, query = '', overwrite = false) =>
  async () => {
    const { data } = await axios.get(`/api/jalan-rayas/${gid}?${query}`, {
      headers: {
        overwrite,
      },
    });

    return data.data;
  };
