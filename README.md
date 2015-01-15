# Data Engineering class notes

## Lecture 1

We created our individual notes repo and updated this README.

What are some components of big data?

* social networks
* data analytics
* storage
* NoSQL

Infoviz - how do you display big data sets to the user?

* D3

Data Lifecycle

1. Collection or generation
2. Cleanup
3. Storage
4. Processing/analysis
5. Query/visualize/act

All those steps ^^ are determined by the initial *question*. Typically, step 5 wraps around to step 1 since the results inform iterations on the initial question.

## Lecture 2

Overview of web service architecture. Discussion of request/response lifecycle and user expectations in terms of speed.

If a request takes longer than 2 seconds, you've lost the user. Data must be processed *fast*.

*REST*: Representational State Transfer. Resources "encoded" through URLs. The URL represents *what* entity is being acted on and the HTTP verb represents *how* it's been modified (or accessed).
*CRUD*: implements REST in that it manages an object's create, read, update, and delete actions.