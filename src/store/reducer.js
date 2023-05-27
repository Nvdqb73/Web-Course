import {
    //Couser
    SET_ID,
    SET_ADMIN,
    SET_DESCRIBE,
    SET_IMAGE,
    SET_LECTURER,
    SET_NAME,
    SET_PRICE,
    SET_QUANTITY_LESSON,
    SET_QUANTITY_STUDENT,
    SET_TYPE,
    ALL_RESET,

    //Role
    ROLE_NAME,
} from './constants';

const initState = {
    //Course
    maKH: '',
    tenKH: '',
    hinh: '',
    moTa: '',
    soLuongBH: '',
    soLuongHocVien: '',
    gia: '',
    maLoai: '',
    maGV: '',
    maQTV: '',
    //RoLe
    roleName: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ID: {
            return {
                ...state,
                maKH: action.payload,
            };
        }
        case SET_NAME:
            return {
                ...state,
                tenKH: action.payload,
            };
        case SET_IMAGE:
            return {
                ...state,
                hinh: action.payload,
            };
        case SET_DESCRIBE:
            return {
                ...state,
                moTa: action.payload,
            };
        case SET_QUANTITY_LESSON:
            return {
                ...state,
                soLuongBH: action.payload,
            };
        case SET_QUANTITY_STUDENT:
            return {
                ...state,
                soLuongHocVien: action.payload,
            };

        case SET_PRICE:
            return {
                ...state,
                gia: action.payload,
            };
        case SET_TYPE:
            return {
                ...state,
                maLoai: action.payload,
            };
        case SET_LECTURER:
            return {
                ...state,
                maGV: action.payload,
            };
        case SET_ADMIN:
            return {
                ...state,
                maQTV: action.payload,
            };
        case ALL_RESET:
            let reset = action.payload;
            return {
                tenKH: reset,
                hinh: reset,
                moTa: reset,
                soLuongBH: reset,
                soLuongHocVien: reset,
                maLoai: reset,
                gia: reset,
                maGV: reset,
                maQTV: reset,
                roleName: reset,
            };
        case ROLE_NAME:
            return {
                ...state,
                roleName: action.payload,
            };
        default:
            throw new Error('Không tồn tại Action này!');
    }
};

export { initState };
export default reducer;
