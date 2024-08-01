import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
      squirrels: [
        {
          id: 100,
          name: 'Continue',
          description: 'The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished. To have a server check the request\'s headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body.',
          img: '/img/squirrel-100.jpg'
        },
        {
          id: 101,
          name: 'Switching Protocols',
          description: 'The HTTP 101 Switching Protocols response code indicates a protocol to which the server switches. The protocol is specified in the Upgrade request header received from a client. The server includes in this response an Upgrade response header to indicate the protocol it switched to. The process is described in the following article: Protocol upgrade mechanism',
          img: '/img/squirrel-101.jpg'
        },
        {
          id: 102,
          name: 'Processing',
          description: 'The HTTP 102 Processing informational status response code indicates to client that a full request has been received and the server is working on it. This status code is only sent if the server expects the request to take significant time. It tells the client that your request is not dead yet.',
          img: '/img/squirrel-102.jpg'
        },
        {
          id: 103,
          name: 'Early Hints',
          description: 'The HTTP 103 Early Hints information response may be sent by a server while it is still preparing a response, with hints about the resources that the server is expecting the final response will link. This allows a browser to start preloading resources even before the server has prepared and sent that final response. The early hint response is primarily intended for use with the Link header, which indicates the resources to be loaded. It may also contain a Content-Security-Policy header that is enforced while processing the early hint. A server might send multiple 103 responses, for example, following a redirect. Browsers only process the first early hint response, and this response must be discarded if the request results in a cross-origin redirect. Preloaded resources from the early hint are effectively pre-pended to the Document\'s head element, and then followed by the resources loaded in the final response.',
          img: '/img/squirrel-103.jpg'
        },
        {
          id: 200,
          name: 'OK',
          description: 'The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default. The successful result of a PUT or a DELETE is often not a 200 OK but a 204 No Content (or a 201 Created when the resource is uploaded for the first time).',
          img: '/img/squirrel-200.jpg'
        },
        {
          id: 201,
          name: 'Created',
          description: 'The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource, or a description and link to the new resource, is effectively created before the response is sent back and the newly created items are returned in the body of the message, located at either the URL of the request, or at the URL in the value of the Location header. The common use case of this status code is as the result of a POST request.',
          img: '/img/squirrel-201.jpg'
        },
        {
          id: 202,
          name: 'Accepted',
          description: 'The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. 202 is non-committal, meaning that there is no way for the HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.',
          img: '/img/squirrel-202.jpg'
        },
        {
          id: 203,
          name: 'Non-Authoritative Information',
          description: 'The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server\'s 200 OK response. The 203 response is similar to the value 214, meaning Transformation Applied, of the Warning header code, which has the additional advantage of being applicable to responses with any status code.',
          img: '/img/squirrel-203.jpg'
        },
        {
          id: 204,
          name: 'No Content',
          description: 'The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn\'t need to navigate away from its current page. This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. In this case a PUT request would be used to save the page, and the 204 No Content response would be sent to indicate that the editor should not be replaced by some other page. A 204 response is cacheable by default (an ETag header is included in such a response).',
          img: '/img/squirrel-204.jpg'
        },
        {
          id: 205,
          name: 'Reset Content',
          description: 'The HTTP 205 Reset Content response status tells the client to reset the document view (ie. clear the content of a form, reset canvas state or the UI).',
          img: '/img/squirrel-205.jpg'
        },
        {
          id: 206,
          name: 'Partial Content',
          description: 'The HTTP 206 Partial Content success status response code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request. If there is only one range, the Content-Type of the whole response is set to the type of the document, and a Content-Range is provided. If several ranges are sent back, the Content-Type is set to multipart/byteranges and each fragment covers one range, with Content-Range and Content-Type describing it.',
          img: '/img/squirrel-206.jpg'
        },
        {
          id: 207,
          name: 'Multi-Status',
          description: 'The HTTP 207 Multi-Status response code indicates that there might be a mixture of responses. The response body is a text/xml or application/xml HTTP entity with a multistatus root element. The XML body will list all individual response codes.',
          img: '/img/squirrel-207.jpg'
        },
        {
          id: 208,
          name: 'Already Reported',
          description: 'The HTTP 208 Already Reported response status is used in a 207 Multi-Status response to save space and avoid conflicts. If the same resource is requested several times (for example as part of a collection), with different paths, only the first one is reported with 200. Responses for all other bindings will report with this 208 status code, so no conflicts are created and the response stays shorter.',
          img: '/img/squirrel-208.jpg'
        },
        {
          id: 214,
          name: 'Transformation Applied',
          description: 'The HTTP 214 Transformation Applied is an unofficial status code used in combination with the Warning HTTP header and included with HTTP response messages to indicate that a transformation has been applied to the representation. This status code and Warning header MUST be added by a proxy if it applies any transformation to the representation, such as changing the content-coding, media-type, or modifying the representation data, unless the Warning header already appears in the response.',
          img: '/img/squirrel-214.jpg'
        },
        {
          id: 226,
          name: 'IM Used',
          description: 'The HTTP 226 IM Used response status, in the context of delta encodings, is a status code set by the server to indicate that it is returning a delta to the GET request that it received. IM stands for Instance Manipulations, the term used to describe an algorithm generating a delta. With delta encoding a server responds to GET requests with differences (called deltas) relative to a given base document (rather than the current document). The client uses the A-IM: HTTP header to indicate which differencing algorithm to use and the If-None-Match: header to hint the server about the last version it got. The server generates a delta, sending it back in an HTTP response with the 226 status code and containing the IM: (with the name of the algorithm used) and Delta-Base: (with the ETag matching the base document associated to the delta) HTTP headers.',
          img: '/img/squirrel-226.jpg'
        },
        {
          id: 300,
          name: 'Multiple Choices',
          description: 'The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible response. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used. If the server has a preferred choice, it should generate a Location header.',
          img: '/img/squirrel-300.jpg'
        },
        {
          id: 301,
          name: 'Moved Permanently',
          description: 'The HTTP 301 Moved Permanently redirect status response code indicates that the requested resource has been definitively moved to the URL given by the Location headers. A browser redirects to the new URL and search engines update their links to the resource.',
          img: '/img/squirrel-301.jpg'
        },
        {
          id: 302,
          name: 'Found',
          description: 'The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don\'t update their links to the resource (in \'SEO-speak\', it is said that the \'link-juice\' is not sent to the new URL). Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents conform here - you can still find this type of bugged software out there. It is therefore recommended to set the 302 code only as a response for GET or HEAD methods and to use 307 Temporary Redirect instead, as the method change is explicitly prohibited in that case. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give a response to a PUT method that is not the uploaded resource but a confirmation message such as: \'you successfully uploaded XYZ\'.',
          img: '/img/squirrel-302.jpg'
        },
        {
          id: 303,
          name: 'See Other',
          description: 'The HTTP 303 See Other redirect status response code indicates that the redirects don\'t link to the requested resource itself, but to another page (such as a confirmation page, a representation of a real-world object — see HTTP range-14 — or an upload-progress page). This response code is often sent back as a result of PUT or POST. The method used to display this redirected page is always GET.',
          img: '/img/squirrel-303.jpg'
        },
        {
          id: 304,
          name: 'Not Modified',
          description: 'The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is a safe method, such as GET or HEAD, or when the request is conditional and uses an If-None-Match or an If-Modified-Since header. The response must not contain a body and must include the headers that would have been sent in an equivalent 200 OK response: Cache-Control, Content-Location, Date, ETag, Expires, and Vary.',
          img: '/img/squirrel-304.jpg'
        },
        {
          id: 305,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/img/squirrel-305.jpg'
        },
        {
          id: 307,
          name: 'Temporary Redirect',
          description: 'HTTP 307 Temporary Redirect redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location headers. The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ"). The only difference between 307 and 302 is that 307 guarantees that the method and the body will not be changed when the redirected request is made. With 302, some old clients were incorrectly changing the method to GET: the behavior with non-GET methods and 302 is then unpredictable on the Web, whereas the behavior with 307 is predictable. For GET requests, their behavior is identical.',
          img: '/img/squirrel-307.jpg'
        },
        {
          id: 308,
          name: 'Permanent Redirect',
          description: 'The HTTP 308 Permanent Redirect redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in \'SEO-speak\', it is said that the \'link-juice\' is sent to the new URL). The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method.',
          img: '/img/squirrel-308.jpg'
        },
        {
          id: 400,
          name: 'Bad Request',
          description: 'The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).',
          img: '/img/squirrel-400.jpg'
        },
        {
          id: 401,
          name: 'Unauthorized',
          description: 'The HTTP 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource. This status code is sent with an HTTP WWW-Authenticate response header that contains information on how the client can request for the resource again after prompting the user for authentication credentials. This status code is similar to the 403 Forbidden status code, except that in situations resulting in this status code, user authentication can allow access to the resource.',
          img: '/img/squirrel-401.jpg'
        },
        {
          id: 402,
          name: 'Payment Required',
          description: 'The HTTP 402 Payment Required is a nonstandard response status code that is reserved for future use. This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment. Sometimes, this status code indicates that the request cannot be processed until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.',
          img: '/img/squirrel-402.jpg'
        },
        {
          id: 403,
          name: 'Forbidden',
          description: 'The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize it. This status is similar to 401, but for the 403 Forbidden status code, re-authenticating makes no difference. The access is tied to the application logic, such as insufficient rights to a resource.',
          img: '/img/squirrel-403.jpg'
        },
        {
          id: 404,
          name: 'Not Found',
          description: 'The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot. A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 Gone status instead.',
          img: '/img/squirrel-404.jpg'
        },
        {
          id: 405,
          name: 'Method Not Allowed',
          description: 'The HTTP 405 Method Not Allowed response status code indicates that the server knows the request method, but the target resource doesn\'t support this method. The server must generate an Allow header field in a 405 status code response. The field must contain a list of methods that the target resource currently supports.',
          img: '/img/squirrel-405.jpg'
        },
        {
          id: 406,
          name: 'Not Acceptable',
          description: 'The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request\'s proactive content negotiation headers, and that the server is unwilling to supply a default representation. In practice, this error is very rarely used. Instead of responding using this error code, which would be cryptic for the end user and difficult to fix, servers ignore the relevant header and serve an actual page to the user. It is assumed that even if the user won\'t be completely happy, they will prefer this to an error code. If a server returns such an error status, the body of the message should contain the list of the available representations of the resources, allowing the user to choose among them.',
          img: '/img/squirrel-406.jpg'
        },
        {
          id: 407,
          name: 'Proxy Authentication Required',
          description: 'The HTTP 407 Proxy Authentication Required client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource. This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.',
          img: '/img/squirrel-407.jpg'
        },
        {
          id: 408,
          name: 'Request Timeout',
          description: 'The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client. A server should send the "close" Connection header field in the response, since 408 implies that the server has decided to close the connection rather than continue waiting. This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9, use HTTP pre-connection mechanisms to speed up surfing.',
          img: '/img/squirrel-408.jpg'
        },
        {
          id: 409,
          name: 'Conflict',
          description: 'The HTTP 409 Conflict response status code indicates a request conflict with the current state of the target resource. Conflicts are most likely to occur in response to a PUT request. For example, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.',
          img: '/img/squirrel-409.jpg'
        },
        {
          id: 410,
          name: 'Gone',
          description: 'The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent. If you don\'t know whether this condition is temporary or permanent, a 404 status code should be used instead.',
          img: '/img/squirrel-410.jpg'
        },
        {
          id: 411,
          name: 'Length Required',
          description: 'The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header.',
          img: '/img/squirrel-411.jpg'
        },
        {
          id: 412,
          name: 'Precondition Failed',
          description: 'The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back.',
          img: '/img/squirrel-412.jpg'
        },
        {
          id: 413,
          name: 'Payload Too Large',
          description: 'The HTTP 413 Content Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field. Prior to RFC 9110 the response phrase for the status was Payload Too Large. That name is still widely used.',
          img: '/img/squirrel-413.jpg'
        },
        {
          id: 414,
          name: 'Request-URI Too Long',
          description: 'The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret.',
          img: '/img/squirrel-414.jpg'
        },
        {
          id: 415,
          name: 'Unsupported Media Type',
          description: 'The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format. The format problem might be due to the request\'s indicated Content-Type or Content-Encoding, or as a result of inspecting the data directly.',
          img: '/img/squirrel-415.jpg'
        },
        {
          id: 416,
          name: 'Request Range Not Satisfiable',
          description: 'The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn\'t contain such ranges, or that the Range header value, though syntactically correct, doesn\'t make sense. The 416 response message contains a Content-Range indicating an unsatisfied range (that is a '*') followed by a '/' and the current length of the resource. E.g. Content-Range: bytes */12777. Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.',
          img: '/img/squirrel-416.jpg'
        },
        {
          id: 417,
          name: 'Expectation Failed',
          description: 'The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request\'s Expect header could not be met.',
          img: '/img/squirrel-417.jpg'
        },
        {
          id: 418,
          name: 'I\'m a Teapot',
          description: 'The HTTP 418 I\'m a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools\' jokes in 1998 and 2014. Some websites use this response for requests they do not wish to handle, such as automated queries.',
          img: '/img/squirrel-418.jpg'
         },
        {
          id: 420,
          name: 'Enhance Your Calm',
          description: 'The HTTP response status code 420 Method Failure and 420 Enhance your calm is an unofficial HTTP status code that is returned by the server to indicate a client error. When sent by the Spring Framework, it indicates that a method has failed, whereas when sent by Twitter, it indicates that the client is being rate limited for making too many requests.',
          img: '/img/squirrel-420.jpg'
        },
        {
          id: 421,
          name: 'Misdirected Request',
          description: 'The HTTP 421 Misdirected Request client error response code indicates that the request was directed to a server that is not able to produce a response. This might be possible if a connection is reused or if an alternative service is selected.',
          img: '/img/squirrel-421.jpg'
        },
        {
          id: 422,
          name: 'Unprocessable Entity',
          description: 'The HTTP 422 Unprocessable Content response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.',
          img: '/img/squirrel-422.jpg'
        },
        {
          id: 423,
          name: 'Locked',
          description: 'The HTTP 423 Locked error response code indicates that either the resources tentatively targeted by is locked, meaning it can\'t be accessed. Its content should contain some information in WebDAV\'s XML format.',
          img: '/img/squirrel-423.jpg'
        },
        {
          id: 424,
          name: 'Failed Dependency',
          description: 'The HTTP 424 Failed Dependency client error response code indicates that the method could not be performed on the resource because the requested action depended on another action, and that action failed. Regular web servers will normally not return this status code. But some other protocols, like WebDAV, can return it. For example, in WebDAV, if a PROPPATCH request was issued, and one command fails then automatically every other command will also fail with 424 Failed Dependency.',
          img: '/img/squirrel-424.jpg'
        },
        {
          id: 425,
          name: 'Too Early',
          description: 'The HTTP 425 Too Early response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.',
          img: '/img/squirrel-425.jpg'
        },
        {
          id: 426,
          name: 'Upgrade Required',
          description: 'The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header with this response to indicate the required protocol(s).',
          img: '/img/squirrel-426.jpg'
        },
        {
          id: 428,
          name: 'Precondition Required',
          description: 'The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional. Typically, this means that a required precondition header, such as If-Match, is missing. When a precondition header is not matching the server side state, the response should be 412 Precondition Failed.',
          img: '/img/squirrel-428.jpg'
        },
        {
          id: 429,
          name: 'Too Many Requests',
          description: 'The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting"). A Retry-After header might be included to this response indicating how long to wait before making a new request.',
          img: '/img/squirrel-429.jpg'
        },
        {
          id: 431,
          name: 'Request Header Field Too Large',
          description: 'The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request\'s HTTP headers are too long. The request may be resubmitted after reducing the size of the request headers. 431 can be used when the total size of request headers is too large, or when a single header field is too large. To help those running into this error, indicate which of the two is the problem in the response body — ideally, also include which headers are too large. This lets users attempt to fix the problem, such as by clearing their cookies.',
          img: '/img/squirrel-431.jpg'
        },
        {
          id: 444,
          name: 'No Response',
          description: 'HTTP response status code 444 No Response is an unofficial HTTP status code specific to nginx and it indicates that the HTTP Connection is closed. No information, not even this status code, is sent to the client. When the 444 No Response status code is generated, the server returns no information to the client and closes the HTTP Connection. This error message can be found in the nginx logs and will not be sent to the client. It is useful for dealing with malicious HTTP requests, such as one that includes an illegal Host header.',
          img: '/img/squirrel-444.jpg'
        },
        {
          id: 450,
          name: 'Blocked by Windows Parental Controls',
          description: 'HTTP response status code 450 Blocked by Windows Parental Controls is an unofficial HTTP status code specific to Microsoft and returned by the server to indicate that the parental controls are turned on and are blocking access to the requested resource. When the 450 Blocked by Windows Parental Controls status code is received, it means that Windows Parental Controls have been enabled and are denying access to the target resource.',
          img: '/img/squirrel-450.jpg'
        },
        {
          id: 451,
          name: 'Unavailable for Legal Reasons',
          description: 'The HTTP 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.',
          img: '/img/squirrel-451.jpg'
        },
        {
          id: 497,
          name: 'HTTP Request Sent to HTTPS Port',
          description: 'HTTP response status code 497 HTTP Request Sent to HTTPS Port is an unofficial HTTP status code specific to nginx and is returned by the server to indicate that a regular HTTP request has been sent to the HTTPS port. When the 497 HTTP Request Sent to HTTPS Port status code is received, the HTTP request may be valid, but the server is unwilling to process it because it was sent to the HTTPS port. This is related to error 400 Bad Request.',
          img: '/img/squirrel-497.jpg'
        },
        {
          id: 498,
          name: 'Token Expired/Invalid',
          description: 'HTTP response 498 Invalid Token is an unofficial HTTP status code that is specific to ArcGIS and indicates that the HTTP request included a token but it was not accepted. When the 498 Invalid Token status code is received, the client included a required token in the HTTP request but the token was not accepted by the server because it was considered invalid.',
          img: '/img/squirrel-498.jpg'
        },
        {
          id: 499,
          name: 'Client Closed Request',
          description: 'HTTP response status code 499 is an unofficial HTTP status code that is specific to both ArcGIS with 499 Token Required and nginx with 499 Client Closed Request.',
          img: '/img/squirrel-499.jpg'
        },
        {
          id: 500,
          name: 'Internal Server Error',
          description: 'The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response. Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.',
          img: '/img/squirrel-500.jpg'
        },
        {
          id: 501,
          name: 'Not Implemented',
          description: 'The HTTP 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request. This status can also send a Retry-After header, telling the requester when to check back to see if the functionality is supported by then. 501 is the appropriate response when the server does not recognize the request method and is incapable of supporting it for any resource. The only methods that servers are required to support (and therefore that must not return 501) are GET and HEAD. If the server does recognize the method, but intentionally does not support it, the appropriate response is 405 Method Not Allowed.',
          img: '/img/squirrel-501.jpg'
        },
        {
          id: 502,
          name: 'Bad Gateway',
          description: 'The HTTP 502 Bad Gateway server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.',
          img: '/img/squirrel-502.jpg'
        },
        {
          id: 503,
          name: 'Service Unavailable',
          description: 'The HTTP 503 Service Unavailable server error response code indicates that the server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time for the recovery of the service. Caching-related headers that are sent along with this response should be taken care of, as a 503 status is often a temporary condition and responses shouldn\'t usually be cached.',
          img: '/img/squirrel-503.jpg'
        },
        {
          id: 504,
          name: 'Gateway Timeout',
          description: 'The HTTP 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.',
          img: '/img/squirrel-504.jpg'
        },
        {
          id: 506,
          name: 'Variant Also Negotiates',
          description: 'The HTTP 506 Variant Also Negotiates response status code may be given in the context of Transparent Content Negotiation (see RFC 2295). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants. The Variant Also Negotiates status code indicates an internal server configuration error in which the chosen variant is itself configured to engage in content negotiation, so is not a proper negotiation endpoint.',
          img: '/img/squirrel-506.jpg'
        },
        {
          id: 507,
          name: 'Insufficient Storage',
          description: 'The HTTP 507 Insufficient Storage response status code may be given in the context of the WebDAV protocol (see RFC 4918). It indicates that a method could not be performed because the server cannot store the representation needed to successfully complete the request.',
          img: '/img/squirrel-507.jpg'
        },
        {
          id: 508,
          name: 'Loop Detected',
          description: 'The HTTP 508 Loop Detected response status code may be given in the context of the WebDAV protocol. It indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.',
          img: '/img/squirrel-508.jpg'
        },
        {
          id: 509,
          name: 'Bandwidth Limit Exceeded',
          description: 'HTTP response status code 509 Bandwidth Limit Exceeded is an unofficial HTTP status code that is specific to Apache Web Server and cPanel that indicates that the web hosting client has exceeded the bandwidth allotment on the server-side. When the 509 Bandwidth Limit Exceeded status code is received, it means first that the web hosting client is using a connection or hosting method where the bandwidth is limited.',
          img: '/img/squirrel-509.jpg'
        },
        {
          id: 510,
          name: 'Not Extended',
          description: 'The HTTP 510 Not Extended response status code is sent in the context of the HTTP Extension Framework, defined in RFC 2774. In that specification a client may send a request that contains an extension declaration, that describes the extension to be used. If the server receives such a request, but any described extensions are not supported for the request, then the server responds with the 510 status code.',
          img: '/img/squirrel-510.jpg'
        },
        {
          id: 511,
          name: 'Network Authentication Required',
          description: 'The HTTP 511 Network Authentication Required response status code indicates that the client needs to authenticate to gain network access. This status is not generated by origin servers, but by intercepting proxies that control access to the network. Network operators sometimes require some authentication, acceptance of terms, or other user interaction before granting access (for example in an internet café or at an airport). They often identify clients who have not done so using their Media Access Control (MAC) addresses.',
          img: '/img/squirrel-511.jpg'
        },
        {
          id: 521,
          name: 'Web Server is Down',
          description: 'The HTTP response status code 521 Web Server Is Down is an unofficial HTTP status code specific to Cloudflare. This error occurs when the origin web server refuses connections from Cloudflare.',
          img: '/img/squirrel-521.jpg'
        },
        {
          id: 522,
          name: 'Connection Timed Out',
          description: 'The HTTP response status code 522 is an unofficial HTTP status code specific to Cloudflare.',
          img: '/img/squirrel-522.jpg'
        },
        {
          id: 523,
          name: 'Origin is Unreachable',
          description: 'The HTTP response status code 523 Origin Is Unreachable is an unofficial HTTP status code specific to Cloudflare. The 523 error occurs when Cloudflare cannot contact your origin web server. This typically occurs when a network device between Cloudflare and the origin web server doesn\’t have a route to the origin\’s IP address.',
          img: '/img/squirrel-523.jpg'
        },
        {
          id: 525,
          name: 'SSL Handshake Failed',
          description: 'The HTTP response status code 525 SSL Handshake Failed is an unofficial HTTP status code specific to Cloudflare.',
          img: '/img/squirrel-525.jpg'
        },
        {
          id: 530,
          name: 'Site Frozen',
          description: 'The HTTP response status code 530 Site Frozen is an unofficial HTTP status code that is specific to Cloudflare and Pantheon.',
          img: '/img/squirrel-530.jpg'
        },
        {
          id: 599,
          name: 'Network Connect Timeout Error',
          description: 'The HTTP response status code 599 Network Connect Timeout Error is an unofficial HTTP status code used by some proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.',
          img: '/img/squirrel-599.jpg'
        }
      ],

  },
    mutations: {
    
      },
    actions: {},
    modules: {}
  })
}
