const api = require('./router/api');
const database = require('./db/main');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;


app.use('/api', api);

app.get('/', (req, res) => {
    res.send("ok");
    // add views 
});


const listen = () => {
    app.listen(PORT, () => {
        return console.log(`server listening on ${PORT}`);
    });
};

database.connect(listen)