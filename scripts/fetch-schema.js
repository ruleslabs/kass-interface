/* eslint-env node */

require('dotenv').config({ path: '.env' })
const child_process = require('child_process')
const fs = require('fs/promises')
const { promisify } = require('util')
const dataConfig = require('../graphql.config')

const exec = promisify(child_process.exec)

function fetchSchema(url, outputFile) {
  exec(`npx get-graphql-schema --h Origin=https://app.uniswap.org ${url}`)
    .then(({ stderr, stdout }) => {
      if (stderr) {
        throw new Error(stderr)
      } else {
        fs.writeFile(outputFile, stdout)
      }
    })
    .catch((err) => {
      console.error(err)
      console.error(`Failed to fetch schema from ${url}`)
    })
}

fetchSchema(process.env.REACT_APP_AWS_API_ENDPOINT, dataConfig.schema)
