import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './RoleManagerment.module.scss';

//Service
import * as RoleServices from '~/services/RoleServices';

const cx = classNames.bind(styles);

function RoleManagement() {
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

    const handleEdit = (id) => {};

    const handleDelete = (id) => {};

    return (
        <div>
            <div className={cx('list-course')}>
                <span>Danh sách Role</span>
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddRole}>
                    Thêm Role
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>roleId</th>
                        <th>roleName</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => (
                        <tr key={`role-${index}`}>
                            <td>{role.roleId}</td>
                            <td>{role.roleName}</td>

                            <td>
                                <Button variant="outline-info" size="lg" onClick={handleEdit(role.roleId)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={handleDelete(role.roleId)}>
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

export default RoleManagement;
