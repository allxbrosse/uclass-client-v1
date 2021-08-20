const Header = () => {
    return (
        <div className="dark d-flex main-header pt-2">
            <div className="main-header__logo">
                <img src="/img/logo.png" />
            </div>
            <div className="container">
                Выбор за тобой
            </div>
            <div className="main-header__profile">
                <a className="btn btn-outline-success" href="/profile">
                    Войти
                </a>
            </div>
        </div>
    )
}

export default Header