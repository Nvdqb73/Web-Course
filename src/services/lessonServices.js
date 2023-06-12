import * as httpRequest from '~/utils/httpRequest';
export const lesson = async () => {
    try {
        const res = await httpRequest.get('BaiHocs');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const lessonById = async (id) => {
    try {
        const res = await httpRequest.get(`BaiHocs/${id}`, {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createLesson = async (name, content, video, courseCode) => {
    try {
        const res = await httpRequest.post('BaiHocs', {
            tenBH: name,
            noiDungBH: content,
            video: video,
            maKH: courseCode,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateLesson = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`BaiHocs/${id}`, {
            tenBH: name,
            noiDungBH: content,
            content: video,
            video: video,
            maKH: courseCode,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteLesson = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`BaiHocs/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
