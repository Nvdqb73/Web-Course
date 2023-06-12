import config from '~/config';

//Layout

import { LessonLayout } from '~/layouts';

import { Admin } from '~/Admin/AdminLayouts';

//Error 404
import Error from '~/pages/Error';

//Login
import Login from '~/pages/Login';

//Register
import Register from '~/pages/Register';

//Pages Client
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import { Detail } from '~/pages/Course';
import Learning from '~/pages/Learning';
import Personal from '~/pages/Personal';
import Lesson from '~/pages/Lesson';

//Page Admin
import { HomeAdmin } from '~/Admin/AdminPage';
import { CourseTypeManagement } from '~/Admin/AdminPage';
import ModalAddCourseType from '~/Admin/components/ModalCourseType';
import { ModalEditCourseType } from '~/Admin/components/ModalCourseType';
import CourseManagement from '~/Admin/AdminPage';
import ModalAddCourse from '~/Admin/components/ModalsCourse';
import { ModalEditCourse } from '~/Admin/components/ModalsCourse';
import { RoleManagement } from '~/Admin/AdminPage';
import ModalAddRole from '~/Admin/components/ModalsRole';
import { ModalEditRole } from '~/Admin/components/ModalsRole';
import { UserManagement } from '~/Admin/AdminPage';
import ModalAddUser from '~/Admin/components/ModalsUser';
import { ModalEditUser } from '~/Admin/components/ModalsUser';
import { LecturerManagement } from '~/Admin/AdminPage';
import ModalAddLecturer from '~/Admin/components/ModalsLecturer';
import { ModalEditLecturer } from '~/Admin/components/ModalsLecturer';
import { AdminManagement } from '~/Admin/AdminPage';
import ModelAddAdmin from '~/Admin/components/ModalsAdmin';
import { ModalEditAdmin } from '~/Admin/components/ModalsAdmin';
import { LessonManagement } from '~/Admin/AdminPage';
import ModalAddLesson from '~/Admin/components/ModalsLesson';
import { ModalEditLesson } from '~/Admin/components/ModalsLesson';
import { AssignmentManagement } from '~/Admin/AdminPage';
import ModalAddAssignment from '~/Admin/components/ModalAssignment';
import { ModalEditAssignment } from '~/Admin/components/ModalAssignment';

//pubic routes
const publicRoutes = [
    { path: config.routes.error404, component: Error, layout: null },

    //Login
    { path: config.routes.login, component: Login, layout: null },

    //Register
    { path: config.routes.register, component: Register, layout: null },
    //routes Client
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
    { path: config.routes.course_details, component: Detail },
    { path: config.routes.learning, component: Learning },

    { path: config.routes.lesson, component: Lesson, layout: LessonLayout },
    { path: config.routes.lessonItem, component: Lesson, layout: LessonLayout },

    { path: config.routes.profile, component: Personal, layout: null },

    //routes Admin
    { path: config.routes.admin, component: HomeAdmin, layout: Admin },
    { path: config.routes.tableCourseType, component: CourseTypeManagement, layout: Admin },
    { path: config.routes.addCourseType, component: ModalAddCourseType, layout: Admin },
    { path: config.routes.editCourseType, component: ModalEditCourseType, layout: Admin },
    { path: config.routes.tableCourse, component: CourseManagement, layout: Admin },
    { path: config.routes.addCourse, component: ModalAddCourse, layout: Admin },
    { path: config.routes.editCourse, component: ModalEditCourse, layout: Admin },
    { path: config.routes.tableRole, component: RoleManagement, layout: Admin },
    { path: config.routes.addRole, component: ModalAddRole, layout: Admin },
    { path: config.routes.editRole, component: ModalEditRole, layout: Admin },
    { path: config.routes.tableUser, component: UserManagement, layout: Admin },
    { path: config.routes.addUser, component: ModalAddUser, layout: Admin },
    { path: config.routes.editUser, component: ModalEditUser, layout: Admin },
    { path: config.routes.tableLecturer, component: LecturerManagement, layout: Admin },
    { path: config.routes.addLecturer, component: ModalAddLecturer, layout: Admin },
    { path: config.routes.editLecturer, component: ModalEditLecturer, layout: Admin },
    { path: config.routes.tableAdmin, component: AdminManagement, layout: Admin },
    { path: config.routes.addAdmin, component: ModelAddAdmin, layout: Admin },
    { path: config.routes.editAdmin, component: ModalEditAdmin, layout: Admin },
    { path: config.routes.tableLesson, component: LessonManagement, layout: Admin },
    { path: config.routes.addLesson, component: ModalAddLesson, layout: Admin },
    { path: config.routes.editLesson, component: ModalEditLesson, layout: Admin },
    { path: config.routes.tableAssignments, component: AssignmentManagement, layout: Admin },
    { path: config.routes.addAssignments, component: ModalAddAssignment, layout: Admin },
    { path: config.routes.editAssignments, component: ModalEditAssignment, layout: Admin },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
