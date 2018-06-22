# Wedding Companion

Progressive web wedding companion app

## Development

1. `git clone https://github.com/viktorsec/wedding-companion.git`
2. `yarn` to install dependencies
3. `yarn start` to start dev environment

You will need Node and Yarn. If you don't already have them, do this on macOS:

1. Get Homebrew package manager: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install Node: `brew install node`
3. Install Yarn: `brew install yarn`

## Deployment

### Local network

1. `yarn global add serve` (install serve)
2. rename `src/components/consts/Secret.js.template` to `Secret.js` and set Google Album Uri
3. `yarn run build` (build)
4. `serve -s build` (deploy)

### Remote server / Production

1. Get [Now](https://zeit.co/download)
2. rename `src/components/consts/Secret.js.template` to `Secret.js` and set Google Album Uri
3. `yarn run build`
4. `now --public`

## Testing

1. `yarn test`
