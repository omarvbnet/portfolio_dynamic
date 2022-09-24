const withImages = require('next-images');

module.exports = withImages({
    images: {
        domains: ['admin2.nidbi.net',],
    },
    async rewrites() {
        return [
            {
                source: '/about',
                destination: `${process.env.BACKEND_URL}/about/`,
            },
            {
                source: '/projects',
                destination: `${process.env.BACKEND_URL}/projects/`,
            },
            {
                source: '/technologies',
                destination: `${process.env.BACKEND_URL}/technologies/`,
            },
            {
                source: '/contact',
                destination: `${process.env.BACKEND_URL}/contact/`,
            },
            {
                source: '/hero',
                destination: `${process.env.BACKEND_URL}/hero/`,
            },
            {
                source: '/footer',
                destination: `${process.env.BACKEND_URL}/footer/`,
            },
            {
                source: '/comments',
                destination: `${process.env.BACKEND_URL}/comments/`,
            },
            {
                source: '/comments/get',
                destination: `${process.env.BACKEND_URL}/comments/get/`,
            },
        ];
    },
});