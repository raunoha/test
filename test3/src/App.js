import { Route,Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
//import MainNavigation from './components/layout/MainNavigation'; <MainNavigation />
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
      <Route path='/' element= {< AllMeetups />} /> 
      <Route path='/new-meetup' element= {< NewMeetup />} /> 
      <Route path='/favorites' element= {< Favorites />} /> 
      </Routes>
    </Layout>
  );
}

export default App;

/* 
import AllMeetups from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

 <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
*/