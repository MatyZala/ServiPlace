import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
        "country": "AD",
        "hot dog": 9,
        "hot dogColor": "hsl(185, 70%, 50%)",
        "burger": 17,
        "burgerColor": "hsl(97, 70%, 50%)",
        "sandwich": 76,
        "sandwichColor": "hsl(152, 70%, 50%)",
        "kebab": 74,
        "kebabColor": "hsl(30, 70%, 50%)",
        "fries": 27,
        "friesColor": "hsl(357, 70%, 50%)",
        "donut": 11,
        "donutColor": "hsl(292, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 194,
        "hot dogColor": "hsl(38, 70%, 50%)",
        "burger": 81,
        "burgerColor": "hsl(267, 70%, 50%)",
        "sandwich": 46,
        "sandwichColor": "hsl(336, 70%, 50%)",
        "kebab": 70,
        "kebabColor": "hsl(106, 70%, 50%)",
        "fries": 23,
        "friesColor": "hsl(21, 70%, 50%)",
        "donut": 57,
        "donutColor": "hsl(353, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 131,
        "hot dogColor": "hsl(118, 70%, 50%)",
        "burger": 87,
        "burgerColor": "hsl(95, 70%, 50%)",
        "sandwich": 155,
        "sandwichColor": "hsl(187, 70%, 50%)",
        "kebab": 128,
        "kebabColor": "hsl(118, 70%, 50%)",
        "fries": 157,
        "friesColor": "hsl(138, 70%, 50%)",
        "donut": 19,
        "donutColor": "hsl(52, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 125,
        "hot dogColor": "hsl(265, 70%, 50%)",
        "burger": 24,
        "burgerColor": "hsl(150, 70%, 50%)",
        "sandwich": 0,
        "sandwichColor": "hsl(85, 70%, 50%)",
        "kebab": 106,
        "kebabColor": "hsl(196, 70%, 50%)",
        "fries": 168,
        "friesColor": "hsl(2, 70%, 50%)",
        "donut": 141,
        "donutColor": "hsl(100, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 117,
        "hot dogColor": "hsl(290, 70%, 50%)",
        "burger": 105,
        "burgerColor": "hsl(235, 70%, 50%)",
        "sandwich": 5,
        "sandwichColor": "hsl(89, 70%, 50%)",
        "kebab": 186,
        "kebabColor": "hsl(351, 70%, 50%)",
        "fries": 103,
        "friesColor": "hsl(332, 70%, 50%)",
        "donut": 186,
        "donutColor": "hsl(199, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 25,
        "hot dogColor": "hsl(181, 70%, 50%)",
        "burger": 130,
        "burgerColor": "hsl(347, 70%, 50%)",
        "sandwich": 102,
        "sandwichColor": "hsl(299, 70%, 50%)",
        "kebab": 13,
        "kebabColor": "hsl(324, 70%, 50%)",
        "fries": 94,
        "friesColor": "hsl(166, 70%, 50%)",
        "donut": 54,
        "donutColor": "hsl(17, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 21,
        "hot dogColor": "hsl(272, 70%, 50%)",
        "burger": 135,
        "burgerColor": "hsl(132, 70%, 50%)",
        "sandwich": 144,
        "sandwichColor": "hsl(18, 70%, 50%)",
        "kebab": 193,
        "kebabColor": "hsl(196, 70%, 50%)",
        "fries": 14,
        "friesColor": "hsl(284, 70%, 50%)",
        "donut": 13,
        "donutColor": "hsl(182, 70%, 50%)"
    }
]

const BarChart = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
        padding={0.2}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderRadius={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
)

export default BarChart