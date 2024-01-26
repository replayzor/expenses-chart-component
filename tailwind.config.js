/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					softRed: "hsl(10, 79%, 65%)",
					cyan: "hsl(186, 34%, 60%)",
				},
				neutral: {
					darkBrown: "hsl(25, 47%, 15%)",
					mediumBrown: "hsl(28, 10%, 53%)",
					cream: "hsl(27, 66%, 92%)",
					veryPaleOrange: "hsl(33, 100%, 98%)",
				},
			},
			fontFamily: {
				DM: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
