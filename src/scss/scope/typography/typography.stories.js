import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('typography', module).add('typography', () => (
  <div className="typography">
    <h1>This is a heading level 1</h1>
    <p>
      Lorem ipsum <strong>bold text dolor sit</strong> amet consectetur
      adipisicing elit. Deserunt consequatur magnam est ipsam magni atque ea
      corrupti, <a href="">link voluptatum eveniet</a> labore nemo voluptatem
      temporibus repellendus vero <em>eos cumque</em> accusantium velit
      laboriosam!
    </p>

    <h2>This is a heading level 2</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      consequatur magnam est ipsam magni atque ea corrupti, voluptatum eveniet
      labore nemo voluptatem temporibus repellendus vero eos cumque accusantium
      velit laboriosam!
    </p>

    <h3>This is a heading level 3</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      consequatur magnam est ipsam magni atque ea corrupti, voluptatum eveniet
      labore nemo voluptatem temporibus repellendus vero eos cumque accusantium
      velit laboriosam!
    </p>

    <h4>This is a heading level 4</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      consequatur magnam est ipsam magni atque ea corrupti, voluptatum eveniet
      labore nemo voluptatem temporibus repellendus vero eos cumque accusantium
      velit laboriosam!
    </p>

    <h5>This is a heading level 5</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      consequatur magnam est ipsam magni atque ea corrupti, voluptatum eveniet
      labore nemo voluptatem temporibus repellendus vero eos cumque accusantium
      velit laboriosam!
    </p>

    <h6>This is a heading level 6</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      consequatur magnam est ipsam magni atque ea corrupti, voluptatum eveniet
      labore nemo voluptatem temporibus repellendus vero eos cumque accusantium
      velit laboriosam!
    </p>

    <blockquote>
      <p>
        Blockquote with paragraph tags. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus adipisci totam at. Temporibus omnis est
        illum at quasi obcaecati impedit amet non. Voluptatem enim perspiciatis
        recusandae doloremque labore fugiat quae.
      </p>
    </blockquote>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci sint
      consequuntur dicta. Nemo illum quae iure deleniti necessitatibus
      repellendus, repellat nam, quasi ex perferendis impedit, odit accusamus
      cumque incidunt.
    </p>

    <blockquote>
      Blockquote without paragraph tags. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur, officiis numquam enim ipsum a repellendus
      fuga provident animi dicta deserunt perspiciatis facere, corrupti omnis
      suscipit ea ducimus vitae modi autem?
    </blockquote>

    <h2>Ordered list</h2>
    <ol>
      <li>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vel
        aliquam modi alias cumque beatae enim minus incidunt iusto perferendis
        odio quam officiis autem, quo magni tenetur assumenda nostrum dicta.
      </li>
      <li>
        Inventore, doloribus cumque mollitia tenetur soluta velit aut aliquid
        praesentium fugit eius enim repellendus itaque. Voluptas obcaecati id
        aspernatur tempore dolor, minima architecto autem dolorum tempora
        maxime, dolore iure asperiores?
      </li>
      <li>
        Tempore beatae, quia, reprehenderit architecto porro dolore voluptate
        soluta necessitatibus sequi atque consequatur recusandae rem perferendis
        libero deserunt. Provident repellat laboriosam temporibus magnam ipsum
        cum totam minus beatae ea labore.
      </li>
    </ol>

    <h3>Unordered list</h3>
    <ol>
      <li>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo velit
          voluptatibus fugiat? Adipisci placeat assumenda repellendus porro
          dolores nobis, ab facilis qui iure mollitia! Accusamus dolorum alias
          obcaecati illo nam?
        </p>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </li>
      <li>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo velit
          voluptatibus fugiat? Adipisci placeat assumenda repellendus porro
          dolores nobis, ab facilis qui iure mollitia! Accusamus dolorum alias
          obcaecati illo nam?
        </p>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </li>
      <li>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo velit
          voluptatibus fugiat? Adipisci placeat assumenda repellendus porro
          dolores nobis, ab facilis qui iure mollitia! Accusamus dolorum alias
          obcaecati illo nam?
        </p>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </li>
    </ol>

    <h2>Definition list</h2>
    <dl>
      <dt>Term 1</dt>
      <dd>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        consequatur reprehenderit fuga repudiandae ipsum animi aut odio ipsa
        deserunt unde, expedita alias accusamus iusto illo quam perspiciatis cum
        quo quas!
      </dd>
      <dt>Term 2</dt>
      <dd>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        consequatur reprehenderit fuga repudiandae ipsum animi aut odio ipsa
        deserunt unde, expedita alias accusamus iusto illo quam perspiciatis cum
        quo quas!
      </dd>
      <dt>Lorem ipsum dolor sit amet, consectetur adipiscing</dt>
      <dd>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        consequatur reprehenderit fuga repudiandae ipsum animi aut odio ipsa
        deserunt unde, expedita alias accusamus iusto illo quam perspiciatis cum
        quo quas!
      </dd>
    </dl>

    <h2>Tables</h2>
    <table>
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
      </tbody>
    </table>
  </div>
));
