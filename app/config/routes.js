var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PropmtContainer = require('../containers/PromtContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne' header='Player One' component={PropmtContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PropmtContainer} />
    </Route>

  </Router>
);

module.exports=routes;
