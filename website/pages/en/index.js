/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <translate>Kizeo Forms Documentations</translate>
        <small>
          <translate>Advanced features for developers</translate>
        </small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('installation.html')}><translate>Kizeo Connector</translate></Button>
            <Button href={docUrl('sharepoint.html')}><translate>SharePoint Connector</translate></Button>
            <Button href={docUrl('restv3.html')}><translate>Rest V3</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
          className="leftBlockContent"
        />
      </Container>
    );

    const KizeoConnector = () => (
      <Block background="light" className="leftBlockContent">
        {[
          {
            content: (
              <translate>
                In order to give our customers an **intermediate solution**, we developed a **JAVA connector**. Once this connector has been configured and installed on one of your server, as soon as a new data input is done on Kizeo Forms, you can **automatically recover** the corresponding **media** and **PDFs** on your server. You can even automatically **recover** and **insert** the **data** into your **database**.
              </translate>
              ),
            image: `${baseUrl}img/kizeo-connector2.svg`,
            imageAlign: 'right',
            title: <translate>Kizeo connector (database/media)</translate>,
          },
        ]}
      </Block>
    );

    const WebService = () => (
      <Block background="dark" className="rightBlockContent">
        {[
          {
            content: (
              <translate>For **larger developments**, with more complex process but providing **wider possibilities**, you have our **Web Service REST**. Already available in its third version, our Web Service allows all of your Kizeo Forms data to be manipulated securely using the **TLS protocol**. We can give you advice on using our Web Service, depending on the availability and skill of our developers. Currently, our internal skills allow us to provide examples in the following programming languages: PHP, Javascript and Java. But you can, of course, develop in another language from when it is able to make **HTTPS requests**.</translate>
            ),
            image: `${baseUrl}img/kizeo-api2.svg`,
            imageAlign: 'left',
            title: <translate>API (Web Service REST)</translate>,
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2 style={{marginTop:"1.5em!important"}}>
            <translate>They trust us</translate>
          </h2>
          <div className="logos">{showcase}</div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <KizeoConnector />
          <WebService />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
