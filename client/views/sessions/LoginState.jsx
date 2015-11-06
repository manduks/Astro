class LoginState {
  static get() {
    if (Meteor.user()) {
      return this.LOGGED_IN;
    } else if (Meteor.loggingIn()) {
      return this.LOGGING_IN;
    } else if (!Accounts.loginServicesConfigured()) {
      return this.WAITING_CONFIG;
    } else {
      return this.LOGGED_OUT;
    }
  }
}

LoginState.LOGGED_IN = 'loggedIn';
LoginState.LOGGED_OUT = 'loggedOut';
LoginState.LOGGING_IN = 'loggingIn';
LoginState.WAITING_CONFIG = 'waitingConfig';
