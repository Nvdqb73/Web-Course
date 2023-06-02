import classNames from 'classnames/bind';
import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditLecturer.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import * as lecturerServices from '~/services/lecturerServices';

const cx = classNames.bind(styles);

function ModalEditLecturer() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.lecturer;

    const navigate = useNavigate();

    const { id, name, date, professional, year, address, roleId } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maGV));
            dispatch(actions.setName(findId.tenGV));
            dispatch(actions.setDate(findId.ngaySinh));
            dispatch(actions.setProfessional(findId.chuyenMon));
            dispatch(actions.setYear(findId.namHD));
            dispatch(actions.setAddress(findId.diaChi));
            dispatch(actions.setRoleid(findId.roleId));
        } else {
            toast.error('Vui lòng chọn giảng viên khác!');
            navigate('/admin/@_type=lecturer');
        }
    }, [dispatch, findId, navigate]);

    const handleEditUser = async () => {
        const result = await lecturerServices.updateLecturer(id, name, date, professional, year, address, roleId);
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Chỉnh sửa giảng viên thành công!');
            navigate('/admin/@_type=lecturer');
        } else {
            toast.error('Chỉnh sửa giảng viên thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-lecturer')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Mã giảng viên</Form.Label>
                        <Form.Control
                            value={id}
                            type="number"
                            className={cx('input-lecturer')}
                            placeholder={id}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setId(parseInt(e.target.value)));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên giảng viên </Form.Label>
                        <Form.Control
                            value={name}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder={name}
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control
                            value={date}
                            className={cx('input-lecturer')}
                            type="Date"
                            placeholder={date}
                            onChange={(e) => {
                                dispatch(actions.setDate(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Chuyên môn</Form.Label>
                        <Form.Control
                            value={professional}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder={professional}
                            onChange={(e) => {
                                dispatch(actions.setProfessional(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Năm hoạt động</Form.Label>
                        <Form.Control
                            value={year}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder={year}
                            onChange={(e) => {
                                dispatch(actions.setYear(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            value={address}
                            className={cx('input-lecturer')}
                            type="text"
                            placeholder={address}
                            onChange={(e) => {
                                dispatch(actions.setAddress(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>RoleID</Form.Label>
                        <Form.Control
                            value={roleId}
                            className={cx('input-lecturer')}
                            type="number"
                            placeholder={roleId}
                            onChange={(e) => {
                                dispatch(actions.setRoleid(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=lecturer')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditLecturer);
