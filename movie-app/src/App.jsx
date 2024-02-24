import { useState, useEffect } from "react";
import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

import { apiData } from "./api/data.js";
import axios from "axios";

const DEFAULT_MOVIE = {
  title: "Jurassic World: Domínio",
  description:
    "Quatro anos após a destruição da Ilha Nublar, os dinossauros agora vivem e caçam ao lado de humanos em todo o mundo. Esse frágil equilíbrio remodela o futuro e deve determinar de uma vez por todas se os seres humanos continuarão sendo a espécie dominante em um planeta que agora compartilham com as criaturas mais temíveis da história",
  imageSmall:
    "https://oregional.com.br/media/blog/700ba1039467a09248591758e0f51869.jpg",
  imageBanner: "https://images6.alphacoders.com/123/1239922.jpg",
  linkVideo: "hcv_8WXSetM",
  category: "movies",
};

function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE);

  const [moviesData, setMoviesData] = useState([]);

  const [playVideo, setPlayVideo] = useState(false);
  const baseUrl = 'http://localhost:3003'

  const { title, description, linkVideo, imageBanner } = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData;

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = axios.get(`${baseUrl}/movies-cateries`
        );

      setMoviesData(data);
    };
    getMoviesAndCategories();
  }, []);

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) => {
    setVideo(data);
    window.scrollTo({ top: 0 });
  };

  

  return (
    <Background imageBanner={imageBanner}>
      

      <Header />
      <DescriptionMovie
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo}
      />
      <Movies data={apiDataMovies} handleVideo={(data) => handleVideo(data)} />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />
    </Background>
  );
}

export default App;
