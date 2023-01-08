import './App.css';
import Feed from './componentts/Feed/Feed';
import Sidebar from './Sidebar';
import Widgets from './componentts/Widgets/Widgets';

function App() {
  return (
    <div className="app">
<Sidebar />
<Feed />
<Widgets />
    </div>
  );
}

export default App;
