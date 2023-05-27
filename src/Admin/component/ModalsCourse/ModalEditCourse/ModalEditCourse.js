import { memo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import * as courseServices from '~/services/courseServices';

function ModalEditCourse() {
    const [state, dispatch] = useStore();

    const location = useLocation();
    const findId = location.state.course;

    const navigate = useNavigate();

    const { maKH, tenKH, hinh, moTa, soLuongBH, soLuongHocVien, gia, maLoai, maGV, maQTV } = state;

    useEffect(() => {
        if (findId !== undefined) {
            dispatch(actions.setId(findId.maKH));
            dispatch(actions.setName(findId.tenKH));
            dispatch(actions.setImage(findId.hinh));
            dispatch(actions.setDescribe(findId.moTa));
            dispatch(actions.setQuantityLesson(findId.soLuongBH));
            dispatch(actions.setQuantityStudent(findId.soLuongHocVien));
            dispatch(actions.setPrice(findId.gia));
            dispatch(actions.setType(findId.maLoai));
            dispatch(actions.setLecturer(findId.maGV));
            dispatch(actions.setAdmin(findId.maQTV));
        } else {
            toast.error('Vui lòng chọn khóa học khác!');
            navigate('/admin/@_type=course');
        }
    }, [dispatch, findId, navigate]);

    const handleEditCourse = async () => {
        const result = await courseServices.updateCourse(
            findId.maKH,
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
            toast.success('Chỉnh sửa khóa học thành công!');
            navigate('/admin/@_type=course');
        }
    };

    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-1">
                        <Form.Label>vãi</Form.Label>
                        <Form.Control
                            value={maKH}
                            type="text"
                            placeholder={maKH}
                            disabled
                            onChange={(e) => {
                                dispatch(actions.setName(e.target.value));
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Nhập tên </Form.Label>
                        <Form.Control
                            value={tenKH}
                            type="text"
                            placeholder={tenKH}
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
                            placeholder={hinh}
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
                            placeholder={moTa}
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
                            placeholder={soLuongBH}
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
                            placeholder={soLuongHocVien}
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
                            placeholder={gia}
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
                            placeholder={maLoai}
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
                            placeholder={maGV}
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
                            placeholder={maQTV}
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
                <Button variant="primary" onClick={() => handleEditCourse()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalEditCourse);
