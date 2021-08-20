import HomeLayout from "../components/layout/Home";

const IndexPage = () => {
    return (
        <HomeLayout>
            <div className="parallax-mirror">
                <video className="parallax-slider" autoPlay loop muted>
                    <source src="/video/video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="intro">
                    <h1 className="title title_gradient-pink">Добро пожаловать.</h1>
                    <p className="text-success">
                        Стань частью уникальной образовательной онлайн-платформы уже
                        сегодня!
                        <br /> Мы делаем так, чтобы людям было весело и легко обогащать свои
                        знания и делиться ими.
                    </p>
                    <a className="btn btn-outline-success" href="/courses">
                        Присоединиться
                    </a>
                </div>
            </div>
            {/* @todo: проверить */}
            <div className="container">
                <div className="about">
                    <div className="about__body inner-container">
                        <div className="about__header">
                            <div id="uclass-study">
                                <p className="about__subtitle">Вместе с нами обучение проще.</p>
                                <p className="about__title title" style={{ marginBottom: 0 }}>
                                    Найди свой путь.
                                </p>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="bi bi-chevron-down"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            fill="#e83e8c"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                            transform="scale(3, 2)"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="about_row">
                            <div className="about__column">
                                <div className="item-about item-about-back">
                                    <div className="item-about__icon">
                                        <img src="/img/clock.png" />
                                        <div className="icon-shadow" />
                                    </div>
                                    <div className="item-about__title">В любое время</div>
                                    <div className="item-about__text">
                                        Занимайся в любое удобное для тебя время, нужен только
                                        интернет
                                    </div>
                                </div>
                            </div>
                            <div className="about__column">
                                <div className="item-about item-about-back">
                                    <div className="item-about__icon">
                                        <img src="/img/247.png" />
                                        <div className="icon-shadow" />
                                    </div>
                                    <div className="item-about__title">На связи 24/7</div>
                                    <div className="item-about__text">
                                        Пользователи со всего мира всегда на свзязи и готовы помочь
                                    </div>
                                </div>
                            </div>
                            <div className="about__column">
                                <div className="item-about item-about-back">
                                    <div className="item-about__icon">
                                        <img src="/img/pull.png" />
                                        <div className="icon-shadow" />
                                    </div>
                                    <div className="item-about__title">
                                        Регулярное пополнение программы
                                    </div>
                                    <div className="item-about__text">
                                        Мы хороши, но нет предела совершенству. На сайт регулярно
                                        добавляются новые материалы
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default IndexPage;