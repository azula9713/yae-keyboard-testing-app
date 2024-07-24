import { fetchParagraph } from '$lib/api/paragraphAPI';

export const load = async () => {
	return fetchParagraph();
};
