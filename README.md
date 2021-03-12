# В этом ТЗ

npm i
далее стартуем через npm run start
у апи проблемы с политикой cors, поэтому для chrome рекомендую предварительно установить плагин
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/
ui компоненты на antd (форма логина и nav)
в проекте используется axios для работы с апи,
использовала практики из прошлых решений через базовый класс BaseService
в нем через interceptors докидывается токен
в базовом классе прописаны основные методы get, post, put, delete
роутинг построен через react-router c использованием базовых Switch Route компонентов и хука history для перенаправления
подключен redux и redux-thunk для работы с асинхронными actions
опции графиков взяты из примеров apexcharts
для стилей scss препроцессор с модульным подключением
компоненты функциональные
взаимодействие с redux через хуки useDispatch и useSelector
