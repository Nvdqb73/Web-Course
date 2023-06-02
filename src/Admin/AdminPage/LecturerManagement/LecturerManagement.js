import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';

import { ModalDeleteLecturer } from '~/Admin/components/ModalsLecturer';
import styles from './LecturerManagement.module.scss';

//Service
import * as lecturerServices from '~/services/lecturerServices';

const cx = classNames.bind(styles);

function LecturerManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataLecturerDelete, setDataLecturerDelete] = useState({});
    const [lecturers, setLecturers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await lecturerServices.lecturer();
            if (result) {
                setLecturers(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddLecturer = () => {
        navigate('/admin/@_type=lecturer/addLecturer');
    };

    const handleEdit = (lecturer) => {
        navigate(`/admin/@_type=lecturer/editLecturer`, { state: { lecturer: lecturer } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (lecturer) => {
        setIsShowModalDelete(true);
        setDataLecturerDelete(lecturer);
    };

    return (
        <div>
            <div className={cx('list-lecturer')}>
                <span>Danh Sách Giảng Viên</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-lecturer')}>
                <thead>
                    <tr>
                        <th>Mã Giảng Viên</th>
                        <th>Tên Giảng Viên</th>
                        <th>Ngày Sinh</th>
                        <th>Chuyên Môn</th>
                        <th>Năm Hoạt Động</th>
                        <th>Địa chỉ</th>
                        <th>RoleID</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lecturers.map((lecturer, index) => (
                        <tr key={`lecturer-${index}`}>
                            <td>{lecturer.maGV}</td>
                            <td>{lecturer.tenGV}</td>
                            <td>{Moment(lecturer.ngaySinh).format('YYYY-MM-DD')}</td>
                            <td>{lecturer.chuyenMon}</td>
                            <td>{lecturer.namHD}</td>
                            <td>{lecturer.diaChi}</td>
                            <td>{lecturer.roleId}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(lecturer)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(lecturer)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddLecturer}>
                    Thêm giảng viên
                </Button>
            </div>

            <ModalDeleteLecturer
                show={isShowModalDelete}
                handleClose={handleClose}
                dataLecturerDelete={dataLecturerDelete}
                setLecturers={setLecturers}
            />
        </div>
    );
}

export default LecturerManagement;
