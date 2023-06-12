import * as httpRequest from '~/utils/httpRequest';

export const course = async () => {
    try {
        const res = await httpRequest.get('KhoaHocs');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const courseById = async (id) => {
    try {
        const res = await httpRequest.get(`KhoaHocs/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createCourse = async (
    name,
    image,
    describe,
    quantityLesson,
    quantityStudent,
    price,
    typeCode,
    instructorCode,
    adminCode,
) => {
    try {
        const res = await httpRequest.post('KhoaHocs', {
            tenKH: name,
            hinh: image,
            moTa: describe,
            soLuongBH: quantityLesson,
            soLuongHocVien: quantityStudent,
            gia: price,
            maLoai: typeCode,
            maGV: instructorCode,
            maQTV: adminCode,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateCourse = async (
    id,
    name,
    image,
    describe,
    quantityLesson,
    quantityStudent,
    price,
    typeCode,
    instructorCode,
    adminCode,
) => {
    try {
        const res = await httpRequest.put(`KhoaHocs/${id}`, {
            tenKH: name,
            hinh: image,
            moTa: describe,
            soLuongBH: quantityLesson,
            soLuongHocVien: quantityStudent,
            gia: price,
            maLoai: typeCode,
            maGV: instructorCode,
            maQTV: adminCode,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCourse = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`KhoaHocs/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
