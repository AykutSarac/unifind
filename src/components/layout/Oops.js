import React from 'react'
import styled from 'styled-components'
import empty from '../../assets/empty.svg'



const Empty = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 40%;
        display: block;
        margin: 10% auto;
    }
`

const Oops = () => {
    return (
        <Empty>
        Couldn't find any university for this result...
        <img src={empty} alt="not found" />
    </Empty>
    )
}

export default Oops
