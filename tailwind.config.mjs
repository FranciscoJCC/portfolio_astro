/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"pii-black": "#1F1F1F",
			"pii-green": "#49B1A6",
			"pii-green-bg": "#49b1a74d",
			"pii-gray": "#E2E8F0"
		}
	},
	plugins: [],
}
