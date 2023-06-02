import {
    //Common
    SET_ID,
    SET_ADMIN,
    SET_DESCRIBE,
    SET_IMAGE,
    //Course
    SET_LECTURER,
    SET_NAME,
    SET_PRICE,
    SET_QUANTITY_LESSON,
    SET_QUANTITY_STUDENT,
    SET_TYPE,
    ALL_RESET,
    //User
    SET_USER_NAME,
    SET_PASSWORD,
    SET_EMAIL,
    SET_ROLEID,
    //Lecturer
    SET_DATE,
    SET_PROFESSIONAL,
    SET_YEAR,
    SET_ADDRESS,
    //Lesson
    SET_CONTENT,
    SET_VIDEO,
    SET_COURSECODE,
    //Assignments
    SET_ANSWER,
    SET_POINT,
    SET_LESSONCODE,
} from './constants';

const initState = {
    //Common
    id: '',
    name: '',
    image: '',
    //Course
    describe: '',
    quantityLesson: '',
    quantityStudent: '',
    price: '',
    typeCode: '',
    instructorCode: '',
    adminCode: '',
    //User
    userName: '',
    password: '',
    email: '',
    roleId: '',
    //Lecturer
    date: '',
    professional: '',
    year: '',
    address: '',
    //Lesson
    content: '',
    video: '',
    courseCode: '',
    //Assignments
    answer: '',
    point: '',
    lessonCode: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        //Common
        case SET_ID: {
            return {
                ...state,
                id: action.payload,
            };
        }
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload,
            };
        //Course
        case SET_DESCRIBE:
            return {
                ...state,
                describe: action.payload,
            };
        case SET_QUANTITY_LESSON:
            return {
                ...state,
                quantityLesson: action.payload,
            };
        case SET_QUANTITY_STUDENT:
            return {
                ...state,
                quantityStudent: action.payload,
            };

        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
        case SET_TYPE:
            return {
                ...state,
                typeCode: action.payload,
            };
        case SET_LECTURER:
            return {
                ...state,
                instructorCode: action.payload,
            };
        case SET_ADMIN:
            return {
                ...state,
                adminCode: action.payload,
            };
        //User
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_ROLEID:
            return {
                ...state,
                roleId: action.payload,
            };
        case SET_DATE:
            return {
                ...state,
                date: action.payload,
            };
        case SET_PROFESSIONAL:
            return {
                ...state,
                professional: action.payload,
            };
        case SET_YEAR:
            return {
                ...state,
                year: action.payload,
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        //Lesson
        case SET_CONTENT:
            return {
                ...state,
                content: action.payload,
            };
        case SET_VIDEO:
            return {
                ...state,
                video: action.payload,
            };

        case SET_COURSECODE:
            return {
                ...state,
                courseCode: action.payload,
            };
        //Assignments

        case SET_ANSWER:
            return {
                ...state,
                answer: action.payload,
            };
        case SET_POINT:
            return {
                ...state,
                point: action.payload,
            };
        case SET_LESSONCODE:
            return {
                ...state,
                lessonCode: action.payload,
            };
        case ALL_RESET:
            let reset = action.payload;
            return {
                name: reset,
                image: reset,
                describe: reset,
                quantityLesson: reset,
                quantityStudent: reset,
                price: reset,
                typeCode: reset,
                instructorCode: reset,
                adminCode: reset,
                userName: reset,
                password: reset,
                email: reset,
                roleId: reset,
                date: reset,
                professional: reset,
                year: reset,
                address: reset,
                content: reset,
                video: reset,
                CourseCode: reset,
                answer: reset,
                point: reset,
                lessonCode: reset,
            };
        default:
            throw new Error('Không tồn tại Action này!');
    }
};

export { initState };
export default reducer;
