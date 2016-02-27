ServiceConfiguration.configurations.upsert({service: 'github'}, {
    $set: {
      clientId: '1dac2fa90c19816cf647',
      secret: 'ff8b5ae3f0f0473a856cba4abc63fcc5f2c62a82'
    }
});

ServiceConfiguration.configurations.upsert({service: 'twitter'}, {
    $set: {
      consumerKey: '30VyXTMltNEJiMgqME6lTxfbP',
      secret: 'FogqBkeHqOQaaVI1436CPTZRTfXGS97bBSW93bPUhawInYLKrt'
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
    user.courses = [];
    user.isAdmin = (admins.indexOf(user.email) > -1);
    return user;
});
