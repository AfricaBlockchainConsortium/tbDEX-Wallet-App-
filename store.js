
import { createStore, combineReducers } from 'redux';
import didReducer from './reducers/didReducer';
import credentialReducer from './reducers/credentialReducer';
import assetReducer from './reducers/assetReducer';

const rootReducer = combineReducers({
  did: didReducer,
  credential: credentialReducer,
  asset: assetReducer,
});

const store = createStore(rootReducer);

export default store;


 //This script creates a Redux store using the createStore function from the redux library. It also imports the didReducer,
 //credentialReducer, and assetReducer functions from their respective files.

//The combineReducers function is used to combine the three reducers into a single reducer function, 
//rootReducer. This is because Redux only allows a single reducer function to be passed to the createStore function.

//Finally, the store is exported as the default export of the module.


