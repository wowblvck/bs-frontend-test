enum RoutePath {
  HOME = '/',
  ADVERTISERS = '/advertisers',
  ADVERTISERS_ORDERS = `${RoutePath.ADVERTISERS}/orders`,
  ADVERTISERS_ORDER = `${RoutePath.ADVERTISERS_ORDERS}/[id]`,
  ADVERTISERS_REQUESTS = `${RoutePath.ADVERTISERS_ORDER}/requests`,
}

export const applyParam = <T>(value: number | string, param: string, path: T) =>
  (path as string).replace(param, value.toString()) as T;

export const paths = {
  home: {
    title: 'Главная',
    to: RoutePath.HOME,
  },
  advertisers: {
    title: 'Рекламодателям',
    to: RoutePath.ADVERTISERS,
    orders: {
      title: 'Заказы',
      to: RoutePath.ADVERTISERS_ORDERS,
      order: {
        title: 'Заказ',
        param: '[id]',
        to: function (id: number) {
          return applyParam(id, this.param, RoutePath.ADVERTISERS_ORDER);
        },
        requests: {
          title: 'Заявки',
          param: '[id]',
          to: function (id: number) {
            return applyParam(id, this.param, RoutePath.ADVERTISERS_REQUESTS);
          },
        },
      },
    },
  },
} as const;

export type Paths = typeof paths;
