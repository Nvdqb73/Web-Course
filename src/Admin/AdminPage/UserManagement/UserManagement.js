import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ModalDeleteUser } from '~/Admin/components/ModalsUser';
import styles from './UserManagement.module.scss';
import Image from '~/components/common/Image';

//Service
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

function UserManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userServices.user();
            if (result) {
                setUsers(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddUser = () => {
        navigate('/admin/@_type=user/addUser');
    };

    const handleEdit = (user) => {
        navigate(`/admin/@_type=user/editUser`, { state: { user: user } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (user) => {
        setIsShowModalDelete(true);
        setDataUserDelete(user);
    };

    return (
        <div>
            <div className={cx('list-user')}>
                <span>Danh Sách Người Dùng</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-user')}>
                <thead>
                    <tr>
                        <th>Mã Người Dùng</th>
                        <th>Tên Đăng Nhập</th>
                        <th>Mật Khẩu</th>
                        <th>Tên Người Dùng</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>RoleID</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={`user-${index}`}>
                            <td>{user.maND}</td>
                            <td>{user.tenDangNhap}</td>
                            <td>{user.password}</td>
                            <td>{user.tenND}</td>
                            <td>{user.email}</td>
                            <th>
                                <Image src={user.avatar} alt={user.tenND} width="120" height="100" />
                            </th>
                            <td>{user.roleId}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(user)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(user)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddUser}>
                    Thêm người dùng
                </Button>
            </div>

            <ModalDeleteUser
                show={isShowModalDelete}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
                setUsers={setUsers}
            />
        </div>
    );
}

export default UserManagement;
