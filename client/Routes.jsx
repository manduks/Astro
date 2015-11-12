const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory();

//chache in global window to fix bug on history mixin
window.browserHistory = browserHistory;

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          //<Router name="landing" component={Landing} path="/" />
          <IndexRoute component={Landing}/>
        </Route>
        <Route path="/app" component={Authenticate}>
          <IndexRoute component={App}/>
          <Route name="lessons" component={LessonsLayout} path="/lessons"/>
          <Route name="video" component={VideoLayout} path="/video"/>
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
});

Meteor.startup(function() {
    var app = document.createElement('div');
    app.id = 'App';
    document.body.appendChild(app);
    ReactDOM.render(<Routes/>, app);
});
