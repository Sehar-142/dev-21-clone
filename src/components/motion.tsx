"use client";

import { HTMLMotionProps, motion as framerMotion } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

export function motion({
  children,
  ...props
}: MotionDivProps) {
  return (
    <framerMotion.div {...props}>
      {children}
    </framerMotion.div>
  );
}

motion.div = framerMotion.div;
motion.h1 = framerMotion.h1;
motion.h2 = framerMotion.h2;
motion.p = framerMotion.p;
motion.span = framerMotion.span;
motion.ul = framerMotion.ul;
motion.li = framerMotion.li;
motion.a = framerMotion.a;
motion.img = framerMotion.img;
motion.header = framerMotion.header