import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './ModalAddRole.module.scss';

import * as RoleServices from '~/services/RoleServices';

const cx = classNames.bind(styles);

function ModalAddRole() {
    const [roleName, setRoleName] = useState('');

    const navigate = useNavigate();

    const handleSaveRole = async () => {
        let result = await RoleServices.createRole(roleName);

        if (result) {
            setRoleName('');
            toast.success('Thêm role thàng công!');
            navigate('/admin/@_type=role');
        }
    };

    return (
        <>
            <div className={cx('modal-add-role')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên Role</Form.Label>
                        <Form.Control
                            value={roleName}
                            type="text"
                            className={cx('input-role')}
                            placeholder="Nhâp tên..."
                            onChange={(e) => {
                                setRoleName(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=role')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveRole()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalAddRole);
