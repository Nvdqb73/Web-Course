import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Course.module.scss';
import Introduce from '~/components/common/Introduce';
import CurriculumOfCourse from '~/components/feature/CurriculumOfCourse';
import CourseDetail from '~/components/feature/CourseDetail';

import * as courseServices from '~/services/courseServices';
import * as lecturerServices from '~/services/lecturerServices';
import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function Detail() {
    const { id } = useParams();
    const [result, setResult] = useState({});
    const [resultGV, setResultGV] = useState({});
    const [listLessons, setListLessons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await courseServices.courseById(id);
            const resultGV = await lecturerServices.lecturerById(result.maGV);
            const resultBH = await lessonServices.lesson();

            if (result && resultGV && resultBH) {
                setResult(result);
                setResultGV(resultGV);
                let listLesson = await resultBH.filter((lesson) => {
                    return lesson.maKH === parseInt(id);
                });
                setListLessons(listLesson);
            } else {
                navigate('*');
            }
        };

        fetchApi();
    }, [id, navigate]);

    return (
        <div className={cx('wrapper')}>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <Introduce heading_h1 title={result.tenKH} content_top content={result.moTa} />
                        <CurriculumOfCourse dataKH={result} listLessons={listLessons} />
                    </div>
                    <div class="col-4">
                        <CourseDetail dataKH={result} dataGV={resultGV} id={id} listLessons={listLessons} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
