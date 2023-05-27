const {
    //Course
    SET_ID,
    SET_NAME,
    SET_IMAGE,
    SET_DESCRIBE,
    SET_QUANTITY_LESSON,
    SET_QUANTITY_STUDENT,
    SET_PRICE,
    SET_TYPE,
    SET_LECTURER,
    SET_ADMIN,
    ADD_COURSE,
    ALL_RESET,

    //Role
    ROLE_NAME,
} = require('./constants');

//Course

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

const setCourse = (payload) => {
    return {
        type: ADD_COURSE,
        payload,
    };
};

const reset = (payload) => {
    return {
        type: ALL_RESET,
        payload,
    };
};

//Role
const setRole = (payload) => {
    return {
        type: ROLE_NAME,
        payload,
    };
};
export {
    //Course
    setId,
    setName,
    setImage,
    setDescribe,
    setQuantityLesson,
    setQuantityStudent,
    setPrice,
    setType,
    setLecturer,
    setAdmin,
    setCourse,
    reset,

    //Role
    setRole,
};
