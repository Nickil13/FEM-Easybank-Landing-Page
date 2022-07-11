/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        colors: {
            primary: {
                "dark-blue": "hsl(233, 26%, 24%)",
                "overlay-blue": "hsla(233, 26%, 24%, 80%)",
                "lime-green": "hsl(136, 65%, 51%)",
                "bright-cyan": "hsl(192, 70%, 51%)",
            },
            neutral: {
                "grayish-blue": "hsl(233, 8%, 62%)",
                "light-grayish-blue": "hsl(220, 16%, 96%)",
                "very-light-gray": "hsl(0, 0%, 98%)",
                white: "hsl(0, 0%, 100%)",
            },
        },
        extend: {
            fontSize: {
                body: "1.125rem",
            },
            height: {
                nav: "65px",
            },
            margin: {
                nav: "65px",
            },
            backgroundImage: {
                "intro-mobile": "url(./images/bg-intro-mobile.svg)",
            },
        },
    },
    plugins: [],
};
