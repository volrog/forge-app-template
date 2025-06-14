import Resolver from '@forge/resolver';

const resolver = new Resolver();

// Export the definitions handler to satisfy Typescript
export type DefinitionsHandler = ReturnType<Resolver['getDefinitions']>;
export const handler: DefinitionsHandler = resolver.getDefinitions();
