import { createContext } from "react";

export const dataArray = [
  {
    id: 1,
    title: "Компоненты React",
    description:
      "Это основные строительные блоки приложений React для создания пользовательских интерфейсов. Компоненты бывают функциональные и классовые, они позволяют разбивать интерфейс на переиспользуемые части.",
    codeExample: `
function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}
    `,
    pitfalls:
      "Избегайте чрезмерной вложенности компонентов, сложных цепочек пропсов. Не создавайте компоненты, которые обновляются слишком часто без необходимости.",
    docsLink: "https://reactjs.org/docs/components-and-props.html",
  },
  {
    id: 2,
    title: "props (свойства)",
    description:
      "Механизм передачи данных от родителя к ребенку. Props — иммутабельны внутри компонента, используются для настройки компонента извне.",
    codeExample: `
function Greeting(props) {
  return <h1>Привет, {props.name}!</h1>;
}

/* Вызов компонента */
<Greeting name="Андрей" />
    `,
    pitfalls:
      "Не изменяйте props внутри компонента. Вместо этого, используйте state, если необходимо управление данными внутри компонента.",
    docsLink: "https://reactjs.org/docs/components-and-props.html",
  },
  {
    id: 3,
    title: "state (состояние)",
    description:
      "Динамические данные внутри компонента, которые могут меняться. В функциональных компонентах — через хуки useState, в классовых — через this.state.",
    codeExample: `
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Инициализация состояния
  
  return (
    <div>
      <p>Количество: {count}</p>
      <button onClick={() => setCount(count + 1)}>Добавить</button>
    </div>
  );
}
    `,
    pitfalls:
      "Избегайте мутирования состояния напрямую. Используйте setter или функциональные обновления для асинхронных случаев.",
    docsLink: "https://reactjs.org/docs/hooks-state.html",
  },
  {
    id: 4,
    title: "Жизненный цикл компонентов",
    description:
      "Механизм управляет различными этапами существования компонента — монтирование, обновление, размонтирование. В классовых компонентах через методы (componentDidMount, componentWillUnmount), в функциональных — через useEffect.",
    codeExample: `
class MyComponent extends React.Component {
  componentDidMount() {
    // Загрузка данных, подписка
  }
  
  componentWillUnmount() {
    // Очистка, отмена подписок
  }
  
  render() {
    return <div>Жизненный цикл</div>;
  }
}
    `,
    pitfalls:
      "Неправильное управление побочными эффектами вызывает утечки памяти. В функциональных компонентах — правильно используйте cleanup внутри useEffect.",
    docsLink: "https://reactjs.org/docs/react-component.html",
  },
  {
    id: 5,
    title: "Virtual DOM, reconciliation, Fiber",
    description:
      "Механизм React для быстрого обновления интерфейса. Virtual DOM — виртуальное отображение реального DOM. React сравнивает предыдущий и новый Virtual DOM (reconciliation), чтобы минимизировать реальные изменения (Fiber — внутренняя структура для этого процесса).",
    codeExample:
      "Нет конкретного кода, так как внутренний механизм реализован внутри React, но понимание важно для оптимизации.",
    pitfalls:
      "Избегайте слишком частых перерендеров. Используйте shouldComponentUpdate, React.memo и другие механизмы для оптимизации.",
    docsLink: "https://reactjs.org/docs/optimizing-performance.html",
  },
  {
    id: 6,
    title: "Events и их методы",
    description:
      "Обработка пользовательских событий — клики, ввод текста, наведение и т. д. В React используются синтетические события (SyntheticEvent), похожие на стандартные DOM события.",
    codeExample: `
function HandleClick() {
  const handleClick = () => alert('Кнопка нажата!');
  
  return <button onClick={handleClick}>Кликни меня</button>;
}
    `,
    pitfalls:
      "Обратите внимание на производительность при обработке большого количества событий. Используйте методы мемоизации при необходимости.",
    docsLink: "https://reactjs.org/docs/events.html",
  },
  {
    id: 7,
    title: "Дополнения (key, Fragment, refs, StrictMode)",
    description:
      "Ключи помогают React отслеживать элементы при списках. Fragment позволяет группировать список элементов без лишней разметки. Refs дают доступ к DOM-узлам. StrictMode включает дополнительные проверки.",
    codeExample: `
<>
  {items.map(item => (
    <React.Fragment key={item.id}>
      <div>{item.name}</div>
    </React.Fragment>
  ))}
</>
    `,
    pitfalls:
      "Неправильное использование refs — вызывает сложности в управлении. Используйте ключи правильно для списков.",
    docsLink: "https://reactjs.org/docs/lists-and-keys.html",
  },
  {
    id: 8,
    title:
      "Оптимизация (.memo, .lazy, useMemo, useCallback, Suspense, Profiler…)",
    description:
      "Механизмы для повышения производительности: мемоизация компонентов и функций, ленивые загрузки, контроль перерендеров и профилирование.",
    codeExample: `
const MyComponent = React.memo(function(props) {
  return <div>{props.value}</div>;
});
    `,
    pitfalls:
      "Избыточное использование мемоизации может усложнить код и снизить производительность.",
    docsLink: "https://reactjs.org/docs/react-api.html#reactmemo",
  },
  {
    id: 9,
    title: "Context",
    description:
      "Механизм глобального состояния без передачи пропсов. Позволяет делиться данными между компонентами без пропускания через every уровень.",
    codeExample: `
const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value="данные">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}
    `,
    pitfalls:
      "Чрезмерное использование Context может усложнить понимание, избегайте его для простых случаев.",
    docsLink: "https://reactjs.org/docs/context.html",
  },
  {
    id: 10,
    title: "HOC (Higher-Order Components)",
    description:
      "Паттерн для переиспользования логики между компонентами. HOC — это функция, которая принимает компонент и возвращает новый компонент.",
    codeExample: `
function withLoading(Component) {
  return function(props) {
    if (props.isLoading) return <div>Загрузка...</div>;
    return <Component {...props} />;
  };
}
    `,
    pitfalls:
      "Может привести к усложнению дерева компонентов. Используйте с осторожностью и альтернативы, например, хуки.",
    docsLink: "https://reactjs.org/docs/higher-order-components.html",
  },
  {
    id: 11,
    title: "Роутинг в React",
    description:
      "Обеспечивает навигацию внутри SPA. Используются библиотеки, например, React Router.",
    codeExample: `
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
    `,
    pitfalls:
      "Не забывайте о настройке роутов, ошибках с путями и использовании компонентов Link вместо обычных ссылок.",
    docsLink: "https://reactrouter.com/",
  },
  {
    id: 12,
    title: "react-hook-form VS formik",
    description:
      "Библиотеки для управления формами. react-hook-form — легковесная, использует хуки, проще в настройке. Formik — более мощная, включает валидацию и обработку ошибок.",
    codeExample: `
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <button type="submit">Отправить</button>
    </form>
  );
}
    `,
    pitfalls:
      "Обратите внимание на валидацию данных, оптимизацию перерендеров и пользовательский опыт.",
    docsLink: "https://react-hook-form.com/", // или https://formik.org/
  },
  {
    id: 13,
    title: "Storages (Local Storage, Session Storage, Cookies, ...)",
    description:
      "Механизмы хранения данных на стороне клиента — LocalStorage хранит долгосрочно, SessionStorage — только сессия, Cookies — также с опциями для отправки на сервер.",
    codeExample: `
localStorage.setItem('key', 'value');
const data = localStorage.getItem('key');
    `,
    pitfalls:
      "Не используйте для хранения чувствительных данных, так как эти механизмы доступны через JavaScript.",
    docsLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  },
  {
    id: 14,
    title: "Хуки (useId, useReducer, useTransition, useOptimistic)",
    description:
      "Механизмы для управления состоянием и асинхронными операциями в функциональных компонентах.",
    codeExample: `
const [state, dispatch] = useReducer(reducer, initialState);
    `,
    pitfalls:
      "Некорректное использование хуков — вызовет ошибки. Анализируйте их роль и особенности.",
    docsLink: "https://reactjs.org/docs/hooks-reference.html",
  },
  {
    id: 15,
    title: "Структура проекта. Modules VS FSD",
    description:
      "Модульная структура предполагает разделение по функциональности. FSD (Feature‑Sliced Design) — организация по бизнес‑функциям, что упрощает масштабирование.",
    pitfalls:
      "Неконсистентность в организации, неправильное разделение слоев, что может усложнить поддержку.",
    docsLink: "https://blog.bdmonk.com/feature-sliced-design",
  },
  {
    id: 16,
    title: "Сборщики: Webpack VS Vite",
    description:
      "Webpack — мощный, гибкий сборщик, широко используемый. Vite — современный, быстрый, использует нативные возможности браузеров для быстрого запуска и HMR.",
    pitfalls:
      "Webpack — сложнее конфигурировать, Vite — меньше плагинов, иногда несовместим с некоторыми пакетами.",
    docsLink: "https://webpack.js.org/", // и https://vitejs.dev/
  },
];

const DataContext = createContext();

export default DataContext;
