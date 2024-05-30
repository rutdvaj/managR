"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProvider, useUser } from "../authorization";
import { account, ID } from "../../appwrite";

export function LoginCard() {
  const { login, logout, loggedInUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    await login(email, password);
    if (loggedInUser !== null) {
      router.push("../../dashboard2");
    }
    // Additional logic after successful login
  };
  const handleLogout = async () => {
    await logout();
    // Additional logic after successful logout
  };
  useEffect(() => {
    // Check if the user is logged in and the login button has been clicked
    if (loggedInUser) {
      // Redirect to the main dashboard page
      router.push("../../dashboard2");
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser]);
  console.log(loggedInUser);
  return (
    <>
      <UserProvider>
        <div className="test">
          <Card className="w-[550px]">
            <CardHeader>
              <CardTitle className="font--poppins font-bold text-4xl">
                Login
              </CardTitle>
              <CardDescription>
                Login to your account to gain access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input
                      id="name"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Password</Label>
                    <Input
                      id="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => handleLogout()}>
                Logout
              </Button>
              <Button type="button" onClick={() => handleLogin()}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </UserProvider>
    </>
  );
}

export default LoginCard;
