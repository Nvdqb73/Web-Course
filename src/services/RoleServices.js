import * as httpRequest from '~/utils/httpRequest';
export const role = async () => {
    try {
        const res = await httpRequest.get('Roles');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createRole = async (roleName) => {
    try {
        const res = await httpRequest.post('Roles', {
            roleName,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateRole = async (roleId, roleName) => {
    try {
        const res = await httpRequest.put(`Roles/${roleId}`, {
            roleName,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteRole = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`Roles/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
