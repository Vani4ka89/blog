const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';

const urls = {
    posts,
    postById: (id: number | string): string => `${posts}/${id}`
};

export {baseURL, urls};