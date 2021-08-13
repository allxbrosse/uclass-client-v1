import Header from "../section/Header"

const MainLayout = ({ children }) => {
    return (
        <div className="dark min-h-100vh">
            <Header />
            {children}
        </div>
    )
}

export default MainLayout;