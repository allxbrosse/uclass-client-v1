import Header from "../section/Header"

const HomeLayout = ({ children }) => {
    return (
        <div className="dark min-h-100vh">
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout;