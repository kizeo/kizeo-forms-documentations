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
        Kizeo Forms Documentation
        <small>
          Fonctionnalités avancées pour developpeurs
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
            <Button href={docUrl('installation.html')}>Connecteur Kizeo</Button>
            <Button href={docUrl('restv3.html')}>Intégration API</Button>
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
            content:
            `Afin d’offrir à nos clients une **solution intermédiaire**, nous avons développé un **connecteur** en **JAVA**. <br/> Une fois ce connecteur configuré et mis-en-place sur un de vos serveurs, dès qu’une nouvelle donnée sera finalisée sur Kizeo Forms, vous pourrez **automatiquement récupérer** les **médias** et les **PDFs** correspondants sur votre serveur. Vous pourrez même automatiquement **récupérer** et **insérer** la donnée dans **votre base de données**.`,
            image: `${baseUrl}img/kizeo-connector2.svg`,
            imageAlign: 'right',
            title: "Connecteur Kizeo (Base de données/Médias)",
          },
        ]}
      </Block>
    );

    const WebService = () => (
      <Block background="dark" className="rightBlockContent">
        {[
          {
            content: 
            `Pour des **développements plus lourds** avec un processus plus complexe, mais offrant des **possibilités** bien **plus larges**, nous avons mis en place un **Web Service REST**. <br/> Déjà disponible dans sa troisième version, notre Web Service permet de manipuler l’ensemble de vos données Kizeo Forms ; le tout de manière sécurisée à l’aide du **protocole TLS**. <br/> Nous pouvons bien entendu vous donner nos conseils concernant l’usage de notre Web Service, en fonction des disponibilités et des compétences respectives de nos développeurs. Actuellement, nos compétences internes permettent de vous fournir des exemples dans les langages de programmation suivant : PHP, Javascript, Java. <br/> Mais, vous pouvez évidemment développer avec un autre langage à partir du moment où celui-ci est capable d’effectuer des **requêtes HTTPS**.`,
            image: `${baseUrl}img/kizeo-api2.svg`,
            imageAlign: 'left',
            title: "Intégration API (Web Service REST)",
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
            Ils nous font confiance au quotidien</h2>
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
