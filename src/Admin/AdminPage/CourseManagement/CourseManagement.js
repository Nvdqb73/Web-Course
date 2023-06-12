import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Image from '~/components/common/Image';
import { ModalDeleteCourse } from '~/Admin/components/ModalsCourse';
import styles from './CourseManagement.module.scss';

//Service
import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function CourseManagement() {
    const [courses, setCourses] = useState([]);

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataCourseDelete, setDataCourseDelete] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await courseServices.course();
            if (result) {
                setCourses(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddCourse = () => {
        navigate('/admin/@_type=course/addCourse');
    };

    const handleEdit = (course) => {
        navigate(`/admin/@_type=course/editCourse`, { state: { course: course } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (course) => {
        setIsShowModalDelete(true);
        setDataCourseDelete(course);
    };

    return (
        <div>
            <div className={cx('list-course')}>
                <span>Danh sách khóa học</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-course')}>
                <thead>
                    <tr>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Số lượng bài học</th>
                        <th>Số lượng học viên</th>
                        <th>Giá khóa học</th>
                        <th>Mã loại</th>
                        <th>Mã giảng viên</th>
                        <th>Mã quản trị viên</th>
                        <th>Chức năng </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={`course-${index}`}>
                            <td>{course.maKH}</td>
                            <td>{course.tenKH}</td>
                            <td>
                                <Image src={course.hinh} alt="ảnh khóa học" width="100px" height="100px" />
                            </td>
                            <td>{course.moTa}</td>
                            <td>{course.soLuongBH}</td>
                            <td>{course.soLuongHocVien}</td>
                            <td>{`$` + course.gia.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`)}</td>
                            <td>{course.maLoai}</td>
                            <td>{course.maGV}</td>
                            <td>{course.maQTV}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(course)}>
                                    Delete
                                </Button>

                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(course)}>
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddCourse}>
                    Thêm khóa học
                </Button>
            </div>
            <ModalDeleteCourse
                show={isShowModalDelete}
                handleClose={handleClose}
                dataCourseDelete={dataCourseDelete}
                setCourses={setCourses}
            />
        </div>
    );
}

export default CourseManagement;
