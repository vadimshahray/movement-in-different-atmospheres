# Что из себя представляет проект?

[Отчет по проекту](/public/docs/ProjectDocument.pdf)

Данный проект предназначен для измерения скорости движения метеорита во время падения его на планету Земля.

### Скриншоты проекта

![Скриншот проекта во время настроек](/public/docs/images/project_screen.png 'Скриншот проекта во время настроек')
![Скриншот проекта во время моделирования падения](/public/docs/images/project_in_modeling_screen.png 'Скриншот проекта во время моделирования падения')

## Структура проекта

Страница проекта представляет собой 3 основных блока:

- Блок моделирования;
- Блок настроек метеорита;
- Блок информации о падении метеорита.

### Блок моделирования

Здесь происходит отрисовка метеорита, планеты и дополнительных эффектов - все, что нужно для визуального восприятия падения метеорита.

Также в данном блоке доступны **интерактивные контроллеры**, которые позволяют управлять некоторыми настройками при помощи клавиатуры или мыши/тачпада.

<details>
  <summary>Про интерактивные контроллеры</summary>

<b>Интерактивные контроллеры</b> - это способ задать настройки приложения, используя вместо полей ввода данных клавиатуру или мышь/тачпад. Настройки, которые можно изменить при помощи интерактивного контроллера помечены🖱️иконкой. Чтобы узнать как воспользоваться интерактивным контроллером, достаточно навести курсор мыши на такую иконку, и вам покажется необходимая инструкция.

Интерактивные контроллеры тоже можно настраивать. Это можно сделать в секции, помеченной той же🖱️иконкой. Таким образом вы сможете регулировать чувствительность контроллеров - значение, на которое они будут изменять определенную настройку приложения.

</details>

### Блок настроек

В этом блоке можно изменить некоторые параметры метеорита, которые повлияют на скорость его падения. Также можно изменить чувствительность интерактивных контроллеров.

В качестве интерфейса для изменения параметров предоставляется связанные между собой поле ввода и слайдер.

### Блок информации о падении метеорита

Блок содержит настройки положения камеры, различные графики, информацию о падении метеорита, таймер и кнопки управления процессом моделирования (остановить/запустить или сбросить процесс).

# Как запустить проект?

Данный проект доступен всем по ссылке https://vadimshahray.github.io/meteorite-movement-in-earth-atmosphere/.
Если вы хотите клонировать данный репозиторий и запустить проект на локальной машине, на ней должна быть установлена [Node.js](https://nodejs.org/en/).

После успешного клонирования репозитория, откройте корневую папку проекта в терминале и введите следующие команды:

```
npm install
npm start
```

или с помощью [yarn](https://yarnpkg.com/):

```
yarn install
yarn start
```

# Физика проекта

Информация о физике, используемой в проекте, находится в [этом отчете](/public/docs/ProjectDocument.pdf).

# Программирование проекта

Проект написан на языке [TypeScript](https://www.typescriptlang.org/), в качестве основных инструментов были выбраны библиотеки [React](https://reactjs.org/) (интерфейс), [Redux Toolkit](https://redux-toolkit.js.org/) (менеджер состояний) в связке с [React Redux](https://react-redux.js.org/) (интеграция Redux в React) и [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (3D).

Дополнительные используемые технологии:

- [`@mui/material`](https://github.com/mui/material-ui#readme) и [`@mui/icons-material`](https://github.com/mui/material-ui#readme) - пакет готовых элементов интерфейса, стилизация и иконки;
- [`@react-three/drei`](https://github.com/pmndrs/drei#readme) и [`lamina`](https://github.com/pmndrs/lamina#readme) - готовые решения для 3D;
- [`camera-controls`](https://github.com/yomotsu/camera-controls#readme) - контроллеры камеры 3D сцены;
- [`notistack`](https://github.com/iamhosseindhv/notistack#readme) - элемент интерфейса _Snackbar_;
- [`recharts`](https://github.com/recharts/recharts#readme) - графики;
- [`redux-persist`](https://github.com/rt2zz/redux-persist#readme) - локальное сохранение состояния проекта;
- [`yup`](https://github.com/jquense/yup#readme) - валидация данных.

### Файловая структура проекта

```
├───public - статичные данные
│   ├───docs - документация проекта
│   └───models - 3d модели
└───src - рабочий корень проекта
    ├───components - UI/UX компоненты
    ├───constants - константы
    ├───hooks - React-хуки
    ├───layouts - блоки страницы
    ├───models - 3D-компоненты
    ├───pages - web-страницы проекта
    ├───providers - провайдеры данных
    ├───selectors - Redux-селекторы
    ├───slices - Redux-слайсы
    ├───styles - стилизация
    ├───types - типы
    └───utils - различный полезный функционал
```
