import React from 'react';
import { As, Card, Checkbox, HStack, Stack, Tag, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {
  IoPeopleOutline,
  IoEyeOutline,
  IoMaleOutline,
  IoFemaleOutline,
} from 'react-icons/io5';
import { BadgeStatus } from '@/shared/ui/badge-status';
import { RequestInfo, Statistics, Status } from '@/shared/api';
import { toPercent } from '../../lib';
import Image from 'next/image';

const iconStyle = { color: '#2c3558', boxSize: 5 };
const textStyle = { color: '#797eb3', fontSize: 'sm' };

type RequestsItemProps = {
  item: RequestInfo;
};

export const RequestsItem: React.FC<RequestsItemProps> = ({ item }) => {
  const { stats, group, logo, price, title, status, tags: tagsArray } = item;
  const { views, users, female, male } = stats;

  const convertToPercent = toPercent<Pick<Statistics, 'male' | 'female'>>({
    male,
    female,
  });

  const statusLabel: Record<Status, string> = {
    on_check: 'На проверке',
    approved: 'Одобрено',
    rejected: 'Отклонено',
  };

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
            {renderIconTextPair(IoPeopleOutline, users)}
            {renderIconTextPair(IoEyeOutline, views)}
            {renderIconTextPair(IoMaleOutline, `${convertToPercent.male}%`)}
            {renderIconTextPair(IoFemaleOutline, `${convertToPercent.female}%`)}
          </HStack>
          <Stack>
            <HStack spacing={3}>
              <Image
                src={logo}
                alt={`Логотип ${title}`}
                width={32}
                height={32}
              />
              <Text
                as="b"
                color="#a3aed0"
                fontSize="sm"
                textTransform="capitalize"
              >
                {group}
              </Text>
            </HStack>
            <Stack direction={['column', 'column', 'row']}>
              <Text
                as="b"
                color="#1b2559"
                fontSize="lg"
                textTransform="capitalize"
              >
                {title}
              </Text>
              <BadgeStatus type={status}>{statusLabel[status]}</BadgeStatus>
            </Stack>
          </Stack>
          <HStack flexWrap="wrap" gap={5}>
            {tagsArray.map((tags, idx) => (
              <HStack key={idx} flexWrap="wrap">
                {tags.map((tag, idx) => (
                  <Tag
                    key={`${tag}_${idx}`}
                    whiteSpace="nowrap"
                    textTransform="capitalize"
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>
            ))}
          </HStack>
        </Stack>
        <Text as="b" fontSize="xl" color="#1b2559" textAlign="right">
          {price.toFixed(2).replace('.', ',')} USDT
        </Text>
      </Stack>
    </Card>
  );
};
