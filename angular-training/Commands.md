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

### Parameter Properties in constructor for classes
```
constructor(public firstName: string, public lastName: string) {}
```

### Install bootstrap locally using npm
```
npm install bootstrap@5.2.0
```

### Install Fonst Awesome locally using npm
```
npm install @fortawesome/fontawesome-free
```

### IDE Visual Studio Code
```
install Extension - Angular Language Service.
View > Extensions
```

### Components in ng-bootstrap
```
https://ng-bootstrap.github.io/
```

### Install ng-bootstrap
```
ng add @angular/localize

npm install @ng-bootstrap/ng-bootstrap@13.0.0
```

### Update Angular CLI
```
ng update @angular/cli @angular/core

```

### Dependencies
```
https://ng-bootstrap.github.io/#/getting-started#dependencies
https://stackoverflow.com/questions/60348728/after-i-install-ng-bootstrap-and-compile-i-get-this-error/60909485#60909485
https://stackoverflow.com/questions/57459917/how-to-fix-this-error-module-not-found-cant-resolve-popper-js

npm install popper.js --save

```


### package.json
```
{
  // ... rest
  "dependencies": {
    "@popperjs/core": "^2.11.4",
  },
}

```