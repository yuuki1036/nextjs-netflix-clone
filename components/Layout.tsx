import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-black text-white">
      <main>{children}</main>
    </div>
  );
};
