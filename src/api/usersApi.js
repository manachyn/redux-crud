import axios from 'axios';

/**
 * Get users
 */

export function getUsers() {
    return axios.get('http://localhost:3001/users')
        .then(response => response.data);
}

/**
 * Delete a user
 */

export function deleteUser(userId) {
    return axios.delete('http://localhost:3001/users/' + userId);
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(userId) {

    // Start with an empty profile object and build it up
    // from multiple XHR requests.
    let profile = {};

    // Get the user data from our local database.
    return axios.get('http://localhost:3001/users/' + userId)
        .then(response => {

            let user = response.data;
            profile.name = user.name;
            profile.twitter = user.twitter;
            profile.worksOn = user.worksOn;

            return profile;

        });

}

