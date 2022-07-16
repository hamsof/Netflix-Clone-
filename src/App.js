import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">

      <Banner />

      <Row 
      title="Netflix Originals" 
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending" fetchURL={requests.fetchTrending}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
