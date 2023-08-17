import React, { useState } from 'react'
import { processData } from '../logic/logic';

export default function GammaTable(props) {
    const [data] = useState(props.data);

    // Fetching the data from logic.js for Gamma mean, median and mode

    const [alchohalType, , , , gammaMeanArrayList, gammaMedianArrayList, gammaModeArraylist] = processData(data);
    return (
        <>
            <h1>Gamma Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {alchohalType.map((el, index) => {
                            return <th key={index}>Alcohol {el}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gamma Mean</td>
                        {gammaMeanArrayList.map((data, index) => {
                            return <td key={index}>{data.toFixed(3)}</td>
                        })}
                    </tr>
                    <tr>
                        <td>Gamma Median</td>
                        {gammaMedianArrayList.map((data, index) => {
                            return <td key={index}>{data.toFixed(3)}</td>
                        })
                        }
                    </tr>
                    <tr>
                        <td>Gamma Mode</td>
                        {gammaModeArraylist.map((data, index) => {
                            return <td key={index}>{data}</td>
                        })

                        }
                    </tr>
                </tbody>
            </table>
        </>
    )
}

