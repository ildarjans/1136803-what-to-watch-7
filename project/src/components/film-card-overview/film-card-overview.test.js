import FilmCardOverview from './film-card-overview.jsx';

const {render} = require('@testing-library/react');
describe('Component: FilmCardOverview', () => {
  it('Should render correctly', () => {
    const film = {
      'id': '1',
      'title': 'The Grand Budapest Hotel',
      'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
      'backgroundColor': '#ffffff',
      'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'rating': 8.9,
      'scoresCount': 240,
      'director': 'Wes Andreson',
      'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      'runTime': 99,
      'genre': 'Comedy',
      'year': 2014,
      'isFavorite': false,
    };
    const {getByText} = render(
     <FilmCardOverview film={film}/>
   );
    expect(getByText(/very good/i)).toBeInTheDocument();
    expect(getByText(/240 ratings/i)).toBeInTheDocument();
    expect(getByText(/In the 1930s, the Grand Budapest Hotel is a popular European ski resort/i)).toBeInTheDocument();
    expect(getByText(/director: Wes Andreson/i)).toBeInTheDocument();
    expect(getByText(/Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan/i)).toBeInTheDocument();
  });
});
