import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import { Admin } from '~/Admin/AdminLayouts';

//Pages Client
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import Learning from '~/pages/Learning';
import Personal from '~/pages/Personal';
import Lesson from '~/pages/Lesson';
//Page Admin
import { HomeAdmin } from '~/Admin/AdminPage';
import CourseManagement from '~/Admin/AdminPage';
import ModalAddCourse from '~/Admin/component/ModalsCourse';
import { ModalEditCourse } from '~/Admin/component/ModalsCourse';
import { RoleManagement } from '~/Admin/AdminPage';
import ModelAddRole from '~/Admin/component/ModalsRole/ModalAddNews';

//pubic routes
const publicRoutes = [
    //routes Client
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
    { path: config.routes.learning, component: Learning },
    { path: config.routes.lesson, component: Lesson, layout: HeaderOnly },
    { path: config.routes.profile, component: Personal, layout: null },

    //routes Admin
    { path: config.routes.admin, component: HomeAdmin, layout: Admin },
    { path: config.routes.tableCourse, component: CourseManagement, layout: Admin },
    { path: config.routes.addCourse, component: ModalAddCourse, layout: Admin },
    { path: config.routes.editCourse, component: ModalEditCourse, layout: Admin },
    { path: config.routes.tableRole, component: RoleManagement, layout: Admin },
    { path: config.routes.addRole, component: ModelAddRole, layout: Admin },

    // { path: '/:nickname', component: Course },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
