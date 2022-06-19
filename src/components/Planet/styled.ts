import styled from 'styled-components';
import { fontFamily } from 'src/styles';

export const PlanetWrap = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  font-family: 'Poppins', sans-serif;  
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 5px 0px;
  width: 500px;

  background-color: #FFF;
  cursor: pointer; 
  position: relative;
  color: black;

  &::before {
    position: absolute; 
		left: 0;
		bottom: 0;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #000B18 0%, #0052A2 100%);

		/* background-color: #000; */
		transform-origin: 0 bottom 0;
		transform: scaleX(0);
		transition: .4s ease-in;
        border-radius: 5px;
  }
  &:hover {
        .planet {
            color: #FFF;
        }
	&:before {
		transform: scaleX(1);
        border-radius: 5px;
  }
  .planet {
    position: relative;
    transition: .4s ease-in;
  }
  }
`