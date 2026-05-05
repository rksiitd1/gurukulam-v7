import home1 from '@/public/images/hero/home/1.jpg';
import home2 from '@/public/images/hero/home/2.jpg';
import home3 from '@/public/images/hero/home/3.jpg';
import home4 from '@/public/images/hero/home/4.jpg';
import home5 from '@/public/images/hero/home/5.jpg';

import about1 from '@/public/images/about/1.jpg';
import about2 from '@/public/images/about/2.jpg';
import about3 from '@/public/images/about/3.jpg';
import about4 from '@/public/images/about/4.jpg';
import about5 from '@/public/images/about/5.jpg';

import gallery1 from '@/public/images/gallery/1.jpg';
import gallery2 from '@/public/images/gallery/2.jpg';
import gallery3 from '@/public/images/gallery/3.jpg';
import gallery4 from '@/public/images/gallery/4.jpg';
import gallery5 from '@/public/images/gallery/5.jpg';
import gallery6 from '@/public/images/gallery/6.jpg';
import gallery7 from '@/public/images/gallery/7.jpg';
import gallery8 from '@/public/images/gallery/8.jpg';
import gallery9 from '@/public/images/gallery/9.jpg';
import gallery10 from '@/public/images/gallery/10.jpg';

import progGurukulam from '@/public/images/programs/gurukulam.jpg';
import progShriClasses from '@/public/images/programs/shri-classes.jpg';
import progUdyamita from '@/public/images/programs/udyamita.jpg';
import progAgro from '@/public/images/programs/agro-gaushala.jpg';

import progGurukulam3 from '@/public/images/programs/gurukulam3.jpg';
import classroom1 from '@/public/images/gallery/classroom/classroom-1.jpg';

import progShriClasses3 from '@/public/images/programs/shri-classes3.jpg';
import classroom2 from '@/public/images/gallery/classroom/classroom-2.jpg';

import progUdyamita3 from '@/public/images/programs/udyamita3.jpg';

import agri1 from '@/public/images/gallery/agriculture/1.jpg';
import agri2 from '@/public/images/gallery/agriculture/2.jpg';
import agri3 from '@/public/images/gallery/agriculture/3.jpg';
import agri4 from '@/public/images/gallery/agriculture/4.jpg';
import agri5 from '@/public/images/gallery/agriculture/5.jpg';

export const HERO_IMAGES = {
    home: [
        { src: home1, alt: "Children in uniforms sitting in a classroom" },
        { src: home2, alt: "Teacher teaching students in a classroom" },
        { src: home3, alt: "Students participating in a cultural event" },
        { src: home4, alt: "Students engaged in an outdoor activity" },
        { src: home5, alt: "Community gathering event" }
    ],
    about: [about1, about2, about3, about4, about5],
    contact: [gallery1, gallery2, gallery3, gallery4, gallery5],
    gallery: [gallery6, gallery7, gallery8, gallery9, gallery10],
    programs: [progGurukulam3, progShriClasses3, progUdyamita3],
    gurukulam: [progGurukulam, progGurukulam3, classroom1],
    agriculture: [agri1, agri2, agri3, agri4, agri5],
    'shri-classes': [progShriClasses, progShriClasses3, classroom2],
    udyamita: [progUdyamita, progUdyamita3],
} as const;
