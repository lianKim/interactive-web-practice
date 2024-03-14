import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SECTION_LIST = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Skills",
  },
  {
    id: 3,
    title: "Interests",
  },
  {
    id: 4,
    title: "Education",
  },
  {
    id: 4,
    title: "Works",
  },
];

export default function SectionsParallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {SECTION_LIST.map((section) => (
        <Section id={section.id} title={section.title} key={section.id}>
          Lorem ipsum dolor sit amet,
        </Section>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

function Section({ id, title, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Wrapper>
      <Container ref={ref}>
        <Content>{children}</Content>
      </Container>
      <motion.h2 className="section-title" style={{ y }}>
        {title}
      </motion.h2>
    </Wrapper>
  );
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Wrapper = styled.section`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  background-color: tomato;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  padding: 20px;
  color: white;
`;
