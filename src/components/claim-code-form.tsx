"use client";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function ClaimCodeForm() {
  const { pending } = useFormStatus();
  // overlay a loading spinner over the form

  if (pending) {
    return (
      <p className="text-center">
        Please wait while we check your claim code...
      </p>
    );
  }

  return (
    <>
      <Input
        type="text"
        name="claimCode"
        className="max-w-[300px] flex-1"
        placeholder="Enter claim code"
      />
      <Button type="submit" disabled={pending}>
        Claim Photos
      </Button>
    </>
  );
}
