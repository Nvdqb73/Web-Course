import * as httpRequest from '~/utils/httpRequest';

export const search = async (query) => {
    try {
        const res = await httpRequest.get('SearchKhoaHocs', {
            params: {
                query,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
