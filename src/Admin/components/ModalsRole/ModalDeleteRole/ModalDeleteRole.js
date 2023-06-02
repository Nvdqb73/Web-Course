import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteRole.module.scss';

//Service
import * as RoleServices from '~/services/RoleServices';

const cx = classNames.bind(styles);

function ModalDeleteRole(props) {
    const { show, handleClose, dataRoleDelete, setRole } = props;

    const fetchApis = async () => {
        let roles = await RoleServices.role();
        setRole(roles);
    };

    const confirmDelete = async () => {
        const result = await RoleServices.deleteRole(dataRoleDelete.roleId);

        if (result && +result.statusCode === 204) {
            toast.success('XÓA THÀNH CÔNG');
            handleClose();
            fetchApis();
        } else {
            toast.error('XÓA KHÔNG THÀNH CÔNG');
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>Xóa Role</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa role này không?</h3>
                    <p>Role : {dataRoleDelete.roleName}?</p>
                </Modal.Body>
                <Modal.Footer className={cx('btn-action')}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteRole;
