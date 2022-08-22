import sanityClient from '@sanity/client';
import  imageUrlBuilder from '@sanity/image-url';

export const  client = sanityClient({
    projectId: 'ce5oc2at',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'skT1uyszqiOxyvTPcdy0UHcHlXjXEbYJeXBiO9ukITuZgDb3aHnGf8ipwPFUXY0yb4LRsKIapQuAbCvxZxn3B5CqN0QHJ1NEdTR6FpE9Pq8EwKmXonztajBxDY0eFo8HAK2swAA87hw9LLuwrKxMU9EIjDt3DkydvHaiW8BGE38VkGOAqzZE',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)