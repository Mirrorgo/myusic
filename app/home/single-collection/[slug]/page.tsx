import { Suspense } from "react";
import Back from "./components/back";
import Main from "./components/main";

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
