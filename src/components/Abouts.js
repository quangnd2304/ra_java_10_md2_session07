import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Abouts() {
    return (
        <div>
            Abouts
            {/* Khai báo vị trí các component con được hiển thị */}
            <Outlet />
        </div>

    )
}
