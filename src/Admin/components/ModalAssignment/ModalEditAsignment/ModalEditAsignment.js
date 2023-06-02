import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditAsignment.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as assignmentServices from '~/services/assignmentServices';

const cx = classNames.bind(styles);

function ModalEditAsignment() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.assignment;

    const navigate = useNavigate();

    const { id, content, answer, point, lessonCode } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maBT));
            dispatch(actions.setContent(findId.noiDungBT));
            dispatch(actions.setAnswer(findId.dapAn));
            dispatch(actions.setPoint(findId.diem));
            dispatch(actions.setLessonCode(findId.maBH));
        } else {
            toast.error('Vui lòng chọn bài tập khác!');
            navigate('/admin/@_type=assignmentsn');
        }
    }, [dispatch, findId, navigate]);

    const handleEditAssignments = async () => {
        const result = await assignmentServices.updateAssignments(id, content, answer, point, lessonCode);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa bài tập thành công!');
            navigate('/admin/@_type=assignments');
        } else {
            toast.error('Chỉnh sửa bài tập thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-assignments')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã bài tập</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-assignments')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nội dung bài tập </Form.Label>
                        <Form.Control
                            value={content}
                            className={cx('input-assignments')}
                            type="text"
                            placeholder={content}
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
                            placeholder={answer}
                            onChange={(e) => {
                                dispatch(actions.setAnswer(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label> Điểm </Form.Label>
                        <Form.Control
                            value={point}
                            className={cx('input-assignments')}
                            type="number"
                            placeholder={point}
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
                            placeholder={lessonCode}
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
                <Button variant="primary" onClick={() => handleEditAssignments()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditAsignment);
