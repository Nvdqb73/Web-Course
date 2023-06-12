import * as httpRequest from '~/utils/httpRequest';

export const admin = async () => {
    try {
        const res = await httpRequest.get('QuanTriViens');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createAdmin = async (name, date, address, roleId) => {
    try {
        const res = await httpRequest.post('QuanTriViens', {
            tenQTV: name,
            ngaySinh: date,
            diaChi: address,
            roleId: roleId,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateAdmin = async (id, name, date, address, roleId) => {
    try {
        const res = await httpRequest.put(`QuanTriViens/${id}`, {
            tenQTV: name,
            ngaySinh: date,
            diaChi: address,
            roleId: roleId,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAdmin = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`QuanTriViens/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
