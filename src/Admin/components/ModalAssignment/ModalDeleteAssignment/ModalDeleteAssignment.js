import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteAssignment.module.scss';

//Service
import * as assignmentServices from '~/services/assignmentServices';

const cx = classNames.bind(styles);

function ModalDeleteAssignment(props) {
    const { show, handleClose, dataAssignmentDelete, setAssignments } = props;

    const fetchApis = async () => {
        let Assignments = await assignmentServices.assignment();
        setAssignments(Assignments);
    };

    const confirmDelete = async () => {
        const result = await assignmentServices.deleteAssignment(dataAssignmentDelete.maBT);

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
                        <h2>Xóa Bài Tập</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa bài tập này không?</h3>
                    <p>Nộ dung bài tập: {dataAssignmentDelete.noiDungBT}?</p>
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

export default ModalDeleteAssignment;
