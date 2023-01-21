var $4e1kH$etherslibutils = require("ethers/lib/utils");
var $4e1kH$axios = require("axios");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $68ca1e7dbd75bcb7$exports = {};

$parcel$export($68ca1e7dbd75bcb7$exports, "ReservoirClient", () => $68ca1e7dbd75bcb7$export$d0c36b5db6a81704);
$parcel$export($68ca1e7dbd75bcb7$exports, "getClient", () => $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c);
$parcel$export($68ca1e7dbd75bcb7$exports, "createClient", () => $68ca1e7dbd75bcb7$export$5d730b7aed1a3eb0);



async function $f753b7ab1ae9e81f$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $f753b7ab1ae9e81f$export$f014594cc879f602(request, dataParser);
}
async function $f753b7ab1ae9e81f$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $f753b7ab1ae9e81f$export$d2c70568ef790b87(request, validate);
    }
}




/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $3aca8cb5d2312546$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}


var $78643c91f0073b32$exports = {};
$78643c91f0073b32$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');


async function $ad8a0083205e5e83$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = (0, $78643c91f0073b32$exports.version);
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await (0, $f753b7ab1ae9e81f$export$f014594cc879f602)(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": (0, $78643c91f0073b32$exports.version)
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await (0, $f753b7ab1ae9e81f$export$d2c70568ef790b87)({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) //Confirm that on-chain tx has been picked up by the indexer for the last transaction
                    {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            (0, $3aca8cb5d2312546$export$dc1827290674c112)(indexerConfirmationUrl, queryParams);
                            await (0, $f753b7ab1ae9e81f$export$d2c70568ef790b87)({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) // If the message represents a hash, we need to convert it to raw bytes first
                            signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": (0, $78643c91f0073b32$exports.version)
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $ad8a0083205e5e83$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}




function $167a6e7a4a12040a$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "ReservoirClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "getClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$exports, "createClient", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser) {
    async function getData() {
        let res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, dataParser);
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate) {
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87(request, validate);
    }
}
/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            var _query_key;
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, (_query_key = query[key]) === null || _query_key === void 0 ? void 0 : _query_key.toString());
        }
        return url;
    });
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports = JSON.parse('{"name":"@luxmarket/sdk","version":"0.3.13","description":"An SDK that can be used in any javascript/typescript context to easily interact with LUX liquidity APIs","author":"Lux Partners Limited","license":"MIT","source":"index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","actions","dist","types","utils"],"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git push","syncApi":"node ./sync-api.mjs","changelog":"node ../scripts/generate-changelog.js package=sdk"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"sideEffects":false,"keywords":["nft","lux","lux-sdk","marketkit","protocol","sdk"],"peerDependencies":{"ethers":"^5.7.2"},"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"openapi-typescript":"^5.4.1","parcel":"^2.8.3"}}');
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, newJson, expectedPrice) {
    try {
        var _request_url, _request_url1;
        let json = newJson;
        if (!request.headers) request.headers = {};
        const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
        if (client === null || client === void 0 ? void 0 : client.apiKey) request.headers["x-api-key"] = client.apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        if (!json) {
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = (_request_url = request.url) === null || _request_url === void 0 ? void 0 : _request_url.includes("/execute/buy");
        const isSell = (_request_url1 = request.url) === null || _request_url1 === void 0 ? void 0 : _request_url1.includes("/execute/sell");
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        if (json.path && expectedPrice) {
            const quote = json.path.reduce((total, path)=>{
                total += path.quote || 0;
                return total;
            }, 0);
            // Check if the user is selling
            let error = null;
            if (isSell && quote - expectedPrice < -0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            // Check if the user is buying
            if (isBuy && quote - expectedPrice > 0.00001) error = {
                type: "price mismatch",
                message: `Attention: the price of this token is now ${quote}`
            };
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json === null || json === void 0 ? void 0 : json.steps
                ]);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json === null || json === void 0 ? void 0 : json.steps
        ]);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) return;
        const step = json.steps[incompleteStepIndex];
        const stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) return;
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            json = await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602(request, (json)=>{
                var _data_steps_incompleteStepIndex_items, _data_steps;
                const data = json;
                return ((_data_steps_incompleteStepIndex_items = data === null || data === void 0 ? void 0 : (_data_steps = data.steps) === null || _data_steps === void 0 ? void 0 : _data_steps[incompleteStepIndex].items) === null || _data_steps_incompleteStepIndex_items === void 0 ? void 0 : _data_steps_incompleteStepIndex_items[incompleteStepItemIndex].data) ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItem = items[incompleteStepItemIndex];
        }
        const stepData = stepItem.data;
        // Handle each step based on it's kind
        switch(kind){
            // Make an on-chain transaction
            case "transaction":
                {
                    var _json_steps_incompleteStepIndex_items;
                    const tx = await signer.sendTransaction(stepData);
                    if ((_json_steps_incompleteStepIndex_items = json.steps[incompleteStepIndex].items) === null || _json_steps_incompleteStepIndex_items === void 0 ? void 0 : _json_steps_incompleteStepIndex_items[incompleteStepItemIndex]) stepItem.txHash = tx.hash;
                    setState([
                        ...json === null || json === void 0 ? void 0 : json.steps
                    ]);
                    await tx.wait();
                    // Implicitly poll the confirmation url to confirm the transaction went through
                    const confirmationUrl = new URL(`${client.apiBase}/transactions/${tx.hash}/synced/v1`);
                    const headers = {
                        "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                    };
                    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                    if (client === null || client === void 0 ? void 0 : client.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                    await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                        url: confirmationUrl.href,
                        method: "get",
                        headers: headers
                    }, (res)=>res && res.data.synced);
                    if (json.steps.slice(incompleteStepIndex + 1).findIndex((step)=>step.kind === "transaction") === -1) {
                        if (stepItem.txHash && (isSell || isBuy)) {
                            const indexerConfirmationUrl = new URL(`${client.apiBase}/sales/v3`);
                            const queryParams = {
                                txHash: stepItem.txHash
                            };
                            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112(indexerConfirmationUrl, queryParams);
                            await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87({
                                url: indexerConfirmationUrl.href,
                                method: "get",
                                headers: headers
                            }, (res)=>{
                                if (res.status === 200) {
                                    const data = res.data;
                                    return data.sales && data.sales.length > 0 ? true : false;
                                }
                                return false;
                            });
                        }
                    }
                    break;
                }
            // Sign a message
            case "signature":
                {
                    let signature;
                    const signData = stepData["sign"];
                    const postData = stepData["post"];
                    if (signData) {
                        // Request user signature
                        if (signData.signatureKind === "eip191") {
                            if (signData.message.match(/0x[0-9a-fA-F]{64}/)) signature = await signer.signMessage((0, $4e1kH$etherslibutils.arrayify)(signData.message));
                            else signature = await signer.signMessage(signData.message);
                        } else if (signData.signatureKind === "eip712") signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                        if (signature) request.params = {
                            ...request.params,
                            signature: signature
                        };
                    }
                    if (postData) {
                        const postOrderUrl = new URL(`${client.apiBase}${postData.endpoint}`);
                        try {
                            const getData = async function() {
                                const headers = {
                                    "Content-Type": "application/json",
                                    "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
                                };
                                if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey;
                                let response = await (0, ($parcel$interopDefault($4e1kH$axios))).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                    method: postData.method,
                                    headers: headers,
                                    params: request.params
                                });
                                return response;
                            };
                            const res = await getData();
                            if (res.status > 299 || res.status < 200) throw res.data;
                            stepItem.orderId = res.data.orderId;
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                        } catch (err) {
                            json.steps[incompleteStepIndex].error = "Your order could not be posted.";
                            setState([
                                ...json === null || json === void 0 ? void 0 : json.steps
                            ]);
                            throw err;
                        }
                    }
                    break;
                }
            default:
                break;
        }
        delete step.message;
        stepItem.status = "complete";
        // Recursively call executeSteps()
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, setState, json);
    } catch (err) {
        const error = new Error(err === null || err === void 0 ? void 0 : err.message);
        console.error(error);
        throw err;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$var$$0371d13c8b17e059$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$dc1827290674c112);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$f014594cc879f602);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$export($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$var$$0371d13c8b17e059$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$var$$0371d13c8b17e059$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$var$$0371d13c8b17e059$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0371d13c8b17e059$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$0371d13c8b17e059$var$$3ddb6e463252976e$exports);
