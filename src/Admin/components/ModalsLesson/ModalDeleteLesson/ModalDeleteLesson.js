import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import styles from './ModalDeleteLesson.module.scss';

//Service
import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function ModalDeleteLesson(props) {
    const { show, handleClose, dataLessonDelete, setLessons } = props;

    const fetchApis = async () => {
        let Lecturers = await lessonServices.lesson();
        setLessons(Lecturers);
    };

    const confirmDelete = async () => {
        const result = await lessonServices.deleteLesson(dataLessonDelete.maBH);

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
                        <h2>Xóa Bài Học</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Bạn có chắc muốn xóa bài học này không?</h3>
                    <p>Bài Học: {dataLessonDelete.tenBH}?</p>
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

export default ModalDeleteLesson;
