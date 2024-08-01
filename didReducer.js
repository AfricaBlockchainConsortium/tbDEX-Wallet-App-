
const initialState = {
        dids: [],
        loading: false,
        error: null
      };
      
      const didReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'FETCH_DIDS_REQUEST':
            return { ...state, loading: true };
          case 'FETCH_DIDS_SUCCESS':
            return { ...state, loading: false, dids: action.payload };
          case 'FETCH_DIDS_FAILURE':
            return { ...state, loading: false, error: action.payload };
          case 'ADD_DID':
            return { ...state, dids: [...state.dids, action.payload] };
          case 'UPDATE_DID':
            return {
              ...state,
              dids: state.dids.map(did =>
                did.did === action.payload.did ? action.payload : did
              )
            };
          case 'REMOVE_DID':
            return {
              ...state,
              dids: state.dids.filter(did => did.did !== action.payload)
            };
          default:
            return state;
        }
      };
      
      export default didReducer;
      
      
      //This script defines a reducer function for managing the state of Decentralized Identifiers (DIDs) in a Redux store. The reducer handles five types of actions:
      
      //- FETCH_DIDS_REQUEST: Sets the loading state to true
      //- FETCH_DIDS_SUCCESS: Sets the loading state to false and updates the dids state with the fetched data
      //- FETCH_DIDS_FAILURE: Sets the loading state to false and updates the error state with the error message
      //- ADD_DID: Adds a new DID to the dids state
      //- UPDATE_DID: Updates an existing DID in the dids state
      //- REMOVE_DID: Removes a DID from the dids state
      
      //The reducer returns a new state object based on the action type and payload.