import clsx from 'clsx';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/docusaurus_mountain.svg').default,
    description: (
      <>
        Effortlessly integrate with KvFnB using intuitive Open API, SDKs, and clear documentation designed to simplify development for any use case.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/docusaurus_tree.svg').default,
    description: (
      <>
        Streamline integration with KvFnB's tools, so you can focus on building features and improving experiences.
      </>
    ),
  },
  {
    title: 'Powered by KiotViet Developers',
    Svg: require('@site/static/img/docusaurus_react.svg').default,
    description: (
      <>
        Built by KiotViet Developers, our platform provides reliable, high-performance tools like Open API and SDKs to support seamless integration.
      </>
    ),
  },
];

function Feature({title, Svg, description, index}: FeatureItem & {index: number}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg viewBox="0 0 2300 1000" className={clsx(styles.featureSvg, styles[`image_${index}`])} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
