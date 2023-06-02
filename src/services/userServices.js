import * as httpRequest from '~/utils/httpRequest';
export const user = async () => {
    try {
        const res = await httpRequest.get('NguoiDungs');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (userName, password, name, email, image, roleId) => {
    try {
        const res = await httpRequest.post('NguoiDungs', {
            tenDangNhap: userName,
            password: password,
            tenND: name,
            email: email,
            avatar: image,
            roleID: roleId,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (id, userName, password, name, email, image, roleID) => {
    try {
        const res = await httpRequest.put(`NguoiDungs/${id}`, {
            tenDangNhap: userName,
            password: password,
            tenND: name,
            email: email,
            avatar: image,
            roleID: roleID,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`NguoiDungs/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
