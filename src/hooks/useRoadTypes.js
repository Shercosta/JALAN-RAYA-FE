import { useCallback, useEffect, useState } from 'react';
import axios from '../utils/axios';

const useRoadTypes = () => {
  /**
   * @type {[string[], React.Dispatch<React.SetStateAction<string[]>]]
   */
  const [types, setTypes] = useState([]);

  const getRoadTypes = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/jalan-rayas/types`);
      if (!data?.data) return;

      setTypes(data.data);
    } catch (err) {
      console.log(err);
    }
  }, [setTypes]);

  useEffect(() => {
    getRoadTypes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return types;
};

export default useRoadTypes;
