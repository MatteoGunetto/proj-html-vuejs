import {reactive} from "vue";

export const store = reactive(
    {
      facultiesArray: [
        {
            course: 'Law Faculty',
            img1: '../src/assets/img/Gavel-v2.png',
            img2: '../src/assets/img/Gavel-Illustration-e1556884768193.png',
            active: false
        },
        {
            course: 'Economy',
            img1: '../src/assets/img/Coins-tabs-v2.png',
            img2: '../src/assets/img/Economy.png',
            active: false
        },
        {
            course: 'Medicine',
            img1: '../src/assets/img/Medicine-tabs-v2.png',
            img2: '../src/assets/img/Medicine.png',
            active: false
        },
        {
            course: 'Computer Science',
            img1: '../src/assets/img/Computer-tabs-v2.png',
            img2: '../src/assets/img/Computer-Science.png',
            active: false
        },
        {
            course: 'Graphic Design',
            img1: '../src/assets/img/Palette-tabs-v2.png',
            img2: '../src/assets/img/Graphic-Design.png',
            active: false
        }
      ]
    }
)