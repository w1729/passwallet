import { createPublicClient, http } from "viem";
import { sepolia, baseSepolia, mainnet } from "viem/chains";

export const CHAIN = {
  ...baseSepolia,
};

export const transport = http("https://sepolia.base.org/");

export const PUBLIC_CLIENT = createPublicClient({
  chain: baseSepolia,
  transport,
});

export const MAINNET_PUBLIC_CLIENT = createPublicClient({
  chain: mainnet,
  transport: http(),
});
