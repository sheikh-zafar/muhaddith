/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                s: { min: '220px', max: '315px' },
                xs: { min: '316px', max: '413px' },
                xxs: { min: '414px', max: '639px' },
                sm: { min: '640px', max: '767px' },
                md: { min: '768px', max: '1023px' },
                lg: { min: '1024px', max: '1279px' },
                xl: { min: '1280px', max: '1535px' },
                xxl: { min: '1536px', max: '2563px' },
            },
            colors: {
                primarytext: '#bb8732',
                bgcolor: '#ffffff',
                secondarytext: '#6a6a6a',
            },
            fontFamily: {
                head: ['Bungee Tint', 'sans-serif'],
                sans: ['Roboto', 'sans-serif'],
                heading: ['Squada One', 'sans-serif'],
                head: ['Bungee Tint', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
