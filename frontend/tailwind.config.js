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
      colors: {
        primary: "#003b94",
        secondary: "#1d4ed8",
        tertiary: "#1d4ed8",
        quaternary: "#f6f6f6",
      },
    },
  },
  plugins: [],
});
