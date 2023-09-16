import css from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";
import {RootState} from "../../redux/store";
import { Switch } from 'antd';




const Header = () => {
    const {count} = useAppSelector(state => state.count);
    const {user} = useAppSelector(state => state.users);
    const { themeCheck } = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();
    return (
        <div className={css.Header}>
            <div >
                <b>The MovieDB</b>
            </div>
            <div className={css.links}>
                <Link to={'users'}>Movies</Link>
                <Link to={'posts'}>Genres</Link>
                <Link to={'count'}>Search</Link>
            </div>
            <div className={css.right}>
                <div>
                    {/*<Switch defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>*/}
                    <input
                        type="checkbox"
                        checked={themeCheck}
                        onChange={() => dispatch(themeActions.changeThemeCheck())}
                    />
                </div>
                <div>
                    Light Theme
                </div>

                <div className={css.userright}>
                    <div>user: {user}</div>
                    <div>buff</div>
                </div>
            </div>


        </div>
    );
};

export {Header};