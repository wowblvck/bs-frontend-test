<h1 align='center'>Тестовое задание в Bolt System</h1>

> RU: Просмотр заявок заказа и управление их состоянием.

> EN: View order requests and manage their status.

> ВАЖНО: Это демонстрационная версия приложения для презентации способностей
> написания кода и работой с инструментами и
> библиотеками. В приложении учтен не весь UX и проработаны не все элементы UI.

<details>
  <summary>Описание задания</summary>

1. Этап 1:

   - [x] Создана ветка feature/stage-1 от main.
   - [x] Сверстана страница (макет: [ссылка №1](https://prnt.sc/5JwZISw3WimW)
         , [ссылка №2](https://prnt.sc/5TcJ8j2jfBCQ), [ссылка №3](https://prnt.sc/qGn0H9OejQnV)).
         Для стилей и разметки использовался только Chakra UI.
   - [x] В списке присутствуют 10 элементов (одинаковых).
   - [x] Результат приложен в виде скриншотов в корень проекта, и добавлены
         ссылки в README.
   - [x] Ветка feature/stage-1 смержена в main.

2. Этап 2:

   - [x] Создана ветка feature/stage-2 от main.
   - [x] Создан API-роут `GET /api/orders` в Next.js. Принимает limit и
         offset в параметрах запроса для пагинации. (Для тестирования
         использовать [bs-frontend-test.vercel.app/api/orders](https://bs-frontend-test.vercel.app/api/orders)).
   - [x] Возвращает данные из mock-списка (от 20 элементов) заявок по
         заданным параметрам. Общее количество элементов передаётся в Headers
         (X-Total-Count).
   - [x] Создан API-роут `PUT /api/orders/:id/accept` в Next.js. Принимает
         ID заявки в урле. Возвращает данные заявки. Для тестирования
         использовать [bs-frontend-test.vercel.app/api/orders/:id/accept](https://bs-frontend-test.vercel.app/api/orders/2/accept).
   - [x] Для проверки API использовался Postman.
   - [x] Результат приложен в виде скриншотов в корень проекта, и добавлены
         ссылки в README.
   - [x] Ветка feature/stage-2 смержена в main.
   - [x] Дополнительно: создан API-роут для генерации данных. Для тестирования
         использовать [bs-frontend-test.vercel.app/api/orders/requests/generated](https://bs-frontend-test.vercel.app/api/orders/requests/generated).

3. Этап 3:
   - [x] Создана ветку feature/stage-3 от main.
   - [x] Внедрено API в страницу через tanstack query. - Список заявок получается по апи `GET /api/orders`. - Выбор заявок последовательно отправляется по `PUT
/api/orders/:id/accept` для каждой заявки отдельно. - Если произошла ошибка при каком либо запросе - выдать toast с
         сообщением об ошибки, и продолжить запросы.
   - [x] Внедрена пагинацию.
   - [x] Записан экран с демонстрацией работы, видео приложено в корень
         проекта, и добавлено в README.
   - [x] Смержена ветка в main.

</details>

Приложение написано с использованием следующего _JavaScipt/TypeScript_ стека:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Загрузка данных:

- [Axios](https://axios-http.com/)

UI:

- [Chakra UI](https://chakra-ui.com/)

ORM:

- [Prisma](https://www.prisma.io/)

База данных:

- [PostgreSQL](https://www.postgresql.org/)

Архитектурная методология:

- [Feature Sliced Design (FSD)](https://feature-sliced.design)

### Инструкция по установке и запуску в режиме разработки.

> ВНИМАНИЕ: Перед запуском убедитесь, что у вас установлен PostrgreSQL-сервер (
> можно использовать облачные решения, например, Supabase) и у вас есть доступ к
> нему, в противном случае приложение не будет работать.

> ВНИМАНИЕ: В качестве пакетного менеджера по-умолчанию используется pnpm.

1. Установить `node_modules` используя команду `pnpm install`.
2. В корне проекта создать файл `.env.development` (файл с
   переменными [.env.example](.env.example)).
3. Убедиться, что PostgresQL-сервер запущен и в файле с переменными окружения
   указаны корректные данные.
4. Воспользоваться командой `pnpm prisma:migrate:dev` для запуска миграции базы
   данных.
5. Запустить приложение, используя команду `pnpm dev`.
6. В случае успешного запуска вы увидете экран заявок с
   надписью `Заявки не найдены`, что будет говорить о том, что соединение с
   базой данных успешно работает, но данных в них - нет. Попробуйте сгенерировать данные и перезагрузить страницу.
   > Если на экране вы видите запись `Произошла ошибка во время загрузки!`, то
   > проверьте настройки подключения к базе данных или URL API для запросов к
   > серверу.

### Инструкция по установке и запуску в Docker.

> ВНИМАНИЕ: Перед запуском убедитесь, что в вашей системе установлен Docker и Docker Compose.

1. В корне проекта создать файл `.env.production` (файл с
   переменными [.env.example](.env.example)).
2. В качестве `POSTGRES_HOST` необходимо указать `container_name` контейнера с базой данных (см. [docker-compose](docker-compose.yml))
3. В файле [docker-compose](docker-compose.yml) в сервисе pgadmin укажите переменные окружения для регистрации аккаунта администратора.
4. Используйте команду `docker compose up -d` для запуска контейнеров в фоновом режиме.

#### API

1.  Генерация заявок.

    Возвращает JSON-данные с массивом созданных заявок.

    <details>
       <summary>Сведения</summary>

    - URL

      `/api/orders/requests/generated`

    - Метод

      `POST`

    - Параметры URL

      Опциональные:

      `remove=y` - полностью очищает данные из таблицы запросов.

      `rewrite=y` - перезапишет данные в таблице запросов.

      `size=[integer]` - размер массива с данными.

      Если ни один из параметров не указан, то вернется сгенерированный массив с
      данными размером 100 записей. В случае, если данные уже есть, то вернется
      ошибка 409.

    - Удачный ответ

      - Код: 200 OK

        Контент:

        ```json
        [
          {
            "id": "bb5b1182-5f48-425a-94a6-4c670083eb8b",
            "logo": "https://loremflickr.com/64/64/logo?lock=988550958940160",
            "title": "victus",
            "group": "verbera",
            "status": "approved",
            "price": 470.2893032226712,
            "tags": {
              "0": ["depulso", "vitae", "crux"],
              "1": ["temptatio"],
              "2": ["rerum", "iusto", "curtus"],
              "3": ["totidem", "adaugeo"]
            },
            "statisticsId": 205,
            "stats": {
              "id": 205,
              "users": 260,
              "views": 351,
              "male": 22,
              "female": 160
            }
          }
        ]
        ```

        ```json
        "Database successfully removed!"
        ```

    - Ошибка в ответе

      - Код: 409 Conflict

        Контент:

        ```json
        {
          "success": false,
          "code": 409,
          "message": "The data file already exists. Use the \"rewrite=y\" parameter if you want to rewrite"
        }
        ```

      - Код: 500 Internal Server Error

        Контент:

        ```json
        {
          "success": false,
          "code": 500,
          "message": "An error occurred while generating data!"
        }
        ```

        </details>

2.  Получение заявок.

    Возвращает JSON-данные с массивом заявок.

     <details>
        <summary>Сведения</summary>

    - URL

      `/api/orders/requests`

    - Метод

      `GET`

    - Параметры URL

      Опциональные:

      `offset=[integer]` - номер страницы.

      `limit=[integer]` - количество на странице.

      Если параметры не указаны, то вернет массив всех заявок без пагинации по страницам и без общего числа объектов в `headers`.

    - Удачный ответ

      - Код: 200 OK

        Контент:

        ```json
        [
          {
            "id": "bb5b1182-5f48-425a-94a6-4c670083eb8b",
            "logo": "https://loremflickr.com/64/64/logo?lock=988550958940160",
            "title": "victus",
            "group": "verbera",
            "status": "approved",
            "price": 470.2893032226712,
            "tags": {
              "0": ["depulso", "vitae", "crux"],
              "1": ["temptatio"],
              "2": ["rerum", "iusto", "curtus"],
              "3": ["totidem", "adaugeo"]
            },
            "statisticsId": 205,
            "stats": {
              "id": 205,
              "users": 260,
              "views": 351,
              "male": 22,
              "female": 160
            }
          }
        ]
        ```

        Headers

        ```
        "X-Total-Count": "100"
        ```

    - Ошибка в ответе

      - Код: 500 Internal Server Error

        Контент:

        ```json
        {
          "success": false,
          "code": 500,
          "message": "An error occurred while generating data!"
        }
        ```

        </details>

3.  Отправка заявки на одобрение.

    Возвращает JSON-данные с измененным статусом заявки на одобренный (`approved`).

      <details>
         <summary>Сведения</summary>

    - URL

      `/api/orders/:id/accept`

    - Метод

      `PUT`

    - Удачный ответ

      - Код: 200 OK

        Контент:

        ```json
        {
          "id": "bb5b1182-5f48-425a-94a6-4c670083eb8b",
          "logo": "https://loremflickr.com/64/64/logo?lock=988550958940160",
          "title": "victus",
          "group": "verbera",
          "status": "approved",
          "price": 470.2893032226712,
          "tags": {
            "0": ["depulso", "vitae", "crux"],
            "1": ["temptatio"],
            "2": ["rerum", "iusto", "curtus"],
            "3": ["totidem", "adaugeo"]
          },
          "statisticsId": 205,
          "stats": {
            "id": 205,
            "users": 260,
            "views": 351,
            "male": 22,
            "female": 160
          }
        }
        ```

    - Ошибка в ответе

      - Код: 404 Not Found

        Контент:

        ```json
        {
          "success": false,
          "code": 500,
          "message": "Data with the specified ID ':id' was not found!"
        }
        ```
      - Код: 409 Conflict

        Контент:

        ```json
        {
          "success": false,
          "code": 409,
          "message": "Status of the application with ID ':id' has already been approved!"
        }
        ```
      - Код: 500 Internal Server Error

        Контент:

        ```json
        {
          "success": false,
          "code": 500,
          "message": "An error occurred while generating data!"
        }
        ```
        
        </details>

#### Отчет:

1. Этап 1:
   <details>
      <summary>Мобильная версия</summary>

   ![Мобильная версия](/docs/screenshots/stage-1/mobile.png)
   </details>

   <details>
      <summary>Десктоп версия</summary>

   ![Десктоп](/docs/screenshots/stage-1/desktop.png)
   </details>

2. Этап 2:
   <details>
      <summary>Генерация данных</summary>

   ![Генерация данных](/docs/screenshots/stage-2/generated.png)
   </details>

   <details>
      <summary>Получение списка заявок</summary>

   ![Список заявок](/docs/screenshots/stage-2/get-requests.png)
   </details>

   <details>
      <summary>Получение общего количества заявок</summary>

   ![Общее количество заявок](/docs/screenshots/stage-2/get-requests-count.png)
   </details>

   <details>
      <summary>Отправка заявки на одобрение</summary>

   ![Отправка заявки](/docs/screenshots/stage-2/put-request.png)
   </details>

3. Этап 3:

   [Видео презентация](https://youtube.com)

---

## ✨ [Превью](https://bs-frontend-test.vercel.app)

## Автор

👤 Разработчик **Indar Basto** ([@wowblvck](https://github.com/wowblvck))
****