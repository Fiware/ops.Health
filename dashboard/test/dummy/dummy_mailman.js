/*
 * Copyright 2015 Telefónica I+D
 * All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
'use strict';

var express = require('express'),
    bodyParser = require("body-parser"),
    app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

// Returns an array of email addresses.
app.get('/:list', function (req, res) {
    console.log("GET " + req.params.list);
    if (req.params.list == 'region1' || req.params.list == 'spain2') {
        res.send(['user@mail.com', 'jesus.perezgonzalez@telefonica.com']);

    } else {
        res.send([]);

    }
});


// subscribe
app.put('/:list', function (req, res) {
    console.log("PUT, subscribe " + req.params.list + " address:" + req.body.address);
    res.end();

});

// unsubscribe
app.delete('/:list', function (req, res) {
    console.log("DELETE, unsubscribe " + req.params.list + " address:" + req.body.address);
    res.end();

});


var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Mailman listening at http://%s:%s', host, port);

});
