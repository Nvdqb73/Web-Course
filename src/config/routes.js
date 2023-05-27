const admin = '/admin';

const routes = {
    home: '/',
    course: '/course',
    learning: '/learning',
    lesson: '/lesson',
    profile: '/personal',
    admin: admin,
    tableCourse: `${admin}/@_type=course`,
    addCourse: `${admin}/@_type=course/addCourse`,
    editCourse: `${admin}/@_type=course/editCourse`,
    tableRole: `${admin}/@_type=role`,
    addRole: `${admin}/@_type=role/addRole`,
};

export default routes;
