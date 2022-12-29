import { animated, useSpring } from "@react-spring/web";

function Animate() {
  const [buttonAnimationStyles, api] = useSpring(() => {
    return {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    };
  });

  return (
    <main>
      <animated.button
        onClick={() => {
          console.log("clicked...");
          api.start({
            from: {
              x: 0,
            },
            to: {
              x: 100,
            },
          });
        }}
        style={{ ...buttonAnimationStyles }}
      >
        Animated Button...
      </animated.button>
    </main>
  );
}

export default Animate;
