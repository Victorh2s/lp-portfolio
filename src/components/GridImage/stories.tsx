import { Meta, Story } from '@storybook/react/types-6-0';
import { GridImage } from '.';

export default {
  title: 'GridImage',
  component: GridImage,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
