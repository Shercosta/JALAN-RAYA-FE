import { useCallback } from 'react';
import { Box, Flex, Select, Text, chakra } from '@chakra-ui/react';

const Option = chakra('option');

/**
 * @param {Object} args
 * @param {string} args.type
 * @param {string[]} args.types
 * @param {boolean} args.isFetching
 * @param {React.Dispatch<React.SetStateAction<string>} args.setType
 */
const NavBar = ({
  type = 'none',
  types = [],
  setType = () => {},
  isFetching,
}) => {
  const onSelectionChange = useCallback(
    /**
     * @param {React.ChangeEvent<HTMLSelectElement>} ev
     */
    (ev) => {
      const { value } = ev.target;

      if (type === value) return;

      setType?.(value);
    },
    [type, setType]
  );

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      mb={10}
    >
      <Text
        fontWeight={'bold'}
        fontSize={'2rem'}
        mb={2}
        textTransform={'uppercase'}
      >
        Kabupaten Lampung Selatang
      </Text>
      <Box>
        <Select value={type} onChange={onSelectionChange} disabled={isFetching}>
          <Option value={'none'} textTransform={'uppercase'}>
            All
          </Option>
          {types.map((type) => (
            <Option value={type} key={type} textTransform={'uppercase'}>
              {type}
            </Option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
};

export default NavBar;
