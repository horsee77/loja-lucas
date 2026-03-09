"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    if (window.innerHeight < 650) return;

    if (!document.cookie.includes("welcome-toast=2")) {
      toast("🏁 Bem-vindo à Aston Horse!", {
        id: "welcome-toast",
        duration: 6000,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description:
          "Camisetas de automobilismo para quem vive a velocidade dentro e fora das pistas.",
      });
    }
  }, []);

  return null;
}