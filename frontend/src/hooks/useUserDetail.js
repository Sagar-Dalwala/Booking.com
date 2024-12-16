import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const useUserDetail = () => {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return navigate("/signin");
  }

  console.log(user);

  // Example: Extract user details
  const userId = user?.id;
  const email = user?.primaryEmailAddress?.emailAddress;

  console.log("User ID:", userId, "Email:", email);

  return {
    user,
  };
};

export default useUserDetail;
