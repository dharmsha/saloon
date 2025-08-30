"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Jab loading chal rahi ho tab bas ek spinner/text dikhao
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-pink-600 font-semibold">Loading...</p>
      </div>
    );
  }

  // Agar user nahi hai to login pe bhej do
  if (!user) {
    useEffect(() => {
      router.push("/login");
    }, [router]);
    return null;
  }

  // Agar user hai to children show karo
  return children;
}
