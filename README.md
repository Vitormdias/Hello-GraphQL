# Hello-GraphQL
Repository to study GraphQL

## First basics of REST

* set of convetions to manipulate
  a set of data with a URL a HTTP
  verbs

* POST /resource, GET /resource, GET /resource/:id, PUT /resource/:id and DELETE /resource/:id

* If you use a list of posts as a 
example, if you would want a list
of posts of a determined user
it would be /users/:id/posts

* But what if you need further
nesting?

* Ex: User list with, user image, user name, company name and position at the company name

* What would your url look like?

* /user/:id/friends and then??

* /user/friend1Id/companies, /user/friend2Id/positions, that is a lot of HTTP requests

* /user/:id/friends/companies,
the problemn with this is it is
to customized

* /user/:id/friends_with_companies_and_positions, it breaks REST conventions

* In concluding when we run with highly relational data, REST stops to attend our needs fully

* But also, we can return a lot of unecessary data

* 3 main issues of REST
  - highly relational data
  - unecessary data
  - to much HTTP requests

## Why does it exists?

* GraphQL wants to help us to solve the highly relational data

* A graph contains Nodes and Edges that represents the relations between Nodes

* Obs: To use GraphQL there is no need to remanage the way we store data

* We tell GraphQL the start point and go find the relations

```
query {
    user(id: 23) {
        friends() { //or users
            company {
                name
            }
        }
    }
}
```

* With the query we walk into the Graph


## Practice

* You can use any tech you want

* Node + Express

* You can use express-graphql

* How?
  - request
  - request asks for GraphQL?
  - GraphQL
  - response

* GraphQL is just a small part of it

* Schema
  - If all of the data is a graph, we have do define how related the data is
  - Use a Schema file to define the type of data you are going to define

* Root query
  - Allows us to jump into the data scheme
  - Entrypoint to our data
