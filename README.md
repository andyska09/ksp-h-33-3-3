# An example of typescript program for node

## How to start

```
> git clone https://github.com/miloslavskacel/node-ts-starter.git
> cd node-ts-starter
> npm install
> npm run start
```
You shall see in console:
```
> ts@ start C:\workspace\node-ts-starter
> ts-node ./app/main.ts

app was started with the following arguments:
  0 - C:\workspace\node-ts-starter\node_modules\ts-node\dist\bin.js
  1 - C:\workspace\node-ts-starter\app\main.ts

inputFilename: input.txt
inputContent:
457,15
41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10

lines[0]: 457,15
lines[1]: 41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10

items: 41,9,90,34,87,45,114,98,3003,155,12,1,0,5,10
items[2]: 90

sortedItems: 0,1,10,114,12,155,3003,34,41,45,5,87,9,90,98
sortedItems[2]: 10

outputContent:  0,1,10,114,12,155,3003,34,41,45,5,87,9,90,98
writing into the file ./output.txt
```
Check [main.ts](./app/main.ts)

## Links
- https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
- https://wanago.io/2019/02/11/node-js-typescript-modules-file-system/