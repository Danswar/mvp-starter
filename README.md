# mvp-starter
A complete guide to implementing MVPs for the web

* [Motivation](#motivation)
* [Description of the scenerario for the use case](#description-of-the-scenerario-for-the-use-case)
* [High-level architecture and actors](#high-level-architecture-and-actors)
  * [Actors description](#actors-description)
  * [Frontpage composition](#frontpage-composition)
  * [Web application](#web-application)

## Motivation
Getting a web product up and running can be costly and time consuming if the entire infrastructure is built from scratch. In order for startups to test their ideas quickly there needs to be a reliable way to create products in a feasible time frame with the assurance that the developed product can be scaled without having to rebuild it all over again. This guide seeks to create constraints to make the initial decision process more manageable, saving time and creating a standard way to develop MVPs.


## Description of the scenerario for the use case
"My amazing startup" is a company with an idea for a new product they want to develop for the web. As specialists in their field, they know very well what the product does, they have a clear idea of the business models and rules that govern the product, but unfortunately they don't have enough experience and time to develop this for the web.

To measure the product-market fit of this idea, they decided to create an MVP to serve as a starting point for this new product. As part of their <strong>uniqui sell proposition</strong> they recognize the following necesities:

- A Frontpage with all the basic information about the product.
- A web application where their users can managed their personal interation with the product.

Both should be accessible from web browsers on desktop and mobile devices through a web domain of their choice, and this should be delivered in a period of time no longer than [TBD, potencially 4~5] weeks.

Some of specific requirements for each of these topics are the following:

|Front Page|Web Application|
|:------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| - Should contains at least: Home page, Contact us form and Pricing  page  <br>- Optimized for SEO  <br>- User activity tracking  <br>- Content editable through a CMS  | <br>- Authentication system for users  <br>- Storage for user related data  <br>- Scalable and secure  <br>- User activity tracking  <br>- Built with highly supported technologies  <br>- Testeable and CI/CD included  <br>- Email notifications system |

In addition to the above, serverless infrastructures will be preferred, but without losing sight of flexibility. 


## High-level architecture and actors
<br />
<p align="center">
  <img src="/assets/high-level-arch.png" alt="high level architecture diagram" />
</p>

### Actors description
  - <b>Content creators:</b> in charge of maintaining the frontpage content as well as any other content related to the product (e.g: articles in the case of an e-commerce). Usually people not related to code development..
  - <b>Desktop, Mobile, Search engine crawlers:</b> End consumers for the page, they can use either desktop and mobile devices. In addition, the page must be accessible to the web crawlers for SEO purposes.
  - <b>Registered users:</b> A user of the application that have access to the web application and store data in the server application.
  - <b>Devs:</b> Not in the diagram but responsible for the development and maintainence the all pieces of architecture.

### Frontpage composition
  - <b>CMS:</b> Stands for <i>Content Management System </i> and is an application that allows non-coders to create and maintain structured content through a graphical interface. Generally it store that content in a database an expouses that data through a web api, usually a REST or GraphQL api. (e.g: `Wordpress`, `strapi`, etc)
  - <b>SSG:</b> Stands for <i>Static Site Generator</i> and is an application that takes as an input content data and source code base and outputs statics assets that compouses a web site (e.g: `nextjs` or `gabtsy` for JS enviroments).
  - <b>Web hosting:</b> storage for web assets accesible through public internet.

### Web application 
  - <b>User's database:</b> storage for user's related data as well as user interactions with the product (e.g: `Shopping cart` in a e-commerce).
  - <b>Business app api:</b> It is where bussines rules for the lives. Represented as single block but could be a group of microservices as well. Custom for every particular product.
  - <b>Single page app:</b> Frontend application that registered users use to interact with the product and its own data. Usually built as client render application using frameworks like `React` or `Angular`
