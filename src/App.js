import './App.css';
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import {Switch, Route} from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
  <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact >
      <AllMeetups />
      </Route>
      <Route path='/new-meetup' exact>
        <NewMeetup />
      </Route>
      <Route path='/favorites' exact>
        <Favorites />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