function $167a6e7a4a12040a$export$b5fe3f66a567bec0(config = {}) {
    const client = $167a6e7a4a12040a$var$$0371d13c8b17e059$export$6bb76d6eba7e258c();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}
async function $167a6e7a4a12040a$var$$158fa49509b02a5f$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        $167a6e7a4a12040a$export$b5fe3f66a567bec0({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$aa79ef8fdced7dbe$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await $167a6e7a4a12040a$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            $167a6e7a4a12040a$export$b5fe3f66a567bec0({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await $167a6e7a4a12040a$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$90e63472aac3b20a$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await $167a6e7a4a12040a$export$21ece85d7636deb(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function $167a6e7a4a12040a$var$$8cd92bec356d1db2$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await $167a6e7a4a12040a$export$21ece85d7636deb({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
const $167a6e7a4a12040a$var$$32a172b9d2367c0a$var$actions = {
    acceptOffer: $167a6e7a4a12040a$var$$158fa49509b02a5f$export$ed27da83bcbea2e5,
    buyToken: $167a6e7a4a12040a$var$$aa79ef8fdced7dbe$export$5e1997c166a16792,
    cancelOrder: $167a6e7a4a12040a$var$$110e6a02b1db09fd$export$1d5423ff89b08a3c,
    listToken: $167a6e7a4a12040a$var$$90e63472aac3b20a$export$c5dd9dc6df16df31,
    placeBid: $167a6e7a4a12040a$var$$8cd92bec356d1db2$export$6d65a5902ff15306
};
var $167a6e7a4a12040a$var$$32a172b9d2367c0a$export$2e2bcd8739ae039 = $167a6e7a4a12040a$var$$32a172b9d2367c0a$var$actions;
var $167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports = {};
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "executeSteps", ()=>$167a6e7a4a12040a$export$21ece85d7636deb);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "setParams", ()=>$167a6e7a4a12040a$export$dc1827290674c112);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "pollUntilOk", ()=>$167a6e7a4a12040a$export$d2c70568ef790b87);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "pollUntilHasData", ()=>$167a6e7a4a12040a$export$f014594cc879f602);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "isOpenSeaBanned", ()=>$167a6e7a4a12040a$export$feaa73ad8ed3f2b9);
$167a6e7a4a12040a$var$$parcel$export($167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports, "request", ()=>$167a6e7a4a12040a$export$b5fe3f66a567bec0);
async function $167a6e7a4a12040a$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = $167a6e7a4a12040a$export$6bb76d6eba7e258c();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}
let $167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client;
class $167a6e7a4a12040a$export$d0c36b5db6a81704 {
    utils = {
        ...$167a6e7a4a12040a$var$$ef57f9973d6fb2b5$exports
    };
    actions = $167a6e7a4a12040a$var$$32a172b9d2367c0a$export$2e2bcd8739ae039;
    constructor(options){
        this.version = $167a6e7a4a12040a$var$$8abf99109e008d7e$exports.version;
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $167a6e7a4a12040a$export$6bb76d6eba7e258c() {
    //throw an error
    return $167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client;
}
function $167a6e7a4a12040a$export$5d730b7aed1a3eb0(options) {
    if (!$167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client) $167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client = new $167a6e7a4a12040a$export$d0c36b5db6a81704(options);
    else $167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client.configure(options);
    return $167a6e7a4a12040a$var$$6cab33a736ba69d7$var$_client;
}
var $167a6e7a4a12040a$var$$0db8d37032b66ae3$exports = {};
var $167a6e7a4a12040a$var$$3ddb6e463252976e$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ $167a6e7a4a12040a$var$$parcel$exportWildcard($167a6e7a4a12040a$var$$0db8d37032b66ae3$exports, $167a6e7a4a12040a$var$$3ddb6e463252976e$exports);


function $7a0bc98264f14f5a$export$b5fe3f66a567bec0(config = {}) {
    const client = (0, $167a6e7a4a12040a$export$6bb76d6eba7e258c)();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": "0.3.4"
    };
    if (client === null || client === void 0 ? void 0 : client.apiKey) headers["x-api-key"] = client.apiKey || "demo-api-key";
    return (0, ($parcel$interopDefault($4e1kH$axios))).request({
        headers: headers,
        ...config
    });
}


async function $fd681d24c22d2c9e$export$ed27da83bcbea2e5(data) {
    const { token: token , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            taker: taker,
            token: `${token.contract}:${token.tokenId}`,
            source: client.source || "",
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await (0, $ad8a0083205e5e83$export$21ece85d7636deb)({
            url: `${client.apiBase}/execute/sell/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        const data = {
            token: `${token.contract}:${token.tokenId}`
        };
        (0, $7a0bc98264f14f5a$export$b5fe3f66a567bec0)({
            method: "POST",
            url: `${client.apiBase}/tokens/refresh/v1`,
            data: JSON.stringify(data)
        });
        throw err;
    }
}




async function $2e1eecab817733e8$export$5e1997c166a16792(data) {
    const { tokens: tokens , orderIds: orderIds , rawOrders: rawOrders , expectedPrice: expectedPrice , signer: signer , onProgress: onProgress  } = data;
    const taker = await signer.getAddress();
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    if ((!tokens || !tokens.length) && (!data.orderIds || !data.orderIds.length) && !data.rawOrders) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient missing data: At least one of the following is required, tokens, orderIds or rawOrders");
    }
    if (tokens && (orderIds || rawOrders) || orderIds && (tokens || rawOrders) || rawOrders && (orderIds || tokens)) {
        console.debug(data);
        throw new ReferenceError("ReservoirClient conflicting data: tokens, orderIds and rawOrders are mutually exclusive");
    }
    try {
        const params = {
            taker: taker,
            source: client.source || "",
            ...options
        };
        if (tokens) params.tokens = tokens === null || tokens === void 0 ? void 0 : tokens.map((token)=>`${token.contract}:${token.tokenId}`);
        else if (orderIds) params.orderIds = orderIds;
        else if (rawOrders) params.rawOrders = rawOrders;
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        await (0, $ad8a0083205e5e83$export$21ece85d7636deb)({
            url: `${client.apiBase}/execute/buy/v6`,
            method: "post",
            data: params
        }, signer, onProgress, undefined, expectedPrice);
        return true;
    } catch (err) {
        if (tokens) tokens.forEach((token)=>{
            const data = {
                token: `${token.contract}:${token.tokenId}`
            };
            (0, $7a0bc98264f14f5a$export$b5fe3f66a567bec0)({
                method: "POST",
                url: `${client.apiBase}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            });
        });
        throw err;
    }
}




