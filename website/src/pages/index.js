import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomeSplash() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeSplashFade}>
        <div className={clsx("wrapper", styles.homeWrapper)}>
          <div className="inner">
            <h2 className={styles.projectTitle}>
              <Translate>Kizeo Forms Documentations</Translate>
              <small>
                <Translate>Advanced features for developers</Translate>
              </small>
            </h2>
            <div className={styles.promoSection}>
              <div className={styles.pluginRowBlock}>
                <Link
                  className="button button--primary button--lg"
                  to={useBaseUrl("docs/installation")}
                >
                  <Translate>Kizeo Connector</Translate>
                </Link>
                <Link className="button button--primary button--lg" to={useBaseUrl("docs/restv3")}>
                  <Translate>Rest V3</Translate>
                </Link>
                <Link
                  className="button button--primary button--lg"
                  to={useBaseUrl("docs/deep-linking")}
                >
                  <Translate>Deep linking</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({ background, imageAlign, image, title, children }) {
  return (
    <div className={clsx(styles.block, background === "dark" && styles.darkBackground)}>
      <div className={clsx(styles.blockRow, imageAlign === "right" && styles.reverse)}>
        <div className={styles.blockImage}>
          <img src={useBaseUrl(image)} alt={title} />
        </div>
        <div className={styles.blockContent}>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  const { siteConfig } = useDocusaurusContext();
  const users = siteConfig.customFields.users || [];
  if (users.length === 0) {
    return null;
  }
  return (
    <div className={styles.showcaseSection}>
      <h2>
        <Translate>They trust us</Translate>
      </h2>
      <div className={styles.logos}>
        {users.map((user) => (
          <img
            key={user.caption}
            src={useBaseUrl(user.image)}
            alt={user.caption}
            title={user.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomeSplash />
      <main>
        <FeatureBlock
          background="light"
          imageAlign="right"
          image="img/kizeo-connector2.svg"
          title={translate({ message: "Kizeo connector (database/media)" })}
        >
          <Translate>
            {
              "In order to give our customers an intermediate solution, we developed a JAVA connector. Once this connector has been configured and installed on one of your server, as soon as a new data input is done on Kizeo Forms, you can automatically recover the corresponding media and PDFs on your server. You can even automatically recover and insert the data into your database."
            }
          </Translate>
        </FeatureBlock>
        <FeatureBlock
          background="dark"
          imageAlign="left"
          image="img/kizeo-api2.svg"
          title={translate({ message: "API (Web Service REST)" })}
        >
          <Translate>
            {
              "For larger developments, with more complex process but providing wider possibilities, you have our Web Service REST. Already available in its third version, our Web Service allows all of your Kizeo Forms data to be manipulated securely using the TLS protocol. We can give you advice on using our Web Service, depending on the availability and skill of our developers. Currently, our internal skills allow us to provide examples in the following programming languages: PHP, Javascript and Java. But you can, of course, develop in another language from when it is able to make HTTPS requests."
            }
          </Translate>
        </FeatureBlock>
        <Showcase />
      </main>
    </Layout>
  );
}
