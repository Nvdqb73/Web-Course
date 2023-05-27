import * as httpRequest from '~/utils/httpRequest';
export const lecturer = async () => {
    try {
        const res = await httpRequest.get('GiangViens', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
