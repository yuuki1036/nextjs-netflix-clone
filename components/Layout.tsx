import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="pb-10">
      <main>{children}</main>
    </div>
  );
};
