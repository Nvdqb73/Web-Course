import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Navbar className={cx('navbar')}>
            <Container fluid>
                <Navbar.Brand href="#" className={cx('heading')}>
                    Promotion page
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={cx('navbar-collapse')}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm......"
                            className={cx('me-3')}
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
