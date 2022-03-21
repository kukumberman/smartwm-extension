# smartwm-extension

### Description

Web-browser extension, that allows to view currency exchange rates of `smartwm.biz` website.

Extension uses [Netlify](https://www.netlify.com/products/functions/) serverless application as proxy to prevent blocking by **CORS** policy.

### Showcase

<table>
  <tr>
    <td>
      <img src="/showcase/preview_1.png" />
    </td>
    <td>
      <img src="/showcase/preview_2.png" />
    </td>
  </tr>
</table>

### 🔃 Exchange directions 
```
wmz
qiwi
yandex

privatuah_auto
alfaukr.uah
oschadbank.uah
monobank.uah
```

### Plain requests

```javascript
// blocked by CORS policy
// setting request's mode to 'no-cors' doesn't help
fetch("https://smartwm.biz/exchange/rate", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({
    "classFrom": "qiwi",
    "classTo": "privatuah_auto",
    "amountFrom": 100,
    "activeDirection": "from"
  })
})
```

#### Input
```
POST https://smartwm.biz/exchange/rate HTTP/1.1
Content-Type: application/json

{
  "classFrom": "qiwi",
  "classTo": "privatuah_auto",
  "amountFrom": 100,
  "activeDirection": "from"
}
```

#### Output
```json
{
  "error": false,
  "showForm": true,
  "suggestedDirections": [],
  "rates": {
    "direct": {
      "rate": "3.98 RUR = 1 UAH"
    },
    "reverse": {
      "rate": "1 UAH = 3.241 RUR"
    }
  },
  "form": {
    "amountFrom": 100,
    "amountFromHint": 100,
    "amountTo": 25.13,
    "currFrom": "RUR",
    "currTo": "UAH",
    "actualRate": 0.2513,
    "rateFrom": 3.98,
    "rateTo": 1,
    "activeDirection": "from",
    "systemFromTitle": "QIWI",
    "systemToTitle": "Приват24",
    "systemFromFee": 0,
    "systemToFee": 0,
    "maxPayIn": 300000,
    "minPayIn": 100,
    "maxPayOut": 200000,
    "minPayOut": 100,
    "newBonus": false,
    "newBonusInCurrency": 0,
    "bestRate": "",
    "compareRate": false,
    "id": 55243,
    "seoText": "...",
    "text": {
      "comission": "Комиссия",
      "your_bonus": "Ваш бонус составляет:"
    }
  },
  "directionMessage": {
    "message": "Обмен RUR QIWI на UAH Приват24"
  }
}
```


### Proxy requests

#### Input

- Single entry per request
```
POST https://modest-shaw-b5cb04.netlify.app/.netlify/functions/parsePrice HTTP/1.1
Content-Type: application/json

{
  "data": {
    "from": "qiwi",
    "to": "privatuah_auto"
  }
}
```

- Multiple entries per request
```
POST https://modest-shaw-b5cb04.netlify.app/.netlify/functions/parsePrice HTTP/1.1
Content-Type: application/json

{
  "data": [
    { "from": "qiwi", "to": "privatuah_auto" },
    { "from": "yandex", "to": "privatuah_auto" }
  ]
}
```

#### Output

```json
{
  "ok": true,
  "data": {
    "from": {
      "title": "QIWI",
      "amount": 100,
      "currency": "RUR"
    },
    "to": {
      "title": "Приват24",
      "amount": 25.29,
      "currency": "UAH"
    },
    "rates": {
      "rateFrom": 3.954,
      "actualRate": 0.2529
    },
    "constructed": {
      "title": "QIWI - Приват24",
      "a": "100 RUR = 25.29 UAH",
      "b": "395.40000000000003 RUR = 100 UAH"
    }
  }
}
```
