---
sidebar_position: 2
---


# Authentication

All requests to the **KvFnB Open API** require authentication via an access token. Tokens are issued using the **OAuth 2.0 Client Credentials Flow**. Follow the steps below to obtain and use your token.

## Obtain Access Token

Send a `POST` request to the token endpoint:

```http
POST {AUTH_SERVER_URL}/realms/{REALM_NAME}/protocol/openid-connect/token
```

### Request Parameters
Include the following parameters in the request body:

| Parameter       | Type   | Required | Description                           |
|-----------------|--------|----------|---------------------------------------|
| `grant_type`    | string | Yes      | Must be `client_credentials`.         |
| `client_id`     | string | Yes      | Your application’s Client ID.         |
| `client_secret` | string | Yes      | Your application’s Client Secret.     |

### Example Request

```bash
curl -X POST '{AUTH_SERVER_URL}/realms/{REALM_NAME}/protocol/openid-connect/token' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials' \
-d 'client_id={CLIENT_ID}' \
-d 'client_secret={CLIENT_SECRET}'
```

## Example Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIs...",
  "expires_in": 300,
  "token_type": "Bearer",
  "scope": "read write"
}
```

## Using the Access Token

Include the token in the `Authorization` header for all API requests:

```http
Authorization: Bearer {ACCESS_TOKEN}
```

## Token Expiry

- Access tokens are valid for a limited time (`expires_in` seconds).
- Ensure your application implements token renewal to request a new token before the current one expires.

---
