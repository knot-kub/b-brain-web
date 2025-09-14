import { AuthProvider } from "@/context/AuthContext";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div>{children}</div>
    </AuthProvider>
  );
}
