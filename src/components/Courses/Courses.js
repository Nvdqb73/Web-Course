import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { IconArrowBadgeRight } from '@tabler/icons-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Courses.module.scss';
import CourseItem from './CourseItem';
import Button from '../Button/Button';

import * as courseServices from '~/services/courseServices';

const cx = classNames.bind(styles);

function Courses({ title }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await courseServices.course();
            setCourses(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading-wrap')}>
                <h2 className={cx('title')}>{title}</h2>
                <Button href="/learning">
                    <span>Xem lộ trình</span>
                    <IconArrowBadgeRight size={20} color="#333" />
                </Button>
            </div>
            <Container>
                <Row md={4}>
                    {courses.map((course) => (
                        <Col xs={6} key={course.id}>
                            <CourseItem data={course} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Courses.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Courses;
