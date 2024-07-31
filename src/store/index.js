import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
      squirrels: [
        {
          id: 100,
          name: 'Continue',
          description: 'The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished. To have a server check the request\'s headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body.',
          img: '/public/img/squirrel-100.jpg'
        },
        {
          id: 101,
          name: 'Switching Protocols',
          description: 'The HTTP 101 Switching Protocols response code indicates a protocol to which the server switches. The protocol is specified in the Upgrade request header received from a client. The server includes in this response an Upgrade response header to indicate the protocol it switched to. The process is described in the following article: Protocol upgrade mechanism',
          img: '/public/img/squirrel-101.jpg'
        },
        {
          id: 102,
          name: 'Processing',
          description: 'The HTTP 102 Processing informational status response code indicates to client that a full request has been received and the server is working on it. This status code is only sent if the server expects the request to take significant time. It tells the client that your request is not dead yet.',
          img: '/public/img/squirrel-102.jpg'
        },
        {
          id: 103,
          name: 'Early Hints',
          description: 'The HTTP 103 Early Hints information response may be sent by a server while it is still preparing a response, with hints about the resources that the server is expecting the final response will link. This allows a browser to start preloading resources even before the server has prepared and sent that final response. The early hint response is primarily intended for use with the Link header, which indicates the resources to be loaded. It may also contain a Content-Security-Policy header that is enforced while processing the early hint. A server might send multiple 103 responses, for example, following a redirect. Browsers only process the first early hint response, and this response must be discarded if the request results in a cross-origin redirect. Preloaded resources from the early hint are effectively pre-pended to the Document\'s head element, and then followed by the resources loaded in the final response.',
          img: '/public/img/squirrel-103.jpg'
        },
        {
          id: 200,
          name: 'OK',
          description: 'The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default. The successful result of a PUT or a DELETE is often not a 200 OK but a 204 No Content (or a 201 Created when the resource is uploaded for the first time).',
          img: '/public/img/squirrel-200.jpg'
        },
        {
          id: 201,
          name: 'Created',
          description: 'The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource, or a description and link to the new resource, is effectively created before the response is sent back and the newly created items are returned in the body of the message, located at either the URL of the request, or at the URL in the value of the Location header. The common use case of this status code is as the result of a POST request.',
          img: '/public/img/squirrel-201.jpg'
        },
        {
          id: 202,
          name: 'Accepted',
          description: 'The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. 202 is non-committal, meaning that there is no way for the HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.',
          img: '/public/img/squirrel-202.jpg'
        },
        {
          id: 203,
          name: 'Non-Authoritative Information',
          description: 'The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server\'s 200 OK response. The 203 response is similar to the value 214, meaning Transformation Applied, of the Warning header code, which has the additional advantage of being applicable to responses with any status code.',
          img: '/public/img/squirrel-203.jpg'
        },
        {
          id: 204,
          name: 'No Content',
          description: 'The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn\'t need to navigate away from its current page. This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. In this case a PUT request would be used to save the page, and the 204 No Content response would be sent to indicate that the editor should not be replaced by some other page. A 204 response is cacheable by default (an ETag header is included in such a response).',
          img: '/public/img/squirrel-204.jpg'
        },
        {
          id: 205,
          name: 'Reset Content',
          description: 'The HTTP 205 Reset Content response status tells the client to reset the document view (ie. clear the content of a form, reset canvas state or the UI).',
          img: '/public/img/squirrel-205.jpg'
        },
        {
          id: 206,
          name: 'Partial Content',
          description: 'The HTTP 206 Partial Content success status response code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request. If there is only one range, the Content-Type of the whole response is set to the type of the document, and a Content-Range is provided. If several ranges are sent back, the Content-Type is set to multipart/byteranges and each fragment covers one range, with Content-Range and Content-Type describing it.',
          img: '/public/img/squirrel-206.jpg'
        },
        {
          id: 207,
          name: 'Multi-Status',
          description: 'The HTTP 207 Multi-Status response code indicates that there might be a mixture of responses. The response body is a text/xml or application/xml HTTP entity with a multistatus root element. The XML body will list all individual response codes.',
          img: '/public/img/squirrel-207.jpg'
        },
        {
          id: 208,
          name: 'Already Reported',
          description: 'The HTTP 208 Already Reported response status is used in a 207 Multi-Status response to save space and avoid conflicts. If the same resource is requested several times (for example as part of a collection), with different paths, only the first one is reported with 200. Responses for all other bindings will report with this 208 status code, so no conflicts are created and the response stays shorter.',
          img: '/public/img/squirrel-208.jpg'
        },
        {
          id: 214,
          name: 'Transformation Applied',
          description: 'The HTTP 214 Transformation Applied is an unofficial status code used in combination with the Warning HTTP header and included with HTTP response messages to indicate that a transformation has been applied to the representation. This status code and Warning header MUST be added by a proxy if it applies any transformation to the representation, such as changing the content-coding, media-type, or modifying the representation data, unless the Warning header already appears in the response.',
          img: '/public/img/squirrel-214.jpg'
        },
        {
          id: 226,
          name: 'IM Used',
          description: 'The HTTP 226 IM Used response status, in the context of delta encodings, is a status code set by the server to indicate that it is returning a delta to the GET request that it received. IM stands for Instance Manipulations, the term used to describe an algorithm generating a delta. With delta encoding a server responds to GET requests with differences (called deltas) relative to a given base document (rather than the current document). The client uses the A-IM: HTTP header to indicate which differencing algorithm to use and the If-None-Match: header to hint the server about the last version it got. The server generates a delta, sending it back in an HTTP response with the 226 status code and containing the IM: (with the name of the algorithm used) and Delta-Base: (with the ETag matching the base document associated to the delta) HTTP headers.',
          img: '/public/img/squirrel-226.jpg'
        },
        {
          id: 300,
          name: 'Multiple Choices',
          description: 'The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible response. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used. If the server has a preferred choice, it should generate a Location header.',
          img: '/public/img/squirrel-300.jpg'
        },
        {
          id: 301,
          name: 'Moved Permanently',
          description: 'The HTTP 301 Moved Permanently redirect status response code indicates that the requested resource has been definitively moved to the URL given by the Location headers. A browser redirects to the new URL and search engines update their links to the resource.',
          img: '/public/img/squirrel-301.jpg'
        },
        {
          id: 302,
          name: 'Found',
          description: 'The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don\'t update their links to the resource (in \'SEO-speak\', it is said that the \'link-juice\' is not sent to the new URL). Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents conform here - you can still find this type of bugged software out there. It is therefore recommended to set the 302 code only as a response for GET or HEAD methods and to use 307 Temporary Redirect instead, as the method change is explicitly prohibited in that case. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give a response to a PUT method that is not the uploaded resource but a confirmation message such as: \'you successfully uploaded XYZ\'.',
          img: '/public/img/squirrel-302.jpg'
        },
        {
          id: 303,
          name: 'See Other',
          description: 'The HTTP 303 See Other redirect status response code indicates that the redirects don\'t link to the requested resource itself, but to another page (such as a confirmation page, a representation of a real-world object — see HTTP range-14 — or an upload-progress page). This response code is often sent back as a result of PUT or POST. The method used to display this redirected page is always GET.',
          img: '/public/img/squirrel-303.jpg'
        },
        {
          id: 304,
          name: 'Not Modified',
          description: 'The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is a safe method, such as GET or HEAD, or when the request is conditional and uses an If-None-Match or an If-Modified-Since header. The response must not contain a body and must include the headers that would have been sent in an equivalent 200 OK response: Cache-Control, Content-Location, Date, ETag, Expires, and Vary.',
          img: '/public/img/squirrel-304.jpg'
        },
        {
          id: 305,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-305.jpg'
        },
        {
          id: 307,
          name: 'Temporary Redirect',
          description: 'HTTP 307 Temporary Redirect redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location headers. The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ"). The only difference between 307 and 302 is that 307 guarantees that the method and the body will not be changed when the redirected request is made. With 302, some old clients were incorrectly changing the method to GET: the behavior with non-GET methods and 302 is then unpredictable on the Web, whereas the behavior with 307 is predictable. For GET requests, their behavior is identical.',
          img: '/public/img/squirrel-307.jpg'
        },
        {
          id: 308,
          name: 'Permanent Redirect',
          description: 'The HTTP 308 Permanent Redirect redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in \'SEO-speak\', it is said that the \'link-juice\' is sent to the new URL). The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method.',
          img: '/public/img/squirrel-308.jpg'
        },
        {
          id: 400,
          name: 'Bad Request',
          description: 'The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).',
          img: '/public/img/squirrel-400.jpg'
        },
        {
          id: 401,
          name: 'Unauthorized',
          description: 'The HTTP 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource. This status code is sent with an HTTP WWW-Authenticate response header that contains information on how the client can request for the resource again after prompting the user for authentication credentials. This status code is similar to the 403 Forbidden status code, except that in situations resulting in this status code, user authentication can allow access to the resource.',
          img: '/public/img/squirrel-401.jpg'
        },
        {
          id: 402,
          name: 'Payment Required',
          description: 'The HTTP 402 Payment Required is a nonstandard response status code that is reserved for future use. This status code was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment. Sometimes, this status code indicates that the request cannot be processed until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.',
          img: '/public/img/squirrel-402.jpg'
        },
        {
          id: 403,
          name: 'Forbidden',
          description: 'The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize it. This status is similar to 401, but for the 403 Forbidden status code, re-authenticating makes no difference. The access is tied to the application logic, such as insufficient rights to a resource.',
          img: '/public/img/squirrel-403.jpg'
        },
        {
          id: 404,
          name: 'Not Found',
          description: 'The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot. A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 Gone status instead.',
          img: '/public/img/squirrel-404.jpg'
        },
        {
          id: 405,
          name: 'Method Not Allowed',
          description: 'The HTTP 405 Method Not Allowed response status code indicates that the server knows the request method, but the target resource doesn\'t support this method. The server must generate an Allow header field in a 405 status code response. The field must contain a list of methods that the target resource currently supports.',
          img: '/public/img/squirrel-405.jpg'
        },
        {
          id: 406,
          name: 'Not Acceptable',
          description: 'The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request\'s proactive content negotiation headers, and that the server is unwilling to supply a default representation. In practice, this error is very rarely used. Instead of responding using this error code, which would be cryptic for the end user and difficult to fix, servers ignore the relevant header and serve an actual page to the user. It is assumed that even if the user won\'t be completely happy, they will prefer this to an error code. If a server returns such an error status, the body of the message should contain the list of the available representations of the resources, allowing the user to choose among them.',
          img: '/public/img/squirrel-406.jpg'
        },
        {
          id: 407,
          name: 'Proxy Authentication Required',
          description: 'The HTTP 407 Proxy Authentication Required client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource. This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.',
          img: '/public/img/squirrel-407.jpg'
        },
        {
          id: 408,
          name: 'Request Timeout',
          description: 'The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client. A server should send the "close" Connection header field in the response, since 408 implies that the server has decided to close the connection rather than continue waiting. This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9, use HTTP pre-connection mechanisms to speed up surfing.',
          img: '/public/img/squirrel-408.jpg'
        },
        {
          id: 409,
          name: 'Conflict',
          description: 'The HTTP 409 Conflict response status code indicates a request conflict with the current state of the target resource. Conflicts are most likely to occur in response to a PUT request. For example, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.',
          img: '/public/img/squirrel-409.jpg'
        },
        {
          id: 410,
          name: 'Gone',
          description: 'The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent. If you don\'t know whether this condition is temporary or permanent, a 404 status code should be used instead.',
          img: '/public/img/squirrel-410.jpg'
        },
        {
          id: 411,
          name: 'Length Required',
          description: 'The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header.',
          img: '/public/img/squirrel-411.jpg'
        },
        {
          id: 412,
          name: 'Precondition Failed',
          description: 'The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back.',
          img: '/public/img/squirrel-412.jpg'
        },
        {
          id: 413,
          name: 'Payload Too Large',
          description: 'The HTTP 413 Content Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field. Prior to RFC 9110 the response phrase for the status was Payload Too Large. That name is still widely used.',
          img: '/public/img/squirrel-413.jpg'
        },
        {
          id: 414,
          name: 'Request-URI Too Long',
          description: 'The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret.',
          img: '/public/img/squirrel-414.jpg'
        },
        {
          id: 415,
          name: 'Unsupported Media Type',
          description: 'The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format. The format problem might be due to the request\'s indicated Content-Type or Content-Encoding, or as a result of inspecting the data directly.',
          img: '/public/img/squirrel-415.jpg'
        },
        {
          id: 416,
          name: 'Request Range Not Satisfiable',
          description: 'The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn\'t contain such ranges, or that the Range header value, though syntactically correct, doesn\'t make sense. The 416 response message contains a Content-Range indicating an unsatisfied range (that is a '*') followed by a '/' and the current length of the resource. E.g. Content-Range: bytes */12777. Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.',
          img: '/public/img/squirrel-416.jpg'
        },
        {
          id: 417,
          name: 'Expectation Failed',
          description: 'The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request\'s Expect header could not be met.',
          img: '/public/img/squirrel-417.jpg'
        },
        {
          id: 418,
          name: 'I\'m a Teapot',
          description: 'The HTTP 418 I\'m a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools\' jokes in 1998 and 2014. Some websites use this response for requests they do not wish to handle, such as automated queries.',
          img: '/public/img/squirrel-418.jpg'
        },
        {
          id: 420,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-420.jpg'
        },
        {
          id: 421,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-421.jpg'
        },
        {
          id: 422,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-422.jpg'
        },
        {
          id: 423,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-423.jpg'
        },
        {
          id: 424,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-424.jpg'
        },
        {
          id: 425,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-425.jpg'
        },
        {
          id: 426,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-426.jpg'
        },
        {
          id: 428,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-428.jpg'
        },
        {
          id: 429,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-429.jpg'
        },
        {
          id: 431,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-431.jpg'
        },
        {
          id: 444,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-444.jpg'
        },
        {
          id: 450,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-450.jpg'
        },
        {
          id: 451,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-451.jpg'
        },
        {
          id: 497,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-497.jpg'
        },
        {
          id: 498,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-498.jpg'
        },
        {
          id: 499,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: 'vimg/squirrel-499.jpg'
        },
        {
          id: 500,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-500.jpg'
        },
        {
          id: 501,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-501.jpg'
        },
        {
          id: 502,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-502.jpg'
        },
        {
          id: 503,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-503.jpg'
        },
        {
          id: 504,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-504.jpg'
        },
        {
          id: 506,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-506.jpg'
        },
        {
          id: 507,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-507.jpg'
        },
        {
          id: 508,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-508.jpg'
        },
        {
          id: 509,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-509.jpg'
        },
        {
          id: 510,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-510.jpg'
        },
        {
          id: 511,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-511.jpg'
        },
        {
          id: 521,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-521.jpg'
        },
        {
          id: 522,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-522.jpg'
        },
        {
          id: 523,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-523.jpg'
        },
        {
          id: 525,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-525.jpg'
        },
        {
          id: 530,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-530.jpg'
        },
        {
          id: 599,
          name: 'Use Proxy',
          description: 'HTTP response status code 305 Use Proxy is a deprecated HTTP status code returned by an origin server to indicate that the requested resource can only be accessed through a proxy server. The 305 Use Proxy status code is used to inform the client that the requested resource must be obtained through a proxy server and includes that proxy address in the Set-Proxy HTTP header or in the Location HTTP header.',
          img: '/public/img/squirrel-599.jpg'
        }
      ],

  },
    mutations: {
    
      },
    actions: {},
    modules: {}
  })
}
