---
id: restv3
title: Rest V3
---

## First steps

What you first keep in mind when using Web services is to understand that this will require development skills in your company. The pros of Web Service (**RESTful**) is that you can easily use it with your preferred language assuming that you can do _HTTPS_ requests to our servers with `json`. Here is a non-exhaustive list of common usable language :

-   C# (<a href="http://www.asp.net/web-api/overview/advanced/calling-a-web-api-from-a-net-client" target="_blank">ASP.NET : Web Service client</a>)
-   C++
-   Go
-   Java
-   Javascript
-   Objective C
-   Perl
-   PHP
-   Python
-   Ruby
-   etc.

At Kizeo, thanks to our developpers, we can strongly advise you to use the following languages :

-   Java
-   Javascript
-   PHP

Here is what you will need to start the development of your application using the Web Service of Kizeo Forms :

-   **Swagger Doc :** [https://www.kizeoforms.com/rest/v3/doc](https://www.kizeoforms.com/rest/v3/doc) (This doc shows off all different functions available wit our Web Service)
-   **Web Service root address :** `https://www.kizeoforms.com/rest/v3/` (for instance, to use the `forms` function, you must call `https://www.kizeoforms.com/rest/v3/forms`)

## Retrieving the Token

Once you retrieve your token, you will need to put it into your _HTTPS_ headers :

```
Authorization: YOUR_TOKEN
```
To get a token, you need to write an email to our support team (support@kizeo.com). The request must be sent by an administrator or a group leader (the sender's email address has to match the one in Kizeo Forms). In his request, it must be specified :
-   the company code
-   the user_id for which the token must be created for
