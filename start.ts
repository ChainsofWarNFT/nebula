// @ts-ignore
import { Contract } from "https://deno.land/x/nebula@1.0.3/contract/mod.ts"
// @ts-ignore
import { Lucid, Blockfrost } from "https://deno.land/x/lucid@0.10.1/mod.ts"

// @ts-ignore
const lucid = await Lucid.new(
  new Blockfrost(
    "https://cardano-mainnet.blockfrost.io/api/v0",
    "mainnetaQBwxcVidwjfRXbvSDmEpZoJOxk3ScnL",
  ),
  "Mainnet",
)

lucid.selectWalletFromSeed(
  "butter tonight plunge ozone behind much nice actress cabin rebuild coast genuine odor spawn brave coin wing rubber pluck laptop ostrich still attend sausage",
);

const owner = "addr1q9dumy2jutagj4h7yp7epaal086mjre6s2nk9kfzelerwrvmmr436r28hcyrc84kqxw7rjhlnadzm6yms683jdunw0vqhqgw9s";
// const dev = "addr1q8jkykx7klnp5sk4lkwasdj9y2w95mqkgsxl7dy3zxwsvdxzts5jcx96ru7eh07tpxk3mga6amn433w9w0j92hpkrhyszznjtf";
const policy_id_cow_main_collection = "a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875";



// @ts-ignore
// const txHash = await Contract.createRoyalty(
//   lucid,
//   [{
//     address:
//     dev,
//     fee: 0.10, // 10%
//   }],
//   owner,
// );
// console.log(txHash);

// Define the contract using the Contract class
const contract = new Contract(lucid, {
  royaltyToken: "bb03e9c7d6f4e42c4cbfef85740e53655d09b4032c8b0d09a4ffc01e001f4d70526f79616c7479",
  owner, // Make sure you use the same owner here as in Contract.createRoyalty(..)!
  policyId: policy_id_cow_main_collection,
  deployHash: "a284eeea4970cde86c24456d8962c5cfb6b26835573affb89e6dad0525da5acd",
});

// Deploy the contract and log the result for debugging purposes
// @ts-ignore
// console.log(await contract.deployScripts());

// @ts-ignore
// const nftId = "#09417";

// function idToAssetName(id) {
//   return id.padStart(5, "0");
// }

// @ts-ignore
// console.log(await contract.getContractHashes());
// @ts-ignore
console.log(await contract._bidOpen(5000000n));
// @ts-ignore
console.log(await contract.getBids("Open"))


