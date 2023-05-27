import * as httpRequest from '~/utils/Request';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
