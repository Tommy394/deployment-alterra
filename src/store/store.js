import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import editSlice from "./editSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
	products: productSlice,
	isEdit: editSlice,
});

// const persistConfig = {
// 	key: "root",
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: reducers,
});

// const persistor = persistStore(store);

// export { store, persistor };
