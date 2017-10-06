import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Footer from '../components/Footer'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

  storiesOf('Greeting', module)
    .add('Blank',
        () => <Greeting></Greeting>
    )
    .add('With Message', ()=> <Greeting msg="World"></Greeting>);
  
    storiesOf('Header', module)
        .add('Example Header',
        () => <Header></Header>
    )

    storiesOf('Footer', module)
        .add('Example footer',
        () => <Footer></Footer>
        )
        .add('Footer with title ',
            () => <Footer title="Sarath"/>
        )