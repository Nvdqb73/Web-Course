import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import Learning from '~/pages/Learning';
import Personal from '~/pages/Personal';
import Lesson from '~/pages/Lesson';

//pubic routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
    { path: config.routes.learning, component: Learning },
    { path: config.routes.lesson, component: Lesson, layout: HeaderOnly },
    { path: config.routes.profile, component: Personal, layout: null },

    // { path: '/:nickname', component: Course },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
