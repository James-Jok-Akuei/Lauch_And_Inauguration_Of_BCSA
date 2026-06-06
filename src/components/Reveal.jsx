import { motion, useReducedMotion } from "framer-motion";

/* Reveal — the single entrance primitive used across the site.
 * A restrained fade + small upward translate as the element scrolls into view.
 * Honors prefers-reduced-motion (renders static, no transform) automatically.
 *
 * Props:
 *   delay  — stagger offset in seconds
 *   y      — initial vertical offset in px (default 24)
 *   as     — motion element tag (default "div")
 *   amount — fraction visible before triggering (default 0.4)
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  as = "div",
  amount = 0.4,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
