import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MoreInfo.css'

function MoreInfo() {
    const [moreInfoData, setMoreInfoData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/info/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setMoreInfoData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id]);
    if (!moreInfoData) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <u><h2>MoreInfo</h2></u>
            <ul>
                <li><strong>Details</strong> {moreInfoData.details}</li>
                <li><strong>Date of Payment</strong> {moreInfoData.dateofpayment}</li>
                <li><strong>Time Paid</strong> {moreInfoData.timepaid}</li>
                <li><strong>Mode of Payment:</strong> {moreInfoData.modeofpayment}</li>
                <li><strong>Next Due Date:</strong> {moreInfoData.nextduedate}</li>
            </ul>
        </div>
    )
}

export default MoreInfo
