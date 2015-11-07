ServiceConfiguration.configurations.remove({
    service: 'github'
});
ServiceConfiguration.configurations.insert({
    service    : 'github',
    clientId   : '74ce1baf79b49d4f5c9a',
    secret     : 'c8049d803d0b875cbf4a2c5dc3e6023c7622a93c'
});

// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.insert({
  service    : "twitter",
  consumerKey: "jlTNgxWBZymhSW77rlDyzwBXc",
  secret    : "tTuWy779X3dqeq3DkCj2Yj1ZCX0Zedbl1IwJr00OUe7A1VhSNj"
});

Accounts.onCreateUser(function(options, user) {
    console.log(user);
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});
