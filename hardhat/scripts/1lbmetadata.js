const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const fs = require("fs")
const process = require("process")


function one_lb() {
    let ONE_POUND = {
        "description": "Backed by one pound of Uranium (U3O8) from the Madison North mine.", 
        "external_url": "https://lux.market", 
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link", 
        "name": "Lux Uranium",
        "animation_url" : "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
        "attributes": [
            {
                "Pounds": "1"
            },  
            {
                "Type": "43-101 Verified"
            },
            {
                "Location" : "Madison North, Rössing Formation, Namibia"
            },
            {
                "Issuer": "Madison Metals"
            },
            {
                "Auditor" : "SRK Consulting (UK) Limite"
            },
            {
                "Resource Estimate" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
            },
            {
                "Tokenization Agreement" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf"
            },
            {
                "Abstract" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf"
            },
        ], 
    }

   return (
    JSON.stringify(ONE_POUND)
   );
}

function ten_lb() {
    let TEN_POUND = {
        "description": "Backed by ten pounds of Uranium (U3O8) from the Madison North mine.", 
        "external_url": "https://lux.market", 
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link", 
        "name": "Lux Uranium",
        "animation_url" : "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
        "attributes": [
            {
                "Pounds": "10"
            },  
            {
                "Type": "43-101 Verified"
            },
            {
                "Location" : "Madison North, Rössing Formation, Namibia"
            },
            {
                "Issuer": "Madison Metals"
            },
            {
                "Auditor" : "SRK Consulting (UK) Limite"
            },
            {
                "Resource Estimate" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
            },
            {
                "Tokenization Agreement" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf"
            },
            {
                "Abstract" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf"
            },
        ], 
    }

   return (
    JSON.stringify(TEN_POUND)
   );
}

function hundred_lbs() {
    let HUNDRED_POUNDS = {
        "description": "Backed by one hundred pounds of Uranium (U3O8) from the Madison North mine.", 
        "external_url": "https://lux.market", 
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link", 
        "name": "Lux Uranium",
        "animation_url" : "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
        "attributes": [
            {
                "Pounds": "100"
            },  
            {
                "Type": "43-101 Verified"
            },
            {
                "Location" : "Madison North, Rössing Formation, Namibia"
            },
            {
                "Issuer": "Madison Metals"
            },
            {
                "Auditor" : "SRK Consulting (UK) Limite"
            },
            {
                "Resource Estimate" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
            },
            {
                "Tokenization Agreement" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf"
            },
            {
                "Abstract" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf"
            },
        ], 
    }

   return (
    JSON.stringify(HUNDRED_POUNDS)
   );
}

function thousand_lbs() {
    let THOUSAND_POUNDS = {
        "description": "Backed by one thousand pounds of Uranium (U3O8) from the Madison North mine.", 
        "external_url": "https://lux.market", 
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link", 
        "name": "Lux Uranium",
        "animation_url" : "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
        "attributes": [
            {
                "Pounds": "1000"
            },  
            {
                "Type": "43-101 Verified"
            },
            {
                "Location" : "Madison North, Rössing Formation, Namibia"
            },
            {
                "Issuer": "Madison Metals"
            },
            {
                "Auditor" : "SRK Consulting (UK) Limite"
            },
            {
                "Resource Estimate" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
            },
            {
                "Tokenization Agreement" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf"
            },
            {
                "Abstract" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf"
            },
        ], 
    }

   return (
    JSON.stringify(THOUSAND_POUNDS)
   );
}
function two_thousand_lbs() {
    let TWO_THOUSAND_POUNDS = {
        "description": "Backed by one thousand pounds of Uranium (U3O8) from the Madison North mine.", 
        "external_url": "https://lux.market", 
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link", 
        "name": "Lux Uranium",
        "animation_url" : "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
        "attributes": [
            {
                "Pounds": "1000"
            },  
            {
                "Type": "43-101 Verified"
            },
            {
                "Location" : "Madison North, Rössing Formation, Namibia"
            },
            {
                "Issuer": "Madison Metals"
            },
            {
                "Auditor" : "SRK Consulting (UK) Limite"
            },
            {
                "Resource Estimate" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
            },
            {
                "Tokenization Agreement" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf"
            },
            {
                "Abstract" : "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf"
            },
        ], 
    }

   return (
    JSON.stringify(TWO_THOUSAND_POUNDS)
   );
}


// 2,000	1	2,000	$70,000	$70,000					
// 100	10	1,000	$35,000	$3,500	
// 10	100	1,000	$35,000	$350	
// 1	1,000	1,000	$35,000	$35	

async function main() {  

    // ONE POUND x 0 - 999
    // 1000 

    for (let i = 0; i < 1000; i++) {
        console.log(`${process.cwd()}/uranium/${i}.json`);
        fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
            one_lb(),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }

    // TEN Pounds x 100
    for (let i = 1000; i < 1100; i++) {
        console.log(`${process.cwd()}/uranium/${i}.json`);
        fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
            ten_lb(),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }

    // HUNDRED Pounds x 10
    for (let i = 1100; i < 1110; i++) {
        console.log(`${process.cwd()}/uranium/${i}.json`);
        fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
        hundred_lbs(),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }


    for (let i = 1100; i < 1110; i++) {
        console.log(`${process.cwd()}/uranium/${i}.json`);
        fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
        hundred_lbs(),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }    
}

main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});




// 20,000	1	20,000	$700,000	$700,000	
// 2,000	10	20,000	$700,000	$70,000	
// 1,000	20	20,000	$700,000	$35,000	
// 100	200	20,000	$700,000	$3,500	
// 10	2,000	20,000	$700,000	$350	
// 1	4,000	4,000	$140,000	$35	