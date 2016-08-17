// var responsedata = apiRH.getUsuarios();
// var user = responsedata;
// console.log(user);
// var i = 0;
// /*LLENA LA LISTA DE USUARIOS DEL CHAT */
// $.each(user, function( key, value ) {

//   $('.lista_chat').append(" <li class='persona' data='" + JSON.stringify(user[i]) + "'><div class='circle-frame'><img src='images/muestra.png'></div><h5>"+ user[i].nombre + ' ' + user[i].apellido +"</h5><p>Comí de más y ahora tengo dolor en mi hígado.</p><div class='no-leido'>12:06</div></li> ");

//   i++;
// });

/*
  INICIALIZA QUICKBLOX
*/

var config = {
  chatProtocol: {
    active: 2
  },
  debug: {
    mode: 1,
    file: null
  }
};

var QBApp = {
  appId: 20019,
  authKey: 'wX-b8q-hSn3AArS',
  authSecret: 'aCyMHpfYQNNZD8K'
};


/*
  DECLARA USUARIOS
*/

var QBUser = {
        id: 2418124,
        name: 'xxxxxx',
        login: '2418124',
        pass: '7eveGyxJBkRMwEe1FSEG'
    },
    QBUser2 = {
        id: 6729119,
        name: 'bloxuser',
        login: 'chatusr22',
        pass: 'chatusr22'
    };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);


function connectToChat() {
 
  // Create session and connect to chat
  //

  console.log('here');
  QB.createSession({login: 2418124, password: '7eveGyxJBkRMwEe1FSEG'}, function(err, res) {
    if (res) {
      // save session token
      token = res.token;

      user.id = res.user_id;
      mergeUsers([{user: user}]);

      QB.chat.connect({userId: user.id, password: user.pass}, function(err, roster) {
        if (err) {
          console.log(err);
        } else {
          console.log(roster);

          // // setup scroll stickerpipe module
          // //
          // setupStickerPipe();

          // // load chat dialogs
          // //
          // retrieveChatDialogs();

          // // setup message listeners
          // //
          // setupAllListeners();

          // // setup scroll events handler
          // //
          // setupMsgScrollHandler();
        }
      });
    }
  });
}

// Stickerpipe plugin en desuso


// var config = {
//   chatProtocol: {
//     active: 2
//   },
//   debug: {
//     mode: 1,
//     file: null
//   },
//   stickerpipe: {
//     elId: 'stickers_btn',

//     apiKey: '847b82c49db21ecec88c510e377b452c',

//     enableEmojiTab: false,
//     enableHistoryTab: true,
//     enableStoreTab: true,

//     userId: null,

//     priceB: '0.99 $',
//     priceC: '1.99 $'
//   }
// };


