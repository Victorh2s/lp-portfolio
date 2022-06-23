import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { GridBack, GridBackProps } from '.';

export default {
  title: 'GridBack',
  component: GridBack,
} as Meta<GridBackProps>;

export const Template: Story<GridBackProps> = (args) => {
  return (
    <div>
      <SectionBackground>
        <GridBack {...args} />
      </SectionBackground>
    </div>
  );
};
