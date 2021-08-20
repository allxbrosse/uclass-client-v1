import MainLayout from "../../components/layout/Main";
import { API_URL } from "../../config";
import { useEffect, useState } from "react";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    console.log(API_URL);

    useEffect(() => {
        fetch(`${API_URL}/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data.items);
            });
    }, []);
    console.log(courses);

    return (
        <MainLayout>
            <div className="dark">
                <div className="container">
                    <div>Приветствие</div>
                    <div>Слайдер</div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <h2 className="title">Недавние</h2>
                        <div className="row">
                            <div className="col-4">
                                <div className="block block_shadow">
                                    <p className="block__text">Класс</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="block block_shadow">
                                    <p className="block__text">Класс</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="block block_shadow block_grey">
                                    <p className="block__text">Статья</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default CoursesPage;