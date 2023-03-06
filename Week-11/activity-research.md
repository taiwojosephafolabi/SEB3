- 1) What is a web server?
A web server could refer to hardware or software:

Hardware: web server is a computer that stores web server software and a website's component files (for example, HTML documents, images, CSS stylesheets, and JavaScript files). A web server connects to the Internet and supports physical data interchange with other devices connected to the web.

Software: a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server

- 2) What is API? Why do we use APIs?
Application programming interface - a set of definitions and protocols for building and integrating application software.
APIs let your product or service communicate with other products and services without having to know how they’re implemented. 

We use them to simplify app development, saving time and money.

Example: Pay with PayPal

https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces

- 3) What is REST API?
REST API is an API conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.
REST - REpresentational State Transfer

Rest API is a kind of web-service which stores and retrieves necessary data.
When a request is sent from the client using a HTTPRequest, a corresponding response is sent from the server using HTTPResponse.

5 methods supported by REST.
  -GET - This method is used to retrieve a data from database / server.
  -POST - This method is used to create a new record.
  -PUT - This method is used to modify / replace the record. It replaces the entire record.
  -PATCH - This method is used to modify / update the record. It replaces parts of the record.
  -DELETE - This method is used to delete the record.

In order for an API to be considered RESTful, it has to conform to these criteria:
  -A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.
  -Stateless client-server communication, meaning no client information is stored between get requests and each request is separate and unconnected.
  -Cacheable data that streamlines client-server interactions.
  -A uniform interface between components so that information is transferred in a standard form. This requires that:
    -resources requested are identifiable and separate from the representations sent to the client.
    -resources can be manipulated by the client via the representation they receive because the representation contains enough information to do so.
    -self-descriptive messages returned to the client have enough information to describe how the client should process it.
    -hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all other currently available actions they can take.
  -A layered system that organizes each type of server (those responsible for security, load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.
  -Code-on-demand (optional): the ability to send executable code from the server to the client when requested, extending client functionality. 

https://www.redhat.com/en/topics/api/what-is-a-rest-api
https://www.numpyninja.com/post/rest-api-for-dummies-explained-using-mommies

- 4) What is Backend?
The back end refers to parts of a computer application or a program's code that allow it to operate and that cannot be accessed by a user.
A back-end application or program supports front-end user services, and interfaces with any required resources. The back-end application may interact directly with the front end or it may be called from an intermediate program that mediates front-end and back-end activities.

The reason for having backend is to have a central processing point for everyone so that user doesn’t need to install any extra application apart from the browser.

Examples: sending request on a web page will go to te backend (such as a database) to recieve data for that request

Concepts for back-end:
  -Programming and scripting languages like PHP, Python and C#.
  -Automated testing frameworks.
  -Network scalability and availability.
  -Database management and data transformation.
  -Cybersecurity and data backup practices.

https://www.techtarget.com/whatis/definition/front-end

- 5) How do API, web server and Backend work together?
An API is a backend component.
When a client makes a request to a web server, the server processes the request and sends it to the backend for further processing. The backend then retrieves or modifies the data from the database and sends a response back to the server. The server then sends this response to the client. (the api adds functionality to the website from external applications)


- 6) What is ExpressJS?
Express is a node js web application framework that provides broad features for building web and mobile applications.
It is used to build a single page, multipage, and hybrid web application.
It's a layer built on the top of the Node js that helps manage servers and routes.

Can build APIs and web/mobile applications.
Advantages:
  -Time-efficient
  -Fast 
  -Economical
  -Easy to learn
  -Asynchronous

https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js#:~:text=DevelopmentExplore%20Program-,What%20Is%20Express%20JS%3F,helps%20manage%20servers%20and%20routes.

https://www.codecademy.com/article/what-is-express-js

- 7) What is a Database? 
A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS).

SQL uses databases query, manipulate, and define data, and to provide access control.

Databases allow multiple users at the same time to quickly and securely access and query the data using highly complex logic and language.

https://www.oracle.com/uk/database/what-is-database/

- 8) How many kinds of databases do we have?
Many

https://www.databasejournal.com/ms-sql/how-many-databases-can-you-name/
