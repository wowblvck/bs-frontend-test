<h1 align='center'>Тестовое задание в Bolt System</h1>

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
   - [x] Внедрено API в страницу через tanstack query. 
     - Список заявок получается по апи `GET /api/orders`.
     - Выбор заявок последовательно отправляется по `PUT 
       /api/orders/:id/accept` для каждой заявки отдельно.
     - Если произошла ошибка при каком либо запросе - выдать toast с 
       сообщением об ошибки, и продолжить запросы.
   - [x] Внедрена пагинацию.
   - [x] Записан экран с демонстрацией работы, видео приложено в корень 
     проекта, и добавлено в README.
   - [x] Смержена ветка в main.

### Скриншоты:

<details>
   <summary>Этап 1</summary>

   <details>
      <summary>Мобильная версия</summary>

![Мобильная версия](/docs/screenshots/stage-1/mobile.png)
   </details>

   <details>
      <summary>Десктоп версия</summary>

![Десктоп](/docs/screenshots/stage-1/desktop.png)
   </details>

</details>

<details>
   <summary>Этап 2</summary>

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

</details>
