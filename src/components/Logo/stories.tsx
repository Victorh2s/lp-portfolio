import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo, LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    srcimg:
      'https://images.unsplash.com/photo-1652859921778-d9bfa8fca10d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTc4NDYzNw&ixlib=rb-1.2.1&q=80&w=360',
  },
} as Meta<LogoProps>;

export const Template: Story<LogoProps> = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  );
};
