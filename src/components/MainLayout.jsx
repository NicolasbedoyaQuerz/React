import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="general-container">
            <aside className="aside">
                aside
            </aside>
            <Outlet/>
            <footer className="footer">
                footer
            </footer>
        </div>
    );
};

export default MainLayout;