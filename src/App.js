import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/UI/Layout";

function App() {

  // localhost:300
  // my-page.com/

  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
