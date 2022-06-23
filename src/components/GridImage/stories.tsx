import { Meta, Story } from '@storybook/react/types-6-0';
import { GridImage } from '.';
import mock from '../../templates/Home/mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
