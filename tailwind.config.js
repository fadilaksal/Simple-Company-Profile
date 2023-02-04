const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                'Gilroy-Light': ['Gilroy-Light', ...defaultTheme.fontFamily.sans],
                'Gilroy-ExtraBold': ['Gilroy-ExtraBold', ...defaultTheme.fontFamily.sans],
                'Proxima-Nova': ['Proxima-Nova', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'title': '#002060',
                'secondary': '#00D9D5',
                'gray': '#6A6A6A',
                'gray-secondary': '#597393',
                'light-gray': '#BEBEBE',
                'light-white': '#EFF3F6',
                'dark-blue': '#1D334F',
                'aqua': '#00D9D5'
            },
            border: {
                '01': '1px'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
