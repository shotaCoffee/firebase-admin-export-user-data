const fs = require('fs');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hurrah-web-prototype.firebaseio.com"
});

admin.auth().listUsers()
  .then((result) => {
    const userRecords = result.users;
    const csvData = userRecords.map((user) => {
      return user.email
    }).join('\n');

    fs.writeFile('user_emails.csv', csvData, (error) => {
      if (error) {
        console.log('ファイルの書き出しに失敗しました:', error);
      } else {
        console.log('ファイルを書き出しました');
      }
    });
  })
  .catch((error) => {
    console.log('ユーザーデータの取得に失敗しました:', error);
  });