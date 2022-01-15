import React from "react";
import Breadcump from "../../Partials/Breadcump";

export default function Home() {
  const breadcrumb = [{ name: "Home" }];
  return (
    <>
      <Breadcump items={breadcrumb} />
      <h1>Home</h1>
    </>
  );
}
