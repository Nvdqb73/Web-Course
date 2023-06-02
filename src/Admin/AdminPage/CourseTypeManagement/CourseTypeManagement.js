import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ModalDeleteCourseType } from '~/Admin/components/ModalCourseType';
import styles from './CourseTypeManagement.module.scss';

//Service
import * as courseTypeServices from '~/services/courseTypeServices';

const cx = classNames.bind(styles);

function CourseTypeManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataTypeDelete, setDataTypeDelete] = useState({});
    const [courseTypes, setCourseTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await courseTypeServices.courseType();
            if (result) {
                setCourseTypes(result);
            }
        };

        fetchApi();
    }, []);

    const handleCourseType = () => {
        navigate('/admin/@_type=courseType/addType');
    };

    const handleEdit = (courseType) => {
        navigate(`/admin/@_type=courseType/editType`, { state: { courseType: courseType } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (courseType) => {
        setIsShowModalDelete(true);
        setDataTypeDelete(courseType);
    };

    return (
        <div>
            <div className={cx('list-type')}>
                <span>Danh Sách Loại Khóa Học</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-type')}>
                <thead>
                    <tr>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {courseTypes.map((courseType, index) => (
                        <tr key={`courseTypes-${index}`}>
                            <td>{courseType.maLoai}</td>
                            <td>{courseType.tenLoai}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(courseType)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(courseType)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleCourseType}>
                    Thêm loại khóa học
                </Button>
            </div>

            <ModalDeleteCourseType
                show={isShowModalDelete}
                handleClose={handleClose}
                dataTypeDelete={dataTypeDelete}
                setCourseTypes={setCourseTypes}
            />
        </div>
    );
}

export default CourseTypeManagement;
