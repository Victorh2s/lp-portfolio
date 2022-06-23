import { Meta } from '@storybook/react/types-6-0';
import { SectionBackground } from 'components/SectionBackground';
import { TitleGlitch } from '.';

export default {
  title: 'TitleGlitch',
  component: TitleGlitch,
} as Meta;

export const Template = () => {
  return (
    <div>
      <SectionBackground>
        <TitleGlitch />
      </SectionBackground>
    </div>
  );
};
