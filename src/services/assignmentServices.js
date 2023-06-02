import * as httpRequest from '~/utils/httpRequest';
export const assignment = async () => {
    try {
        const res = await httpRequest.get('BaiTaps', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createAssignments = async (content, answer, point, lessonCode) => {
    try {
        const res = await httpRequest.post('BaiTaps', {
            noiDungBT: content,
            dapAn: answer,
            diem: point,
            maBH: lessonCode,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateAssignments = async (id, content, answer, point, lessonCode) => {
    try {
        const res = await httpRequest.put(`BaiTaps/${id}`, {
            noiDungBT: content,
            dapAn: answer,
            diem: point,
            maBH: lessonCode,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAssignment = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`BaiTaps/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
