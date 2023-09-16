import {countActions} from "../redux/slices/countSlice";
import {useAppDispatch} from "../hooks/useAppDispatch";
import MoviesList from "../components/MoviesContainer/MoviesList";

const SearchPage = () => {
    const dispatch = useAppDispatch();

    return (

        <div>
            <MoviesList/>
        </div>
    );
};

export {SearchPage};
