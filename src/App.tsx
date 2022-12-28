import './App.css';

import ActivityList from './components/organisms/ActivityListContainer/ActivityListContainer';
import TopNavbar from './components/organisms/TopNavbar/TopNavbar';

function App() {
  return (
    <div className="App">
      <TopNavbar title="To Do List App" />
      <ActivityList />
    </div>
  );
}

export default App;
