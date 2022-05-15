# mvp-starter
A complete guide to implementing MVPs for the web

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
