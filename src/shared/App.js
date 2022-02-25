import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PostList from '../pages/PostList';
import Header from '../components/Header';
import Signup from '../pages/Signup';
import { Grid } from '../elements';

function App() {
  return (
    <>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
