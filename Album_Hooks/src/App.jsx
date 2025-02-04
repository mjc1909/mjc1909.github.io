import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AlbumPage from "./pages/album/AlbumPage";
import AlbumsPage from "./pages/albums/AlbumsPage";
import FavoritesPage from "./pages/favorites/FavoritesPage";
import SwiperPage from "./pages/swiper/SwiperPage";
import SwipePage from "./pages/swipe/SwipePage";



// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },
            {
              path: "/album/:albumId",
              element : <AlbumPage></AlbumPage>
            },
            {
              path: "/album/:albumId",
              element : <AlbumPage></AlbumPage>
            },
            {
              path: "/albums",
              element : <AlbumsPage></AlbumsPage>
            },
            {
              path: "/favorites",
              element : <FavoritesPage></FavoritesPage>
            },
            {
              path: "/swiper",
              element : <SwiperPage></SwiperPage>
            },
            {
              path: "/swipe",
              element : <SwipePage></SwipePage>
            },
            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
