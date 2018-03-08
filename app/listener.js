const app = require('./server.js');

const port = process.env.PORT || process.argv[2] || 3001;

app.listen(port, function() { 
        console.log(`Listening on port ${port}...`); 
});