import { VITE_MAILER_LITE_KEY } from '$env/static/private';
import axios from 'axios';
import type { RequestHandler } from './$types';

// export const subscribeNewsLetter = async (email: string) => {
// 	try {
// 		const response = await axios.post(
// 			'https://connect.mailerlite.com/api/subscribers',
// 			{
// 				email
// 			},
// 			{
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Authorization: `Bearer ${VITE_MAILER_LITE_KEY}`
// 				}
// 			}
// 		);
// 		return response.data;
// 	} catch (error) {
// 		throw new Error(error as string);
// 	}
// };

export const POST: RequestHandler = async ({ request }) => {
	const { email } = await request.json();

	try {
		const response = await axios.post(
			'https://connect.mailerlite.com/api/subscribers',
			{
				email
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${VITE_MAILER_LITE_KEY}`
				}
			}
		);

		return new Response(JSON.stringify(response.data), {
			status: 201,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ message: (error as Error).message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};
