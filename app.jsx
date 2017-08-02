const React = require('react'),
      ReactDOM = require('react-dom'),
      HashRouter = require('react-router-dom').HashRouter,
      Route = require('react-router-dom').Route,
      Switch = require('react-router-dom').Switch,
      Link = require('react-router-dom').Link,
      Ting = require('./ting.jsx'),
      Settings = require('./settings.jsx'),
      Provider = require('react-redux').Provider,
      createStore = require('redux').createStore,
      RootReducer = require('./reducers/root.jsx'),
      ConnectedTing = require('./containers/connected_ting.jsx'),
      ConnectedSettings = require('./containers/connected_settings.jsx');

const App = React.createClass({
    render: function() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={ConnectedTing} />
                    <Route path='/settings' component={ConnectedSettings} />
                </Switch>
            </HashRouter>
        );
    }
});

const store = createStore(RootReducer);

ReactDOM.render(
        <Provider store={store}>
            <App />  
        </Provider>,
        document.getElementById('app')
);        
