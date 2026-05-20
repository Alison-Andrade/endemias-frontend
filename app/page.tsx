import { Suspense } from "react";
import LoginForm from "./ui/login-form";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative mx-auto w-full max-w-md flex-col space-y-2.5 md:-mt-32">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
