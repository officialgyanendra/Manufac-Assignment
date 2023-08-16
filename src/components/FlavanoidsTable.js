import React, { useState } from 'react'
import { processData } from '../logic/logic';
export default function FlavanoidsTable(props) {
    const [data] = useState(props.data);

    //Fetching the data from logic.js for flavanoids mean, median and mode

    const [alchohalType, flavanoidsMeanArrList, flavanoidsMedianArrayList, modeArraylist] = processData(data);
    
    return (
        <>
            <h1>Flavanoids Table</h1>
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
                        <td>Flavanoids Mean</td>
                        {flavanoidsMeanArrList.map((data, index) => {
                            return <td key={index}>{data.toFixed(3)}</td>
                        })}
                    </tr>
                    <tr>
                        <td>Flavanoids Median</td>
                        {flavanoidsMedianArrayList.map((data, index) => {
                            return <td key={index}>{parseFloat(data).toFixed(3)}</td>
                        })
                        }
                    </tr>
                    <tr>
                        <td>Flavanoids Mode</td>
                        {modeArraylist.map((data, index) => {
                            return <td key={index}>{data.toFixed(3)}</td>
                        })

                        }
                    </tr>
                </tbody>
            </table>
        </>
    )
}
