import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  // Example: Extract user details
  const userId = user?.id;
  const email = user?.primaryEmailAddress?.emailAddress;

  console.log("User ID:", userId, "Email:", email);

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Dashboard;
