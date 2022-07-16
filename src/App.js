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
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Trending" fetchURL={requests.fetchTopRated}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
