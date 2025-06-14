import type { FC } from 'react';
import styles from './styles.module.css';

export const App: FC = () => {
  return (
    <div className={styles.root}>
      <h1>Hello from <strong>Forge App Example</strong>!</h1>
    </div>
  );
};
