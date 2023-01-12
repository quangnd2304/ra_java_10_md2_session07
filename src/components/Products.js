import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function Products() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useSearchParams();
    let courseName = searchParam.get('courseName');
    let time = searchParam.get('time');

    let productName = (location.state == null) ? '' : location.state.productName;

    return (
        <div>
            Products
            <p>Product Name: {productName}</p>
            <h2>List Course - Dynamic Route</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Java Fullstack</td>
                        <td>1200</td>
                        <td><button onClick={() => navigate('courseDetail/javafullstack/1200')}>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Javascript Fullstack</td>
                        <td>1000</td>
                        <td><button onClick={() => navigate('courseDetail/javascriptfullstack/1000')}>Detail</button></td>
                    </tr>
                </tbody>
            </table>

            <h2>List Course - Search Param</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Java Fullstack</td>
                        <td>1200</td>
                        <td><button onClick={() => setSearchParam({ courseName: 'JavaFullstack', time: 1200 })}>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Javascript Fullstack</td>
                        <td>1000</td>
                        <td><button onClick={() => setSearchParam({ courseName: "Javascript Fullstack", time: 1000 })}>Detail</button></td>
                    </tr>
                </tbody>
            </table>
            <p>
                CourseName: {courseName} - Time: {time}
            </p>

        </div>
    )
}
