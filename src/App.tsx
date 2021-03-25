
import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesListProvider } from './MoviesListContext';

export function App() {
  

  return (
    <MoviesListProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesListProvider>
  )
}