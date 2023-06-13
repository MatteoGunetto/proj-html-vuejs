import {reactive} from "vue";

export const store = reactive(
    {
        // --------menu nav-------------
        menuLinks: [
          {
            name: 'Home ',
            url: '#home'
          },
          {
            name: 'Course',
            url: '#courses'
          },
          {
            name: 'About Us',
            url: '#About Us'
          },
          {
            name: 'News',
            url: '#News'
          },
          {
            name: 'Pages',
            url: '#Pages'
          },
          {
            name: 'Contact',
            url: '#Contact'
          },
          {
            name: 'Purchase',
            url: '#Purchase'
          },
        ],
        // -------------faculties-------------------
        facultiesArray: [
            {
                course: 'Law Faculty',
                description: "Welcome to the Law Faculty, where we strive to cultivate knowledgeable and skilled legal professionals who will make a positive impact on society. Our faculty is committed to providing a comprehensive and rigorous legal education that prepares students for the complexities of the legal profession.",
                img1: '../src/assets/img/Gavel-v2.png',
                img2: '../src/assets/img/Gavel-Illustration-e1556884768193.png',
                active: false
            },
            {
                course: 'Economy',
                description:"At our institution, we offer a range of programs and courses that delve into the study of economics, providing students with the knowledge and skills necessary to analyze economic phenomena and make informed decisions. Whether you are interested in pursuing a career in finance, policy-making, entrepreneurship, or academia, our programs will equip you with a solid foundation in economic theory, quantitative analysis, and critical thinking.",
                img1: '../src/assets/img/Coins-tabs-v2.png',
                img2: '../src/assets/img/Economy.png',
                active: false
            },
            {
                course: 'Medicine',
                description:"Welcome to the field of medicine, where dedicated individuals strive to improve the health and well-being of individuals and communities. As a student in the field of medicine, you are embarking on a challenging yet rewarding journey that will shape your future as a healthcare professional.",
                img1: '../src/assets/img/Medicine-tabs-v2.png',
                img2: '../src/assets/img/Medicine.png',
                active: false
            },
            {
                course: 'Computer Science',
                description:"Welcome to the exciting world of computer science, where innovation and technology intersect to shape our digital future. As a student in computer science, you will explore the principles and applications of computing, preparing you for a wide range of careers in this rapidly evolving field.",
                img1: '../src/assets/img/Computer-tabs-v2.png',
            img2: '../src/assets/img/Computer-Science.png',
            active: false
        },
        {
            course: 'Graphic Design',
            description:"Welcome to the world of graphic design, where creativity, visual communication, and technology come together to shape captivating and impactful visuals. As a student in graphic design, you will embark on a creative journey that will allow you to express your artistic vision and transform ideas into compelling visual experiences.",
            img1: '../src/assets/img/Palette-tabs-v2.png',
            img2: '../src/assets/img/Graphic-Design.png',
            active: false
        }
      ],
    //   -----------------------course--------------------
      coursesArray: [
        {
            text: 'Make Better Decisions',
            teacher: 'James Collins',
            price: '$21.00',
            img: '../src/assets/img/Decisions-icon.png'
        },
        {
            text: 'How to be a speaker',
            teacher: 'James Collins',
            price: 'Free',
            img: '../src/assets/img/Speaker-icon.png'
        },
        {
            text: 'Network Introductions',
            teacher: 'James Collins',
            price: 'Free',
            img: '../src/assets/img/Network-icon.png'
        },
        {
            text: 'Brand Management',
            teacher: 'James Collins',
            price: 'Free',
            img: '../src/assets/img/Brand-icon.png'
        },
      ],
    }
)