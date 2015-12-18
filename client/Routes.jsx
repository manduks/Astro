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
        <Route path="/" component={HomeLayout}>
          <IndexRoute component={Landing}/>
        </Route>
        <Route path="/app" component={Auth}>
          <IndexRoute component={App}/>
          <Route name="lessons" component={LessonsLayout} path="/lessons"/>
          <Route name="video" component={VideoLayout} path="/video"/>
          <Route name="profile" component={Profile} path="/profile"/>
        </Route>
        <Route path="/admin" component={AdminAuth}>
          <IndexRoute component={AdminApp}/>
          <Route name="adminLessons" component={AdminLessons} path="/admin/lessons"/>
          <Route name="adminUsers" component={AdminUsers} path="/admin/users"/>
          <Route name="addLesson" component={LessonForm} path="/admin/addLesson"/>
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
