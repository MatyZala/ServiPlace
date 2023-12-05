import { ResponsiveLine } from '@nivo/line'

const data = [
    {
        "id": "japan",
        "color": "hsl(91, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 109
            },
            {
                "x": "helicopter",
                "y": 125
            },
            {
                "x": "boat",
                "y": 220
            },
            {
                "x": "train",
                "y": 226
            },
            {
                "x": "subway",
                "y": 197
            },
            {
                "x": "bus",
                "y": 253
            },
            {
                "x": "car",
                "y": 266
            },
            {
                "x": "moto",
                "y": 47
            },
            {
                "x": "bicycle",
                "y": 292
            },
            {
                "x": "horse",
                "y": 105
            },
            {
                "x": "skateboard",
                "y": 291
            },
            {
                "x": "others",
                "y": 243
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(77, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 45
            },
            {
                "x": "helicopter",
                "y": 170
            },
            {
                "x": "boat",
                "y": 164
            },
            {
                "x": "train",
                "y": 297
            },
            {
                "x": "subway",
                "y": 256
            },
            {
                "x": "bus",
                "y": 8
            },
            {
                "x": "car",
                "y": 52
            },
            {
                "x": "moto",
                "y": 81
            },
            {
                "x": "bicycle",
                "y": 47
            },
            {
                "x": "horse",
                "y": 28
            },
            {
                "x": "skateboard",
                "y": 284
            },
            {
                "x": "others",
                "y": 263
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(24, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 197
            },
            {
                "x": "helicopter",
                "y": 178
            },
            {
                "x": "boat",
                "y": 93
            },
            {
                "x": "train",
                "y": 215
            },
            {
                "x": "subway",
                "y": 8
            },
            {
                "x": "bus",
                "y": 161
            },
            {
                "x": "car",
                "y": 94
            },
            {
                "x": "moto",
                "y": 242
            },
            {
                "x": "bicycle",
                "y": 108
            },
            {
                "x": "horse",
                "y": 270
            },
            {
                "x": "skateboard",
                "y": 1
            },
            {
                "x": "others",
                "y": 235
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(169, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 189
            },
            {
                "x": "helicopter",
                "y": 174
            },
            {
                "x": "boat",
                "y": 189
            },
            {
                "x": "train",
                "y": 225
            },
            {
                "x": "subway",
                "y": 246
            },
            {
                "x": "bus",
                "y": 31
            },
            {
                "x": "car",
                "y": 82
            },
            {
                "x": "moto",
                "y": 69
            },
            {
                "x": "bicycle",
                "y": 90
            },
            {
                "x": "horse",
                "y": 60
            },
            {
                "x": "skateboard",
                "y": 132
            },
            {
                "x": "others",
                "y": 249
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(348, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 83
            },
            {
                "x": "helicopter",
                "y": 116
            },
            {
                "x": "boat",
                "y": 261
            },
            {
                "x": "train",
                "y": 163
            },
            {
                "x": "subway",
                "y": 279
            },
            {
                "x": "bus",
                "y": 94
            },
            {
                "x": "car",
                "y": 22
            },
            {
                "x": "moto",
                "y": 194
            },
            {
                "x": "bicycle",
                "y": 280
            },
            {
                "x": "horse",
                "y": 247
            },
            {
                "x": "skateboard",
                "y": 63
            },
            {
                "x": "others",
                "y": 173
            }
        ]
    }
]

const LineChart = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            tickLabelProps: () => ({
                fill: '#969696',
            }),
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle',
            tickLabelProps: () => ({
                fill: '#969696',
            }),
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={4}
        pointSize={11}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 110,
                translateY: 0,
                itemsSpacing: 8,
                itemDirection: 'left-to-right',
                itemWidth: 82,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                itemTextColor: '#969696',
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart