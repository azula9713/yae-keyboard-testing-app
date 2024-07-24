import axios, { AxiosError } from 'axios';

const API_ENDPOINT = 'http://metaphorpsum.com/sentences/3';

export const fetchParagraph = async () => {
	try {
		const res = await axios.get(API_ENDPOINT);
		return {
			props: {
				data: res.data
			}
		};
	} catch (error: unknown) {
		return {
			props: {
				error: error instanceof AxiosError ? error.response?.data : error
			}
		};
	}
};
