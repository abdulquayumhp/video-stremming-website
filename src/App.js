import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Route';
import VideosSection from './Home/VideoSection/VideosSection';

function App() {

  return (
    <div className="bg-black">
      {/* <VideosSection /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
