import * as motion from "motion/react-client";

export default function Keyframes() {
  return (
    <motion.img 
      className="mx-5"
      src="/logo-sem-fundo-devfreeti2.svg"
      alt="Logo DevFree T I"
      animate={{
        scale: [1.5, 1.5, 1, 1, 1.5],
        rotate: [0, 15, 30, 180, 360],
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
  width: 100,
  height: 100,
};
