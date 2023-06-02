import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ModalDeleteLesson } from '~/Admin/components/ModalsLesson';
import styles from './LessonManagement.module.scss';

//Service
import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function LessonManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataLessonDelete, setDataLessonDelete] = useState({});
    const [lessons, setLessons] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await lessonServices.lesson();
            if (result) {
                setLessons(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddLesson = () => {
        navigate('/admin/@_type=lesson/addLesson');
    };

    const handleEdit = (lesson) => {
        navigate(`/admin/@_type=lesson/editLesson`, { state: { lesson: lesson } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (lecturer) => {
        setIsShowModalDelete(true);
        setDataLessonDelete(lecturer);
    };

    return (
        <div>
            <div className={cx('list-lesson')}>
                <span>Danh Sách Bài Học</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-lesson')}>
                <thead>
                    <tr>
                        <th>Mã Bài Học</th>
                        <th>Tên Bài Học</th>
                        <th>Nội Dung Bài Học</th>
                        <th>Video</th>
                        <th>Mã khóa học</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lesson, index) => (
                        <tr key={`lesson-${index}`}>
                            <td>{lesson.maBH}</td>
                            <td>{lesson.tenBH}</td>
                            <td>{lesson.noiDungBH}</td>
                            <td>{lesson.video}</td>
                            <td>{lesson.maKH}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(lesson)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(lesson)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddLesson}>
                    Thêm bài học
                </Button>
            </div>

            <ModalDeleteLesson
                show={isShowModalDelete}
                handleClose={handleClose}
                dataLessonDelete={dataLessonDelete}
                setLessons={setLessons}
            />
        </div>
    );
}

export default LessonManagement;
