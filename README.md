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

* Not JS
```
  {
    user(id: "23") {
      id,
      firsrName,
      age
    }
  }
```
  - query is sent to the root query
  - user key inside of fields
  - there it finds id in args
  - after graphQL resolves the query
  - returns raw data in the resolves
  - graphQL takes care to convert it
    to the correct data with the specified
    fields
  - if error in the query it helps you with
    the description

* GraphiQL
  - Visual Tool that you can use to execute
    querys
  - Shows the Docs of your schemas and types
  - Really helps development

## Architeture

* Client -> Express/GraphQL Server
  -> Database

* Outside server or third party API
* Client -> Express/GraphQL Server
--> Outside Server #1 -> Database
--> Outise API
--> Outside Server #2 -> Database

* Async resolve
  - client requests
  - executes resolver
  - if it return a promise, it waits
    for the promise to resolve and 
    returns its value
  - it can fetch any type of data

* Resolve functions allow you to move inside
  the graph

## Props

* When the prop has the same name it associates it
  normally

* When it comes companyId, use resolve function to
  populate the property 

* Nested query

```
{
  user(id: "23") {
    firstName,
    company {
      name
    }
  }
}
```

* Bidirectional relation

```
{
  company(id: "2") {
    name,
    users {
      firstName
    }
  }
}
```

* To remove circular reference define in it a
  arrow function, then it will only define the 
  function but will only be executed later