import logo from './logo.svg';
import './App.css';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
     <ArticleCard />
     <ArticleView />
     <Editor />
    </div>
  );
}

export default App;
