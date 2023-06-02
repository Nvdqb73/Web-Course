import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModalAddCourse.module.scss';

import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function ModalAddCourse() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { name, image, describe, quantityLesson, quantityStudent, price, typeCode, instructorCode, adminCode } =
        state;

    const handleSaveCourse = async () => {
        const result = await courseServices.createCourse(
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
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=course');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=course');
        }
    };

    return (
        <>
            <div className={cx('modal-add-course')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên Khóa Học</Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-course')}
                            type="text"
                            placeholder="Nhâp tên..."
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
                            placeholder="URL......"
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
                            placeholder="Mô tả"
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
                            placeholder="Nhập số lượng bài học"
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
                            placeholder="Nhập Số lượng học viên"
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
                            placeholder="Nhập giá"
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
                            placeholder="Nhập mã loại"
                            onChange={(e) => {
                                dispatch(actions.setType(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã Giảng Viên</Form.Label>
                        <Form.Control
                            value={instructorCode}
                            className={cx('input-course')}
                            type="number"
                            placeholder="Nhập mã giảng viên"
                            onChange={(e) => {
                                dispatch(actions.setLecturer(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã Quản Trị Viên</Form.Label>
                        <Form.Control
                            value={adminCode}
                            className={cx('input-course')}
                            type="number"
                            placeholder="Nhập mã quản trị"
                            onChange={(e) => {
                                dispatch(actions.setAdmin(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=course')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveCourse()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModalAddCourse;
