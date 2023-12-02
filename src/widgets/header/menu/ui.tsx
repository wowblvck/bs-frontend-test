'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { Icon, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import React from 'react';
import { usePathname } from 'next/navigation';

const routes = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Рекламодателям',
    href: '/advertisers',
  },
  {
    title: 'Заказы',
    href: '/advertisers/orders',
  },
  {
    title: 'Заказ',
    href: '/advertisers/orders/2',
  },
  {
    title: 'Заявки',
    href: '/advertisers/orders/2/requests',
  },
];

export const Menu = () => {
  const pathname = usePathname();

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
      {routes.map((route) => {
        const isCurrentPage = pathname === route.href;
        return (
          <BreadcrumbItem
            key={route.href}
            isCurrentPage={isCurrentPage}
            fontWeight={isCurrentPage ? 700 : 400}
          >
            <BreadcrumbLink
              as={pathname === route.href ? Text : Link}
              href={route.href}
            >
              {route.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
