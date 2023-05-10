import _ from 'lodash';
import { useMemo, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Polyline } from 'react-leaflet';
import NavBar from './components/NavBar';
import useRoadLoader from './hooks/useRoadLoader';
import MapContainer from './components/MapContainer';
import useRoadTypes from './hooks/useRoadTypes';
import { ROAD_COLOR } from './utils/color';

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [type, setType] = useState('none');
  const types = useRoadTypes();
  const roads = useRoadLoader({ type, setIsFetching });
  const coordinates = useMemo(() => {
    const entries = roads?.data?.entries?.();

    if (!entries) return [];

    const arrayEntries = Array.from(entries).map(([, value]) => value);

    return _.map(arrayEntries, ({ geom, remark }) => ({
      coordinates: geom.coordinates,
      type: remark,
    }));
  }, [roads]);

  return (
    <Box gap={2} overflow={'hidden'} h={'100vh'} w={'100vw'}>
      <NavBar
        type={type}
        setType={setType}
        types={types}
        isFetching={isFetching}
      />
      <MapContainer>
        {_.map(coordinates, ({ coordinates, type }) => {
          const color = ROAD_COLOR[_.snakeCase(type).toUpperCase()];

          return (
            <Polyline
              positions={coordinates}
              key={coordinates}
              {...{ color }}
            />
          );
        })}
      </MapContainer>
    </Box>
  );
}

export default App;
