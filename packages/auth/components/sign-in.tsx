// import { SignIn as ClerkSignIn } from "@clerk/nextjs";

// export const SignIn = () => (
//   <ClerkSignIn
//     appearance={{
//       elements: {
//         header: "hidden",
//       },
//     }}
//   />
// );
"use client";
import { signIn } from '../better-auth/client';
import { useState } from 'react';
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn.email({
          email,
          password,
        })
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  );
}