import { FC } from "react";
import Head from "next/head";
import { META_DESCRIPTION, SITE_NAME } from "lib/constants";

export const MyHead: FC = () => {
  return (
    <Head>
      <title>{SITE_NAME}</title>
      <meta name="description" content={META_DESCRIPTION} />
    </Head>
  );
};
