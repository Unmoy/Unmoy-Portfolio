import gsap from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    width: 0,
    transformOrigin: "left top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    width: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Hover on the link
export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut",
  });
};

// Hover off the link
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut",
  });
};

// adds social color once you hover on
export const handleCity = (color, target) => {
  gsap.to(target, {
    duration: 0,
    background: `${color}`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top",
  });
};

// Removes the city image once you hover off
export const handleCityReturn = (target) => {
  gsap.to(target, {
    duration: 0,
    skewY: 0,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0,
  });
};