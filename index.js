// create a variable to hold your NFT's
let my_NFT = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (artist_name , art_title , art_id , art_price) {
    let nft_obj={
        "Artist Name" : artist_name,
        "Art Title" : art_title,
        "Art ID" : art_id,
        "Art Price (US Dollar)"  : art_price 
    };
    my_NFT.push(nft_obj);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<my_NFT.length;i++){
        console.log(my_NFT[i]);
    }
}

// print the total number of NFTs we have minted to the console
let total_nft;
function getTotalSupply() {
    total_nft=my_NFT.length;
    console.log("Total NFT's Minted : "+total_nft);
}

// call your functions below this line
mintNFT("ansh","piece of a gem",101,200);
mintNFT("aashman","celestial dreams",102,150);
mintNFT("anshit","rock formation",103,220);
mintNFT("mohit","diamond cut",104,240);
listNFTs();
getTotalSupply();