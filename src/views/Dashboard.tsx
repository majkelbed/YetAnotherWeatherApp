import React, { useEffect, useState } from 'react'
import { getCountries } from '@API/polution';
import { RouteComponentProps } from '@reach/router';

export default function Dashboard (props:RouteComponentProps) {
    // const [countries, setCountries] = useState([]);
    useEffect(() => {
        getCountries().then(console.log);
    }, [])
    return (
        <div>
            {/* {countries && countries.length ? countries.map(country => <div>test</div>) : "Loading..."} */}
        </div>
    )
}
