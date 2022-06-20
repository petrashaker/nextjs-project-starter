import * as S from './styled';

interface Props {
    planetsPerPage: number,
    totalPlanets: number,
    paginate: (pageNb: number) => void
}

const Pagination: React.FC<Props> = ({ planetsPerPage, totalPlanets, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPlanets / planetsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <>
        {pageNumbers.map((nb) => {
            return(<S.PageWrap key={nb}><S.Link onClick={() => paginate(nb)}>{nb}</S.Link></S.PageWrap>)
        })}
    </>
  )
}

export default Pagination;
