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
  mixins: [Utils],
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomeLayout}>
          <IndexRoute component={Landing}/>
        </Route>
        <Route path='/app' component={Auth}>
          <IndexRoute component={App}/>
          <Route name='lessons' component={LessonsLayout} path='/lessons/:courseId'/>
          <Route name='video' component={VideoLayout} path='/video'/>
          <Route name='profile' component={Profile} path='/profile'/>
          <Route name='buy' component={BuyCourse} path='/buy'/>
        </Route>
        <Route path='/admin' component={AdminAuth}>
          <IndexRoute component={AdminApp}/>
          <Route name='adminLessons' component={AdminLessons} path='/admin/lessons/:courseId'/>
          <Route name='adminUsers' component={AdminUsers} path='/admin/users'/>
          <Route name='addCourse' component={CourseForm} path='/admin/addCourse'/>
          <Route name='addLesson' component={LessonForm} path='/admin/addLesson'/>
        </Route>
        <Route name='print' component={PaymentFormatLayout} path='/print/:courseId/:barcodeId'/>
        <Route name='tos' component={TermsOfService} path='/tos'/>
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
});

Meteor.startup(function() {
    var app = document.createElement('div');
    app.id = 'App';
    document.body.appendChild(app);
    ReactDOM.render(<Routes/>, app);
    //Load extenal scripts

    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');  // optional
    script.setAttribute('src', 'https://conektaapi.s3.amazonaws.com/v0.3.2/js/conekta.js');
    document.getElementsByTagName('head')[0].appendChild(script);
});
