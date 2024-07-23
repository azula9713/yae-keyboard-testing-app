/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					// add yae miko colors
					50: '#f9cdd4',
					100: '#f3aeb7',
					200: '#eb8e98',
					300: '#e36e79',
					400: '#db4f5a',
					500: '#d32f3b',
					600: '#b52832',
					700: '#931f29',
					800: '#711720',
					900: '#501017'
				}
			}
		}
	},
	plugins: [flowbitePlugin]
};
