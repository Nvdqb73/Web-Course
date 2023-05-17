import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import Learning from '~/pages/Learning';
import Personal from '~/pages/Personal';
import Lesson from '~/pages/Lesson';

//pubic routes
const publicRoutes = [
    { path: '/', componet: Home },
    { path: '/course', componet: Course },
    { path: '/learning', componet: Learning },
    { path: '/lesson', componet: Lesson, layout: HeaderOnly },
    { path: '/personal', componet: Personal, layout: null },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
