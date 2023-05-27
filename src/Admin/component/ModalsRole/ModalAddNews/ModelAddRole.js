import { memo } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import * as RoleServices from '~/services/RoleServices';

function ModalAddRole() {
    const [state, dispatch] = useStore();

    const { roleName } = state;

    const navigate = useNavigate();

    const handleSaveCourse = async () => {
        let result = await RoleServices.createRole(roleName);

        if (result) {
            dispatch(actions.setRole(''));
            navigate('/admin/@_type=role');
        }
    };

    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-1">
                        <Form.Label>Tên Role</Form.Label>
                        <Form.Control
                            value={roleName}
                            type="text"
                            placeholder="Nhâp tên..."
                            onChange={(e) => {
                                dispatch(actions.setRole(e.target.value));
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>

            <div>
                <Button variant="secondary" onClick={() => navigate('/admin/@_type=role')}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleSaveCourse()}>
                    Lưu
                </Button>
            </div>
        </>
    );
}

export default memo(ModalAddRole);
