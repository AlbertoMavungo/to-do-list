import styled from "styled-components";
import { Header } from "../../components/header";
import GlobalStyle from "../../globalStyles";
import { TaskList } from "../../components/task-list";

export const Scream = () => {
    return (
        <Div>
            <GlobalStyle />
            <Header/>
            <TaskList/>
        </Div>
    );
}

const Div = styled.div`
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    background-color: #343541;
    box-sizing:border-box;   
`;

