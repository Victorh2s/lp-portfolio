import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from '../SectionBackground';
import { TwoColumns } from '.';

export default {
  title: 'TwoColumns',
  component: TwoColumns,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <TwoColumns {...args} />
      </SectionBackground>
    </div>
  );
};
