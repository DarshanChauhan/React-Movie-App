import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import SimpleBottomNavigation from "./Component/Mainnav";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import Trending from "./pages/Trending/Trending";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
