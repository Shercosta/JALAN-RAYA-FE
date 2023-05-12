import { describe, expect, it } from 'vitest';
import store from '../src/store';
import {
  setJalanRaya,
  updateJalanRaya,
  overwriteJalanRaya,
  deleteJalanRaya,
} from '../src/store/actions/jalanRaya';
import { getJalanRayas } from '../src/store/selectors/jalanRaya';

const payload = {
  gid: 1,
  remark: 'jalan lokal',
  srs_id: '',
  lcode: '',
  shape_leng: 0.001002,
  geom: {
    type: 'MultiLineString',
    coordinates: [
      [
        [2, 1],
        [2, 5],
      ],
      [
        [2, 5],
        [5, 2],
      ],
    ],
  },
};

describe('Jalan Raya', () => {
  /**
   * @type {(typeof store['dispatch'])}
   */
  let dispatch;

  beforeAll(async () => {
    dispatch = store.dispatch;
  });

  it('Can set an array of data in the state', () => {
    dispatch(
      setJalanRaya({
        data: payload,
        page: {
          size: 1,
          total: 1,
          totalPages: 1,
          current: 1,
        },
      })
    );

    expect(store.getState().jalanRaya.data.size).toBe(1);
  });

  it('Can update one of the state in the store', () => {
    dispatch(
      updateJalanRaya({
        gid: 1,
        data: {
          ...payload,
          remark: 'jalan kolektor',
        },
      })
    );

    expect(store.getState().jalanRaya.data.get(1)?.remark).toBe(
      'jalan kolektor'
    );
  });

  it('Can overwrite the current data in the store', () => {
    dispatch(
      overwriteJalanRaya({
        data: [payload, { ...payload, gid: 2, remark: 'jalan arteri' }],
        page: {
          size: 2,
          total: 2,
          totalPages: 1,
          current: 1,
        },
      })
    );

    expect(store.getState().jalanRaya.data.size).toBe(2);
  });

  it('Can delete the current data in the store', () => {
    dispatch(deleteJalanRaya(1));

    expect(store.getState().jalanRaya.data.get(1)).toBeUndefined();
  });

  it('Can get the data from the store', () => {
    const jalanRaya = getJalanRayas(store.getState());

    expect(jalanRaya.data).toBeDefined();
    expect(jalanRaya.page).toBeDefined();
  });
});
