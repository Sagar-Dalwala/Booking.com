import  { useState, useEffect } from "react";
import { useAuth, useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // const { isSignedIn } = useAuth();
  const { signIn, setActive } = useSignIn();

  const { signOut } = useAuth();

  // Call signOut before starting the reset flow
  useEffect(() => {
    signOut();
  }, [signOut]);

  // Handle redirect after signing in
  // useEffect(() => {
  //   if (isSignedIn) {
  //     navigate('/');
  //   }
  // }, [isSignedIn, navigate]); // Dependencies ensure this runs only when `isSignedIn` or `navigate` changes

  // if (!signIn) {
  //   return <p>Loading...</p>;
  // }

  // Send the password reset code to the user's email
  async function create(e) {
    e.preventDefault();
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setSuccessfulCreation(true);
      setError("");
    } catch (err) {
      console.error(
        "Error:",
        err.errors[0]?.longMessage || "An error occurred"
      );
      setError(err.errors[0]?.longMessage || "An error occurred");
    }
  }

  // Reset the user's password
  async function reset(e) {
    e.preventDefault();
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      });

      // Check if 2FA is required
      if (result.status === "needs_second_factor") {
        setSecondFactor(true);
        setError("");
      } else if (result.status === "complete") {
        // Set the active session to the newly created session (user is now signed in)
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (err) {
      console.error(
        "Error:",
        err.errors[0]?.longMessage || "An error occurred"
      );
      setError(err.errors[0]?.longMessage || "An error occurred");
    }
  }

  return (
    <div style={{ margin: "auto", maxWidth: "500px" }}>
      <h1>Forgot Password?</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
        onSubmit={!successfulCreation ? create : reset}
      >
        {!successfulCreation && (
          <>
            <label htmlFor="email">Provide your email address</label>
            <input
              type="email"
              placeholder="e.g john@doe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send password reset code</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </>
        )}

        {successfulCreation && (
          <>
            <label htmlFor="password">Enter your new password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">
              Enter the password reset code sent to your email
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit">Reset</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </>
        )}

        {secondFactor && (
          <p>2FA is required, but this UI does not handle that yet.</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
