// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '112070469471620', // your App ID
        'clientSecret'  : '1ce99e757bd512e7c927b560ed5f1074', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'ofXuiZXfVcrNPfts0J2d9Au4R',
        'consumerSecret'    : 'lVx5BgLojobVYtXxGkwURdq2NxHudVPYUciSSEkSwwvEURmuwd',
        'callbackURL'       : 'http://localhost:127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '872129927716-60pbp2vfdgj15jabqttljh04tcffb5ec.apps.googleusercontent.com',
        'clientSecret'  : 'aOzYY-2xuhsjDEVGpkQC3ojQ',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
