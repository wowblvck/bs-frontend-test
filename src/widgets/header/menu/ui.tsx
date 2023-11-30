'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import React from 'react';

export const Menu = () => {
  return (
    <Breadcrumb
      spacing="8px"
      listProps={{ flexWrap: 'wrap' }}
      separator={
        <Icon
          as={MdChevronRight}
          color="#1b254b"
          boxSize={6}
          verticalAlign="middle"
        />
      }
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Главная
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/advertisers">
          Рекламодателям
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/advertisers/orders">
          Заказы
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/advertisers/orders/2">
          Заказ
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/advertisers/orders/2/requests">
          Заявки
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
