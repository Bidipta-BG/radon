const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://Bidipta-BG:wHFCxvYIKQmhPro5@cluster0.n5vfx.mongodb.net/middleware", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        const dateTime = moment().format('YYYY-MM-DD h:mm:ss a')
        const ipAddress = req.socket.remoteAddress
        const urlPath = req.path
        console.log(dateTime,',', ipAddress,',', urlPath)
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
