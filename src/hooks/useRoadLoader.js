import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getAllData } from '../store/actions/jalanRaya';
import { getJalanRayas } from '../store/selectors/jalanRaya';

/**
 * @param {Object} args
 * @param {string} args.type
 * @param {React.Dispatch<React.SetStateAction<boolean>>} args.setIsFetching
 */
const useRoadLoader = ({ setIsFetching, type }) => {
  const roads = useSelector(getJalanRayas);

  const getAllRoad = useCallback(async () => {
    setIsFetching(true);

    try {
      const query = type.toLowerCase() === 'none' ? '' : `remark="${type}"`;

      await getAllData(`limit=all&&filters=${query}`, true)();
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  }, [type, setIsFetching]);

  useEffect(() => {
    getAllRoad();
  }, [type]); // eslint-disable-line react-hooks/exhaustive-deps

  return roads;
};

export default useRoadLoader;
