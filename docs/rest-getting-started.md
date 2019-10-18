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
-   **Web Service root address :** `https://www.kizeoforms.com/rest/v3/` (for instance, to use the `login` function, you must call `https://www.kizeoforms.com/rest/v3/login`)

## Retrieving the Token

The first Web Service call you will make is the function `POST /login`, this function grants access to all other ones by giving you the _token_ requiered. Before calling this function, you must ensure that you have an admin access on your company's account (you will need the admin details).

Then, you will have to send these details in a `JSON` format through a `POST` request to the following address : `https://www.kizeoforms.com/rest/v3/login`.

```javascript
{
  "user": "YOUR_USERNAME",
  "password": "YOUR_PASSWORD",
  "company": "YOUR_COMPANY_CODE"
}
```

#### Remember: !when using `json` formating, do not forget to put correct headers to your request (see below)

```
Content-Type: application/json
```

If you successfully connect, you will receive an answer like this one :

```javascript
{
  "status": "ok",
  "message": "",
  "data": {
    "token": "YOUR_TOKEN" // Caution, this grant full access to your account for 3 days. Keep it secret.
    // Usable for 3 days, need to be renew periodically
  }
}
```

And if you make a mistake, you will receive something like this :

```javascript
{
  "status": "error",
  "message": "An error occurred. Please try again"
}
```

Once you retrieve your token, you will need to put it into your _HTTPS_ headers :

```
Authorization: YOUR_TOKEN
```

## Samples

-   [Complete PHP Sample](rest-getting-started-sample-php.md)
