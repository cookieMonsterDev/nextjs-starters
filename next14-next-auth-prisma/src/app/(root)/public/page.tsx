import getCurrentUser from "@/actions/getCurrentUser";
import { Suspense } from "react";
import CompOne from "./components/comp-one";
import CompTwo from "./components/comp-two";

const Public = async () => {
  const user = await getCurrentUser();

  return (
    <div>
      {JSON.stringify(user)}
      <h1>TEST Page loading</h1>
      <Suspense fallback={<div>loading 5 sec...</div>}>
        <CompOne />
      </Suspense>
      <Suspense fallback={<div>loading 10 sec...</div>}>
        <CompTwo />
      </Suspense>
    </div>
  );
};

export default Public;
