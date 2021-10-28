export const getAPI = async function (url) {
	try {
		let response = await axios.get(url);
		let animals = response.data;

		return animals;
	} catch (error) {
		console.log(error);
	}
};
