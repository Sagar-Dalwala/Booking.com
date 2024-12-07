import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const BookingNavigationButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default BookingNavigationButton;
