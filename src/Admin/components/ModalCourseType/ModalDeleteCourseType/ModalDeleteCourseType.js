import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteCourseType.module.scss';

//Service
import * as CourseTypeServices from '~/services/courseTypeServices';

const cx = classNames.bind(styles);

function ModalDeleteCourseType(props) {
    const { show, handleClose, dataTypeDelete, setCourseTypes } = props;

    const fetchApis = async () => {
        let courseType = await CourseTypeServices.courseType();
        setCourseTypes(courseType);
    };

    const confirmDelete = async () => {
        const result = await CourseTypeServices.deleteCourseType(dataTypeDelete.maLoai);

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
                        <h2>Xóa loại khóa học</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa loại này không?</h3>
                    <p>Loại khóa học : {dataTypeDelete.tenLoai}?</p>
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

export default ModalDeleteCourseType;
