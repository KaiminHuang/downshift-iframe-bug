import React, { useState } from "react";

import {
  Dropdown,
  Field,
  Menu,
  Item,
  Select,
  Label
} from "@zendeskgarden/react-dropdowns";

const items = [
  { label: "Fern", value: "item-1" },
  { label: "Snake plant", value: "item-2" },
  { label: "Rubber tree", value: "item-3" }
];

export const GardenDropdown = ({ environment }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={(param) => {
        setSelectedItem(param);
      }}
      downshiftProps={{
        itemToString: (item) => item && item.label,
        environment
      }}
    >
      <Field>
        <Label>Houseplant</Label>
        <Select>{selectedItem.label}</Select>
      </Field>
      <Menu>
        {items.map((option) => (
          <Item key={option.value} value={option}>
            {option.label}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};
