
export const selectRouteId = (props) => Number(props.match.params.id);

export const selectFilmsByGenre = ({filmsByGenre, currentGenre}) => filmsByGenre[currentGenre];

export const selectFilmById = ({filmsList}, props) => filmsList[selectRouteId(props)];
