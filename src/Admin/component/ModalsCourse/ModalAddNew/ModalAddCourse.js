import { memo } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import * as courseServices from '~/services/courseServices';

function ModalAddCourse() {
    const [state, dispatch] = useStore();

    const navigate = useNavigate();

    const { tenKH, hinh, moTa, soLuongBH, soLuongHocVien, gia, maLoai, maGV, maQTV } = state;

    const handleSaveCourse = async () => {
        const result = await courseServices.createCourse(
            tenKH,
            hinh,
            moTa,
            soLuongBH,
            soLuongHocVien,
            gia,
            maLoai,
            maGV,
            maQTV,
        );
        if (result) {
            dispatch(actions.reset(''));
            toast.success('Thêm thành công!');
            navigate('/admin/@_type=course');
        } else {
            toast.error('Đã xảy ra lỗi...!');
        }
    };

    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-1">
                        <Form.Label>Tên Khóa Học</Form.Label>
                        <Form.Control
                            value={tenKH}
                            type="text"
                            placeholder="Nhâp tên..."
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Hình</Form.Label>
                        <Form.Control
                            value={hinh}
                            type="text"
                            placeholder="Nhập Hình ảnh..."
                            onChange={(e) => {
                                dispatch(actions.setImage(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Mô Tả</Form.Label>
                        <Form.Control
                            value={moTa}
                            type="text"
                            placeholder="Mô tả"
                            onChange={(e) => {
                                dispatch(actions.setDescribe(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Số Lượng Bài Học</Form.Label>
                        <Form.Control
                            value={soLuongBH}
                            type="text"
                            placeholder="Nhập số lượng bài học"
                            onChange={(e) => {
                                dispatch(actions.setQuantityLesson(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Số Lượng Học Viên</Form.Label>
                        <Form.Control
                            value={soLuongHocVien}
                            type="text"
                            placeholder="Nhập Số lượng học viên"
                            onChange={(e) => {
                                dispatch(actions.setQuantityStudent(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            value={gia}
                            type="text"
                            placeholder="Nhập giá"
                            onChange={(e) => {
                                dispatch(actions.setPrice(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Mã Loại</Form.Label>
                        <Form.Control
                            value={maLoai}
                            type="text"
                            placeholder="Nhập mã loại"
                            onChange={(e) => {
                                dispatch(actions.setType(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Mã Giang Viên</Form.Label>
                        <Form.Control
                            value={maGV}
                            type="text"
                            placeholder="Nhập mã loại"
                            onChange={(e) => {
                                dispatch(actions.setLecturer(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Mã Quản Trị Viên</Form.Label>
                        <Form.Control
                            value={maQTV}
                            type="text"
                            placeholder="Nhập mã quản trị"
                            onChange={(e) => {
                                dispatch(actions.setAdmin(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=course')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveCourse()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalAddCourse);
