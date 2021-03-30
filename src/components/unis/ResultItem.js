import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    a {
        text-decoration: none;
        color: var(--primary-color);
        display: initial;
    }
`

const University = styled.div`
    margin-bottom: 1em;
    background: lightblue;
    border-radius: 15px;
    font-size: clamp(16px, 2.5vw, 24px);
    padding: 5px;
    display: flex;
    align-items: center;
    min-width: 100%;
    width: fit-content;
`

const Logo = styled.img`
    border-right: 2px solid lightskyblue;
    padding: 0 1em;
`

const Description = styled.div`
    margin-left: 1em;
    text-align: left;
`

const ResultItem = ({ university }) => {
    return (
        <ListItem>
            <a href={university.web_pages[0]} rel="noreferrer" target="_blank">
                <University>
                    <Logo src={`https://www.countryflags.io/${university.alpha_two_code}/flat/64.png`} />
                    <Description>
                        {university.name}
                    </Description>
                </University>
            </a>
        </ListItem>
    )
}

export default ResultItem
