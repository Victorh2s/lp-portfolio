import { Meta, Story } from '@storybook/react/types-6-0';
import { TextGrid, TextGridProps } from '.';

export default {
  title: 'TextGrid',
  component: TextGrid,
  args: { children: 'testando aqui' },
} as Meta<TextGridProps>;

export const Template: Story<TextGridProps> = (args) => {
  return (
    <div>
      <TextGrid {...args} />
    </div>
  );
};
