/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: 'rgb(223, 145, 20)',
            }
        },
    },
    plugins: [],
};
