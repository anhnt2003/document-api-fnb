---
sidebar_position: 4
---

# HTTP Response Codes

HTTP response codes indicate the status of a request made to a server. Here are some common HTTP response codes:

## 1xx Informational

- **100 Continue**: The server has received the request headers, and the client should proceed to send the request body.
- **101 Switching Protocols**: The requester has asked the server to switch protocols, and the server has agreed to do so.

## 2xx Success

- **200 OK**: The request was successful.
- **201 Created**: The request was successful, and a new resource was created.
- **202 Accepted**: The request has been accepted for processing, but the processing has not been completed.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

## 3xx Redirection

- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found**: The requested resource is temporarily located at a different URL.
- **304 Not Modified**: The resource has not been modified since the last request.

## 4xx Client Errors

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server can not find the requested resource.
- **405 Method Not Allowed**: The request method is known by the server but is not supported by the target resource.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.

## 5xx Server Errors

- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **501 Not Implemented**: The request method is not supported by the server and cannot be handled.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, usually due to maintenance or overload.
- **504 Gateway Timeout**: The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.

These codes help in understanding the status of the HTTP requests and responses, and they are essential for debugging and handling errors in web applications.
