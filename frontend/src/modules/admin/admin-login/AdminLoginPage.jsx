import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useSignIn } from "../../../hooks/auth/useSignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContextProvider";

const AdminLoginPage = () => {
  const naviagate = useNavigate();

  const { setAuthUser } = useAuthContext();
  const { signIn, isLoading, error } = useSignIn();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      return;
    }

    const user = await signIn(data.email, data.password);

    setAuthUser(user);

    if (user) {
      naviagate("/admin");
    } else {
      naviagate("/admin/login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-booking">
      <Card
        color="transparent"
        shadow={false}
        className="mx-auto w-full max-w-[24rem] bg-white p-4 px-6 shadow-lg"
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography className="mt-1 font-normal" color="gray">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-auto max-w-screen-lg "
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3" color="blue-gray">
              Your Email
              <span className="text-red-500 ms-1">{!data.email && "*"}</span>
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-blue-gray-400 focus:!border-blue-gray-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
              <span className="text-red-500 ms-1">{!data.password && "*"}</span>
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-blue-gray-400 focus:!border-blue-gray-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <Button
            className="mt-6 bg-secondary hover:bg-opacity-90 hover:shadow-lg"
            fullWidth
            type="submit"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
