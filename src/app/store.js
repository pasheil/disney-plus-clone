import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';

// OLD WAY ON VIDEO
// export default configureStore({
//     reducer: {},
//     middleware: getDefaultMiddleware({
//         serializableCheck: false,
//     }),
// });


//NEW WAY FROM DOCS
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});