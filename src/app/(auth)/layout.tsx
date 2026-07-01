import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      {children}
    </div>
  );
};

export default AuthLayout;
