import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import DisneyPlus from "./DisneyPlus";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import db from "../firebase";
import useMovieStore from "../features/moviesStore";
import useUserStore, { selectUserName } from "../features/userStore";

const Container = styled.section`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {
  const userName = useUserStore(selectUserName);

  const setMovies = useMovieStore((state) => state.setMovies);

  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, movieData];
            break;
          case "new":
            newDisney = [...newDisney, movieData];
            break;
          case "original":
            originals = [...originals, movieData];
            break;
          case "trending":
            trending = [...trending, movieData];
            break;
        }
      });
      setMovies({
        recommend: recommends,
        newDisney: newDisney,
        original: originals,
        trending: trending,
      });
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <DisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
