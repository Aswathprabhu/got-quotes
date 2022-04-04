import { createServer, Factory, Model, RestSerializer } from 'miragejs';

export function makeServer({ environment = 'development' }) {
  return createServer({
    environment,
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
      server.createList('quote', 20);
    },
    routes() {
      // this.passthrough('https://game-of-thrones-quotes.herokuapp.com/**');
      this.urlPrefix = 'https://game-of-thrones-quotes.herokuapp.com';
      this.namespace = '/v1';
      this.get('/random/:id', (schema, request) => {
        let count = request.params.id || 1;
        return schema.quotes.find(
          Array.from(Array(Number(count)), (_, idx) => idx + 1)
        );
      });
    },
    serializers: {
      application: RestSerializer.extend({
        // https://miragejs.com/api/classes/serializer/#embed
        embed: true,
        // https://miragejs.com/api/classes/serializer/#root
        root: false,
      }),
    },
  });
}
