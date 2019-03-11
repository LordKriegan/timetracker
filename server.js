const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use('/api', require('./routes/api'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client/build")));
}

if (process.env.NODE_ENV === 'development') {
    console.log("Development Mode");
    app.use(express.static(path.join(__dirname, "testFileupload")));
}

app.listen(PORT, function() {
    console.log('App server listening on: https://localhost:' + PORT)
});