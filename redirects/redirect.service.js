const axios = require('axios');

async function call(mainRoute, route, method) {
    try {
        const response = await axios({
        	method: method,
        	url: mainRoute + route
        });
        return response.data    
    } catch (error) {;
        console.error(error);
    }   
}

module.exports = call;