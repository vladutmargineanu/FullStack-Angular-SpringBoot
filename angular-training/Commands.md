### Install Angular - Angular CLI
``` 
npm install --location=global @angular/cli@14.0.7

ng version

ng help

```

### Creating a new Angular project - Angular CLI
``` 
ng new my-first-angular-project

```

### Running the Angular App
``` 
cd <your-project-name>

ng serve

ng serve --open

```

### Change the Server Port
``` 
ng serve --port 5100

ng serve --port 5100 --open

```

### Create a new project
```
ng new sales-project

```
### Generate a new component
```
ng generate component sales-person-list

```

### Generate a new class
```
ng generate class sales-person-list/SalesPerson

```

### Parameter Properties in construcotor for classes
```
constructor(public firstName: string, public lastName: string) {}
```