const {
  Router,
  Route,
  Redirect,
  //NotFoundRoute,
  //DefaultRoute
} = ReactRouter;

//console.log(ReactRouter);

const {
  history
} = ReactRouter.history;

Meteor.startup(function() {
  let AppRoutes = (
    <Router history={history}>
      <Route component={Layout}>
        <Router name="landing" component={Landing} path="/" />
        <Router name="app" component={App} path="/app"/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
  if(Meteor.isClient){
    React.render(AppRoutes, document.body)
  }
});
