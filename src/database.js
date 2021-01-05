var nft_obj = {};

function formatted_string(pad, str) {
  return (pad+str).slice(-pad.length);
}

for(var i=1;i<73;i++) {
  nft_obj[Object.keys(nft_obj).length+1] = {
    "name": "Royale Rarities - Queen of Queens (Origins Series)",
    "description": `Origins Series (#${formatted_string("000", i)} of 72)`,
    "image": `https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen${formatted_string("00", i)}.jpg`,
    "external_url": "",
    "attributes": [
    ]
  }
}

for(var i=1;i<37;i++) {
  nft_obj[Object.keys(nft_obj).length+1] = {
    "name": "Royale Rarities - King of Kings (Origins Series)",
    "description": `Origins Series (#${formatted_string("000", i)} of 36)`,
    "image": `https://s3.amazonaws.com/royale.finance/KING/royaleNFT-king${formatted_string("00", i)}.jpg`,
    "external_url": "",
    "attributes": [
    ]
  }
}

module.exports = nft_obj;
// = {
  
//   "1": {
//     "name": "Royale Rarities - Queen of Queens (Origins Series)",
//     "description": "Origins Series (#001 of 36)",
//     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
//     "external_url": "",
//     "attributes": [
//     ]
//   }
  
// }