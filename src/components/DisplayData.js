import React from 'react'
import Spinner from './Spinner'

const DisplayData = (props) => {
    const { cases, deaths, recovered, todayCases, imgSrc } = props;
    if (props.loading) {
        return <Spinner />
    } else if (cases) {
        return (
            <div className="display">
                <img className="flag" src={imgSrc} alt="" />
                <p>Total Confirmed Cases: {cases}</p>
                <p>Total Deaths: {deaths} </p>
                <p>Total Recovered: {recovered}</p>
                <p>Cases Reported Today: {todayCases}</p>
            </div>

        )
    }
    else {
        return (
            <h2>{props.error}</h2>
        )
    }
}

export default DisplayData;