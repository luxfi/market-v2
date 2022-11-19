import { generate, Template} from "@pdfme/generator";
import { BLANK_PDF } from "@pdfme/ui"
import { promises as fs } from "fs";
import path from "path";

const font = fs.readFile(path.join(__dirname, `/pdfs/druk_med.ttf`), {
    encoding: 'base64',
  });

async function main (){
    console.log("making new templates")

    const inputs = [{ a: 'a1', b: 'craig', c: 'wow' }];

    const template: Template = {
        basePdf: BLANK_PDF,
        schemas: [
          {
            a: {
              type: 'text',
              position: { x: 0, y: 0 },
              width: 10,
              height: 10,
            },
            b: {
              type: 'text',
              position: { x: 10, y: 10 },
              width: 200,
              height: 100,
            },
            c: {
              type: 'text',
              position: { x: 20, y: 20 },
              width: 500,
              height: 500,
            },
          },
        ],
      };

    let pdfpath = `${process.cwd()}/scripts/pdfs/0.pdf`;
    const pdf = await generate({
        template,
        inputs
    });
    
    await fs.writeFile(pdfpath,
        pdf,
        {
            encoding: "base64",
            flag: "a+",
            mode: 0o666
        }
    );

}

main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});


// {o
//     "issuanceDate": "November 7, 2022",
//     "tokenID": 1334,
//     "totalSupply": "7.65 million pounds",
//     "compound": "Uranium (U3O8)",
//     "location": "Madison North, Namibia",
//     "amount": "2,000 pounds",
//     "auditor": "SRK Limited",
//     "supplier": "Madison Metals",
//     "spotPrice": "$50.80 USD",
//     "valueAtSpot": "$101,600.00 USD"
//   }