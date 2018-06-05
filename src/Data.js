import React from 'react';
import moment from 'react-moment';
import { StyleSheet, Text, View } from 'react-native';


// const days = ['Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D')];

const times = ['8:00 AM', '9:30 AM', '11:00 AM', '12:30 AM', '14:00 PM', '15:30 PM', '17:00 PM', '18:30 PM', '20:00 PM', '21:30 PM'];

export const gymclasses = [
    {
        title: 'Reformer Pilates',
        poster: 'https://img.grouponcdn.com/iam/PCb9Z3PuM9Sy9zB2TwqVMz2hHav/PC-2048x1229/v1/c700x420.jpg',
        room: 'Apple',
        // days,
        times,
    },
    {
        title: 'Cycling',
        poster: 'http://linearfitness.com/wp-content/uploads/2018/01/cycling-1.jpg',
        room: 'Lemon',
        // days,
        times,
    },
    {
        title: 'Mat Pilates',
        poster: 'https://pilatesonfifth.com/sites/default/files/mat-plus.jpg',
        room: 'Strawberry',
        // days,
        times,
    },
    {
        title: 'Zumba',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/61R-ukSKG3L._SL1266_.jpg',
        room: 'Strawberry',
        // days,
        times,
    },
    {
        title: 'Barre Cardio',
        poster: 'https://cdn.cliqueinc.com/cache/posts/171903/pure-barres-new-cardio-class-is-perfect-for-people-who-hate-cardio-1522921.640x0c.jpg',
        room: 'Blueberry',
        // days,
        times,
    },
    {
        title: 'Yoga',
        poster: 'http://berkshireyogadancefitness.com/wp-content/uploads/2017/02/BeginnerYogaMarch102017.jpg',
        room: 'Strawberry',
        // days,
        times,
    }, 
    {
        title: 'Zumba',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/61R-ukSKG3L._SL1266_.jpg',
        room: 'Strawberry',
        // days,
        times,
    },
    {
        title: 'Barre Cardio',
        poster: 'https://cdn.cliqueinc.com/cache/posts/171903/pure-barres-new-cardio-class-is-perfect-for-people-who-hate-cardio-1522921.640x0c.jpg',
        room: 'Blueberry',
        // days,
        times,
    },
    {
        title: 'Yoga',
        poster: 'http://berkshireyogadancefitness.com/wp-content/uploads/2017/02/BeginnerYogaMarch102017.jpg',
        room: 'Strawberry',
        // days,
        times,
    }, 
]