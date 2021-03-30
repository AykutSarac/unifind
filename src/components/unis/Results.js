import React, { useContext } from 'react'
import styled from 'styled-components'
import UniContext from '../../context/unis/uniContext'
import ResultItem from './ResultItem'
import spinner from '../../assets/loading.svg'
import Oops from '../layout/Oops'

const Section = styled.section`
    width: 90%;
    margin: 0 auto;
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const Preloader = styled.img`
    margin-top: 10%;
    width: 75px;
`

const FoundMsg = styled.p`
    text-align: left;
    color: gray;
    margin-top: 0;
    font-size: clamp(14px, 2.5vw, 18px);
`

const Results = () => {
    const uniContext = useContext(UniContext);
    const { unis, loading, error } = uniContext;

    if (loading) return <Preloader src={spinner} />

    return (
        <Section>
            <List>
                {unis?.length > 0 && <FoundMsg>Found {unis.length} university across the world:</FoundMsg>}
                {
                    error ? <Oops /> : (
                        unis.map((uni, index) => (
                            <ResultItem key={index} university={uni} />
                        ))
                    )
                }
            </List>
        </Section>
    )
}

export default Results
