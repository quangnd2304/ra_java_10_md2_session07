import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    const params = useParams();
    return (
        <div>
            <h2>CourseDetail</h2>
            <p>Course Name: {params.courseName}</p>
            <p>Course Time: {params.time}</p>
        </div>
    )
}
