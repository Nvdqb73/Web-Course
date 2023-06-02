import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './ModalAddCourseType.module.scss';

import * as CourseTypeManagement from '~/services/courseTypeServices';

const cx = classNames.bind(styles);

function ModelAddCourseType() {
    const [typeName, setTypeName] = useState('');

    const navigate = useNavigate();

    const handleSaveType = async () => {
        let result = await CourseTypeManagement.createCourseType(typeName);

        if (result) {
            setTypeName('');
            toast.success('Thêm loại thàng công!');
            navigate('/admin/@_type=courseType');
        }
    };

    return (
        <>
            <div className={cx('modal-add-type')}>
                <Form>
                    <Form.Group className={cx('mb-1')}>
                        <Form.Label>Tên Loại khóa học</Form.Label>
                        <Form.Control
                            value={typeName}
                            type="text"
                            className={cx('input-type')}
                            placeholder="Nhâp tên..."
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
                <Button variant="primary" onClick={() => handleSaveType()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModelAddCourseType);
