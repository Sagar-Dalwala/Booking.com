/* eslint-disable react/prop-types */
import { Tooltip } from "@material-tailwind/react";

const ActionTooltip = ({ children, ...props }) => {
  return (
    <Tooltip
      content={props.content}
      // animate={{
      //   mount: { scale: 1, y: 0 },
      //   unmount: { scale: 0, y: 10 },
      // }}
      placement={props.placement}
      disabled={props.disabled}
    >
      {children}
    </Tooltip>
  );
};

export default ActionTooltip;
