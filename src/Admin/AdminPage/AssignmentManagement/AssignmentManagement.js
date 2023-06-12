import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ModalDeleteAssignment } from '~/Admin/components/ModalAssignment';
import styles from './AssignmentManagement.module.scss';

//Service
import * as assignmentServices from '~/services/assignmentServices';

const cx = classNames.bind(styles);

function AssignmentManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataAssignmentDelete, setDataAssignmentDelete] = useState({});
    const [assignments, setAssignments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await assignmentServices.assignment();
            if (result) {
                setAssignments(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddAssignments = () => {
        navigate('/admin/@_type=assignments/addAssignments');
    };

    const handleEdit = (assignment) => {
        navigate(`/admin/@_type=assignments/editAssignments`, { state: { assignment: assignment } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (assignment) => {
        setIsShowModalDelete(true);
        setDataAssignmentDelete(assignment);
    };

    return (
        <div>
            <div className={cx('list-assignments')}>
                <span>Danh Sách Bài Tập</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-assignments')}>
                <thead>
                    <tr>
                        <th>Mã Bài Tập</th>
                        <th>Nội Dung Bài Tập</th>
                        <th>Đáp Án</th>
                        <th>Điểm</th>
                        <th>Mã Bài Học</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment, index) => (
                        <tr key={`assignments-${index}`}>
                            <td>{assignment.maBT}</td>
                            <td>{assignment.noiDungBT}</td>
                            <td>{assignment.dapAn}</td>
                            <td>{assignment.diem}</td>
                            <td>{assignment.maBH}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(assignment)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(assignment)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddAssignments}>
                    Thêm bài tập
                </Button>
            </div>

            <ModalDeleteAssignment
                show={isShowModalDelete}
                handleClose={handleClose}
                dataAssignmentDelete={dataAssignmentDelete}
                setAssignments={setAssignments}
            />
        </div>
    );
}

export default AssignmentManagement;
