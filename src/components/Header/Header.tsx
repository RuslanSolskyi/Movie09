// import css from "./Header.module.css";
// import {Link} from "react-router-dom";
// import {useAppSelector} from "../../hooks/useAppSelector";
// import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
// import {useDispatch, useSelector} from "react-redux";
// import {themeActions} from "../../redux/slices/themeSlice";
// import {RootState} from "../../redux/store";
// import { Switch } from 'antd';
//
//
//
//
// const Header = () => {
//
//     const { themeCheck } = useSelector((state: RootState) => state.theme);
//     const dispatch = useDispatch();
//     return (
//         <div className={css.Header}>
//             <div >
//                 <b>The MovieDB</b>
//             </div>
//             <div className={css.links}>
//                 <Link to={'movies'}>Movies</Link>
//                 <Link to={'genres'}>Genres</Link>
//                 <Link to={'search'}>Search</Link>
//             </div>
//             <div className={css.right}>
//                 <div>
//                     {/*<Switch defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>*/}
//                     <input
//                         type="checkbox"
//                         checked={themeCheck}
//                         onChange={() => dispatch(themeActions.changeThemeCheck())}
//                     />
//                 </div>
//                 <div>
//                     Light Theme
//                 </div>
//
//                 <div className={css.userright}>
//                     <div>user: </div>
//                     <div>buff</div>
//                 </div>
//             </div>
//
//
//         </div>
//     );
// };
//
// export {Header};
import React from 'react';
import { Link } from 'react-router-dom';

import { themeActions } from '../../redux/slices/themeSlice';
import css from './Header.module.css';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const Header = () => {
    const themeCheck = useAppSelector((state) => state.theme.themeCheck);
    const dispatch = useAppDispatch();

    const handleThemeChange = () => {
        dispatch(themeActions.changeThemeCheck());
    };

    return (
        <div className={css.Header}>
            <div>
                <b>The MovieDB</b>
            </div>
            <div className={css.links}>
                <Link to={'movies'}>Movies</Link>
                <Link to={'genres'}>Genres</Link>
                <Link to={'search'}>Search</Link>
            </div>
            <div className={css.right}>
                <div>
                    <input
                        type="checkbox"
                        checked={themeCheck}
                        onChange={handleThemeChange}
                    />
                </div>
                <div>Light Theme</div>

                <div className={css.userright}>
                    <div>user: </div>
                    <div>buff</div>
                </div>
            </div>
        </div>
    );
};

export { Header };
