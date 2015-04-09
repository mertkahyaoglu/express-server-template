import React from 'react';
import Router from 'react-router';
import HelloWorld from './hello';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return <HelloWorld />
  }
}

let routes = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={Index}/>
  </Route>
);

Router.run(routes, (Handler) =>
  React.render(<Handler/>, document.body)
);
