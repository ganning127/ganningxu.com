
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork, MdSchool, MdStars } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import timelineData from './timelineData';
import { Image } from '@chakra-ui/react'

export const TimelineComponent = () => (
    <>
        <h1 className="text-5xl text-light-blue font-bold text-center  my-5">now</h1>

        <VerticalTimeline lineColor="white">
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
                                contentStyle={{ background: '#0fc4af', color: "#fff" }}
                                contentArrowStyle={{ borderRight: '7px solid  #0fc4af' }}
                                iconStyle={{ background: '#0fc4af', color: '#fff' }}
                                icon={<MdWork />}
                            >
                                <Image d="inline" src={item.img} alt={item.headline} boxSize='60px' objectFit='cover' mr="2" />
                                <h3 className="vertical-timeline-element-title font-bold text-xl text-white inline">{item.headline}</h3>
                                <p className="text-light-yellow"><b>{item.desc}</b></p>
                            </VerticalTimelineElement>
                        )
                    }
                    else if (item.type == "school") {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--education"
                                date={item.date}
                                contentStyle={{ background: '#531987', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #531987' }}
                                iconStyle={{ background: '#531987', color: '#fff' }}
                                icon={<MdSchool />}
                            >
                                <Image d="inline" src={item.img} alt={item.headline} boxSize='60px' objectFit='cover' mr="2" />
                                <h3 className="vertical-timeline-element-title font-bold text-xl inline">{item.headline}</h3>
                                <p className="text-slate-300"><b>{item.desc}</b></p>
                            </VerticalTimelineElement>
                        )
                    }
                })
            }
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<MdStars />}
            />



        </VerticalTimeline>
        <h1 className="text-5xl text-light-blue font-bold text-center mt-5">birth</h1>
    </>

)