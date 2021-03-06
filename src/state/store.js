import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as form } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import companiesReducer from "./companies";
import productsReducer from "./products";
import representativesReducer from "./representatives";
import registerReducer from "./register";
import sessionReducer from "./session";
import categoriesReducer from "./categories";
import ratingReducer from "./ratings";
import forumReducer from "./forum";
import threadReducer from "./thread";

const history = createHistory();
const Router = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  companies: companiesReducer,
  representatives: representativesReducer,
  session: sessionReducer,
  register: registerReducer,
  products: productsReducer,
  categories: categoriesReducer,
  ratings: ratingReducer,
  forum: forumReducer,
  thread: threadReducer,
  form,
  router
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(Router))
  );
}
