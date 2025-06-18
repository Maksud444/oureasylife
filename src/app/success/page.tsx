import { Suspense } from "react";
import SuccessContent from "./SuccessContent"; // Make sure this path is correct

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
