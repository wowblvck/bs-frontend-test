import React from 'react';
import {
  As,
  Card,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {
  IoPeopleOutline,
  IoEyeOutline,
  IoMaleOutline,
  IoFemaleOutline,
} from 'react-icons/io5';
import { SiNestjs } from 'react-icons/si';

const iconStyle = { color: '#2c3558', boxSize: 5 };
const textStyle = { color: '#797eb3', fontSize: 'sm' };

export const RequestsItem = () => {
  const renderIconTextPair = (icon: As, text: string | number) => (
    <HStack spacing={2}>
      <Icon as={icon} {...iconStyle} />
      <Text {...textStyle}>{text}</Text>
    </HStack>
  );

  return (
    <Card position="relative" w="full" bg="white" borderRadius={20} p={4}>
      <Checkbox
        position="absolute"
        top={4}
        right={4}
        defaultChecked={false}
        colorScheme="bs"
      />
      <Stack
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        gap={['20px', '40px']}
      >
        <Stack direction="column" spacing={7}>
          <HStack spacing={4} flexWrap="wrap" mr={8}>
            {renderIconTextPair(IoPeopleOutline, '~1')}
            {renderIconTextPair(IoEyeOutline, '~1')}
            {renderIconTextPair(IoMaleOutline, '50%')}
            {renderIconTextPair(IoFemaleOutline, '50%')}
          </HStack>
          <Stack>
            <HStack spacing={3}>
              <Icon as={SiNestjs} boxSize={8} color="#df244e" />
              <Text as="b" color="#a3aed0" fontSize="sm">
                Сеть каналов СНГ
              </Text>
            </HStack>
            <Text as="b" color="#1b2559" fontSize="lg">
              Все о путешествиях
            </Text>
          </Stack>
          <HStack flexWrap="wrap">
            <Tag whiteSpace="nowrap">РФ</Tag>
            <Tag whiteSpace="nowrap">Пост</Tag>
            <Tag whiteSpace="nowrap">Видео</Tag>
            <Tag whiteSpace="nowrap">Бизнес и стартапы</Tag>
            <Tag whiteSpace="nowrap">Криптовалюта</Tag>
          </HStack>
        </Stack>
        <Text as="b" fontSize="xl" color="#1b2559">
          220,00 USDT
        </Text>
      </Stack>
    </Card>
  );
};
