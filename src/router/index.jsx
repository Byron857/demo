import React from 'react'
import { Home, About, Com } from './assembly'
import { ParentRoute, renderRoutes } from "./routes";

const Child1 = () => {
  return <h3>Child1</h3>;
};

const Child2 = () => {
  return <h3>Child2</h3>;
};

const Parent = ({ routes, match, ...props }) => {
  console.log(props, 'props');
  return (
    <div>
      <h2>Parent</h2>
      <ParentRoute routes={routes} match={match} />
    </div>
  );
};

const routes = [
  {
    path: "/",
    exact: true,
    component: Com
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/parent",
    component: Parent,
    routes: [
      {
        path: "/child1",
        title: "Child 1",
        component: Child1
      },
      {
        path: "/child2",
        title: "Child 2",
        component: Child2
      }
    ]
  }
];

function App() {
  return <div>{renderRoutes(routes)}</div>;
}

export default App;

