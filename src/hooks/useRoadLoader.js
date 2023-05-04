import { useCallback, useEffect, useState } from 'react';
import axios from '../utils/axios';

/**
 * @param {Object} args
 * @param {string} args.type
 * @param {React.Dispatch<React.SetStateAction<boolean>>} args.setIsFetching
 */
const useRoadLoader = ({ type, setIsFetching }) => {
  const [roads, setRoads] = useState([]);

  const getNewRoads = useCallback(async () => {
    try {
      setIsFetching(true);

      const query = type.toLowerCase() === 'none' ? '' : `remark="${type}"`;

      const { data } = await axios.get(
        `/api/jalan-rayas?limit=all&&filters=${query}`
      );

      if (data?.data?.length) setRoads(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  }, [type, setIsFetching]);

  useEffect(() => {
    getNewRoads();
  }, [type]); // eslint-disable-line react-hooks/exhaustive-deps

  return roads;
};

export default useRoadLoader;
