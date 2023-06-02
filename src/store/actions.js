const {
    //Common
    SET_ID,
    SET_NAME,
    SET_IMAGE,
    ALL_RESET,
    //Course
    SET_DESCRIBE,
    SET_QUANTITY_LESSON,
    SET_QUANTITY_STUDENT,
    SET_PRICE,
    SET_TYPE,
    SET_LECTURER,
    SET_ADMIN,
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
} = require('./constants');

//Common

const setId = (payload) => {
    return {
        type: SET_ID,
        payload,
    };
};

const setName = (payload) => {
    return {
        type: SET_NAME,
        payload,
    };
};

const setImage = (payload) => {
    return {
        type: SET_IMAGE,
        payload,
    };
};

const reset = (payload) => {
    return {
        type: ALL_RESET,
        payload,
    };
};

//Course

const setDescribe = (payload) => {
    return {
        type: SET_DESCRIBE,
        payload,
    };
};

const setQuantityLesson = (payload) => {
    return {
        type: SET_QUANTITY_LESSON,
        payload,
    };
};

const setQuantityStudent = (payload) => {
    return {
        type: SET_QUANTITY_STUDENT,
        payload,
    };
};

const setPrice = (payload) => {
    return {
        type: SET_PRICE,
        payload,
    };
};

const setType = (payload) => {
    return {
        type: SET_TYPE,
        payload,
    };
};

const setLecturer = (payload) => {
    return {
        type: SET_LECTURER,
        payload,
    };
};

const setAdmin = (payload) => {
    return {
        type: SET_ADMIN,
        payload,
    };
};

//User
const setUserName = (payload) => {
    return {
        type: SET_USER_NAME,
        payload,
    };
};

const setPassword = (payload) => {
    return {
        type: SET_PASSWORD,
        payload,
    };
};

const setEmail = (payload) => {
    return {
        type: SET_EMAIL,
        payload,
    };
};

const setRoleid = (payload) => {
    return {
        type: SET_ROLEID,
        payload,
    };
};

//Lecturer
const setDate = (payload) => {
    return {
        type: SET_DATE,
        payload,
    };
};

const setProfessional = (payload) => {
    return {
        type: SET_PROFESSIONAL,
        payload,
    };
};

const setYear = (payload) => {
    return {
        type: SET_YEAR,
        payload,
    };
};

const setAddress = (payload) => {
    return {
        type: SET_ADDRESS,
        payload,
    };
};

const setContent = (payload) => {
    return {
        type: SET_CONTENT,
        payload,
    };
};

const setVideo = (payload) => {
    return {
        type: SET_VIDEO,
        payload,
    };
};

const setCourseCode = (payload) => {
    return {
        type: SET_COURSECODE,
        payload,
    };
};

//Assignments
const setAnswer = (payload) => {
    return {
        type: SET_ANSWER,
        payload,
    };
};

const setPoint = (payload) => {
    return {
        type: SET_POINT,
        payload,
    };
};

const setLessonCode = (payload) => {
    return {
        type: SET_LESSONCODE,
        payload,
    };
};
export {
    //Common
    setId,
    setName,
    setImage,
    //Course
    setDescribe,
    setQuantityLesson,
    setQuantityStudent,
    setPrice,
    setType,
    setLecturer,
    setAdmin,
    reset,
    //User
    setUserName,
    setPassword,
    setEmail,
    setRoleid,
    //Lecturer
    setDate,
    setProfessional,
    setYear,
    setAddress,
    //Lesson
    setContent,
    setVideo,
    setCourseCode,
    //Assignments
    setAnswer,
    setPoint,
    setLessonCode,
};
