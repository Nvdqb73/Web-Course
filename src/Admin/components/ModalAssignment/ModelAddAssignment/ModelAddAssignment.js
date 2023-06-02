import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModelAddAssignment.module.scss';
import * as assignmentServices from '~/services/assignmentServices';

const cx = classNames.bind(styles);

function ModelAddAssignment() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { content, answer, point, lessonCode } = state;

    const handleSaveAssignments = async () => {
        const result = await assignmentServices.createAssignments(content, answer, point, lessonCode);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=assignments');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=assignments');
        }
    };

    return (
        <>
            <div className={cx('modal-add-assignments')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nội dung bài tập </Form.Label>
                        <Form.Control
                            value={content}
                            className={cx('input-assignments')}
                            type="text"
                            placeholder="Nhâp tên nội dung bài tập..."
                            onChange={(e) => {
                                dispatch(actions.setContent(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Đáp án</Form.Label>
                        <Form.Control
                            value={answer}
                            className={cx('input-assignments')}
                            type="text"
                            placeholder="Nhâp đáp án...."
                            onChange={(e) => {
                                dispatch(actions.setAnswer(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Điểm</Form.Label>
                        <Form.Control
                            value={point}
                            className={cx('input-assignments')}
                            type="number"
                            placeholder="Nhâp điểm..."
                            onChange={(e) => {
                                dispatch(actions.setPoint(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã bài học</Form.Label>
                        <Form.Control
                            value={lessonCode}
                            className={cx('input-assignments')}
                            type="number"
                            placeholder="Nhâp mã bài học..."
                            onChange={(e) => {
                                dispatch(actions.setLessonCode(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=assignments')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveAssignments()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModelAddAssignment;
