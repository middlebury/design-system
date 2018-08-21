import React from 'react';
import { storiesOf } from '@storybook/react';

const AccordionItem = ({ id }) => (
  <div className="accordion-item">
    <h3
      className="accordion-item__title"
      id={`accordion-item-label-${id}`}
      role="tab"
    >
      <a
        href={`#accordion-content-${id}`}
        className="accordion-item__link"
        data-toggle-target={`.js-accordion-content-${id}`}
        aria-expanded="false"
        aria-controls={`accordion-content-${id}`}
      >
        <span className="accordion-item__label">Accordion item title {id}</span>

        <svg className="icon accordion-item__icon accordion-item__icon--open">
          <use xlinkHref="#icon-chevron-down" />
        </svg>

        <svg className="icon accordion-item__icon accordion-item__icon--close">
          <use xlinkHref="#icon-chevron-up" />
        </svg>
      </a>
    </h3>
    <div
      className={`accordion-item__content js-accordion-content-${id}`}
      id={`accordion-content-${id}`}
      role="tabpanel"
      aria-labelledby={`#accordion-item-label-${id}`}
    >
      <div className="typography">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          explicabo ad at. Expedita ducimus laudantium distinctio consectetur
          temporibus sint obcaecati consequatur necessitatibus, quia aliquam
          voluptates autem perspiciatis, fuga commodi animi.
        </p>
      </div>
    </div>
  </div>
);

storiesOf('accordion', module)
  .add('accordion', () => (
    <div className="accordion">
      <AccordionItem id={1} />
      <AccordionItem id={2} />
    </div>
  ))
  .add('accordion--faq', () => (
    <div className="accordion accordion--faq">
      <AccordionItem id={1} />
      <AccordionItem id={2} />
    </div>
  ))
  .add('accordion courselist', () => (
    <div className="accordion">
      <AccordionItem id={1} />
      <AccordionItem id={2} />
    </div>
  ));
