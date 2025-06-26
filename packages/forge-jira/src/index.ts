import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello, world!';
});

// Export the definitions handler to satisfy Typescript
export type DefinitionsHandler = ReturnType<Resolver['getDefinitions']>;
export const handler: DefinitionsHandler = resolver.getDefinitions();
