import {configureStore} from "@reduxjs/toolkit";
import {countReducer} from "./slices/countSlice";
import {userReducer} from "./slices/userSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        count: countReducer,
        users: userReducer,
        theme: themeReducer
    }
})
// Створює об'єкт store, який є центральним елементом Redux. В цьому об'єкті зберігається весь стан додатку
// та логіка зміни цього стану. configureStore - це функція з бібліотеки Redux Toolkit, яка створює цей store.
// У нашому випадку, ми передаємо об'єкт з редукторами (функціями, які визначають, як стан додатку має
// змінюватися) властивість reducer. Один редуктор відповідає за стан лічильника (countReducer), інший за
// стан користувачів (userReducer).р

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}
