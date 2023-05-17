const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
var Datastore = require('nedb');
var db = new Datastore({ filename: 'data.json', autoload: true });
var subcribers_db = new Datastore({ filename: 'subscribers.json', autoload: true });
const port = 57294

app.use(express.static('public')); //load files from this route


app.post('/upload', (req, res) => {
     try {
       
        db.insert(req.body, function (err, newDoc) { });

         return res.send('success!');
        
        
    } catch (error) {
        console.error(error);
    }
});


app.post('/subscribe', (req, res) => {
    try {
       console.log(req.body)
       subcribers_db.insert(req.body, function (err, newDoc) { });
        return res.send('success!');
   } catch (error) {
       console.error(error);
   }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


