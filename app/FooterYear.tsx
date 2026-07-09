"use client";

import { useState } from "react";

export function FooterYear() {
  const [year] = useState(() => new Date().getFullYear());

  return <span suppressHydrationWarning>{year}</span>;
}
