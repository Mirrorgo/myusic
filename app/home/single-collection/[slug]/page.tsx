import { Suspense } from "react";
import Main from "./components/main";
import Back from "./components/back";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Back />
      My Page: {params.slug}
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </div>
  );
}
