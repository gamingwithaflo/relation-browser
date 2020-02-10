## Running

### Frontend

In the frontend project directory, you can run:

```
$> yarn
$> yarn start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### Backend

To start the backend to to the backend folder and run

```
$> cd backend
$> ../mvnw compile quarkus:dev
```

c
Backend is returning mocked data and atm has one endpoint:

```
   /api/relation/<namespace>
      Returns a list of Nodes (Deployment Config)
      Label contains the relational data
```

Example labels:

```
app.kubernetes.io/part-of: cool-service
app.kubernetes.io/name: nodejs
app.kubernetes.io/component: frontend
app.openshift.io/runtime: nodejs
app.openshift.io/connects-to: mongodb
```

More [information about labels]()
For us the most important are listed above part-of will give us a grouping of nodes that belong together.
With runtime we can show a logo for the specific runtime and connects-to gives us the info for connecting the nodes.
