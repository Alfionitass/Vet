import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const allStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default allStore;