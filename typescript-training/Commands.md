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
