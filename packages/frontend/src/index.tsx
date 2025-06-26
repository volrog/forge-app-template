import { StrictMode } from 'react'
import { FlagsProvider } from '@atlaskit/flag';
import { view } from '@forge/bridge';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@atlaskit/css-reset';

void view.theme.enable().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <FlagsProvider>
        <App/>
      </FlagsProvider>
    </StrictMode>,
  );
});
