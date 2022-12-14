import { Box, Container, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: "datetime" as undefined,
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-03-18T00:00:00.000Z',
            '2022-03-19T00:00:00.000Z',
            '2022-03-20T00:00:00.000Z',
            '2022-03-21T00:00:00.000Z',
            '2022-03-22T00:00:00.000Z',
            '2022-03-23T00:00:00.000Z',
            '2022-03-24T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};

const series = [
    { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard() {
    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    });

    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex w='100%' maxWidth={1280} my='6' mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignContent='flex-end'>
                    <Box p={['4', '8']} bg='gray.800' borderRadius={8} pb='4'>
                        <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                        <Container overflow='hidden'>
                            <Chart options={options} series={series} type='area' height={180} />
                        </Container>
                    </Box>

                    <Box p={['4', '8']} bg='gray.800' borderRadius={8} pb='4'>
                        <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                        <Container overflow='hidden'>
                            <Chart options={options} series={series} type='area' height={180} />
                        </Container>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}