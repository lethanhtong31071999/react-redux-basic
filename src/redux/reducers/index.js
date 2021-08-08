import { combineReducers } from "redux";
import hobbyReducer from "./hobby.js";
import userReducer from "./user.js";

console.log(typeof hobbyReducer);
// Hàm combineReducers tự động chạy function để lấy đc kết quả trả về

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;
