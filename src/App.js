import "./App.css";
import Banner from "./components/Banner";
import requests from "./requests";
import Row from "./components/Row";
import Nav from "./components/Nav";
import { useStateValue } from "./StateProvider";
import Login from "./components/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Nav />
          <Banner />
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row
            title="Upcoming Movies"
            fetchUrl={requests.fetchUpcomingMovies}
          />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />*/}
          <Row title="Playing Now" fetchUrl={requests.fetchNowPlayingMovies} />
        </>
      )}
    </div>
  );
}

export default App;
