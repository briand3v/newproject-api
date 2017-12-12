const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sports-game', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});
const Photo = require('../models/photo');


const fakeOne = {
    owner: {
        type: ObjectId,
        ref: '5a2d822492d78822573fd7ba'
    },
    img: "https://ichef-1.bbci.co.uk/news/976/cpsprodpb/C5AE/production/_97760605_inautumndancekamilnureev.jpg",
    description: "Northern lights over Siberian forest. :)  ",
    comments: [{  owner: {
        type: ObjectId,
        ref: 'User'
    }, 
        text: "Best place broo! Good to see your photos!" }]
}

const fakeTwo = {
    owner: {
        type: ObjectId,
        ref: '5a2e91ef6eb24e10cff4f954'
    },
    img: "https://i.ytimg.com/vi/TBYMjKJlNgo/maxresdefault.jpg",
    description: "Intrepid Pictures Logo.",
    comments: [{ 
        owner: {
            type: ObjectId,
            ref: 'User'
        },
        text: "holly shit! man is completly awesome :o" }]


}
   


const fakeTree = {
    owner: {
        type: ObjectId,
        ref: '5a2d822492d78822573fd7ba'
    },
    img: "https://i.pinimg.com/736x/5b/40/5d/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg",
    description: " Awesome Picture Of the Northern Lights",
    comments: [{ 
        owner: {
            type: ObjectId,
            ref: 'User'
        },
        text: "nice!!!" }]


}
   


const fakeFour = {
    owner: {
        type: ObjectId,
        ref: '5a2e91ef6eb24e10cff4f954'
    },
    img: "http://all4desktop.com/data_images/original/4238174-pictures.jpg",
    description: "Pictures of Cute Small Creatures",
    comments: [{ 
        owner: {
            type: ObjectId,
            ref: 'User'
        },
        text: "WTFFFF !!?" }]


}

const photo = [fakeOne, fakeTwo, fakeTree, fakeFour];

Photo.create(photo, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach((photo) => {
        console.log(photo.nameSport);
    });
    mongoose.connection.close();
});