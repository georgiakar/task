import axios from 'axios';

const axiosOptions = (baseURL, method, url, options, headers, contentType) => ({
  method,
  url,
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': contentType || 'application/json',
    ...headers,
  },
  timeout: 60000,
  ...options,
});

/**
 * Reusable function used for calling backend service
 * @param baseURL     baseURL
 * @param method      'GET' / 'POST' / 'PUT' / 'PATCH' / 'DELETE'
 * @param url         '/...' target route (appended to baseURL) 
 * @param options     { data: {key: value}, params: {key: value} }  
 *                    data: used for POST request (payload)
 *                    params: used for GET request (query params)    
 * @param headers     { key: value }, used to apply extra headers to request
 * @param contentType used to determine the type of request's body (default to 'application/json')
 */
export const serverApi = (baseURL, method, url, options = {}, headers = {}, contentType = '') =>
  axios(axiosOptions(baseURL, method, url, options, headers, contentType));

/**
 * Function used for initial axios configuration
 * Set mandatory headers
 * Set configuration for checking mandatory headers existence, upon every request etc..
 */
export const applyAxiosConfiguration = () => { 

  axios.interceptors.request.use(
    config => {   
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};