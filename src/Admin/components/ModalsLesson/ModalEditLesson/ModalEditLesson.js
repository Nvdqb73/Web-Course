import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditLesson.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function ModalEditLesson() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.lesson;

    const navigate = useNavigate();

    const { id, name, content, video, courseCode } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maBH));
            dispatch(actions.setName(findId.tenBH));
            dispatch(actions.setContent(findId.noiDungBH));
            dispatch(actions.setVideo(findId.video));
            dispatch(actions.setCourseCode(findId.maKH));
        } else {
            toast.error('Vui lòng chọn bài học khác!');
            navigate('/admin/@_type=lesson');
        }
    }, [dispatch, findId, navigate]);

    const handleEditLesson = async () => {
        const result = await lessonServices.updateLesson(id, name, content, video, courseCode);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa bài học thành công!');
            navigate('/admin/@_type=lesson');
        } else {
            toast.error('Chỉnh sửa bài học thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-lesson')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã bài học</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-lesson')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên bài học </Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder={name}
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nội dung bài học</Form.Label>
                        <Form.Control
                            value={content}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder={content}
                            onChange={(e) => {
                                dispatch(actions.setContent(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label> Video </Form.Label>
                        <Form.Control
                            value={video}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder={video}
                            onChange={(e) => {
                                dispatch(actions.setVideo(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã khóa học</Form.Label>
                        <Form.Control
                            value={courseCode}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder={courseCode}
                            onChange={(e) => {
                                dispatch(actions.setCourseCode(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=lesson')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditLesson()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditLesson);
