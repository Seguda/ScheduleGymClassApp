import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';


const days = ['Today','Tomorrow', moment().add(2, 'days').format('ddd, MMM D')];

const times = ['8:00 AM', '9:30 AM', '11:00 AM', '12:30 AM', '14:00 PM', '15:30 PM', '17:00 PM', '18:30 PM', '20:00 PM', '21:30 PM'];

export const gymclasses = [
    {
        title: 'Reformer Pilates',
        poster: 'https://img.grouponcdn.com/iam/PCb9Z3PuM9Sy9zB2TwqVMz2hHav/PC-2048x1229/v1/c700x420.jpg',
        room: 'Studio1',
        days,
        times,
    },
    {
        title: 'Cycling',
        poster: 'http://linearfitness.com/wp-content/uploads/2018/01/cycling-1.jpg',
        room: 'Cycling Studio',
        days,
        times,
    },
    {
        title: 'Mat Pilates',
        poster: 'https://pilatesonfifth.com/sites/default/files/mat-plus.jpg',
        room: 'Studio2',
        days,
        times,
    },
    {
        title: 'Zumba',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/61R-ukSKG3L._SL1266_.jpg',
        room: 'Studio2',
        days,
        times,
    },
    {
        title: 'Barre Cardio',
        poster: 'https://cdn.cliqueinc.com/cache/posts/171903/pure-barres-new-cardio-class-is-perfect-for-people-who-hate-cardio-1522921.640x0c.jpg',
        room: 'Studio3',
        days,
        times,
    },
    {
        title: 'Yoga',
        poster: 'http://berkshireyogadancefitness.com/wp-content/uploads/2017/02/BeginnerYogaMarch102017.jpg',
        room: 'Studio3',
        days,
        times,
    }, 
    {
        title: 'Cardio Kickboxing',
        poster: 'http://www.marinatimes.com/wp-content/uploads/2014/07/Cardio-Kickboxing-w-Kendra-640x330.jpg',
        room: 'Studio2',
        days,
        times,
    },
    {
        title: 'T C X ',
        poster: 'https://i.ytimg.com/vi/CZCDvG3CXcc/hqdefault.jpg',
        room: 'Studio3',
        days,
        times,
    },
    {
        title: 'Aerobics',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0m4Or6ho1xYtHqVOnr5ykWpzyvBK_bsBPor7lpejBDo14UViPQ',
        room: 'Studio2',
        days,
        times,
    },
    {
        title: 'Reformer Pilates',
        poster: 'https://img.grouponcdn.com/iam/PCb9Z3PuM9Sy9zB2TwqVMz2hHav/PC-2048x1229/v1/c700x420.jpg',
        room: 'Studio1',
        days,
        times,
    },
    {
        title: 'Cycling',
        poster: 'http://linearfitness.com/wp-content/uploads/2018/01/cycling-1.jpg',
        room: 'Cycling Studio',
        days,
        times,
    },
    {
        title: 'Mat Pilates',
        poster: 'https://pilatesonfifth.com/sites/default/files/mat-plus.jpg',
        room: 'Studio2',
        days,
        times,
    },
    
]