# prsnt.co
Seriously simple presentation tool.

## Installation

Clone the repo, cd into it and install dependencies:
```
git clone git@github.com:guidobouman/prsnt.co.git
cd prsnt.co
npm install
```

## Development

Start your development environment on localhost:3000:
```
npm run dev
```

## Releasing

Get a copy of gh-pages set-up:
```
git clone git@github.com:guidobouman/prsnt.co.git gh-pages && cd gh-pages && git checkout gh-pages
```

Available commands:
```
npm run release // Create a release into the build directory.
npm deploy // Copy latest release to gh-pages & deploy to github.
```
