
import config from '../config.js';

export function request(path, params) {
    const env = config.env;
    const baseUrl = config[env].apiUrl;
    const url = path.indexOf("http") !== -1 ? path : baseUrl + '/' + path.replace(/^\//, '');
    return fetch(url, {
        method: (params.method || "get").toUpperCase()
    });
}