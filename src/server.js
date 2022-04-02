import { createServer, Factory, Model } from 'miragejs';

export function makeServer() {
  return createServer({
    models: {
      quote: Model,
    },
    factories: {
      quote: Factory.extend({
        sentence: 'The man who passes the sentence should swing the sword.',
        character: {
          name: 'Eddard "Ned" Stark',
          slug: 'ned',
          house: {
            name: 'House Stark of Winterfell',
            slug: 'stark',
          },
        },
      }),
    },
    seeds(server) {
      server.createList('quote', 2);
    },
    routes() {
      // this.passthrough('https://game-of-thrones-quotes.herokuapp.com/**');
      this.urlPrefix = 'https://game-of-thrones-quotes.herokuapp.com';
      this.namespace = '/v1';
      this.get('/random/2', (schema) => {
        return schema.quotes.all();
      });
    },
  });
}
