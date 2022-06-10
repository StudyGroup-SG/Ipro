# Ipro Frontend

This is **FrontEnd Repository** of **Ipro**, a service that can be introduced into my project to exchange feedback with various users.

> [Go to BackEnd Repository](https://github.com/skmn3/Ipro_Backend)

## Tech Stack

- TypeScript
- React
- Recoil
- Emotion

## Project Structure

```bash
config
└── webpack
public
├── favicon.png
├── index.html
└── robots.txt
src
├── @types              # type definition files
├── apis                # api request modules
├── assets              # static files (fonts, images, ...)
├── atoms               # recoil states
├── components          # react components
├── constants           # constants
├── hooks               # react hooks
├── pages               # react page components
├── styles              # global styles
├── types               # types
├── utils               # utility functions
├── App.tsx
└── index.tsx
```

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/).
- Refer to the `.mock.env` file and create the `.env` file in the root directory.

### Run

```bash
yarn install
yarn dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
