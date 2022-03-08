
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork, MdSchool, MdStars } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import timelineData from './timelineData';
import { Image, Heading, Text, Box, chakra, useColorMode } from '@chakra-ui/react'

export const TimelineComponent = () => {
    const { colorMode } = useColorMode()
    const lineColors = {
        light: '#15161a',
        dark: 'white'
    }
    return (
        <>
            <VerticalTimeline lineColor={lineColors[colorMode]}>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<MdStars />}
                />
                {
                    timelineData.slice(0).reverse().map((item, index) => {
                        if (item.type == "work") {
                            return (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--work"
                                    date={item.date}
                                    contentStyle={{ background: '#0fc4af', color: lineColors[colorMode] }}
                                    contentArrowStyle={{ borderRight: '7px solid  #0fc4af' }}
                                    iconStyle={{ background: '#0fc4af', color: '#fff' }}
                                    icon={<MdWork />}
                                >
                                    <Box d="flex">
                                        <Image d="inline" src={item.img} alt={item.headline} boxSize='60px' objectFit='cover' mr="2" />
                                        <Heading d="inline" fontSize="xl" fontWeight="bold"
                                            alignSelf="center"
                                            color="white"
                                            className="vertical-timeline-element-title"><chakra.span color="white">{item.headline}</chakra.span>

                                        </Heading>
                                    </Box>

                                    <Text color="yellow.light" fontWeight="bold"><b>{item.desc}</b></Text>
                                </VerticalTimelineElement>
                            )
                        }
                        else if (item.type == "school") {
                            return (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--education"
                                    date={item.date}
                                    contentStyle={{ background: '#531987', color: lineColors[colorMode] }}
                                    contentArrowStyle={{ borderRight: '7px solid  #531987' }}
                                    iconStyle={{ background: '#531987', color: '#fff' }}
                                    icon={<MdSchool />}
                                >

                                    <Box d="flex">
                                        <Image d="inline" src={item.img} alt={item.headline} boxSize='60px' objectFit='cover' mr="2" />
                                        <Heading d="inline" fontSize="xl" fontWeight="bold"
                                            alignSelf="center"
                                            color="white"
                                            className="vertical-timeline-element-title"><chakra.span color="white">{item.headline}</chakra.span></Heading>
                                    </Box>
                                    <Text color="yellow.light" fontWeight="bold"><b>{item.desc}</b></Text>
                                </VerticalTimelineElement>
                            )
                        }
                    })
                }
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(255, 157, 0)', color: '#fff' }}
                    icon={<FaBaby />}
                />
            </VerticalTimeline>
        </>

    )
}