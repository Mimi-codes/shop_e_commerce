import Commerce from '@chec/commerce.js';

//we are creating a new instance of commerce which will serve as store
//save the api key in the env file and enter the product key there
//to gain access to the product key in the env file, write process.env.the product name as written in the env file plus a boolean value 'true' which is going to create a new store
//then restart the dev't server 

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true); 