import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditUser.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

function ModalEditUser() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.user;

    const navigate = useNavigate();

    const { id, name, image, userName, password, email, roleId } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maND));
            dispatch(actions.setUserName(findId.tenDangNhap));
            dispatch(actions.setPassword(findId.password));
            dispatch(actions.setName(findId.tenND));
            dispatch(actions.setEmail(findId.email));
            dispatch(actions.setImage(findId.avatar));
            dispatch(actions.setRoleid(findId.roleId));
        } else {
            toast.error('Vui lòng chọn người dùng khác!');
            navigate('/admin/@_type=user');
        }
    }, [dispatch, findId, navigate]);

    const handleEditUser = async () => {
        const result = await userServices.updateUser(id, userName, password, name, email, image, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa người dùng thành công!');
            navigate('/admin/@_type=user');
        } else {
            toast.error('Chỉnh sửa người dùng thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-user')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã người dùng</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-user')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên đăng nhập </Form.Label>
                        <Form.Control
                            value={userName}
                            className={cx('input-user')}
                            type="text"
                            placeholder={userName}
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
                            placeholder={password}
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
                            placeholder={name}
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
                            placeholder={email}
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
                            placeholder={image}
                            onChange={(e) => {
                                dispatch(actions.setImage(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>RoleID</Form.Label>
                        <Form.Control
                            value={roleId}
                            className={cx('input-user')}
                            type="number"
                            placeholder={roleId}
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
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditUser);
