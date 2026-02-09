"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Responsive translation values - smaller on mobile
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 50]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="pb-20 sm:pb-40 overflow-hidden antialiased bg-background relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* First Row - Hidden on small mobile, visible on larger screens */}
        <motion.div className="hidden sm:flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-10 md:mb-20 overflow-x-auto sm:overflow-visible px-4 sm:px-0 scrollbar-hide">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Mobile: Show stacked cards instead of parallax rows */}
        <div className="sm:hidden px-4 space-y-4">
          {products.slice(0, 4).map((product) => (
            <MobileProductCard product={product} key={product.title} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 md:py-40 px-4 sm:px-6 w-full left-0 top-0">
      <motion.h1
        className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Crafting Spaces <br className="hidden sm:block" />
        That <span className="text-gradient">Inspire</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl text-base sm:text-lg md:text-xl mt-6 sm:mt-8 text-muted-foreground font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Award-winning architecture studio blending innovation with timeless design.
        From concept to creation, we shape environments that define the future.
      </motion.p>

      {/* Category Pills */}
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {["Architecture", "Interiors", "Furniture"].map((category) => (
          <Link
            key={category}
            href={`/${category.toLowerCase()}`}
            className="px-4 py-2 rounded-full border border-border/50 text-sm font-body text-muted-foreground hover:bg-foreground hover:text-background hover:border-transparent transition-all duration-300"
          >
            {category}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-60 sm:h-64 sm:w-80 md:h-96 md:w-[30rem] relative shrink-0 rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full w-full"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 480px"
          className="object-cover object-center"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h2 className="text-white font-display font-semibold text-lg">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};

// Mobile-optimized product card
const MobileProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-48 rounded-xl overflow-hidden"
    >
      <Link href={product.link} className="block h-full w-full">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white font-display font-semibold text-lg">
            {product.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
