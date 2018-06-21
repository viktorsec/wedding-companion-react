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
2. `yarn run build` (build)
3. `serve -s build` (deploy)

### Remote server / Production

1. Get [Now](https://zeit.co/download)
2. `yarn run build`
3. `now`

## Testing

1. `yarn test`
