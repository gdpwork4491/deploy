var express = require('express');
var http = require('http');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var path = require('path');
var app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
      "host": "smtp.gmail.com",
      "port": 465,
      "secure": true,
      "auth": {"user": "username@gmail.com",
      "pass": "pass"}
        });
app.set('port', process.env.PORT || 8081);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


function send_mail(subject, text) {
  transporter.sendMail({
    from: 'username@gmail.com',
    to: 'tomail@domain.com,tomail2@gmail.com',
    subject: subject,
    text: text
  },function(error,info){
    console.log(error)
    console.log(info)
  });
}

// Uncomment and implement as you required. 

// app.post('/deploy/server', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got server request');
//   if (req.body.ref !== 'refs/heads/master') {
//     res.send({
//       message: 'No staging'
//     });
//   } else {
//     exec('./server.sh', function(error, stdout, stderr) {
//       send_mail('Field Responder  deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   }
// });

// app.post('/deploy/demo', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/master') {
//     exec('./client.sh', function(error, stdout, stderr) {
//       send_mail('cetana push notifications deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/AtlantisChatService', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisChatService-dev') {
//     exec('./AtlantisChatService.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisChatService is deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/AtlantisFieldResponder', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisFieldResponder-dev') {
//     exec('./AtlantisFieldResponder.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisFieldResponder deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });


// app.post('/deploy/AtlantisCitizenService', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisCitizenService-dev') {
//     exec('./AtlantisCitizenService.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisCitizenService is deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });
// app.post('/deploy/AtlantisPushService', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisPushService-dev') {
//     exec('./AtlantisPushService.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisPushService deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/AtlantisIRE', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisIRE-dev') {
//     exec('./AtlantisIRE.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisIRE deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/AtlantisTransportService', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisTransportService-dev') {
//     exec('./AtlantisTransportService.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisTransportService deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });
// app.post('/deploy/angular', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/develop') {
//     exec('./angular.sh', function(error, stdout, stderr) {
//       send_mail('angular super admin fieldresponder is deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/kakinadaIRE', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/kakinada') {
//     exec('./kakinadaIRE.sh', function(error, stdout, stderr) {
//       send_mail('AtlantiskakinadaIRE deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });

// app.post('/deploy/AtlantisCMSService', function(req, res) {
//   var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

//   console.log('got client request');
//   if (req.body.ref == 'refs/heads/AtlantisCMSService-dev') {
//     exec('./AtlantisCMSService.sh', function(error, stdout, stderr) {
//       send_mail('AtlantisCMSService is deployed.!-' + runTime, 'status:\n' + JSON.stringify(req.body.commits));
//       res.send({
//         msg: 'Ok'
//       });
//     });
//   } else {
//     res.send({
//       message: 'No staging'
//     });
//   }
// });


http.createServer(app).listen(app.get('port'), function() {
  var runTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  console.log('Express server listening on port ' + app.get('port'));
  send_mail('Deployment script started!' + runTime, 'Date: ' + new Date().getTime());
});