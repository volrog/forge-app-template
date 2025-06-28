import React, { type FC, useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

export const App: FC = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    void invoke<string>('getText').then(setData)
  }, []);

  return (
    <section>
      <h1>Hello from <strong>Forge App Example</strong>!</h1>
      <p>{data ?? 'Loading...'}</p>
    </section>
  );
};
