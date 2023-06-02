import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ModalDeleteRole } from '~/Admin/components/ModalsRole';
import styles from './RoleManagerment.module.scss';

//Service
import * as RoleServices from '~/services/RoleServices';

const cx = classNames.bind(styles);

function RoleManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataRoleDelete, setDataRoleDelete] = useState({});
    const [roles, setRoles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await RoleServices.role();
            if (result) {
                setRoles(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddRole = () => {
        navigate('/admin/@_type=role/addRole');
    };

    const handleEdit = (role) => {
        navigate(`/admin/@_type=role/editRole`, { state: { role: role } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (role) => {
        setIsShowModalDelete(true);
        setDataRoleDelete(role);
    };

    return (
        <div>
            <div className={cx('list-role')}>
                <span>Danh Sách Role</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-role')}>
                <thead>
                    <tr>
                        <th>Mã Role</th>
                        <th>Tên Role</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => (
                        <tr key={`role-${index}`}>
                            <td>{role.roleId}</td>
                            <td>{role.roleName}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(role)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(role)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddRole}>
                    Thêm Role
                </Button>
            </div>

            <ModalDeleteRole
                show={isShowModalDelete}
                handleClose={handleClose}
                dataRoleDelete={dataRoleDelete}
                setRole={setRoles}
            />
        </div>
    );
}

export default RoleManagement;
