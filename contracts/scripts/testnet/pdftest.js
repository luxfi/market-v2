"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("@pdfme/generator");
const ui_1 = require("@pdfme/ui");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const font = fs_1.promises.readFile(path_1.default.join(__dirname, `/pdfs/druk_med.ttf`), {
    encoding: 'base64',
});
async function main() {
    console.log("making new templates");
    const inputs = [{ a: 'a1', b: 'craig', c: 'wow' }];
    const template = {
        basePdf: ui_1.BLANK_PDF,
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
    const pdf = await (0, generator_1.generate)({
        template,
        inputs
    });
    await fs_1.promises.writeFile(pdfpath, pdf, {
        encoding: "base64",
        flag: "a+",
        mode: 0o666
    });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
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
