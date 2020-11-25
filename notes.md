install tailwind via 
`npm install tailwindcss postcss autoprefixer`
create `src/tailwind.css`
add these to package.json
"build:tailwind": "tailwindcss build src/tailwind.css -o src/tailwind.output.css",
    "prestart": "npm run build:tailwind",
    "prebuild": "npm run build:tailwind",

when you run `npm run start` the tailwindcss will be create
import into app via 
`import './tailwind.output.css';`
not production ready, but will work for quick/small projects

can also link direct, but using postcss is recommended

recreate strip login screen
start with the card
using react but should be applicable to any web framework

start with `background-white`
use grid to space things out and sizing

adding shadow- stripe has a pretty decent shadow
padding for title

