import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';

import { ModalDeleteAdmin } from '~/Admin/components/ModalsAdmin';
import styles from './AdminManagement.module.scss';

//Service
import * as adminServices from '~/services/adminServices';

const cx = classNames.bind(styles);

function AdminManagement() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataAdminDelete, setDataAdminDelete] = useState({});
    const [admins, setAdmins] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await adminServices.admin();
            if (result) {
                setAdmins(result);
            }
        };

        fetchApi();
    }, []);

    const handleAddAdmin = () => {
        navigate('/admin/@_type=childAdmin/addAdmin');
    };

    const handleEdit = (admin) => {
        navigate(`/admin/@_type=childAdmin/editAdmin`, { state: { admin: admin } });
    };

    const handleClose = () => {
        setIsShowModalDelete(false);
    };

    const handleDelete = (admin) => {
        setIsShowModalDelete(true);
        setDataAdminDelete(admin);
    };

    return (
        <div>
            <div className={cx('list-admin')}>
                <span>Danh Sách Quản Trị Viên</span>
            </div>
            <Table striped bordered hover variant="dark" responsive="sm" className={cx('table-admin')}>
                <thead>
                    <tr>
                        <th>Mã Quản Trị</th>
                        <th>Tên Quản Trị </th>
                        <th>Ngày Sinh</th>
                        <th>Địa chỉ</th>
                        <th>RoleID</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin, index) => (
                        <tr key={`admin-${index}`}>
                            <td>{admin.maQTV}</td>
                            <td>{admin.tenQTV}</td>
                            <td>{Moment(admin.ngaySinh).format('YYYY-MM-DD')}</td>
                            <td>{admin.diaChi}</td>
                            <td>{admin.roleId}</td>

                            <td className={cx('btn-action')}>
                                <Button variant="outline-info" size="lg" onClick={() => handleEdit(admin)}>
                                    Edit
                                </Button>
                                <Button variant="outline-danger" size="lg" onClick={() => handleDelete(admin)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-grid gap-1 col-3 mx-auto">
                <Button className={cx('btn-add')} variant="success" size="lg" onClick={handleAddAdmin}>
                    Thêm quản trị viên
                </Button>
            </div>

            <ModalDeleteAdmin
                show={isShowModalDelete}
                handleClose={handleClose}
                dataAdminDelete={dataAdminDelete}
                setAdmins={setAdmins}
            />
        </div>
    );
}

export default AdminManagement;
