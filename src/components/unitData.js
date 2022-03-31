import React from 'react'
import data from '../assets/age-of-empires-units.json'
import "../styles/unitData.css"
import {Link} from "react-router-dom" ;

function unitData() {
    const units = data.map(
        (unit) => {
            return(
                <tr>
                    <td>{unit.id}</td>
                    <td><Link to="/unitDetail">{unit.name}</Link></td>
                    <td>{unit.age}</td>
                    <td>Gold: {unit.cost?.Gold}, 
                        Food: {unit.cost?.Food},
                        Wood: {unit.cost?.Wood}</td>
                </tr>
        )
        }
    )
  return (
    <div>
        <table className='table' >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                </tr>
            </thead>
            <tbody>
                {units}
            </tbody>
        </table>
    </div>
  )
}

export default unitData;