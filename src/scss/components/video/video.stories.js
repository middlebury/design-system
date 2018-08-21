import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

// addDecorator(story => <div style={{ maxWidth: 640 }}>{story()}</div>);

storiesOf('video', module).add('video', () => (
  <figure
    className="video js-video"
    data-video="<iframe src=&quot;https://player.vimeo.com/video/221201240&quot; width=&quot;400&quot; height=&quot;225&quot; frameborder=&quot;0&quot; webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
  >
    <div className="video__content js-video-content">
      <a
        href="https://player.vimeo.com/video/221201240"
        className="js-video-link"
      >
        <img
          src="https://i.vimeocdn.com/video/639399875_640.jpg"
          srcSet="https://i.vimeocdn.com/video/639399875_640.jpg 640w, https://i.vimeocdn.com/video/639399875_200x150.jpg 200w, https://i.vimeocdn.com/video/639399875_100x75.jpg 100w"
          sizes="(max-width: 640px) 100vw, 640px"
          alt=""
        />
        <span className="button button--primary video__button">
          Play
          <span className="ml-3">
            <svg className="icon icon--sm">
              <use xlinkHref="#icon-play" />
            </svg>
          </span>
        </span>
      </a>
    </div>
    <figcaption className="video__body">
      <h3 className="video__title">Practical Skills for Positive Change</h3>
      <p className="video__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        viverra aliquet lacus a tristique. Suspendisse commodo pulvinar nisi vel
        laoreet. Pellentesque id hendrerit velit, vitae consectetur libero.
      </p>
      <div className="transcript js-transcript-1">
        <a
          href="#midd-video-1"
          className="transcript__button"
          data-toggle-target=".js-transcript-1"
          aria-label="Toggle transcript"
          aria-expanded="false"
        >
          Transcript
          <svg className="transcript__icon icon icon--sm">
            <use xlinkHref="#icon-chevron-down" />
          </svg>
        </a>
        <div className="transcript__body" id="midd-video-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quo
            error nesciunt unde magni, vitae ea in vero mollitia porro beatae a
            temporibus iure excepturi aspernatur dolores iste, dignissimos aut?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quo
            error nesciunt unde magni, vitae ea in vero mollitia porro beatae a
            temporibus iure excepturi aspernatur dolores iste, dignissimos aut?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quo
            error nesciunt unde magni, vitae ea in vero mollitia porro beatae a
            temporibus iure excepturi aspernatur dolores iste, dignissimos aut?
          </p>
        </div>
      </div>
    </figcaption>
  </figure>
));
