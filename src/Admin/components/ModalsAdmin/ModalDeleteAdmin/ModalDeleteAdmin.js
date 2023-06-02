import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteAdmin.module.scss';

//Service
import * as adminServices from '~/services/adminServices';

const cx = classNames.bind(styles);

function ModalDeleteAdmin(props) {
    const { show, handleClose, dataAdminDelete, setAdmins } = props;

    const fetchApis = async () => {
        let admins = await adminServices.admin();
        setAdmins(admins);
    };

    const confirmDelete = async () => {
        const result = await adminServices.deleteAdmin(dataAdminDelete.maQTV);

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
                        <h2>Xóa Quảng Trị Viên</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa quản trị viên này không?</h3>
                    <p>Quản trị Viên: {dataAdminDelete.tenQTV}?</p>
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

export default ModalDeleteAdmin;
