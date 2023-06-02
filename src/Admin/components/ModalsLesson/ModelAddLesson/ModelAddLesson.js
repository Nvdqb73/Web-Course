import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModelAddLesson.module.scss';
import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function ModelAddLesson() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { name, content, video, courseCode } = state;

    const handleSaveLesson = async () => {
        const result = await lessonServices.createLesson(name, content, video, courseCode);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=lesson');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=lesson');
        }
    };

    return (
        <>
            <div className={cx('modal-add-lesson')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên Bài Học </Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder="Nhâp tên bài học..."
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nội Dung Bài Học</Form.Label>
                        <Form.Control
                            value={content}
                            className={cx('input-lesson')}
                            type="text"
                            placeholder="Nhâp nội dung bài học..."
                            onChange={(e) => {
                                dispatch(actions.setContent(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Video</Form.Label>
                        <Form.Control
                            value={video}
                            className={cx('input-lesson')}
                            type="video"
                            placeholder="Nhâp video..."
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
                            type="number"
                            placeholder="Nhâp mã khóa học..."
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
                <Button variant="primary" onClick={() => handleSaveLesson()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModelAddLesson;
