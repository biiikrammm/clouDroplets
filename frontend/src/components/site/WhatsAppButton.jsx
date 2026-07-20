import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "919911159883";
const MESSAGE = encodeURIComponent(
  "Hi clouDroplets — I'd like to learn more about your Cloud & Security solutions."
);
const HREF = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export const WhatsAppButton = () => {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="whatsapp-float-button"
          aria-label="Chat with clouDroplets on WhatsApp"
          onMouseEnter={() => setTip(true)}
          onMouseLeave={() => setTip(false)}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="fixed bottom-6 right-6 z-[120] flex items-center gap-3 group"
        >
          <AnimatePresence>
            {tip && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="hidden sm:block rounded-full bg-ink text-cream px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
              <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.402L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.752-9.056A12.72 12.72 0 0 0 16.004 3.2Zm0 23.03h-.004a10.6 10.6 0 0 1-5.4-1.48l-.388-.23-4.028 1.056 1.075-3.926-.253-.403a10.56 10.56 0 0 1-1.62-5.647c0-5.86 4.77-10.63 10.63-10.63a10.56 10.56 0 0 1 7.516 3.115 10.56 10.56 0 0 1 3.114 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.958c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.736-.987-2.376-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.147 3.093 1.307 3.306.16.213 2.253 3.44 5.46 4.826.763.33 1.36.526 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
