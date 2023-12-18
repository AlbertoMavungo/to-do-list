import styled from "styled-components"
import { Button } from "../buttons/button"

export const Header = () => {

    return (
        <Head>
            <h2 style={{color:'#9b59b6'}}>Lista de tarefas</h2>
            <Button/>
        </Head>
    )
}

const Head = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color:#ffffff;
    border: 0.5px solid;
    border-radius:10px;
    margin: 20px 8% 10px;    
`
