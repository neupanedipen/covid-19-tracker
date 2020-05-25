import React from 'react'
import Spinner from './Spinner'

const DisplayData = (props) => {
    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div className="display">
                <img className="flag" src={props.imgSrc} alt="" />
                <p>Total Confirmed Cases: {props.cases}</p>
                <p>Total Deaths: {props.deaths} </p>
                <p>Total Recovered: {props.recovered}</p>
                <p>Cases Reported Today: {props.todayCases}</p>
            </div>

        )
    }
}

export default DisplayData;