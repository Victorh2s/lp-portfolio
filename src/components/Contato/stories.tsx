import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground } from '../SectionBackground';
import { Contato } from '.';

export default {
  title: 'Contato',
  component: Contato,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SectionBackground>
        <Contato {...args} />
      </SectionBackground>
    </div>
  );
};
