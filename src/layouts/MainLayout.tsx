import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import css from "./MainLayout.module.css";
import {RootState} from "../redux/store";

const MainLayout = () => {
    const { themeCheck } = useSelector((state: RootState) => state.theme);
    return (

        <div className={themeCheck?css.white:css.black}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};