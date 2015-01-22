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

## Lecture 3

API versioning
Resource nesting
Walkthrough of client/server code in Ruby. Discussion of how the request/response cycle ties into the codebase.
Introduction to Rspec. Setup/teardown methods (before :each and after :each). 
Tour of Sinatra, how all the pieces fit together.

## Lecture 4

Student presentation on Git
Git:

- The architecture is such that everyone's master is authoratative 
- `git init` creates a repository in your current directory
- commands for adding, checkout out a branch or commit, merging branches
- `git status` shows you the current state of your local repository

Student presentation on Github:

- Pull requests
- forking
- issues
- rebase vs merge

Tried to do the API RESTful challenge in class, but the app was not working.
Instead, profesor Anderson went over how JavaScript modules work, and how they work with Node. Demo of how this fits in with Express.js. (Express.js is a Node Module)