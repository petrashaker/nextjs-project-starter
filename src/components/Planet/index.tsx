import * as S from './styled';
interface Props {
    name: string 
}

const Planet: React.FC<Props> = ({name}) => {
  return (
    <S.PlanetWrap>
        <span className='planet'>{name}</span>
    </S.PlanetWrap>
  )
}

export default Planet;
