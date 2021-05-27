import React, { useState } from 'react';
import './TabsPanel.css';


const TabsPanel = () => {

    const numberFormatter = new Intl.NumberFormat('en-US');

    const [invest, setInvest] = useState("");
    const [interest, setInterest] = useState("");
    const [period, setPeriod] = useState("");
    const [calculationPeriodType, setCalculationPeriodType] = useState("")
    const [isCalculating] = useState(false);
    const [isResetting] = useState(false);
    const resultData = [
        { name: 'Initial Investment', value: 0 },
        { name: 'Interest Earned', value: 0 },
        { name: 'Total', value: 0 }
    ]


    console.log(invest);

    const calculateResult = ({period}) => {
        period = period / calculationPeriodType / 1;
        alert(period);
    }

    return (
        <div className="container">
            <div class="card shadow-sm p-3 mb-5 mt-5">
                <div class="card-body">
                    <input type="number"
                        className="form-control shadow-none"
                        placeholder="Initial Investment"
                        required
                        value={invest}
                        onChange={(e) => setInvest(e.target.value)}
                        disabled={isCalculating || isResetting} /><br />
                    <input type="number"
                        className="form-control shadow-none"
                        placeholder="Yearly Interest Rate (%)"
                        required
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        disabled={isCalculating || isResetting} /><br />
                    <input type="number"
                        className="form-control shadow-none"
                        placeholder="Calculation Period"
                        required
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        disabled={isCalculating || isResetting} /><br />
                    <select className="form-control shadow-none" value={calculationPeriodType}
                        onChange={(e) => setCalculationPeriodType(e.target.value)}>

                        <option>Day</option>
                        <option>Month</option>
                        <option>year</option>
                    </select>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary form-control disabled" onClick={calculateResult}>Calculate</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary form-control disabled">Reset</button>
                        </div>
                    </div><br />
                    <div className="result" >
                        <h4>Result</h4>
                        {resultData.map((i) => {
                            <div className="row" >
                                <div className="col-6">
                                    <p>{i.name}</p>
                                </div>
                                <div className="col-6">
                                    <p>{i.value}</p>
                                </div>
                                <div className="col-6">
                                    <p>{i.name}</p>
                                </div>
                                <div className="col-6">
                                    <p>{i.value}</p>
                                </div>
                                <div className="col-6">
                                    <p>{numberFormatter.format(i.value)}</p>
                                </div>
                                <div className="col-6">
                                    <p>{i.value}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsPanel
