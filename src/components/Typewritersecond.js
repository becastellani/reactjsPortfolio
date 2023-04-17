import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function TypewriterComponent(props) {
  const textRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(textRef.current, {
      loop: props.loop || false,
      delay: props.delay || 100,
      deleteSpeed: props.deleteSpeed || 50,
    });

    props.texts.forEach(text => {
      typewriter.typeString(text);

      if (props.pause) {
        typewriter.pauseFor(props.pause);
      }

      if (props.delete) {
        typewriter.deleteChars(props.delete);
      }
      
      if (props.delay) {
        typewriter.pauseFor(props.delay);
      }
    });

    typewriter.start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return <div ref={textRef} />;
}

export default TypewriterComponent;