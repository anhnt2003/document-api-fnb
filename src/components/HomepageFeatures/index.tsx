import clsx from 'clsx';
import { motion } from 'framer-motion';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/docusaurus_mountain.svg").default,
    description: (
      <>
        Effortlessly integrate with KvFnB using intuitive Open API, SDKs, and clear documentation designed to simplify development for any use case.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/docusaurus_tree.svg").default,
    description: (
      <>
        Streamline integration with KvFnB's tools, so you can focus on building features and improving experiences.
      </>
    ),
  },
  {
    title: "Powered by KiotViet Developers",
    Svg: require("@site/static/img/docusaurus_react.svg").default,
    description: (
      <>
        Built by KiotViet Developers, our platform provides reliable, high-performance tools like Open API and SDKs to support seamless integration.
      </>
    ),
  },
];

const animations = [
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
];

function Feature({ title, Svg, description, index }: FeatureItem & { index: number }) {
  return (
    <motion.div
      className={clsx(styles["card"], "col col--4")}
      initial="hidden"
      animate="visible"
      variants={animations[index]} // Áp dụng animation theo index
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text--center">
        <Svg viewBox="0 0 2300 1000" className={clsx(styles.featureSvg, styles[`image_${index}`])} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
