import React, { useState } from 'react';
import DisplayData from './DisplayData'

const SearchCountry = () => {
    const [country, setCountry] = useState('');
    const [details, setDetails] = useState({});
    const [countInfo, setCountryInfo] = useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const search = async e => {
        setLoading(true);
        e.preventDefault();
        const noCountry = () => {
            return (
                <div>
                    {alert("Can not search empty string")}
                    {setLoading(false)}
                </div>
            )
        }
        let url;
        country === '' ? noCountry() : url = `https://corona.lmao.ninja/v2/countries/${country}`

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (res.ok) {
                setDetails(data)
                setCountry("")
                setCountryInfo({})
                setLoading(false)
            } else {
                setError(true);
                setCountry("")
            }

            const info = await data.countryInfo
            setCountryInfo(info)
            setLoading(false);

        }

        catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            <form className="form" onSubmit={search}>
                <label htmlFor="country" className="label">Country</label>
                <input
                    type="text"
                    name="country"
                    placeholder="Enter Country.."
                    className="input"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <button
                    type="submit"
                    className="button"
                >
                    Search
                </button>
            </form>



            {error ? <div><h3>Something went wrong. Reload Page</h3>
            </div>
                :
                <DisplayData
                    imgSrc={countInfo.flag}
                    cases={details.cases}
                    deaths={details.deaths}
                    recovered={details.recovered}
                    todayCases={details.todayCases}
                    loading={loading}
                    altText={`${details.country} flag`}
                />

            }
        </>
    )
}

export default SearchCountry;