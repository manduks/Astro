ServiceConfiguration.configurations.upsert({service: 'github'}, {
    $set: {
      clientId: '74ce1baf79b49d4f5c9a',
      secret: 'c8049d803d0b875cbf4a2c5dc3e6023c7622a93c'
    }
});

ServiceConfiguration.configurations.upsert({service: 'twitter'}, {
    $set: {
      consumerKey: 'jlTNgxWBZymhSW77rlDyzwBXc',
      secret: 'tTuWy779X3dqeq3DkCj2Yj1ZCX0Zedbl1IwJr00OUe7A1VhSNj'
    }
});

function getUserInfo (accessToken) {
  let result = HTTP.get("https://api.github.com/user", {
    headers: {
      'User-Agent': 'Meteor'
    },
    params: {
      access_token: accessToken
    }
  });

  return _.pick(result.data, 'login', 'email', 'avatar_url', 'name');
}

Accounts.onCreateUser(function(options, user) {
    var admins = ['lumartineck@gmail.com', 'iam@armando.mx']
    if (user.services['github']){
      user.profile = getUserInfo(user.services.github.accessToken);
      user.login = user.profile.login;
      user.email = user.profile.email;
      user.avatar = user.profile.avatar_url;
    }
    if (user.services['twitter']) {
        user.profile = options.profile;
        //user.email = user.services['twitter'].screenName;
        user.avatar = user.services['twitter'].profile_image_url;
    }
    user.name = user.profile.name;
    user.isAdmin = (admins.indexOf(user.email) > -1);
    return user;
});
