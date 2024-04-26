"use client";
import { useFormStatus } from "react-dom";

export function ClaimCodeForm() {
  const { pending } = useFormStatus();
  // overlay a loading spinner over the form

  if (pending) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-t-2 border-b-2 border-accent-foreground"></div>
      </div>
    );
  }

  return (
    <>
      <input
        type="text"
        name="claimCode"
        className="max-w-[300px] flex-1"
        placeholder="Enter claim code"
      />
      <button type="submit" disabled={pending}>Claim Photos</button>
    </>
  );
}
