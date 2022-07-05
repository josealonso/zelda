
export function GetIPFSGatewayPrefixedLink(input: string): string {
  if (input.toLowerCase().substring(0,7) === "ipfs://") {
    return "https://ipfs.io/ipfs/" + input.substring(7)
  }
  return input
}
