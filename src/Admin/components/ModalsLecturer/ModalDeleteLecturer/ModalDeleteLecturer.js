import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteLecturer.module.scss';

//Service
import * as lecturerServices from '~/services/lecturerServices';

const cx = classNames.bind(styles);

function ModalDeleteLecturer(props) {
    const { show, handleClose, dataLecturerDelete, setLecturers } = props;

    const fetchApis = async () => {
        let Lecturers = await lecturerServices.lecturer();
        setLecturers(Lecturers);
    };

    const confirmDelete = async () => {
        const result = await lecturerServices.deleteLecturer(dataLecturerDelete.maGV);

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
                        <h2>Xóa Giảng Viên</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa giảng viên này không?</h3>
                    <p>Giảng Viên: {dataLecturerDelete.tenGV}?</p>
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

export default ModalDeleteLecturer;
