/* eslint-disable react/prop-types */
import { Select } from "@material-tailwind/react";

const SelectOptions = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};

export default SelectOptions;
