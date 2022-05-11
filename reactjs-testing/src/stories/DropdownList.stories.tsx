import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropdownList } from "src/components/DropdownList";

export default {
  id: "Example/DropdownList",
  title: "Example/DropdownList",
  component: DropdownList,
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => <DropdownList {...args} />;

export const DropdownPrimary = Template.bind({});
DropdownPrimary.args = {
  data: [
    { value: "1", label: "Item 1" },
    { value: "2", label: "Item 2" },
    { value: "3", label: "Item 3" },
    { value: "4", label: "Item 4" },
    { value: "5", label: "Item 5" },
  ],
  labels: { show: "Show Data", hide: "Hide Data" },
};
