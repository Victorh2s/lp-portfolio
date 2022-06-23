import { Meta, Story } from '@storybook/react/types-6-0';
import { GridText } from '.';

export default {
  title: 'GridText',
  component: GridText,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
