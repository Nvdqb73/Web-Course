import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditAdmin.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as adminServices from '~/services/adminServices';
const cx = classNames.bind(styles);

function ModalEditAdmin() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.admin;

    const navigate = useNavigate();

    const { id, name, date, address, roleId } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maQTV));
            dispatch(actions.setName(findId.tenQTV));
            dispatch(actions.setDate(findId.ngaySinh));
            dispatch(actions.setAddress(findId.diaChi));
            dispatch(actions.setRoleid(findId.roleId));
        } else {
            toast.error('Vui lòng chọn quản trị khác!');
            navigate('/admin/@_type=childAdmin');
        }
    }, [dispatch, findId, navigate]);

    const handleEditAdmin = async () => {
        const result = await adminServices.updateAdmin(id, name, date, address, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa quản trị thành công!');
            navigate('/admin/@_type=childAdmin');
        } else {
            toast.error('Chỉnh sửa quản trị thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-admin')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã quản trị</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-admin')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên quản trị </Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-admin')}
                            type="text"
                            placeholder={name}
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
                            placeholder={date}
                            onChange={(e) => {
                                dispatch(actions.setDate(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            value={address}
                            className={cx('input-admin')}
                            type="text"
                            placeholder={address}
                            onChange={(e) => {
                                dispatch(actions.setAddress(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>RoleID</Form.Label>
                        <Form.Control
                            value={roleId}
                            className={cx('input-admin')}
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
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=childAdmin')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditAdmin()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditAdmin);
