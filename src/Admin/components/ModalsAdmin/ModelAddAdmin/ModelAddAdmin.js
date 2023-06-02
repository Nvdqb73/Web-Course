import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModelAddAdmin.module.scss';
import * as AdminManagement from '~/services/adminServices';

const cx = classNames.bind(styles);

function ModelAddAdmin() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { name, date, address, roleId } = state;

    const handleSaveUser = async () => {
        const result = await AdminManagement.createAdmin(name, date, address, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=childAdmin');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=childAdmin');
        }
    };

    return (
        <>
            <div className={cx('modal-add-admin')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên quản trị viên</Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-admin')}
                            type="text"
                            placeholder="Nhâp tên quản trị..."
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control
                            value={date}
                            className={cx('input-admin')}
                            type="Date"
                            placeholder="Nhâp ngày sinh..."
                            onChange={(e) => {
                                dispatch(actions.setDate(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            value={address}
                            className={cx('input-admin')}
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
                            className={cx('input-admin')}
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
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=childAdmin')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModelAddAdmin;
