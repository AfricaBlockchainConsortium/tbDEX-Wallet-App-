export const CONSTANTS = {
        // API endpoints
        API_ENDPOINTS: {
          GET_DID: '/did',
          CREATE_DID: '/did/create',
          GET_CREDENTIAL: '/credential',
          CREATE_CREDENTIAL: '/credential/create',
          GET_ASSET: '/asset',
          CREATE_ASSET: '/asset/create',
        },
      
        // Action types
        ACTION_TYPES: {
          CREATE_DID: 'CREATE_DID',
          GET_DID: 'GET_DID',
          CREATE_CREDENTIAL: 'CREATE_CREDENTIAL',
          GET_CREDENTIAL: 'GET_CREDENTIAL',
          CREATE_ASSET: 'CREATE_ASSET',
          GET_ASSET: 'GET_ASSET',
        },
      
        // Error messages
        ERROR_MESSAGES: {
          INVALID_DID: 'Invalid DID',
          INVALID_CREDENTIAL: 'Invalid credential',
          INVALID_ASSET: 'Invalid asset',
        },
      
        // Success messages
        SUCCESS_MESSAGES: {
          DID_CREATED: 'DID created successfully',
          CREDENTIAL_CREATED: 'Credential created successfully',
          ASSET_CREATED: 'Asset created successfully',
        },
      
        // Other constants
        MAX_ASSET_NAME_LENGTH: 255,
        MAX_CREDENTIAL_NAME_LENGTH: 255,
        MAX_DID_NAME_LENGTH: 255,
      };
      
      
      //This script defines various constants that can be used throughout the application. These constants include:
      
      //- API endpoints for creating and retrieving DIDs, credentials, and assets
      //- Action types for creating and retrieving DIDs, credentials, and assets
      //- Error messages for invalid DIDs, credentials, and assets
      //- Success messages for creating DIDs, credentials, and assets
      //- Other constants such as maximum lengths for asset, credential, and DID names
      