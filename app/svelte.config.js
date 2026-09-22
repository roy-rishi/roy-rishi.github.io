import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined, // or '404.html' if you want SPA-style fallback
            precompress: false,
            strict: true
        }),
        paths: {
            base: ''
        }
    }
};