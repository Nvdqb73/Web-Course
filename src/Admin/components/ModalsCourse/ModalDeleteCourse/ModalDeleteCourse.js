import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteCourse.module.scss';

//Service
import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function ModalDeleteCourse(props) {
    const { show, handleClose, dataCourseDelete, setCourses } = props;

    const fetchApis = async () => {
        let courses = await courseServices.course();
        setCourses(courses);
    };

    const confirmDelete = async () => {
        const result = await courseServices.deleteCourse(dataCourseDelete.maKH);

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
                        <h2>Xóa khóa học</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa khóa học này không?</h3>
                    <p>Khóa học: {dataCourseDelete.tenKH}?</p>
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

export default ModalDeleteCourse;
