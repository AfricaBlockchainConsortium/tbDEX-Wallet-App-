
import { TbdexHttpClient } from '@tbdex/http-client';
import { VerifiableCredential } from '@web5/credential';
import { createDid } from '@web5/dids';

// Initialize the tbDEX client
const tbdexClient = new TbdexHttpClient();

// Create a new DID
const did = await createDid();

// Obtain a Verifiable Credential token
const credential = await getCredential(did, 'name', 'country', 'did');

// Initialize the application
async function init() {
  // Add application initialization code here
}

init();
