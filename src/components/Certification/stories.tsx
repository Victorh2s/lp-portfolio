import { Meta, Story } from '@storybook/react/types-6-0';
import { Certification, CertificationProps } from '.';

export default {
  title: 'Certification',
  component: Certification,
  args: {
    href: 'https://www.udemy.com/certificate/UC-fcc76692-e6f8-4c7a-a71b-7e36dce27413/',
  },
} as Meta<CertificationProps>;

export const Template: Story<CertificationProps> = (args) => {
  return (
    <div>
      <Certification {...args} />
    </div>
  );
};
