import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from '../features/StudentDetail/StudentSlice'

export default configureStore ({
    reducer: {
        Student: StudentReducer
    }
})