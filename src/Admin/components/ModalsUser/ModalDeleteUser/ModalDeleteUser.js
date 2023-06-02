import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteUser.module.scss';

//Service
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

function ModalDeleteUser(props) {
    const { show, handleClose, dataUserDelete, setUsers } = props;

    const fetchApis = async () => {
        let users = await userServices.user();
        setUsers(users);
    };

    const confirmDelete = async () => {
        const result = await userServices.deleteUser(dataUserDelete.maND);

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
                        <h2>Xóa Người Dùng</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa người dùng này không?</h3>
                    <p>Người dùng: {dataUserDelete.tenND}?</p>
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

export default ModalDeleteUser;
