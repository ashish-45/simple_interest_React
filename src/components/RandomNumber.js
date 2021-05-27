import React, { useState } from 'react'

const RandomNumber = () => {

    const [minvalue, setMinValue] = useState();
    const [maxvalue, setMaxValue] = useState();
    const [randomNum, setRandomNum] = useState();

    const handleRandomNumber = (e) => {
        e.preventDefault();
        setRandomNum(Math.floor(Math.random() * (maxvalue - minvalue + 1) + minvalue))
    }


    return (
        <div className="container">
            <h2>Genrate Random Number</h2>
            <div className="card p-3 mt-5 shadow p-3 mb-5" style={{ height: '400px', width: '600px' }}>
                <form>
                    <p className="num bg-light p-3 mt-5 font-weight-bold">Random Number :  {randomNum}</p>
                    <div class="form-row ">
                        <div class="form-group col-md-6 mt-3 font-weight-bold">
                            <label for="inputEmail4 ">Min</label>
                            <input type="number"
                                class="form-control shadow-none"
                                id="inputEmail4"
                                value={minvalue}
                                onChange={(e) => setMinValue(e.target.value)} />
                        </div>
                        <div class="form-group col-md-6 mt-3 font-weight-bold">
                            <label for="inputPassword4 ">Max</label>
                            <input type="number"
                                class="form-control shadow-none"
                                id="inputPassword4"
                                value={maxvalue}
                                onChange={(e) => setMaxValue(e.target.value)} />
                        </div>
                    </div>
                    <button className="btn btn-primary shadow-none mt-3 margin-auto font-weight-bold" onClick={handleRandomNumber}>Get Random Number</button>
                </form>
            </div>

        </div>
    )
}

export default RandomNumber
