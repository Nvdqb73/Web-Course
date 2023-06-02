import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ModalEditCourseType.module.scss';

import * as CourseTypeManagement from '~/services/courseTypeServices';

const cx = classNames.bind(styles);

function ModalEditCourseType() {
    const [typeId, setTypeId] = useState('');
    const [typeName, setTypeName] = useState('');
    const location = useLocation();
    const findId = location.state.courseType;

    const navigate = useNavigate();

    useEffect(() => {
        if (findId !== undefined) {
            setTypeId(findId.maLoai);
            setTypeName(findId.tenLoai);
        } else {
            toast.error('Vui lòng chọn loại khác!');
            navigate('/admin/@_type=courseType');
        }
    }, [findId, navigate]);

    const handleEditType = async () => {
        const result = await CourseTypeManagement.updateCourseType(typeId, typeName);
        if (result) {
            setTypeId('');
            setTypeName('');
            toast.success('Chỉnh sửa loại thành công!');
            navigate('/admin/@_type=courseType');
        } else {
            toast.error('Chỉnh sửa loại thất bại!');
        }
    };

    return (
        <>
            <div className={cx('modal-add-type')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nhập mã loại</Form.Label>
                        <Form.Control
                            value={typeId}
                            className={cx('input-type')}
                            type="number"
                            placeholder={typeId}
                            disabled
                            onChange={(e) => {
                                setTypeId(parseInt(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Nhập tên loại </Form.Label>
                        <Form.Control
                            value={typeName}
                            className={cx('input-type')}
                            type="text"
                            placeholder={typeName}
                            onChange={(e) => {
                                setTypeName(e.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div className={cx('btn-action')}>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=courseType')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditType()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default ModalEditCourseType;
