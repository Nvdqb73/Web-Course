import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditCourse.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function ModalEditCourse() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.course;

    const navigate = useNavigate();

    const { id, name, image, describe, quantityLesson, quantityStudent, price, typeCode, instructorCode, adminCode } =
        state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maKH));
            dispatch(actions.setName(findId.tenKH));
            dispatch(actions.setImage(findId.hinh));
            dispatch(actions.setDescribe(findId.moTa));
            dispatch(actions.setQuantityLesson(findId.soLuongBH));
            dispatch(actions.setQuantityStudent(findId.soLuongHocVien));
            dispatch(actions.setPrice(findId.gia));
            dispatch(actions.setType(findId.maLoai));
            dispatch(actions.setLecturer(findId.maGV));
            dispatch(actions.setAdmin(findId.maQTV));
        } else {
            toast.error('Vui lòng chọn khóa học khác!');
            navigate('/admin/@_type=course');
        }
    }, [dispatch, findId, navigate]);

    const handleEditCourse = async () => {
        const result = await courseServices.updateCourse(
            findId.maKH,
            name,
            image,
            describe,
            quantityLesson,
            quantityStudent,
            price,
            typeCode,
            instructorCode,
            adminCode,
        );
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa khóa học thành công!');
            navigate('/admin/@_type=course');
        } else {
            toast.error('Chỉnh sửa khóa học thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-course')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nhập mã khóa học</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-course')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nhập tên </Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-course')}
                            type="text"
                            placeholder={name}
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Hình</Form.Label>
                        <Form.Control
                            value={image}
                            className={cx('input-course')}
                            type="text"
                            placeholder={image}
                            onChange={(e) => {
                                dispatch(actions.setImage(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            value={describe}
                            className={cx('input-course')}
                            type="text"
                            placeholder={describe}
                            onChange={(e) => {
                                dispatch(actions.setDescribe(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Số Lượng Bài Học</Form.Label>
                        <Form.Control
                            value={quantityLesson}
                            className={cx('input-course')}
                            type="number"
                            placeholder={quantityLesson}
                            onChange={(e) => {
                                dispatch(actions.setQuantityLesson(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Số Lượng Học Viên</Form.Label>
                        <Form.Control
                            value={quantityStudent}
                            className={cx('input-course')}
                            type="number"
                            placeholder={quantityStudent}
                            onChange={(e) => {
                                dispatch(actions.setQuantityStudent(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            value={price}
                            className={cx('input-course')}
                            type="number"
                            placeholder={price}
                            onChange={(e) => {
                                dispatch(actions.setPrice(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã Loại</Form.Label>
                        <Form.Control
                            value={typeCode}
                            className={cx('input-course')}
                            type="number"
                            placeholder={typeCode}
                            onChange={(e) => {
                                dispatch(actions.setType(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã Giảng Viên</Form.Label>
                        <Form.Control
                            value={instructorCode}
                            className={cx('input-course')}
                            type="number"
                            placeholder={instructorCode}
                            onChange={(e) => {
                                dispatch(actions.setLecturer(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã Quản Trị Viên</Form.Label>
                        <Form.Control
                            value={adminCode}
                            className={cx('input-course')}
                            type="number"
                            placeholder={adminCode}
                            onChange={(e) => {
                                dispatch(actions.setAdmin(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=course')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditCourse()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditCourse);
