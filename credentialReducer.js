const initialState = {
        credentials: [],
        loading: false,
        error: null
      };
      
      const credentialReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'FETCH_CREDENTIALS_REQUEST':
            return { ...state, loading: true };
          case 'FETCH_CREDENTIALS_SUCCESS':
            return { ...state, loading: false, credentials: action.payload };
          case 'FETCH_CREDENTIALS_FAILURE':
            return { ...state, loading: false, error: action.payload };
          case 'ADD_CREDENTIAL':
            return { ...state, credentials: [...state.credentials, action.payload] };
          case 'UPDATE_CREDENTIAL':
            return { 
              ...state, 
              credentials: state.credentials.map(credential => 
                credential.id === action.payload.credential.id ? action.payload : credential 
              ) 
            };
          case 'REMOVE_CREDENTIAL':
            return { 
              ...state, 
              credentials: state.credentials.filter(credential => credential.id !== action.payload) 
            };
          default:
            return state;
        }
      };
      
      export default credentialReducer;
      
      
      //This script defines a reducer function for managing the state of credentials in a Redux store. The reducer handles five types of actions:
      
      //- FETCH_CREDENTIALS_REQUEST: Sets the loading state to true
      //- FETCH_CREDENTIALS_SUCCESS: Sets the loading state to false and updates the credentials state with the fetched data
      //- FETCH_CREDENTIALS_FAILURE: Sets the loading state to false and updates the error state with the error message
      //- ADD_CREDENTIAL: Adds a new credential to the credentials state
      //- UPDATE_CREDENTIAL: Updates an existing credential in the credentials state
      //- REMOVE_CREDENTIAL: Removes a credential from the credentials state
      