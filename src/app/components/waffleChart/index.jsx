import React from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'

const data = [
    {
        "id": "cats",
        "label": "Cats",
        "value": 27.595481546549525
    },
    {
        "id": "dogs",
        "label": "Dogs",
        "value": 15.126566351044792
    },
    {
        "id": "rabbits",
        "label": "Rabits",
        "value": 1.64677965458541
    }
]

const WaffleChart = () => (
    <ResponsiveWaffle
        data={data}
        total={100}
        rows={18}
        columns={20}
        padding={1}
        valueFormat=".2f"
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: 'nivo' }}
        borderRadius={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionStagger={2}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -100,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#777',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
                        }
                    }
                ]
            }
        ]}
    />
)

export default WaffleChart