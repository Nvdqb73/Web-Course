import * as httpRequest from '~/utils/httpRequest';
export const course = async () => {
    try {
        const res = await httpRequest.get('KhoaHocs', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createCourse = async (tenKH, hinh, moTa, soLuongBH, soLuongHocVien, gia, maLoai, maGV, maQTV) => {
    try {
        const res = await httpRequest.post('KhoaHocs', {
            tenKH,
            hinh,
            moTa,
            soLuongBH,
            soLuongHocVien,
            gia,
            maLoai,
            maGV,
            maQTV,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateCourse = async (id, tenKH, hinh, moTa, soLuongBH, soLuongHocVien, gia, maLoai, maGV, maQTV) => {
    try {
        const res = await httpRequest.put(`KhoaHocs/${id}`, {
            tenKH,
            hinh,
            moTa,
            soLuongBH,
            soLuongHocVien,
            gia,
            maLoai,
            maGV,
            maQTV,
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
