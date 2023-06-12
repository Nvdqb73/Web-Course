const admin = '/admin';

const routes = {
    //Not Found
    error404: '*',

    //Login
    login: '/login',

    //Register
    register: '/register',

    //Client
    home: '/',
    course: '/course',
    course_details: '/course/:id',
    learning: '/learning',

    lesson: '/lesson',
    lessonItem: '/lesson/:id',

    profile: '/personal',

    //Admin
    admin: admin,
    tableCourseType: `${admin}/@_type=courseType`,
    addCourseType: `${admin}/@_type=courseType/addType`,
    editCourseType: `${admin}/@_type=courseType/editType`,
    tableCourse: `${admin}/@_type=course`,
    addCourse: `${admin}/@_type=course/addCourse`,
    editCourse: `${admin}/@_type=course/editCourse`,
    tableRole: `${admin}/@_type=role`,
    addRole: `${admin}/@_type=role/addRole`,
    editRole: `${admin}/@_type=role/editRole`,
    tableUser: `${admin}/@_type=user`,
    addUser: `${admin}/@_type=user/addUser`,
    editUser: `${admin}/@_type=user/editUser`,
    tableLecturer: `${admin}/@_type=lecturer`,
    addLecturer: `${admin}/@_type=lecturer/addLecturer`,
    editLecturer: `${admin}/@_type=lecturer/editLecturer`,
    tableAdmin: `${admin}/@_type=childAdmin`,
    addAdmin: `${admin}/@_type=childAdmin/addAdmin`,
    editAdmin: `${admin}/@_type=childAdmin/editAdmin`,
    tableLesson: `${admin}/@_type=lesson`,
    addLesson: `${admin}/@_type=lesson/addLesson`,
    editLesson: `${admin}/@_type=lesson/editLesson`,
    tableAssignments: `${admin}/@_type=assignments`,
    addAssignments: `${admin}/@_type=assignments/addAssignments`,
    editAssignments: `${admin}/@_type=assignments/editAssignments`,
};

export default routes;
