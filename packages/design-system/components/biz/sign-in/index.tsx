"use client"

import { Button } from "@surgeteam/design-system/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@surgeteam/design-system/components/ui/card";
import { Input } from "@surgeteam/design-system/components/ui/input";
import { Label } from "@surgeteam/design-system/components/ui/label";
import { useState } from "react";
import { Loader2, Key } from "lucide-react";
import { signIn } from '@surgeteam/auth/better-auth/client';
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          <Button
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={async () => {
                await signIn.email(
                {
                    email,
                    password
                },
                {
                  onRequest: (ctx) => {
                    setLoading(true);
                  },
                  onResponse: (ctx) => {
                    setLoading(false);
                  },
                  onSuccess: (ctx) => {
                    console.log("*** Better Auth Success");
                    window.location.href = "/zh";
                  },
                  onError: (ctx) => {
                    console.log(ctx.error.message);
                  },
                },
                );
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p> Login </p>
              )}
              </Button>

          

          
        </div>
      </CardContent>
      
    </Card>
  );
}