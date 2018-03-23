// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '000000000000000', // your App ID
        'clientSecret'  : '0000000000000000000000000000000', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : '0000000000000000000000000',
        'consumerSecret'    : '0000000000000000000000000000000000000000',
        'callbackURL'       : 'http://localhost:127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '000000000000-000000000000000000000000000000000.apps.googleusercontent.com',
        'clientSecret'  : '00000-000000000000000000',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
