// function status(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response)
//     } else {
//         return Promise.reject(new Error(response.statusText))
//     }
// }
//
// function json(response) {
//     return response.json()
// }
//
// function checkStatus(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return response
//     } else {
//         var error = new Error(response.statusText)
//         error.response = response
//         throw error
//     }
// }
//
// function parseJSON(response) {
//     return response.json()
// }
//
// fetch('users.json')
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(function(json) {
//
//     }).catch(function(error) {
//         console.log('Request failed', error);
//     });

import 'isomorphic-fetch';

const API_ROOT_URL = 'https://api.github.com/';

export function callApi(endpoint) {
    const fullUrl = (endpoint.indexOf(API_ROOT_URL) === -1) ? API_ROOT_URL + endpoint : endpoint;

    return fetch(fullUrl)
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        });
}