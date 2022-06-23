import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { GridCourses } from '.';

export default {
  title: 'GridCourses',
  component: GridCourses,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <GridCourses {...args} />
      </SectionBackground>
    </div>
  );
};
