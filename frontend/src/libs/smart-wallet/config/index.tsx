import { fallback, http } from "viem";

// const publicRpc = http("https://goerli.base.org");
// const localhost = http("http://localhost:8545");
const stackUpBundlerRpcUrl = http(
  `https://base-sepolia.g.alchemy.com/v2/ZXRLwMRxoHsryLyf51XOGNRNfWBkORUO`,
);

export const transport = stackUpBundlerRpcUrl;
