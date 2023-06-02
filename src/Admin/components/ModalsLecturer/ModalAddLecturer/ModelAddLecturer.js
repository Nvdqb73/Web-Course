import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModalAddLecturer.module.scss';
import * as lecturerServices from '~/services/lecturerServices';

const cx = classNames.bind(styles);

function ModelAddLecturer() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { name, date, professional, year, address, roleId } = state;

    const handleSaveUser = async () => {
        const result = await lecturerServices.createLecturer(name, date, professional, year, address, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=lecturer');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=lecturer');
        }
    };

    return (
        <>
            <div className={cx('modal-add-lecturer')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên giảng viên</Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder="Nhâp tên giảng viên..."
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control
                            value={date}
                            className={cx('input-lecturer')}
                            type="Date"
                            placeholder="Nhâp ngày sinh..."
                            onChange={(e) => {
                                dispatch(actions.setDate(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Chuyên môn</Form.Label>
                        <Form.Control
                            value={professional}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder="Nhâp chuyên môn..."
                            onChange={(e) => {
                                dispatch(actions.setProfessional(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Năm hoạt động</Form.Label>
                        <Form.Control
                            value={year}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder="Nhâp năm hoạt động..."
                            onChange={(e) => {
                                dispatch(actions.setYear(e.target.value));
                            }}
                        />
                    </Form.Group>
                    <Form.Group className={cx('mb-1')} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            value={address}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder="Nhập địa chỉ...."
                            onChange={(e) => {
                                dispatch(actions.setAddress(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>roleId</Form.Label>
                        <Form.Control
                            value={roleId}
                            className={cx('input-lecturer')}
                            type="number"
                            placeholder="Nhập mã role...."
                            onChange={(e) => {
                                dispatch(actions.setRoleid(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=lecturer')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModelAddLecturer;
