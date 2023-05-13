export const ipfsToHttps = (url?: string): string | undefined => url?.replace(/^ipfs:\/\//, 'https://ipfs.io/ipfs/')