async function $a58e06f57d871fbb$export$1d5423ff89b08a3c(data) {
    const { id: id , signer: signer , onProgress: onProgress  } = data;
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const options = data.options || {};
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const params = {
            id: id,
            ...options
        };
        await (0, $ad8a0083205e5e83$export$21ece85d7636deb)({
            url: `${client.apiBase}/execute/cancel/v2`,
            params: params
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}






async function $01ba893f92440527$export$c5dd9dc6df16df31(data) {
    const { listings: listings , signer: signer , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in listing)) listing.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${client.apiBase}/execute/list/v4`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": (0, $78643c91f0073b32$exports.version)
            }
        };
        if (precheck) {
            if ((client === null || client === void 0 ? void 0 : client.apiKey) && request.headers) request.headers["x-api-key"] = client.apiKey;
            if ((client === null || client === void 0 ? void 0 : client.uiVersion) && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($4e1kH$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await (0, $ad8a0083205e5e83$export$21ece85d7636deb)(request, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}




async function $f2767b19dd7aefbd$export$6d65a5902ff15306({ bids: bids , signer: signer , onProgress: onProgress  }) {
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const maker = await signer.getAddress();
    if (!client.apiBase) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || ""
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFee && client.marketplaceFeeRecipient && !("fees" in bid)) bid.fees = [
                `${client.marketplaceFeeRecipient}:${client.marketplaceFee}`
            ];
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await (0, $ad8a0083205e5e83$export$21ece85d7636deb)({
            url: `${client.apiBase}/execute/bid/v4`,
            method: "post",
            data: data
        }, signer, onProgress);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


const $48e111f6a8a1065c$var$actions = {
    acceptOffer: $fd681d24c22d2c9e$export$ed27da83bcbea2e5,
    buyToken: $2e1eecab817733e8$export$5e1997c166a16792,
    cancelOrder: $a58e06f57d871fbb$export$1d5423ff89b08a3c,
    listToken: $01ba893f92440527$export$c5dd9dc6df16df31,
    placeBid: $f2767b19dd7aefbd$export$6d65a5902ff15306
};
var $48e111f6a8a1065c$export$2e2bcd8739ae039 = $48e111f6a8a1065c$var$actions;


var $64a98ddbd9b3d528$exports = {};

$parcel$export($64a98ddbd9b3d528$exports, "executeSteps", () => $ad8a0083205e5e83$export$21ece85d7636deb);
$parcel$export($64a98ddbd9b3d528$exports, "setParams", () => $3aca8cb5d2312546$export$dc1827290674c112);
$parcel$export($64a98ddbd9b3d528$exports, "pollUntilOk", () => $f753b7ab1ae9e81f$export$d2c70568ef790b87);
$parcel$export($64a98ddbd9b3d528$exports, "pollUntilHasData", () => $f753b7ab1ae9e81f$export$f014594cc879f602);
$parcel$export($64a98ddbd9b3d528$exports, "isOpenSeaBanned", () => $da1d4e4ad08349dd$export$feaa73ad8ed3f2b9);
$parcel$export($64a98ddbd9b3d528$exports, "request", () => $7a0bc98264f14f5a$export$b5fe3f66a567bec0);






async function $da1d4e4ad08349dd$export$feaa73ad8ed3f2b9(collectionId, tokenId) {
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const base = "https://api.opensea.io";
    const url = new URL(`/a../asset/${contract}/${tokenId}`, base);
    const res = await (0, ($parcel$interopDefault($4e1kH$axios))).get(url.href);
    const json = res.data;
    const client = (0, $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c)();
    const apiBase = client === null || client === void 0 ? void 0 : client.apiBase;
    if (res.status === 200 && apiBase) {
        const apiKey = client === null || client === void 0 ? void 0 : client.apiKey;
        const headers = {
            "Content-Type": "application/json",
            "x-rkc-version": (0, $78643c91f0073b32$exports.version)
        };
        const body = {
            token: `${contract}:${tokenId}`,
            flag: !(json === null || json === void 0 ? void 0 : json.supports_wyvern) ? 1 : 0
        };
        if (apiKey) headers["x-api-key"] = apiKey;
        if (client === null || client === void 0 ? void 0 : client.uiVersion) headers["x-rkui-version"] = client.uiVersion;
        (0, ($parcel$interopDefault($4e1kH$axios))).post(`${apiBase}/tokens/flag/v1`, JSON.stringify(body), {
            headers: headers
        }).catch(()=>{});
    }
    return !(json === null || json === void 0 ? void 0 : json.supports_wyvern);
}






let $68ca1e7dbd75bcb7$var$_client;
class $68ca1e7dbd75bcb7$export$d0c36b5db6a81704 {
    utils = {
        ...$64a98ddbd9b3d528$exports
    };
    actions = (0, $48e111f6a8a1065c$export$2e2bcd8739ae039);
    constructor(options){
        this.version = (0, $78643c91f0073b32$exports.version);
        this.apiKey = options.apiKey;
        this.uiVersion = options.uiVersion;
        this.apiBase = options.apiBase;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFee = options.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient;
        this.normalizeRoyalties = options.normalizeRoyalties;
        if (!options.source) {
            if (typeof window !== "undefined") {
                let host = location.hostname;
                if (host.indexOf("www.") === 0) host = host.replace("www.", "");
                this.source = host;
                console.warn("ReservoirKit automatically generated a source based on the url, we recommend providing a source when initializing ReservoirKit. Refer to our docs for steps on how to do this: http://docs.reservoir.tools");
            }
        } else this.source = options.source;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.apiKey = options.apiKey ? options.apiKey : this.apiKey;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.apiBase = options.apiBase ? options.apiBase : this.apiBase;
        this.marketplaceFee = options.marketplaceFee ? options.marketplaceFee : this.marketplaceFee;
        this.marketplaceFeeRecipient = options.marketplaceFeeRecipient ? options.marketplaceFeeRecipient : this.marketplaceFeeRecipient;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
    }
}
function $68ca1e7dbd75bcb7$export$6bb76d6eba7e258c() {
    //throw an error
    return $68ca1e7dbd75bcb7$var$_client;
}
function $68ca1e7dbd75bcb7$export$5d730b7aed1a3eb0(options) {
    if (!$68ca1e7dbd75bcb7$var$_client) $68ca1e7dbd75bcb7$var$_client = new $68ca1e7dbd75bcb7$export$d0c36b5db6a81704(options);
    else $68ca1e7dbd75bcb7$var$_client.configure(options);
    return $68ca1e7dbd75bcb7$var$_client;
}



var $22ac9fd840cbefc2$exports = {};
var $2ded6c64738a9a78$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ 

$parcel$exportWildcard($22ac9fd840cbefc2$exports, $2ded6c64738a9a78$exports);


$parcel$exportWildcard(module.exports, $68ca1e7dbd75bcb7$exports);
$parcel$exportWildcard(module.exports, $64a98ddbd9b3d528$exports);
$parcel$exportWildcard(module.exports, $22ac9fd840cbefc2$exports);


//# sourceMappingURL=index.js.map
