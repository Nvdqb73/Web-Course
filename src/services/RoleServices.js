import * as httpRequest from '~/utils/httpRequest';
export const role = async () => {
    try {
        const res = await httpRequest.get('Roles', {
            params: {},
        });
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
