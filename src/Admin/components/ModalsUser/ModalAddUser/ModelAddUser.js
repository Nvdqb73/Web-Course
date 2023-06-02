import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './ModalAddUser.module.scss';

import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

function ModelAddUser() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { name, image, userName, password, email, roleId } = state;

    const handleSaveUser = async () => {
        const result = await userServices.createUser(userName, password, name, email, image, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=user');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đã xảy ra lỗi...!');
            navigate('/admin/@_type=user');
        }
    };

    return (
        <>
            <div className={cx('modal-add-user')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control
                            value={userName}
                            className={cx('input-user')}
                            type="text"
                            placeholder="Nhâp tên đăng nhập..."
                            onChange={(e) => {
                                dispatch(actions.setUserName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            value={password}
                            className={cx('input-user')}
                            type="text"
                            placeholder="Nhâp mật khẩu..."
                            onChange={(e) => {
                                dispatch(actions.setPassword(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên người dùng</Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-user')}
                            type="text"
                            placeholder="Nhâp tên người dùng..."
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={email}
                            className={cx('input-user')}
                            type="email"
                            placeholder="Nhâp email..."
                            onChange={(e) => {
                                dispatch(actions.setEmail(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            value={image}
                            className={cx('input-user')}
                            type="text"
                            placeholder="URL......"
                            onChange={(e) => {
                                dispatch(actions.setImage(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>roleId</Form.Label>
                        <Form.Control
                            value={roleId}
                            className={cx('input-user')}
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
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=user')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModelAddUser;
