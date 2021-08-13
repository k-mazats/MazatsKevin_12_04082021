const axios = require('axios').default;


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