import { useState } from "react";
import useAuth from "@/features/authentication/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await login(email, password);
    if (!user) {
      alert("Login failed");
    } else {
      alert("Login success");
    }
  };

  return (
    <div className={"flex flex-col gap-4 w-full max-w-md mx-auto"}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
