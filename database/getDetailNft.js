import images from "../img";

// const commonURI = "1";
// const uncommonURI = "2";
// const rareURI = "3";
// const epicURI = "4";
// const legendURI = "5";

const commonDesc = "Most of the Cricket World inhabitants wear silver-grey armor, known as Aidens. They are great in defense but restricted in speed and strength.";
const uncommonDesc = "Unlike Aiden, Dylan wears deep blue armor made of sea crystals. Dylan has faster speed and strong resilience.";
const rareDesc = "Dion is a mighty red-cloaked warrior. Dion carries the blood of the god of war with extraordinary strength and defense.";
const epicDesc = "Knox is the most warlike tribe in the Crickets World. This tribe is scarce, and they have incredible strength, defense, and extreme agility. They are born talented warriors on the battlefield.";
const legendDesc = "Jez is the smallest tribe but the most powerful. Jez has immeasurable power of strength, speed, defense, and agility. They dominate the entire Crickets World.";


export function getLocalImg (tokenType) {
    switch (tokenType) {
      case "1":
        return {img: images.nft_cw_common, name: "Common", desc: commonDesc};
        break;
      case "2":
        return {img: images.nft_cw_uncommon, name: "Uncommon", desc: uncommonDesc};
        break;
      case "3":
        return {img: images.nft_cw_rare, name: "Rare", desc: rareDesc};
        break;
      case "4":
        return {img: images.nft_cw_eric, name: "Epic", desc: epicDesc};
        break;
      case "5":
        return {img: images.nft_cw_legen, name: "Legend", desc: legendDesc};
        break;
      default:
        return {img: images.upload, name: "Noname", desc: "No desc"};
    }
  };

export function getCricketInfo (cricketNft) {
		switch (cricketNft.uri) {
			case "1":
				return {tokenId: cricketNft.tokenId, tokenType: "Common"};
				break;
			case "2":
				return {tokenId: cricketNft.tokenId, tokenType: "Uncommon"}
				break;
			case "3":
				return {tokenId: cricketNft.tokenId, tokenType: "Rare"};
				break;
			case "4":
				return {tokenId: cricketNft.tokenId, tokenType: "Epic"};
				break;
			case "5":
				return {tokenId: cricketNft.tokenId, tokenType: "Legend"};
				break;
		}
	};

// export function testDB () {
//     set(ref(db, 'users/' + "1"), {
//     username: "name",
//     email: "email",
//     profile_picture : "imageUrl"
//     })
//     .then(() => {
//     // Data saved successfully!
//     })
//     .catch((error) => {
//     // The write failed...
//     });
// } 
// export default {testDB};