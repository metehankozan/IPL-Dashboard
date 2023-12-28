import { React, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';

import './MatchPage.scss'
import { YearSelector } from '../components/YearSelector';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const [years, setYears] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
        () => {
          const fetchMatches = async () => {
            const matchesResponse = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const yearsResponse = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches/years`);
            const matchesData = await matchesResponse.json();
            const yearsData = await yearsResponse.json();
            setMatches(matchesData);
            setYears(yearsData);
          };
          fetchMatches();
        }, [teamName, year]
      );

    return (
        <div className="MatchPage">
          <div className='year-selector'>
            <h3>Select Year</h3>
            {years.map(year => <YearSelector key={year} teamName={teamName} year={year}/>)}
          </div>
          <div>
            <h1 className='page-heading'>{teamName} matches in {year}</h1>
            {matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)}
          </div>
        </div>
    );
}

