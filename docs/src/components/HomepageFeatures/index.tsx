import clsx from "clsx";
import Heading from "@theme/Heading";
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from "./styles.module.css";

/**
 * The FeatureItem type is defined by {title, description, image}
 */
type FeatureItem = {
  title: string;
  imagePath: string;
  description: JSX.Element;
};

/**
 * FeatureItem dataset is loaded from 
 * the 'src/data/feature-items.json' file
 */
const FeatureList: FeatureItem[] =
  require("./../../data/feature-items.json");


/**
 * Each FeatureItem is rendered in one column of a "row" container 
 * The row is set to be responsive with 3 items per row. 
 * Code was refactored with Copilot to replace Svg with img
 */
function Feature({ title, imagePath, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={useBaseUrl(imagePath)} className={styles.featureImg} alt={title} />{" "}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

/**
 * HomepageFeatures component renders a container for FeatureItems
 * in the homepage of the site. The container renders items in rows
 * with 3 items per row - using data loaded from 'feature-items.json'
 */
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
