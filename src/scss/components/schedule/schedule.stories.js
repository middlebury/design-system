import React from 'react';
import { storiesOf } from '@storybook/react';

const ScheduleHeader = ({ title, text }) => (
  <div className="schedule-header">
    <h3 className="schedule-header__title">{title}</h3>
    <p className="schedule-header__text">{text}</p>
  </div>
);

const ScheduleItem = ({ time, local, title, name, job, children }) => (
  <div className="schedule-item">
    <div className="schedule-item__details">
      <time className="schedule-item__time">{time}</time>
      <span className="schedule-item__local">{local}</span>
    </div>
    <div className="schedule-item__body">
      {name && <p className="schedule-item__name">{name}</p>}
      {job && <p className="schedule-item__job">{job}</p>}
      <h4 className="schedule-item__title">{title}</h4>
      <div className="schedule-item__body">{children}</div>
    </div>
  </div>
);

storiesOf('schedule', module).add('default', () => (
  <div className="schedule">
    <h3 className="schedule__title">Preview days</h3>

    <ScheduleHeader
      title="Monday, December 11"
      text="Film Screening and Dialogue"
    />

    {Array(3)
      .fill()
      .map(() => (
        <ScheduleItem
          time="8:00 AM&ndash;5:00 PM"
          local="152 College St"
          title="Some event title"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            aspernatur modi reiciendis quos voluptatum obcaecati aperiam!
            Perferendis consequatur voluptatibus, incidunt aut, officia et autem
            rem rerum nobis assumenda natus cupiditate.
          </p>
        </ScheduleItem>
      ))}
    <ScheduleHeader title="Tuesday, December 12" text="Group Retreat" />
    <ScheduleItem
      time="8:00 AM&ndash;5:00 PM"
      local="152 College St"
      title="Some event title"
      name="Dr. Shakti Butler"
      job="Discussant"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        aspernatur modi reiciendis quos voluptatum obcaecati aperiam!
        Perferendis consequatur voluptatibus, incidunt aut, officia et autem rem
        rerum nobis assumenda natus cupiditate.
      </p>
    </ScheduleItem>
  </div>
));
