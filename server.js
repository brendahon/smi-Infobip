let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    mongoose.Promise = global.Promise;

    var dbUrl = eval(config.DB);

    console.log("dbUrl: " + dbUrl);
    console.log("dbUrl.toString(): " + dbUrl.toString());

    mongoose.connect(dbUrl.toString()).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const messageRoutes = require('./routes/message.route');

    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Serve only the static files form the dist directory
    app.use(express.static('./dist/smi-Infobip'));

    app.use('/api/v1/messages', messageRoutes);

    app.get('/*', function(req,res, next) {

        console.log('req.originalUrl : ' + req.originalUrl);

        if(req.originalUrl.includes('/api/v1/messages')) {
            return next();
        }
    
        res.sendFile(path.join(__dirname,'/dist/smi-Infobip/index.html'));

        });

    var port = process.env.PORT || 8080;

    var server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });