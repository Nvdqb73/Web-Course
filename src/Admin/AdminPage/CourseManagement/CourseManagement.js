import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import styles from './CourseManagement.module.scss';

//Service
import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function CourseManagement() {
    const [courses, setCourses] = useState([]);

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
        navigate(`/admin/@_type=course/editCourse/`, { state: { course: course } });
    };
    const handleDelete = (id) => {
        const confirm = window.confirm('bạn có chắc muốn bỏ khóa học này khỏi danh sách!');
        if (confirm) {
            const fetchApi = async () => {
                const result = await courseServices.deleteCourse(id);
                if (result) {
                    setCourses(result);
                }
            };
            fetchApi();
        }
    };

    return (
        <div>
            <div className={cx('list-course')}>
                <span>Danh sách khóa học</span>
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddCourse}>
                    Thêm khóa học
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Hình</th>
                        <th>Mô tả</th>
                        <th>Số lượng bài học</th>
                        <th>Số lượng học viên</th>
                        <th>Giá </th>
                        <th>Mã loại</th>
                        <th>Mã giảng viên</th>
                        <th>Mã quản trị viên</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={`course-${index}`}>
                            <td>{course.maKH}</td>
                            <td>{course.tenKH}</td>
                            <td>{course.hinh}</td>
                            <td>{course.moTa}</td>
                            <td>{course.soLuongBH}</td>
                            <td>{course.soLuongHocVien}</td>
                            <td>{course.gia}</td>
                            <td>{course.maLoai}</td>
                            <td>{course.maGV}</td>
                            <td>{course.maQTV}</td>

                            <td>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(course)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(course.maKH)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CourseManagement;
