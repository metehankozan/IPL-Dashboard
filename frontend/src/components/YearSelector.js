import { React} from 'react';
import {Link} from 'react-router-dom'

import './YearSelector.scss';

export const YearSelector = ({teamName, year}) => {

    return (
        <ol className='YearSelector'>
        {
            <li>
                <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
            </li> 
        }
        </ol>
    )
}