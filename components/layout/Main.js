import Header from "../section/Header"

const MainLayout = ({ children }) => {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    )
}

export default MainLayout;