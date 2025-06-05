import React from 'react';
import './resume.css';
import { FaFileAlt } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent/PageHeaderContent';
import {VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import  'react-vertical-timeline-component/style.min.css';
import {MdWork} from 'react-icons/md';
import { data } from './resume-utils';

function Resume() {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headerText = "My Resume"
        icon =  {<FaFileAlt size={40} />}
      />

      <div className="timeline">
        <div className="timeline__exp">
          <h3 className="timeline__header">Experience</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.experience.map((item, i)=>(
                <VerticalTimelineElement
                key={i}
                className='timeline__exp__vertical-timeline-element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                // date='2025 - prsent'
                icon={<MdWork/>}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.subTitle}
                    </h4>

                  </div>
                  <p id='description'>
                      {item.description}
                    </p>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>

        <div className="timeline__edu">
          <h3 className="timeline__header">Education</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.education.map((item, i)=>(
                <VerticalTimelineElement
                key={i}
                className='timeline__exp__vertical-timeline-element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                // date='2025 - prsent'
                icon={<MdWork/>}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.subTitle}
                    </h4>
                  </div>
                  <p id='description'>
                      {item.description}
                  </p>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>

      </div>
    </section>
  )
}

export default Resume