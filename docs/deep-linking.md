---
id: deep-linking
title: Deep linking
---

## Definition

Deep links provide a clear and simple way to redirect users to specific screen on the Kizeo Forms mobile app.

## Different access points enabled

`kizeoforms://--/` open Kizeo Forms mobile app.

`kizeoforms://--/login` redirect to login screen.

`kizeoforms://--/login/:code` redirect to login screen with a pre-filled company code. `:code` must be replaced by the company code.

`kizeoforms://--/favorites` redirect to favorite forms.

`kizeoforms://--/settings` redirect to application settings.

`kizeoforms://--/forms` redirect to form list.

`kizeoforms://--/forms/:formId` redirect to data filling, `:formId` must be replaced by the ID of the form definition.

`kizeoforms://--/stats` redirect to stats.

`kizeoforms://--/data` redirect to data list.

`kizeoforms://--/receipts` redirect to inbox.

#### Notes

- In case the user is not yet logged in, deep links will allow him to access only the login page.

- If the user is already logged in, deep links will not allow him to access the login screen. The user will be automatically redirected to the main screen.

## Data creation

`kizeoforms://--/forms/:formId?tag1=value1&tag2=value2&tag3=value3`
with `:formId` replaced by ID of the form definition.
`tag1`, `tag2`, `tag3`, etc... are fields tag names of the form definition, `value1`, `value2`, `value3`, etc... are the are the corresponding values ​​that will be entered.

### Type of fields enabled

- choice
- slider
- text
- checkbox : 1, '1', true, 'true'. anything else is false
- datetime : YYYY-MM-DDThh:mm:ss or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
- date : YYYY-MM-DD or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
  time : hh:mm:ss or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
- textarea : use %5Cn for line-break (ex: My first line%5Cnand my second line

### Unhandled tags

Tag names below are protected and will not be processed when pre-filled by a deep link.

- caption
- comingFromList
- formId
- scrollTo
