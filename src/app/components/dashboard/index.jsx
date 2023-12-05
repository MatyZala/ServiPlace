import React from 'react';
import CardDashboard from '../../utils/card';
import { Card } from '@nextui-org/react';
import LineChart from '../lineChart';
import BarChart from '../barChart'
import PieChart from '../pieChart'
import GeoChart from '../waffleChart';
import WaffleChart from '../waffleChart';

const DashboardContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='mb-4 md:mb-0'>
                    <CardDashboard />
                </div>
                <div className='mb-4 md:mb-0'>
                    <CardDashboard />
                </div>
                <div className='mb-4 md:mb-0'>
                    <CardDashboard />
                </div>
                <div className='mb-4 md:mb-0'>
                    <CardDashboard />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-4'>
                <Card className="mt-4 col-span-5" style={{ height: '300px' }}>
                    <LineChart />
                </Card>
                <Card className="mt-4 col-span-2" style={{ height: '300px' }}>
                </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Card className="mt-4 col-span-1" style={{ height: '300px' }}>
                    <PieChart />
                </Card>
                <Card className="mt-4 col-span-1" style={{ height: '300px' }}>
                    <BarChart />
                </Card>
                <Card className="mt-4 col-span-1" style={{ height: '300px' }}>
                    <WaffleChart />
                </Card>
            </div>
        </div>
    );
}

export default DashboardContainer;
