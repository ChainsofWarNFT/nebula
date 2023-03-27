// @ts-ignore
import { Contract } from "https://deno.land/x/nebula@1.0.1/contract/mod.ts"
// @ts-ignore
import { Lucid, Blockfrost } from "https://deno.land/x/lucid@0.9.7/mod.ts"

// @ts-ignore
const lucid = await Lucid.new(
  new Blockfrost(
    "https://cardano-mainnet.blockfrost.io/api/v0",
    "mainnetnVmAxaA0va0Ewn8vf95tEzbEtlP16JXk",
  ),
  "Mainnet",
)

lucid.selectWalletFromSeed(
  "butter tonight plunge ozone behind much nice actress cabin rebuild coast genuine odor spawn brave coin wing rubber pluck laptop ostrich still attend sausage",
);

const owner = "addr1qyyjxnr2740l0aahg20h80vd66kfa0snfr47lg69a96cve5mmr436r28hcyrc84kqxw7rjhlnadzm6yms683jdunw0vqqnjnw2";
const dev = "addr1q8jkykx7klnp5sk4lkwasdj9y2w95mqkgsxl7dy3zxwsvdxzts5jcx96ru7eh07tpxk3mga6amn433w9w0j92hpkrhyszznjtf";
const policy_id_cow_main_collection = "a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875";



// @ts-ignore
const txHash = await Contract.createRoyalty(
  lucid,
  [{
    address:
    dev,
    fee: 0.10, // 10%
  }],
  owner,
);
console.log(txHash);

// Define the contract using the Contract class
const contract = new Contract(lucid, {
  royaltyToken: "347ba668646fc2bc03c594abf0192bf5cbd003721ca500a2f2420623001f4d70526f79616c7479",
  owner, // Make sure you use the same owner here as in Contract.createRoyalty(..)!
  policyId: policy_id_cow_main_collection,
  deployHash: "a692b11cfb47ebea52de58fc136008cba82d14c52315c38a3a1e80886462a9a3",
});

// Deploy the contract and log the result for debugging purposes
// @ts-ignore
console.log(await contract.deployScripts());

// @ts-ignore
// const nftId = "09417";

// function idToAssetName(id) {
//   return id.padStart(5, "0");
// }

// @ts-ignore
// console.log(await contract.bid([idToAssetName(nftId)], 5000000n));

