import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { GridAcademic } from '.';

export default {
  title: 'GridAcademic',
  component: GridAcademic,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <GridAcademic {...args} />
      </SectionBackground>
    </div>
  );
};
