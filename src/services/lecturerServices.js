import * as httpRequest from '~/utils/httpRequest';

export const lecturer = async () => {
    try {
        const res = await httpRequest.get('GiangViens');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const lecturerById = async (id) => {
    try {
        const res = await httpRequest.get(`GiangViens/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createLecturer = async (name, date, professional, year, address, roleId) => {
    try {
        const res = await httpRequest.post('GiangViens', {
            tenGV: name,
            ngaySinh: date,
            chuyenMon: professional,
            namHD: year,
            diaChi: address,
            roleId: roleId,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateLecturer = async (id, name, date, professional, year, address, roleId) => {
    try {
        const res = await httpRequest.put(`GiangViens/${id}`, {
            tenGV: name,
            ngaySinh: date,
            chuyenMon: professional,
            namHD: year,
            diaChi: address,
            roleId: roleId,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteLecturer = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`GiangViens/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
