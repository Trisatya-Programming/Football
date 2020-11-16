var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BCUP1YCSf-AzRmjq4--cttXC9jDeQI4CP87v4vteglbZUyfSaWwEz2m2mNM7a5LH2VbvWgQxuNQbQ4qn14wKkDE",
   "privateKey": "daERNCg_u6U81O0xGc-OnTguGuIlSmKqLVWGmzRZVj8"
};
 
 
webPush.setVapidDetails(
   'trisatyadidiek86@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fwr8x-hEOtQ:APA91bHraegPz7xT6GmmRNsMMrphuJxA8cRREvyIW28I2JX3oBenQKVOGZ3ZCJNeh0kjG6yfPw8fggwDa6SlSTiAOnXF3hJJ4858HY96IAS5QhCYS458vZBWOphGigJoyMk8Q1hidcUH",
   "keys": {
       "p256dh": "BLa6XQErM4BZUd5HWPb3UPnbKMBye5QN96boqjL0iEMZVL17s+18xuUjL+q+7CQvXe2geRUpYVtNuHeSArssdZc=",
       "auth": "3yC/Wg2sCc/6XwQmFB7nhg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '133596126775',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);