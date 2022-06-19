const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            // Keeping some examples of tailwind theme extensions
            // boxShadow: {
            //     smishup: '0px -1px 2px 0 rgba(50, 50, 50, 0.1)',
            //     smishdown: '0px 1px 2px 0 rgba(50, 50, 50, 0.1)'
            // },
            // colors: {
            //     fgreen: {
            //         50: '#ecf5e9',
            //         100: '#d0e6c8',
            //         200: '#b1d5a3',
            //         300: '#91c47e',
            //         400: '#7ab762',
            //         500: '#62aa46',
            //         600: '#5aa33f',
            //         700: '#509937',
            //         800: '#46902f',
            //         900: '#347f20'
            //     },
            //     fred: {
            //         50: '#fae8e8',
            //         100: '#f3c5c5',
            //         200: '#ec9e9e',
            //         300: '#e47777',
            //         400: '#de5a59',
            //         500: '#d83d3c',
            //         600: '#d43736',
            //         700: '#ce2f2e',
            //         800: '#c82727',
            //         900: '#bf1a1a'
            //     },
            //     fdark: {
            //         50: '#e2e3e4',
            //         100: '#b7b9bb',
            //         200: '#878b8e',
            //         300: '#575c61',
            //         400: '#33393f',
            //         500: '#0f161d',
            //         600: '#0d131a',
            //         700: '#0b1015',
            //         800: '#080c11',
            //         900: '#04060a'
            //     }
            // }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

module.exports = config;
