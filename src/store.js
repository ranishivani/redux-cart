import { configureStore } from "@reduxjs/toolkit";
import rootRed from "./redux/reducers/main";

const store = configureStore({ reducer: rootRed });

export default store;
