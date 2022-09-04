# Comands:

### Compile:
``` 
tsc name.ts 
```

### Run:
``` 
node name.js  
```

### Prevent generate an js file when error with a compile flag:
``` 
tsc -noEmitOnError sample-types.ts  
```


### Compiler flag:
### The get/set accessors feature is only supported in ES5 and higher
### Set a compiler flag in order to compile the code
``` 
tsc --targer ES5 --noEmitOnError Customer.ts  
```

### tsconfig.json
``` 
tsc --init 
```

### Clean and Build code
``` 
tsc --build --clean  
```

### Creating an Angular project - Angular CLI
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