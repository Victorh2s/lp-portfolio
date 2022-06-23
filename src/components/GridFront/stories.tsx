import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { GridFront } from '.';

export default {
  title: 'GridFront',
  component: GridFront,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <GridFront {...args} />
      </SectionBackground>
    </div>
  );
};
