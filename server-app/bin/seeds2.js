const Photo = require('../models/photo');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photography');

const photo = [{
    img: '12312312',
    description: 'hellooooo',
    comments: [{ description: 'damn' },
    { description: 'fuckkk you bitchhhh' }]
}
];

Photo.create(photo, (err, photo) => {
    if (err) {
        throw (err)
    }
    console.log("Success", photo);
    mongoose.connection.close();
})