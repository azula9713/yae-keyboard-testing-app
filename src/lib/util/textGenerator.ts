import { paragraph } from 'txtgen';

export const generateText = (sentenceCount: number = 1): string => {
	return paragraph(sentenceCount);
};
