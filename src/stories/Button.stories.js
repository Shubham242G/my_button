// Button.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['Default', 'Neutral', 'Reverse'],
      },
    },
    display: {
      control: {
        type: 'inline-radio',
        options: ['icon', 'text', 'both'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Default',
  label: 'Default Button',
  icon: <i className="fas fa-check" />,
  display: 'both',
  onClick: action('clicked'),
};

export const Neutral = Template.bind({});
Neutral.args = {
  type: 'Neutral',
  label: 'Neutral Button',
  icon: <i className="fas fa-times" />,
  display: 'both',
  onClick: action('clicked'),
};

export const Reverse = Template.bind({});
Reverse.args = {
  type: 'Reverse',
  label: 'Reverse Button',
  icon: <i className="fas fa-exclamation-circle" />,
  display: 'both',
  onClick: action('clicked'),
};
