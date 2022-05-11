import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "src/components/Button";

export default {
  id: "Example/Button",
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: "Button",
};
