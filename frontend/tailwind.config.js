/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import { fontFamily } from "tailwindcss/defaultTheme";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        booking: ['"BookingRegular"', ...fontFamily.sans], // Default font stack as fallback
        bookingBold: ['"BookingBold"', ...fontFamily.sans],
        bookingExtraBold: ['"BookingExtraBold"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
});
