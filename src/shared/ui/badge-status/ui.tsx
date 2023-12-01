import React from 'react';
import { Badge, BadgeProps } from '@chakra-ui/react';
import { FcSearch, FcApproval, FcDisapprove } from 'react-icons/fc';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type BadgeStatusType = 'on_check' | 'approved' | 'rejected';

type BadgeStatusProps = BadgeProps & {
  type: BadgeStatusType;
};

type BadgeType = {
  iconType: Record<BadgeStatusType, IconType>;
  colorType: Record<BadgeStatusType, string>;
};

export const BadgeStatus: React.FC<BadgeStatusProps> = ({ type, children }) => {
  const badge: BadgeType = {
    iconType: {
      on_check: FcSearch,
      approved: FcApproval,
      rejected: FcDisapprove,
    },
    colorType: {
      on_check: 'yellow',
      rejected: 'red',
      approved: 'green',
    },
  };

  return (
    <Badge
      colorScheme={badge.colorType[type]}
      textTransform="none"
      fontSize="sm"
      fontWeight={600}
      borderRadius={6}
      px={2}
      py={1}
      display="inline-flex"
      alignItems="center"
      gap={1}
      w="fit-content"
    >
      <Icon as={badge.iconType[type]} boxSize={4} />
      {children}
    </Badge>
  );
};
