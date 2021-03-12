import React, {useState, useEffect, useRef} from 'react';
import Stars from 'react-native-stars';
import {
  Content,
  CoverHeader,
  Details,
  Title,
  Info,
  PrimaryButton,
  ButtonPrimaryText,
  DescriptionTitle,
  SinopseText,
  DetailsContainer,
  ElencoContainer,
  CardActor,
  PicActor,
  NameActor,
  ShadowBottom,
  ShadowCover,
  DetailsButton,
  DetailButtonText,
  AnimatedShadow,
  Container,
  FilterButton,
  FilterButtonText,
} from './styles';
import Star from '~/components/Star';
import Arrow from '~/components/Arrow';
import Filter from '~/components/Filter';
import Sidebar from '~/components/Sidebar';
import {Animated} from 'react-native';
import {getMovies, getMovieDetails, getCast} from '~/services/api';

const Main = () => {
  let scrollY = new Animated.Value(0);
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const containerScroll = useRef();
  const [lastPage, setLastPage] = useState(0);
  const [moviesIds, setMoviesIds] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({
    title: '',
    genres: '',
    year: '',
    overview: '',
    runtime: '',
    casts: [],
    cover: '../../assets/loading.png',
    rate: 0,
  });

  const getNewMovies = async () => {
    const responseMovies = await getMovies(lastPage + 1);

    let ids = [];
    responseMovies.data.results.map(movie => {
      ids.push(movie.id);
    });
    setMoviesIds([...moviesIds, ...ids]);
    setLastPage(lastPage + 1);
  };

  const getCurrentMovieDetails = async () => {
    let aux = moviesIds;
    let currentId = aux.shift();
    console.log(aux);
    if (aux.length === 3) {
      getNewMovies();
    }
    setMoviesIds(aux);

    const cast = await getCast(currentId);
    const response = await getMovieDetails(currentId);
    //console.log(cast.data.cast);

    setCurrentMovie({
      title: response.data.title,
      genres:
        '' +
        response.data.genres.map(genre => {
          return ' ' + genre.name;
        }),
      year: response.data.release_date.slice(0, 4),
      overview: response.data.overview,
      runtime:
        `${(response.data.runtime / 60) ^ 0}h` +
        (response.data.runtime % 60) +
        'm',
      casts: cast.data.cast,
      cover:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' +
        response.data.backdrop_path,
      rate: response.data.vote_average / 2,
    });
  };

  useEffect(() => {
    async function fetch() {
      console.log('comcecou a executar');
      await getNewMovies(lastPage);
    }
    fetch();
  }, []);

  useEffect(() => {
    moviesIds.length === 20 ? getCurrentMovieDetails() : null;
  }, [moviesIds]);

  return (
    <Container>
      <CoverHeader source={{uri: currentMovie.cover}} />
      <Content onScroll={handleScroll} ref={containerScroll}>
        <ShadowCover colors={['rgba(0, 0, 0, 0)', '#030b13']} />
        <Details>
          <Title>{currentMovie.title}</Title>
          <Info>
            {currentMovie.year.substr(0, 4)} ● {currentMovie.genres} ●{' '}
            {currentMovie.runtime}
          </Info>
          <Stars
            disabled={true}
            default={currentMovie.rate}
            spacing={5}
            count={5}
            half={true}
            fullStar={<Star color="#DCC044" />}
            emptyStar={<Star color="#9D9D9D" />}
          />

          <PrimaryButton onPress={getCurrentMovieDetails}>
            <ButtonPrimaryText>Escolher Outro</ButtonPrimaryText>
          </PrimaryButton>
          <DetailsContainer>
            <DescriptionTitle>Sinopse</DescriptionTitle>
            <SinopseText>{currentMovie.overview}</SinopseText>
            <DescriptionTitle>Elenco Principal</DescriptionTitle>
            <ElencoContainer>
              {currentMovie.casts.map(actor => {
                if (actor.profile_path) {
                  return (
                    <CardActor key={actor.id}>
                      <PicActor
                        source={{
                          uri:
                            'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
                            actor.profile_path,
                        }}
                      />
                      <NameActor>{actor.name}</NameActor>
                    </CardActor>
                  );
                }
              })}
            </ElencoContainer>
          </DetailsContainer>
        </Details>
      </Content>

      <Sidebar />

      {scrollY._value < 150 ? (
        <AnimatedShadow
          style={{
            opacity: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
            }),
            elevation: scrollY.interpolate({
              inputRange: [0, 170],
              outputRange: [20, 0],
            }),
          }}>
          <ShadowBottom
            locations={[0, 0.8]}
            colors={['rgba(0, 0, 0, 0)', '#030b13']}>
            <DetailsButton
              onPress={() => {
                containerScroll.current.scrollToEnd({animated: true});
              }}>
              <DetailButtonText>Detalhes</DetailButtonText>
              <Arrow />
            </DetailsButton>
          </ShadowBottom>
        </AnimatedShadow>
      ) : null}
      <FilterButton>
        <Filter />
        <FilterButtonText>Filtrar</FilterButtonText>
      </FilterButton>
    </Container>
  );
};

export default Main;
