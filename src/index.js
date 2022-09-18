const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
function component() {
  const element = document.createElement('div');

  // Default, user not signed in
  let sessionMessage = 'You\'re not signed in.';

  var poolData = {
    UserPoolId : '__USER_POOL_ID__',
    ClientId : '__CLIENT_ID__',
    Storage: new AmazonCognitoIdentity.CookieStorage({domain: "tiplocal.studio", secure: true, httpOnly: true}),
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  let user = userPool.getCurrentUser();
  console.log(user);

  // User signed in
  if (user != null) {
    user.getSession((error, session) => {
      if (error) {
        console.error(error);
        return;
      };

      console.log(session);
      sessionMessage = 'You\'re signed in, username: ' + session.idToken.payload.sub + '.';
    });
  };

  element.innerHTML = 'Biz Center' + '<br/><br/>'
    + sessionMessage;

  return element;
}
  
document.body.appendChild(component());