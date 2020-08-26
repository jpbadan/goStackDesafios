const express = require('express');

const app = express();

app.get('/landing', function(request, response){
    return response.send('OLAR MUNDO!');
});

app.listen(3333);