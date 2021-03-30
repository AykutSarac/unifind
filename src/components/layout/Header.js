import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import UniContext from '../../context/unis/uniContext'

const SearchBar = styled.div`
    white-space: nowrap;

    input[type="text"] {
        padding: 10px;
        font-size: 1.2rem;
        border-radius: 25px 0 0 25px;
        border: 1px solid lightblue;
        width: calc(100% - 12rem);
        outline: none;
        color: rgb(36, 36, 36);
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.315));
        transition: 0.5s;

        &:focus {
            width: calc(100% - 8rem);
            border-radius: 10px 0 0 10px;
        }

        @media screen and (max-width: 1024px) {
            transition: 0ms;
        }
    }

    input[type="submit"] {
        padding: 10px;
        font-size: 1.2rem;
        border-radius: 0 25px 25px 0;
        border: 1px solid lightblue;
        outline: none;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.315));
        color: rgb(36, 36, 36);
        cursor: pointer;

        &:hover {
            background: lightskyblue;
        }
    }
`

const Hero = styled.form`
    margin: 3em auto 3em auto;
    padding-bottom: 2em;
    border-bottom: 1px solid lightgray;
`

const Title = styled.h1`
    font-size: 2rem;
`

const Header = () => {
    const uniContext = useContext(UniContext);
    const { searchUnis, clearUnis } = uniContext;

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (text === '') return clearUnis();
        searchUnis(text);
        setText('');
    }

    return (
        <Hero onSubmit={onSubmit}>
            <Title>Search for the Universities.</Title>
            <SearchBar>
                <input type="text" placeholder="Start searching..." value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Search" />
            </SearchBar>
        </Hero>
    )
}

export default Header
