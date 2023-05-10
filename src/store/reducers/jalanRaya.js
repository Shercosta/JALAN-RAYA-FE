import _ from 'lodash';
import { JALAN_RAYA_TYPE } from '../../utils/constant';
import { normalizeMultiLineString, toArray } from '../../utils/common';

const defaultState = {
  data: new Map(),
  page: {
    size: 0,
    total: 0,
    totalPages: 0,
    current: 0,
  },
};

const reducer = (state = _.cloneDeep(defaultState), action) => {
  switch (action.type) {
    case JALAN_RAYA_TYPE.SET: {
      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value))
          state.data.set(value.gid, normalizeMultiLineString(value));
        else
          value.forEach((val) =>
            state.data.set(val.gid, normalizeMultiLineString(val))
          );
      });

      state.page = {
        ...state.page,
        ...action.payload.page,
      };

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case JALAN_RAYA_TYPE.ADD: {
      state.data.set(state.data.size + 1, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case JALAN_RAYA_TYPE.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case JALAN_RAYA_TYPE.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value))
          state.data.set(value.gid, normalizeMultiLineString(value));
        else
          value.forEach((val) =>
            state.data.set(val.gid, normalizeMultiLineString(val))
          );
      });

      state.page = action.payload.page;

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case JALAN_RAYA_TYPE.DELETE: {
      state.data.delete(action.payload);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
