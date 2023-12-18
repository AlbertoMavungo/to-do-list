import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Button = () =>{
    return(
        <Div>
             <Link to='/form'><StyledFontAwesomeIcon icon={faPlus} size="3x"/></Link>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    position:fixed;
    margin-left:70%;
    border-left: 1px solid #dddddd; 
    height: 69.05px;
    padding-left: 4%;
    align-items:center;
    padding-right:0%;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #19c37d;
  transition: transform 0.3s, color 0.3s; 
  &:hover {
    transform: scale(1.2);
  }
`;

