import * as motion from "motion/react-client";

export default function Keyframes() {
  return (
    <motion.img
      className="mx-5"
      src="/logo-devfreeti.svg"
      alt="Logo DevFree T I"
      animate={{
        scale: [1.5, 1.5, 1.2, 1.2, 1.5],
        rotate: [0, 0, 10, -10, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      style={logoStyle}
    />
  );
}

const logoStyle = {
  width: 40,
  height: 40,
};
