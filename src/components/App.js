import { QueryClient, QueryClientProvider } from 'react-query';
import Gallery from './Gallery';

import '../styles/App.scss';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <header>
      <h1>Astronomy Photo Gallery</h1>
    </header>
    <Gallery />
  </QueryClientProvider>
);

export default App;
