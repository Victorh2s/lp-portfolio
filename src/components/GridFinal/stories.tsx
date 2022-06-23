import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { GridFinal } from '.';

export default {
  title: 'GridFinal',
  component: GridFinal,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <GridFinal {...args} />
      </SectionBackground>
    </div>
  );
};
