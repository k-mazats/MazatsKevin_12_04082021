const axios = require('axios').default;

/**
 * return data from the API
 * @param   {number} userId  User ID
 * @param   {string} action  API endpoint
 * @return  {object}         Fetched data
 */
const getData = async (userId, action) => {
  const baseUrl = 'http://localhost'
  const port = "1337"
try {
	let response = await axios({
		method: 'get',
		url: `${baseUrl}:${port}/user/${userId}/${action ? action : ''}`,
		json: true,
	});
	return response;
} catch (err) {
	console.error(err);
}
}

export default getData;