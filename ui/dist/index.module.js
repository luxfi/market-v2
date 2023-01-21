import {jsx as $9O4lY$jsx, jsxs as $9O4lY$jsxs, Fragment as $9O4lY$Fragment} from "react/jsx-runtime";
import {createContext as $9O4lY$createContext, useState as $9O4lY$useState, useRef as $9O4lY$useRef, useCallback as $9O4lY$useCallback, useEffect as $9O4lY$useEffect, useContext as $9O4lY$useContext, forwardRef as $9O4lY$forwardRef} from "react";
import $9O4lY$swr, {SWRConfig as $9O4lY$SWRConfig} from "swr";
import {redDark as $9O4lY$redDark, indigoDark as $9O4lY$indigoDark, indigoDarkA as $9O4lY$indigoDarkA, slateDark as $9O4lY$slateDark, blackA as $9O4lY$blackA, indigo as $9O4lY$indigo, indigoA as $9O4lY$indigoA, red as $9O4lY$red, gray as $9O4lY$gray, whiteA as $9O4lY$whiteA} from "@radix-ui/colors";
import {createClient as $9O4lY$createClient, setParams as $9O4lY$setParams, isOpenSeaBanned as $9O4lY$isOpenSeaBanned, getClient as $9O4lY$getClient} from "@luxmarket/sdk";
import {createStitches as $9O4lY$createStitches} from "@stitches/react";
import $9O4lY$swrinfinite from "swr/infinite";
import {useAccount as $9O4lY$useAccount, useNetwork as $9O4lY$useNetwork, useSigner as $9O4lY$useSigner, useBalance as $9O4lY$useBalance} from "wagmi";
import {faCircleExclamation as $9O4lY$faCircleExclamation, faCheckCircle as $9O4lY$faCheckCircle, faExchange as $9O4lY$faExchange, faCopy as $9O4lY$faCopy, faSpinner as $9O4lY$faSpinner, faChevronDown as $9O4lY$faChevronDown, faCube as $9O4lY$faCube, faWallet as $9O4lY$faWallet, faChevronLeft as $9O4lY$faChevronLeft, faClose as $9O4lY$faClose, faInfoCircle as $9O4lY$faInfoCircle, faCalendar as $9O4lY$faCalendar, faMagnifyingGlass as $9O4lY$faMagnifyingGlass, faPause as $9O4lY$faPause, faPlay as $9O4lY$faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as $9O4lY$FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion as $9O4lY$motion, AnimatePresence as $9O4lY$AnimatePresence} from "framer-motion";
import {constants as $9O4lY$constants, utils as $9O4lY$utils} from "ethers";
import {mainnet as $9O4lY$mainnet, goerli as $9O4lY$goerli} from "wagmi/chains";
import {Trigger as $9O4lY$Trigger, Content as $9O4lY$Content, ItemText as $9O4lY$ItemText, Value as $9O4lY$Value, Icon as $9O4lY$Icon, Root as $9O4lY$Root, Portal as $9O4lY$Portal, ScrollUpButton as $9O4lY$ScrollUpButton, Viewport as $9O4lY$Viewport, ScrollDownButton as $9O4lY$ScrollDownButton, Item as $9O4lY$Item} from "@radix-ui/react-select";
import {Arrow as $9O4lY$Arrow, Content as $9O4lY$Content1, Root as $9O4lY$Root1, Trigger as $9O4lY$Trigger1, Portal as $9O4lY$Portal1} from "@radix-ui/react-popover";
import {Title as $9O4lY$Title, Close as $9O4lY$Close, Overlay as $9O4lY$Overlay, Content as $9O4lY$Content2, Root as $9O4lY$Root2, DialogTrigger as $9O4lY$DialogTrigger, DialogPortal as $9O4lY$DialogPortal} from "@radix-ui/react-dialog";
import {formatUnits as $9O4lY$formatUnits, parseUnits as $9O4lY$parseUnits, parseEther as $9O4lY$parseEther, formatEther as $9O4lY$formatEther} from "ethers/lib/utils.js";
import $9O4lY$dayjs from "dayjs";
import $9O4lY$swrimmutable from "swr/immutable";
import {Root as $9O4lY$Root3, Thumb as $9O4lY$Thumb} from "@radix-ui/react-switch";
import $9O4lY$dayjspluginrelativeTimejs from "dayjs/plugin/relativeTime.js";
import $9O4lY$reactflatpickr from "react-flatpickr";
import {Root as $9O4lY$Root4, Viewport as $9O4lY$Viewport1, Scrollbar as $9O4lY$Scrollbar, Thumb as $9O4lY$Thumb1, Corner as $9O4lY$Corner} from "@radix-ui/react-scroll-area";
import {useMeasure as $9O4lY$useMeasure} from "@react-hookz/web";

/// <reference path="./types/parcel.d.ts" />
//Providers



const $0c385829cd78f402$export$8e8f484d816a71e3 = (overrides)=>{
    return {
        radii: {
            borderRadius: (overrides === null || overrides === void 0 ? void 0 : overrides.borderRadius) || "4px"
        },
        fonts: {
            body: (overrides === null || overrides === void 0 ? void 0 : overrides.font) || "sans-serif",
            button: (overrides === null || overrides === void 0 ? void 0 : overrides.buttonFont) || (overrides === null || overrides === void 0 ? void 0 : overrides.font) || "sans-serif",
            headline: (overrides === null || overrides === void 0 ? void 0 : overrides.headlineFont) || (overrides === null || overrides === void 0 ? void 0 : overrides.font) || "sans-serif"
        }
    };
};


function $be3b08e52dfef907$export$2e2bcd8739ae039(overrides) {
    let sharedTheme = (0, $0c385829cd78f402$export$8e8f484d816a71e3)(overrides);
    return {
        colors: {
            ...(0, $9O4lY$redDark),
            ...(0, $9O4lY$indigoDark),
            ...(0, $9O4lY$indigoDarkA),
            ...(0, $9O4lY$slateDark),
            ...(0, $9O4lY$blackA),
            // accent colors
            accentBase: "$indigo1",
            accentBgSubtle: "$indigo2",
            accentBg: "$indigo3",
            accentBgHover: "$indigo4",
            accentBgActive: "$indigo5",
            accentLine: "$indigo6",
            accentBorder: "$indigo7",
            accentBorderHover: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo8",
            accentSolid: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo9",
            accentSolidHover: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryHoverColor) || (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo10",
            accentText: "$indigo11",
            accentTextContrast: "$indigo12",
            // neutral colors
            neutralBase: "$slate1",
            neutralBgSubtle: "$slate2",
            neutralBg: "$slate3",
            neutralBgHover: "$slate4",
            neutralBgActive: "$slate5",
            neutalLine: "$slate6",
            neutralBorder: "$slate7",
            neutralBorderHover: "$slate8",
            neutralSolid: "$slate9",
            neutralSolidHover: "$slate10",
            neutralText: "$slate11",
            neutralTextContrast: "$slate12",
            // secondary colors
            secondaryBase: "$indigoA1",
            secondaryBgSubtle: "$indigoA2",
            secondaryBg: "$indigoA3",
            secondaryBgHover: "$indigoA4",
            secondaryBgActive: "$indigoA5",
            secondaryLine: "$indigoA6",
            secondaryBorder: "$indigoA7",
            secondaryBorderHover: "$indigoA8",
            secondarySolid: "$indigoA9",
            secondarySolidHover: "$indigoA10",
            secondaryText: "$indigoA11",
            secondaryTextContrast: "$indigoA12",
            // general colors
            borderColor: (overrides === null || overrides === void 0 ? void 0 : overrides.borderColor) || "$neutralBorder",
            textColor: (overrides === null || overrides === void 0 ? void 0 : overrides.textColor) || "$neutralTextContrast",
            focusColor: "$neutralTextContrast",
            errorText: "$red12",
            errorAccent: "$red10",
            successAccent: "#4CC38A",
            // component colors
            reservoirLogoColor: "#ECEDEE",
            inputBackground: "$neutralBgHover",
            buttonTextColor: (overrides === null || overrides === void 0 ? void 0 : overrides.buttonTextColor) || "white",
            buttonTextHoverColor: (overrides === null || overrides === void 0 ? void 0 : overrides.buttonTextHoverColor) || "white",
            overlayBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.overlayBackground) || "$blackA10",
            headerBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.headerBackground) || "$neutralBgHover",
            footerBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.footerBackground) || "$neutralBgSubtle",
            contentBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.contentBackground) || "$neutralBg",
            wellBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.wellBackground) || "$neutralBase",
            popoverBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.popoverBackground) || "$neutralBgActive"
        },
        assets: {
            ethIcon: (overrides === null || overrides === void 0 ? void 0 : overrides.ethIcon) || "purple"
        },
        ...sharedTheme
    };
}





const $984ab59112b3fd36$export$61eba4f5b935df88 = /*#__PURE__*/ (0, $9O4lY$createContext)(null);
const $984ab59112b3fd36$export$9d733ffc7f61c45c = function({ children: children , options: options  }) {
    const [clientContext, _] = (0, $9O4lY$useState)((0, $9O4lY$createClient)({
        ...options,
        uiVersion: "0.8.7"
    }) // hardcode latest
    );
    return /*#__PURE__*/ (0, $9O4lY$jsx)($984ab59112b3fd36$export$61eba4f5b935df88.Provider, {
        value: clientContext,
        children: children
    });
};




const { createTheme: $fa1a233ff8c38bd3$export$25d302a5b900a763 , keyframes: $fa1a233ff8c38bd3$export$d25ddfdf17c3ad3e , styled: $fa1a233ff8c38bd3$export$3817b7a54a07cec7 , globalCss: $fa1a233ff8c38bd3$export$db53682eef82cc11 , getCssText: $fa1a233ff8c38bd3$export$681e449128971c74 , theme: $fa1a233ff8c38bd3$export$bca14c5b3b88a9c9 , config: $fa1a233ff8c38bd3$export$e506a1d27d1eaa20  } = (0, $9O4lY$createStitches)({
    theme: {
        space: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "32px",
            6: "64px"
        },
        fontSizes: {},
        fontWeights: {},
        fonts: {
            body: "sans-serif",
            button: "$body"
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        radii: {
            borderRadius: 0
        },
        shadows: {},
        transitions: {}
    },
    utils: {
        // MARGIN
        m: (value)=>({
                margin: value
            }),
        mx: (value)=>({
                marginLeft: value,
                marginRight: value
            }),
        my: (value)=>({
                marginTop: value,
                marginBottom: value
            }),
        mt: (value)=>({
                marginTop: value
            }),
        mb: (value)=>({
                marginBottom: value
            }),
        ml: (value)=>({
                marginLeft: value
            }),
        mr: (value)=>({
                marginRight: value
            }),
        // PADDING
        p: (value)=>({
                padding: value
            }),
        px: (value)=>({
                paddingLeft: value,
                paddingRight: value
            }),
        py: (value)=>({
                paddingTop: value,
                paddingBottom: value
            }),
        pt: (value)=>({
                paddingTop: value
            }),
        pb: (value)=>({
                paddingBottom: value
            }),
        pl: (value)=>({
                paddingLeft: value
            }),
        pr: (value)=>({
                paddingRight: value
            }),
        // DIMENSIONS
        w: (value)=>({
                width: value
            }),
        h: (value)=>({
                height: value
            }),
        size: (value)=>({
                width: value,
                height: value
            })
    },
    media: {
        bp1: "(min-width: 600px)",
        bp2: "(min-width: 905px)",
        bp3: "(min-width: 1240px)",
        bp4: "(min-width: 1440px)",
        motion: "(prefers-reduced-motion)",
        hover: "(any-hover: hover)",
        dark: "(prefers-color-scheme: dark)",
        light: "(prefers-color-scheme: light)"
    },
    prefix: "rk"
});


var $b7e8449c1dcf20bf$exports = {};
$b7e8449c1dcf20bf$exports = JSON.parse('{"name":"@luxmarket/ui","version":"0.8.14","description":"MarketKit is the official frontend kit to get you started building dApps with the Lux Protocol.","author":"Lux Partners Limited","license":"MIT","source":"index.ts","module":"dist/index.module.js","types":"dist/index.d.ts","files":["index.ts","ReservoirClientProvider.tsx","ReservoirKitProvider.tsx","stitches.config.ts","components","constants","dist","hooks","lib","modal","primitives","styles","themes","types"],"keywords":["nft","lux","marketkit","protocol","sdk"],"sideEffects":false,"scripts":{"build":"parcel build index.ts","clean":"rm -rf dist","version":"yarn version","version:package":"sh ../../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release ui package v$PACKAGE_VERSION\\"; git push","version:prerelease":"yarn version prerelease; RC_VERSION=$(yarn version:package); git add -A; git commit -m \\"✨ Prerelease ui package v$RC_VERSION\\"; git push;","changelog":"node ../../scripts/generate-changelog.js package=ui"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^6.1.1","@fortawesome/free-solid-svg-icons":"^6.1.1","@fortawesome/react-fontawesome":"^0.2.0","@luxmarket/sdk":"^0.3.13","@radix-ui/colors":"^0.1.8","@radix-ui/react-dialog":"1.0.2","@radix-ui/react-popover":"1.0.3","@radix-ui/react-scroll-area":"1.0.2","@radix-ui/react-select":"1.2.0","@radix-ui/react-switch":"1.0.1","@radix-ui/react-toggle-group":"^1.0.2","@react-hookz/web":"^22.0.0","@stitches/react":"^1.3.1-1","@types/react-flatpickr":"^3.8.8","dayjs":"^1.11.4","flatpickr":"^4.6.13","framer-motion":"^6.4.2","react-flatpickr":"^3.10.13","swr":"^2.0.1"},"peerDependencies":{"ethers":"^5.7.2","react":"^18.0","react-dom":"^18.0","wagmi":"^0.10"},"engines":{"node":">=12","yarn":">=2"},"repository":{"type":"git","url":"https://github.com/luxdefi/market-kit"},"publishConfig":{"access":"public"},"devDependencies":{"parcel":"^2.8.3"}}');


const $d51d6eaf550b2a07$export$a6f1ecf08e412113 = (apiKey, clientVersion)=>{
    const headers = {
        "x-rkui-version": (0, $b7e8449c1dcf20bf$exports.version)
    };
    if (apiKey) headers["x-api-key"] = apiKey;
    if (clientVersion) headers["x-rkc-version"] = clientVersion;
    return headers;
};
const $d51d6eaf550b2a07$export$77754e0ac9f8aba3 = (resource, apiKey, clientVersion)=>{
    const headers = $d51d6eaf550b2a07$export$a6f1ecf08e412113(apiKey, clientVersion);
    return fetch(resource, {
        headers: headers
    }).then((res)=>res.json()).catch((e)=>{
        throw e;
    });
};
const $d51d6eaf550b2a07$export$6f9d915eee0c027b = {
    fetcher: $d51d6eaf550b2a07$export$77754e0ac9f8aba3,
    revalidateOnFocus: false
};



const $1b17277ebc86436f$var$fpFadeInDown = (0, $fa1a233ff8c38bd3$export$d25ddfdf17c3ad3e)({
    "0%": {
        opacity: 0,
        transform: "translate3d(0, -20px, 0)"
    },
    "100%": {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
    }
});
const $1b17277ebc86436f$var$calendarCss = (0, $fa1a233ff8c38bd3$export$db53682eef82cc11)({
    ".flatpickr-calendar": {
        opacity: 0,
        display: "none",
        textAlign: "center",
        visibility: "hidden",
        padding: 20,
        animation: "none",
        direction: "ltr",
        fontSize: 14,
        lineHeight: "24px",
        borderRadius: 5,
        position: "absolute",
        width: 307.875,
        boxSizing: "border-box",
        touchAction: "manipulation",
        backgroundColor: "$contentBackground",
        boxShadow: "1px 0 0 #20222c, -1px 0 0 #20222c, 0 1px 0 #20222c, 0 -1px 0 #20222c, 0 3px 13px rgba(0,0,0,0.08)",
        border: "1px solid $borderColor",
        fontFamily: "$body"
    },
    ".flatpickr-calendar.open": {
        opacity: 1,
        maxHeight: 640,
        visibility: "visible",
        display: "inline-block",
        zIndex: 99999,
        pointerEvents: "all"
    },
    ".flatpickr-calendar.inline": {
        opacity: 1,
        maxHeight: 640,
        visibility: "visible",
        display: "block",
        position: "relative",
        top: 2
    },
    ".flatpickr-calendar.animate.open": {
        animation: `${$1b17277ebc86436f$var$fpFadeInDown} 300ms cubic-bezier(0.23, 1, 0.32, 1)`
    },
    ".flatpickr-calendar.static": {
        position: "absolute",
        top: "calc(100% + 2px)"
    },
    ".flatpickr-calendar.static.open": {
        zIndex: 999,
        display: "block"
    },
    ".flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7)": {
        boxShadow: "none !important"
    },
    ".flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1)": {
        boxShadow: "-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6"
    },
    ".flatpickr-calendar .hasWeeks .dayContainer": {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 0
    },
    ".flatpickr-calendar .hasTime .dayContainer": {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    ".flatpickr-calendar.hasTime .flatpickr-time": {
        height: 40
    },
    ".flatpickr-calendar.noCalendar.hasTime .flatpickr-time": {
        height: "auto"
    },
    ".flatpickr-calendar:before": {
        position: "absolute",
        display: "block",
        pointerEvents: "none",
        border: "solid transparent",
        content: "",
        height: 0,
        width: 0,
        left: 22,
        borderWidth: 5,
        margin: "0 -5px"
    },
    ".flatpickr-calendar:after": {
        position: "absolute",
        display: "block",
        pointerEvents: "none",
        border: "solid transparent",
        content: "",
        height: 0,
        width: 0,
        left: 22,
        borderWidth: 4,
        margin: "0 -4px"
    },
    ".flatpickr-calendar.rightMost:before, .flatpickr-calendar.arrowRight:before, .flatpickr-calendar.rightMost:after, .flatpickr-calendar.arrowRight:after": {
        left: "auto",
        right: 22
    },
    ".flatpickr-calendar.arrowCenter:before, .flatpickr-calendar.arrowCenter:after": {
        left: "50%",
        right: "50%"
    },
    ".flatpickr-calendar.arrowTop:before, .flatpickr-calendar.arrowTop:after": {
        bottom: "100%"
    },
    ".flatpickr-calendar.arrowTop:before": {
        display: "none"
    },
    ".flatpickr-calendar.arrowTop:after": {
        display: "none"
    },
    ".flatpickr-calendar.arrowBottom:before, .flatpickr-calendar.arrowBottom:after": {
        top: "100%"
    },
    ".flatpickr-calendar.arrowBottom:before": {
        display: "none"
    },
    ".flatpickr-calendar.arrowBottom:after": {
        display: "none"
    },
    ".flatpickr-calendar:focus": {
        outline: 0
    },
    ".flatpickr-wrapper": {
        position: "relative",
        display: "inline-block"
    },
    ".flatpickr-months": {
        display: "flex"
    },
    ".flatpickr-months .flatpickr-month": {
        backgroundColor: "$contentBackground",
        color: "$neutralTextContrast",
        fill: "$neutralTextContrast",
        height: 34,
        lineHeight: "1px",
        textAlign: "center",
        position: "relative",
        userSelect: "none",
        overflow: "hidden",
        flex: 1,
        marginBottom: 8
    },
    ".flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month": {
        userSelect: "none",
        textDecoration: "none",
        cursor: "pointer",
        position: "absolute",
        top: 20,
        height: 34,
        padding: 10,
        zIndex: 3,
        color: "$neutralText",
        fill: "$neutralText"
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-disabled, .flatpickr-months .flatpickr-next-month.flatpickr-disabled": {
        display: "none"
    },
    ".flatpickr-months .flatpickr-prev-month i, .flatpickr-months .flatpickr-next-month i": {
        position: "relative"
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-prev-month": {
        left: 0
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-next-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month": {
        right: 0
    },
    ".flatpickr-months .flatpickr-prev-month:hover, .flatpickr-months .flatpickr-next-month:hover": {
        color: "$neutralText"
    },
    ".flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg": {
        fill: "$neutralTextContrast"
    },
    ".flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg": {
        width: 14,
        height: 14
    },
    ".flatpickr-months .flatpickr-prev-month svg path, .flatpickr-months .flatpickr-next-month svg path": {
        transition: "fill 0.1s",
        fill: "inherit"
    },
    ".numInputWrapper": {
        position: "relative",
        height: "auto"
    },
    ".numInputWrapper input, .numInputWrapper span": {
        display: "inline-block"
    },
    ".numInputWrapper input": {
        width: "100%"
    },
    ".numInputWrapper input::-ms-clear": {
        display: "none"
    },
    ".numInputWrapper input::-webkit-outer-spin-button, .numInputWrapper input::-webkit-inner-spin-button": {
        margin: 0,
        "-webkit-appearance": "none"
    },
    ".numInputWrapper span": {
        position: "absolute",
        right: 0,
        width: 14,
        padding: "0 4px 0 2px",
        height: "50%",
        lineHeight: "50%",
        opacity: 0,
        cursor: "pointer",
        boxSizing: "border-box"
    },
    ".numInputWrapper span:hover": {
        background: "$neutralBgHover"
    },
    ".numInputWrapper span:active": {
        background: "$neutralBgActive"
    },
    ".numInputWrapper span:after": {
        display: "block",
        content: "",
        position: "absolute"
    },
    ".numInputWrapper span.arrowUp": {
        top: 0,
        borderBottom: 0
    },
    ".numInputWrapper span.arrowUp:after": {
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderBottom: "4px solid $neutralText",
        top: "26%"
    },
    ".numInputWrapper span.arrowDown": {
        top: "50%"
    },
    ".numInputWrapper span.arrowDown:after": {
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderTop: "4px solid $neutralText",
        top: "40%"
    },
    ".numInputWrapper span svg": {
        width: "inherit",
        height: "auto"
    },
    ".numInputWrapper span svg path": {
        fill: "$neutralBgHover"
    },
    ".numInputWrapper:hover": {
        background: "$neutralBgHover"
    },
    ".numInputWrapper:hover span": {
        opacity: 1
    },
    ".flatpickr-current-month": {
        fontSize: "135%",
        fontWeight: 300,
        color: "$neutralText",
        position: "absolute",
        width: "83%",
        left: "12.5%",
        lineHeight: "1px",
        height: 34,
        display: "flex",
        alignItems: "center",
        gap: 12,
        textAlign: "center",
        transform: "translate3d(0px, 0px, 0px)"
    },
    ".flatpickr-current-month span.cur-month": {
        fontFamily: "inherit",
        fontWeight: 700,
        color: "$neutralText",
        display: "inline-block",
        marginLeft: "0.5ch",
        padding: 0
    },
    ".flatpickr-current-month span.cur-month:hover": {
        background: "rgba(192,187,167,0.05)"
    },
    ".flatpickr-current-month .numInputWrapper": {
        width: "7ch\0",
        display: "inline-block"
    },
    ".flatpickr-current-month .numInputWrapper span.arrowUp:after": {
        borderBottomColor: "$neutralText"
    },
    ".flatpickr-current-month .numInputWrapper span.arrowDown:after": {
        borderTopColor: "$neutralText"
    },
    ".flatpickr-current-month input.cur-year": {
        backgroundColor: "transparent",
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "text",
        margin: 0,
        display: "inline-block",
        fontSize: "inherit",
        fontFamily: "inherit",
        lineHeight: "inherit",
        height: "auto",
        border: 0,
        borderRadius: 0,
        verticalAlign: "initial",
        appearance: "textfield",
        padding: "4px 0px"
    },
    ".flatpickr-current-month input.cur-year:focus": {
        outline: 0
    },
    ".flatpickr-current-month input.cur-year[disabled], .flatpickr-current-month input.cur-year[disabled]:hover": {
        fontSize: "100%",
        color: "$neutralText",
        background: "transparent",
        pointerEvents: "none"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months": {
        appearance: "menulist",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 0,
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "pointer",
        fontSize: "inherit",
        fontFamily: "inherit",
        height: "auto",
        lineHeight: "inherit",
        outline: "none",
        position: "relative",
        verticalAlign: "initial",
        width: "auto",
        padding: "4px 8px"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months:focus, .flatpickr-current-month .flatpickr-monthDropdown-months:active": {
        outline: "none"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months:hover": {
        backgroundColor: "$neutralBgHover"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month": {
        backgroundColor: "$neutralBg",
        outline: "none",
        padding: 0
    },
    ".flatpickr-weekdays": {
        backgroundColor: "transparent",
        color: "$neutralText",
        textAlign: "center",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: 28,
        border: "transparent",
        marginBottom: 8
    },
    ".flatpickr-weekdays .flatpickr-weekdaycontainer": {
        display: "flex",
        flex: 1
    },
    "span.flatpickr-weekday": {
        cursor: "default",
        fontSize: "90%",
        background: "transparent",
        color: "$neutralText",
        lineHeight: "1px",
        margin: 0,
        textAlign: "center",
        display: "block",
        flex: 1,
        fontWeight: "bolder"
    },
    ".dayContainer, .flatpickr-weeks": {
        padding: "1px 0 0 0"
    },
    ".flatpickr-days": {
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        width: 307.875,
        marginBottom: 12
    },
    ".flatpickr-days:focus": {
        outline: 0
    },
    ".dayContainer": {
        padding: 0,
        outline: 0,
        textAlign: "left",
        width: 307.875,
        minWidth: 307.875,
        maxWidth: 307.875,
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        "-ms-flex-pack": "justify",
        justifyContent: "space-around",
        transform: "translate3d(0px, 0px, 0px)",
        opacity: 1
    },
    ".dayContainer + .dayContainer": {
        boxShadow: "-1px 0 0 #20222c"
    },
    ".flatpickr-day": {
        background: "none",
        border: "1px solid transparent",
        borderRadius: 150,
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "pointer",
        fontWeight: 400,
        width: "14.2857143%",
        flexBasis: "14.2857143%",
        maxWidth: 39,
        height: 39,
        lineHeight: "39px",
        margin: 0,
        display: "inline-block",
        position: "relative",
        "-webkit-box-pack": "center",
        "-ms-flex-pack": "center",
        justifyContent: "center",
        textAlign: "center"
    },
    ".flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus": {
        cursor: "pointer",
        outline: 0,
        backgroundColor: "$accentBg",
        borderColor: "$neutralBorder"
    },
    ".flatpickr-day.today": {
        borderColor: "$neutralBorder"
    },
    ".flatpickr-day.today:hover, .flatpickr-day.today:focus": {
        borderColor: "$neutralBorder",
        backgroundColor: "$neutralBg",
        color: "$buttonTextColor"
    },
    ".flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay": {
        backgroundColor: "$accentBg",
        boxShadow: "none",
        color: "$neutralTextContrast",
        borderColor: "$borderColor"
    },
    ".flatpickr-day.selected.startRange, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.startRange": {
        borderRadius: "50px 0 0 50px"
    },
    ".flatpickr-day.selected.endRange, .flatpickr-day.startRange.endRange, .flatpickr-day.endRange.endRange": {
        borderRadius: "0 50px 50px 0"
    },
    ".flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1))": {
        boxShadow: "-10px 0 0 #80cbc4"
    },
    ".flatpickr-day.selected.startRange.endRange, .flatpickr-day.startRange.startRange.endRange, .flatpickr-day.endRange.startRange.endRange": {
        borderRadius: 50
    },
    ".flatpickr-day.inRange": {
        borderRadius: 0,
        boxShadow: "-5px 0 0 #646c8c, 5px 0 0 #646c8c"
    },
    ".flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay": {
        color: "$neutralText",
        background: "transparent",
        borderColor: "transparent",
        cursor: "default"
    },
    ".flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover": {
        cursor: "not-allowed",
        color: "$neutralText",
        opacity: 0.5
    },
    ".flatpickr-day.week.selected": {
        borderRadius: 0,
        boxShadow: "-5px 0 0 #80cbc4, 5px 0 0 #80cbc4"
    },
    ".flatpickr-day.hidden": {
        visibility: "hidden"
    },
    ".rangeMode .flatpickr-day": {
        marginTop: 1
    },
    ".flatpickr-weekwrapper": {
        float: "left"
    },
    ".flatpickr-weekwrapper .flatpickr-weeks": {
        padding: "0 12px",
        boxShadow: "1px 0 0 #20222c"
    },
    ".flatpickr-weekwrapper .flatpickr-weekday": {
        float: "none",
        width: "100%",
        lineHeight: "28px"
    },
    ".flatpickr-weekwrapper span.flatpickr-day, .flatpickr-weekwrapper span.flatpickr-day:hover": {
        display: "block",
        width: "100%",
        maxWidth: "none",
        color: "$neutralText",
        background: "transparent",
        cursor: "default",
        border: "none"
    },
    ".flatpickr-innerContainer": {
        display: "flex",
        boxSizing: "border-box",
        overflow: "hidden"
    },
    ".flatpickr-rContainer": {
        display: "inline-block",
        padding: 0,
        boxSizing: "border-box"
    },
    ".flatpickr-time": {
        textAlign: "center",
        outline: 0,
        height: 0,
        lineHeight: "40px",
        maxHeight: 40,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex"
    },
    ".flatpickr-time:after": {
        content: "",
        display: "table",
        clear: "both"
    },
    ".flatpickr-time .numInputWrapper": {
        flex: 1,
        width: "40%",
        height: 40,
        float: "left"
    },
    ".flatpickr-time .numInputWrapper span.arrowUp:after": {
        borderBottomColor: "$neutralText"
    },
    ".flatpickr-time .numInputWrapper span.arrowDown:after": {
        borderTopColor: "$neutralText"
    },
    ".flatpickr-time.hasSeconds .numInputWrapper": {
        width: "26%"
    },
    ".flatpickr-time.time24hr .numInputWrapper": {
        width: "49%"
    },
    ".flatpickr-time input": {
        background: "transparent",
        boxShadow: "none",
        border: 0,
        borderRadius: 0,
        textAlign: "center",
        margin: 0,
        padding: 0,
        height: "inherit",
        lineHeight: "inherit",
        color: "$neutralText",
        fontSize: 14,
        position: "relative",
        boxSizing: "border-box",
        appearance: "textfield"
    },
    ".flatpickr-time input.flatpickr-hour": {},
    ".flatpickr-time input.flatpickr-minute, .flatpickr-time input.flatpickr-second": {
        fontWeight: 400
    },
    ".flatpickr-time input:focus": {
        outline: 0,
        border: 0
    },
    ".flatpickr-time .flatpickr-time-separator, .flatpickr-time .flatpickr-am-pm": {
        height: "inherit",
        float: "left",
        lineHeight: "inherit",
        color: "$neutralText",
        fontWeight: "bold",
        width: "2%",
        userSelect: "none",
        "-ms-flex-item-align": "center",
        alignSelf: "center"
    },
    ".flatpickr-time .flatpickr-am-pm": {
        outline: 0,
        width: "18%",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: 400
    },
    ".flatpickr-time input:hover, .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-time input:focus, .flatpickr-time .flatpickr-am-pm:focus": {
        background: "$neutralBgHover"
    },
    ".flatpickr-input[readonly]": {
        cursor: "pointer"
    },
    ".flatpickr-input.flatpickr-mobile": {
        "&::-webkit-inner-spin-button": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "&::-webkit-calendar-picker-indicator": {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "none"
        },
        "&::-webkit-datetime-edit": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "&::-webkit-date-and-time-value": {
            display: "none",
            "-webkit-appearance": "none"
        }
    },
    "@-moz-document url-prefix()": {
        "@media only screen and (max-width: 600px)": {
            '.flatpickr-input[type="text"]': {
                color: "transparent"
            }
        }
    }
});
var $1b17277ebc86436f$export$2e2bcd8739ae039 = $1b17277ebc86436f$var$calendarCss;



const $21beef35556721a3$var$useMutationObservable = (callback, el, options)=>{
    const [observer, setObserver] = (0, $9O4lY$useState)(null);
    (0, $9O4lY$useEffect)(()=>{
        if (observer) observer.disconnect();
        if (!el || typeof window === "undefined" || !("MutationObserver" in window)) return;
        const obs = new MutationObserver(callback);
        obs.observe(el, options);
        setObserver(obs);
        return ()=>{
            obs.disconnect();
        };
    }, [
        el,
        callback,
        options
    ]);
    return observer;
};
var $21beef35556721a3$export$2e2bcd8739ae039 = $21beef35556721a3$var$useMutationObservable;


const $1c6f180e574ece24$export$2c657da244d00bd6 = /*#__PURE__*/ (0, $9O4lY$createContext)(undefined);
const $1c6f180e574ece24$export$f66a1c3c9465af21 = /*#__PURE__*/ (0, $9O4lY$createContext)({});
const $1c6f180e574ece24$var$defaultOptions = {
    apiBase: "https://api.reservoir.tools",
    apiKey: ""
};
const $1c6f180e574ece24$var$classNameObserverOptions = {
    attributeFilter: [
        "class"
    ]
};
const $1c6f180e574ece24$export$14ec072536e53e19 = function({ children: children , options: options = $1c6f180e574ece24$var$defaultOptions , theme: theme , swrOptions: swrOptions = {}  }) {
    const [globalTheme, setGlobalTheme] = (0, $9O4lY$useState)();
    const [providerOptions, setProviderOptions] = (0, $9O4lY$useState)({});
    const currentTheme = (0, $9O4lY$useRef)(null);
    const classNameCallback = (0, $9O4lY$useCallback)((mutationList)=>{
        mutationList.forEach((mutation)=>{
            const body = mutation.target;
            if (mutation.attributeName === "class" && body && !body.className.includes(currentTheme.current)) document.body.classList.add(currentTheme.current);
        });
    }, [
        currentTheme
    ]);
    (0, $21beef35556721a3$export$2e2bcd8739ae039)(classNameCallback, typeof window !== "undefined" ? document.body : null, $1c6f180e574ece24$var$classNameObserverOptions);
    (0, $1b17277ebc86436f$export$2e2bcd8739ae039)();
    (0, $9O4lY$useEffect)(()=>{
        let newTheme = (0, $fa1a233ff8c38bd3$export$25d302a5b900a763)(theme ? theme : (0, $be3b08e52dfef907$export$2e2bcd8739ae039)());
        let oldTheme = currentTheme.current;
        currentTheme.current = newTheme;
        document.body.classList.add(newTheme);
        if (oldTheme) document.body.classList.remove(oldTheme);
        setGlobalTheme(newTheme);
    }, [
        JSON.stringify(theme)
    ]);
    (0, $9O4lY$useEffect)(()=>{
        setProviderOptions(options);
    }, [
        options
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)($1c6f180e574ece24$export$2c657da244d00bd6.Provider, {
        value: globalTheme,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)($1c6f180e574ece24$export$f66a1c3c9465af21.Provider, {
            value: providerOptions,
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $984ab59112b3fd36$export$9d733ffc7f61c45c), {
                options: options,
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$SWRConfig), {
                    value: {
                        ...(0, $d51d6eaf550b2a07$export$6f9d915eee0c027b),
                        ...swrOptions
                    },
                    children: children
                })
            })
        })
    });
};






function $e000965a5c78353a$export$2e2bcd8739ae039() {
    return (0, $9O4lY$useContext)((0, $984ab59112b3fd36$export$61eba4f5b935df88));
}


function $6038836de528509a$export$2e2bcd8739ae039(collection, swrOptions = {}) {
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const pathname = `${client === null || client === void 0 ? void 0 : client.apiBase}/collections/${collection}/attributes/all/v2`;
    const path = collection ? new URL(pathname) : null;
    const { data: data , mutate: mutate , error: error , isValidating: isValidating  } = (0, $9O4lY$swr)(path ? [
        path.href,
        client === null || client === void 0 ? void 0 : client.apiKey,
        client === null || client === void 0 ? void 0 : client.version
    ] : null, null, {
        revalidateOnMount: true,
        ...swrOptions
    });
    const collections = data && data.attributes ? data.attributes : null;
    return {
        response: data,
        data: collections,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $b172d3ea1d6f916c$export$2e2bcd8739ae039(options, swrOptions = {}, enabled = true) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!enabled) return null;
        const url = new URL(`${(client === null || client === void 0 ? void 0 : client.apiBase) || ""}/orders/bids/v5`);
        let query = options || {};
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client === null || client === void 0 ? void 0 : client.normalizeRoyalties;
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const bids = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.orders)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: bids,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $50e9626ee309fa09$export$2e2bcd8739ae039(options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!options || !options.collection && !options.collectionsSetId && !options.community) return null;
        const url = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/collections/activity/v5`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const activities = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.activities)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: activities,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $02e139e000faba42$export$2e2bcd8739ae039(options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!options) return null;
        const url = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/collections/v5`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $9O4lY$setParams)(url, query);
        return url.href;
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const collections = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>{
        return (page === null || page === void 0 ? void 0 : page.collections) || [];
    })) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: collections,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $f89e1fbc30486f4b$export$2e2bcd8739ae039(options, swrOptions = {}, enabled = true) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!enabled) return null;
        const url = new URL(`${(client === null || client === void 0 ? void 0 : client.apiBase) || ""}/orders/asks/v4`);
        let query = options || {};
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const listings = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.orders)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: listings,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}



function $f491475ec91fff7b$export$2e2bcd8739ae039(query, swrOptions) {
    const { address: address  } = (0, $9O4lY$useAccount)();
    let queryOptions = {
        maker: address
    };
    if (query) queryOptions = {
        ...queryOptions,
        ...query
    };
    return (0, $f89e1fbc30486f4b$export$2e2bcd8739ae039)(queryOptions, swrOptions, address !== undefined);
}



function $5e1eca9743a08381$export$2e2bcd8739ae039(contract, token) {
    const [isBanned, setIsBanned] = (0, $9O4lY$useState)(false);
    (0, $9O4lY$useEffect)(()=>{
        if (contract && token) (0, $9O4lY$isOpenSeaBanned)(contract, token).then((isBanned)=>{
            setIsBanned(isBanned);
        }).catch((e)=>{
            console.error(e);
            setIsBanned(false);
        });
        else setIsBanned(false);
    }, [
        contract,
        token
    ]);
    return isBanned;
}




function $a22273d84f519011$export$2e2bcd8739ae039(options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!options) return null;
        const url = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/tokens/v5`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const tokens = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.tokens)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: tokens,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $9708d57cc63f3a07$export$2e2bcd8739ae039(user, options, swrOptions = {}) {
    var _data_, _data__collections;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    let defaultLimit = 20;
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        var _previousPageData_collections;
        if (!user) return null;
        const url = new URL(`${(client === null || client === void 0 ? void 0 : client.apiBase) || ""}/users/${user}/collections/v2`);
        let query = {
            offset: pageIndex * ((options === null || options === void 0 ? void 0 : options.limit) || defaultLimit),
            limit: (options === null || options === void 0 ? void 0 : options.limit) || defaultLimit,
            ...options
        };
        if ((previousPageData === null || previousPageData === void 0 ? void 0 : previousPageData.collections) && (previousPageData === null || previousPageData === void 0 ? void 0 : (_previousPageData_collections = previousPageData.collections) === null || _previousPageData_collections === void 0 ? void 0 : _previousPageData_collections.length) === 0) return null;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const collections = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.collections)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean((data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : (_data__collections = _data_.collections) === null || _data__collections === void 0 ? void 0 : _data__collections.length) === ((options === null || options === void 0 ? void 0 : options.limit) || defaultLimit));
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: collections,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $5a3def0f02cbf5bb$export$2e2bcd8739ae039(users, options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!users) return null;
        const url = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/users/activity/v5`);
        let query = {
            ...options,
            users: users
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const activities = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.activities)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: activities,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $45cacd3a46e0756d$export$2e2bcd8739ae039(user, options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!user) return null;
        const url = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/users/${user}/tokens/v6`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const tokens = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.tokens)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: tokens,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $9099420e6dfe76fe$export$2e2bcd8739ae039(user, options, swrOptions = {}) {
    var _data_;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: data , mutate: mutate , error: error , isValidating: isValidating , size: size , setSize: setSize  } = (0, $9O4lY$swrinfinite)((pageIndex, previousPageData)=>{
        if (!user) return null;
        const url = new URL(`${(client === null || client === void 0 ? void 0 : client.apiBase) || ""}/orders/users/${user}/top-bids/v2`);
        let query = options || {};
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && (client === null || client === void 0 ? void 0 : client.normalizeRoyalties) !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $9O4lY$setParams)(url, query);
        return [
            url.href,
            client === null || client === void 0 ? void 0 : client.apiKey,
            client === null || client === void 0 ? void 0 : client.version
        ];
    }, null, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    var _data_flatMap;
    const bids = (_data_flatMap = data === null || data === void 0 ? void 0 : data.flatMap((page)=>page.topBids)) !== null && _data_flatMap !== void 0 ? _data_flatMap : [];
    const hasNextPage = Boolean(data === null || data === void 0 ? void 0 : (_data_ = data[size - 1]) === null || _data_ === void 0 ? void 0 : _data_.continuation);
    const isFetchingInitialData = !data && !error;
    const isFetchingPage = isFetchingInitialData || size > 0 && data && typeof data[size - 1] === "undefined";
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    return {
        response: data,
        data: bids,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        fetchNextPage: fetchNextPage,
        setSize: setSize,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}




function $ea0d7f856eff774e$export$2e2bcd8739ae039(overrides) {
    let sharedTheme = (0, $0c385829cd78f402$export$8e8f484d816a71e3)(overrides);
    return {
        colors: {
            ...(0, $9O4lY$indigo),
            ...(0, $9O4lY$indigoA),
            ...(0, $9O4lY$red),
            ...(0, $9O4lY$gray),
            ...(0, $9O4lY$blackA),
            ...(0, $9O4lY$whiteA),
            // accent colors
            accentBase: "$indigo1",
            accentBgSubtle: "$indigo2",
            accentBg: "$indigo3",
            accentBgHover: "$indigo4",
            accentBgActive: "$indigo5",
            accentLine: "$indigo6",
            accentBorder: "$indigo7",
            accentBorderHover: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo8",
            accentSolid: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo9",
            accentSolidHover: (overrides === null || overrides === void 0 ? void 0 : overrides.primaryHoverColor) || (overrides === null || overrides === void 0 ? void 0 : overrides.primaryColor) || "$indigo10",
            accentText: "$indigo11",
            accentTextContrast: "$indigo12",
            // neutral colors
            neutralBase: "$gray1",
            neutralBgSubtle: "white",
            neutralBg: "$gray3",
            neutralBgHover: "$gray2",
            neutralBgActive: "$gray5",
            neutalLine: "$gray6",
            neutralBorder: "$gray7",
            neutralBorderHover: "$gray8",
            neutralSolid: "$gray9",
            neutralSolidHover: "$gray10",
            neutralText: "$gray11",
            neutralTextContrast: "$gray12",
            // secondary colors
            secondaryBase: "$indigoA1",
            secondaryBgSubtle: "$indigoA2",
            secondaryBg: "$indigoA3",
            secondaryBgHover: "$indigoA4",
            secondaryBgActive: "$indigoA5",
            secondaryLine: "$indigoA6",
            secondaryBorder: "$indigoA7",
            secondaryBorderHover: "$indigoA8",
            secondarySolid: "$indigoA9",
            secondarySolidHover: "$indigoA10",
            secondaryText: "$indigoA11",
            secondaryTextContrast: "$indigoA12",
            // general colors
            borderColor: (overrides === null || overrides === void 0 ? void 0 : overrides.borderColor) || "$neutralBorder",
            textColor: (overrides === null || overrides === void 0 ? void 0 : overrides.textColor) || "$neutralTextContrast",
            focusColor: "$neutralTextContrast",
            errorText: "$red12",
            errorAccent: "$red10",
            successAccent: "#4CC38A",
            // component colors
            reservoirLogoColor: "#11181C",
            buttonTextColor: (overrides === null || overrides === void 0 ? void 0 : overrides.buttonTextColor) || "white",
            buttonTextHoverColor: (overrides === null || overrides === void 0 ? void 0 : overrides.buttonTextHoverColor) || "white",
            inputBackground: "$neutralBgHover",
            overlayBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.overlayBackground) || "$blackA10",
            headerBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.headerBackground) || "$neutralBgHover",
            footerBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.footerBackground) || "$neutralBgHover",
            contentBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.contentBackground) || "$neutralBgSubtle",
            wellBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.wellBackground) || "$gray3",
            popoverBackground: (overrides === null || overrides === void 0 ? void 0 : overrides.popoverBackground) || "$neutralBase"
        },
        assets: {
            ethIcon: (overrides === null || overrides === void 0 ? void 0 : overrides.ethIcon) || "gray"
        },
        ...sharedTheme
    };
}





const $31437c4f21a5ffe7$var$useCopyToClipboard = (successTime = 1000)=>{
    const [copied, setCopied] = (0, $9O4lY$useState)(false);
    const copy = (content)=>{
        navigator.clipboard.writeText(content ? content : "");
        if (!copied) {
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, successTime);
        }
    };
    return {
        copy: copy,
        copied: copied
    };
};
var $31437c4f21a5ffe7$export$2e2bcd8739ae039 = $31437c4f21a5ffe7$var$useCopyToClipboard;


const $d28bf5c50086a68a$var$useFallbackState = (defaultValue, state)=>{
    const _state = (0, $9O4lY$useState)(defaultValue);
    if (state) return state;
    return _state;
};
var $d28bf5c50086a68a$export$2e2bcd8739ae039 = $d28bf5c50086a68a$var$useFallbackState;





const $75c8f4bea838a71f$export$ec39d0bf2d6d1efb = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("a", {
    backgroundColor: "transparent",
    cursor: "pointer",
    fontFamily: "$body",
    fontSize: 16,
    color: "inherit",
    textDecoration: "inherit",
    $$focusColor: "$colors$neutralTextContrast",
    "&:focus-visible": {
        color: "$neutralTextContrast",
        outline: "none",
        borderRadius: 4,
        boxShadow: "0 0 0 2px $$focusColor"
    },
    variants: {
        color: {
            primary: {
                color: "$accentText",
                "&:hover": {
                    color: "$accentSolidHover"
                }
            },
            gray: {
                color: "$neutralText",
                "&:hover": {
                    color: "$accentText"
                }
            }
        },
        weight: {
            heavy: {
                fontWeight: 700
            },
            medium: {
                fontWeight: 500
            }
        }
    },
    defaultVariants: {
        color: "gray",
        weight: "heavy"
    }
});
var $75c8f4bea838a71f$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ children: children , ...props }, forwardedRef)=>/*#__PURE__*/ (0, $9O4lY$jsx)($75c8f4bea838a71f$export$ec39d0bf2d6d1efb, {
        ref: forwardedRef,
        ...props,
        tabIndex: 0,
        children: children
    }));


var $6bc6fb211dac7330$export$2e2bcd8739ae039 = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("div", {
    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 0
});


const $12eefc85e5b38f93$var$Button = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("button", {
    backgroundColor: "transparent",
    backgroundImage: "none",
    outline: "none",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "$button",
    transition: "background-color 250ms linear",
    gap: "$space$2",
    display: "inline-flex",
    justifyContent: "center",
    color: "$buttonTextColor",
    alignItems: "center",
    lineHeight: "20px",
    $$focusColor: "$colors$focusColor",
    cursor: "pointer",
    border: 0,
    borderWidth: 0,
    "&:focus-visible": {
        boxShadow: "0 0 0 2px $$focusColor"
    },
    "&:disabled": {
        backgroundColor: "$neutralBorder",
        color: "$neutralText",
        cursor: "default"
    },
    "&:disabled:hover": {
        backgroundColor: "$neutralBorderHover",
        color: "$neutralText",
        cursor: "default"
    },
    variants: {
        color: {
            primary: {
                backgroundColor: "$accentSolid",
                color: "$buttonTextColor",
                "&:hover": {
                    backgroundColor: "$accentSolidHover",
                    color: "$buttonTextHoverColor"
                }
            },
            secondary: {
                backgroundColor: "$neutralBgHover",
                color: "$textColor",
                "&:hover": {
                    backgroundColor: "$neutralBgActive"
                }
            },
            ghost: {
                backgroundColor: "transparent",
                p: 0
            }
        },
        corners: {
            rounded: {
                borderRadius: "$borderRadius"
            },
            pill: {
                borderRadius: 99999
            },
            circle: {
                borderRadius: "99999px",
                alignItems: "center",
                justifyContent: "center"
            }
        },
        size: {
            none: {},
            xs: {
                p: "$space$3",
                lineHeight: "16px",
                minHeight: 40
            },
            small: {
                px: "$space$3",
                py: "$space$4",
                lineHeight: "12px",
                minHeight: 44
            },
            medium: {
                px: "$space$5",
                py: "$space$3",
                minHeight: 44
            },
            large: {
                px: "$space$5",
                py: "$space$4",
                minHeight: 52
            }
        }
    },
    compoundVariants: [
        {
            size: "xs",
            corners: "circle",
            css: {
                height: 40,
                width: 40,
                p: 0
            }
        },
        {
            size: "small",
            corners: "circle",
            css: {
                height: 44,
                width: 44,
                p: 0
            }
        },
        {
            size: "medium",
            corners: "circle",
            css: {
                height: 44,
                width: 44,
                p: 0
            }
        },
        {
            size: "large",
            corners: "circle",
            css: {
                height: 52,
                width: 52,
                p: 0
            }
        }
    ],
    defaultVariants: {
        color: "primary",
        corners: "rounded",
        size: "medium"
    }
});
var $12eefc85e5b38f93$export$2e2bcd8739ae039 = $12eefc85e5b38f93$var$Button;



const $d0895fe590f10fcf$var$flexCss = {
    display: "flex",
    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 0,
    variants: {
        align: {
            start: {
                alignItems: "flex-start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "flex-end"
            },
            stretch: {
                alignItems: "stretch"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        justify: {
            start: {
                justifyContent: "flex-start"
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "flex-end"
            },
            between: {
                justifyContent: "space-between"
            }
        },
        direction: {
            row: {
                flexDirection: "row"
            },
            column: {
                flexDirection: "column"
            },
            rowReverse: {
                flexDirection: "row-reverse"
            },
            columnReverse: {
                flexDirection: "column-reverse"
            }
        },
        wrap: {
            noWrap: {
                flexWrap: "nowrap"
            },
            wrap: {
                flexWrap: "wrap"
            },
            wrapReverse: {
                flexWrap: "wrap-reverse"
            }
        }
    }
};
var $d0895fe590f10fcf$export$2e2bcd8739ae039 = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("div", $d0895fe590f10fcf$var$flexCss);
const $d0895fe590f10fcf$export$d31dc64e78f336f = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $9O4lY$motion).div, $d0895fe590f10fcf$var$flexCss);




function $94b172869b555d93$export$a81f732198733497(num, fixed) {
    const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
    const fixedNum = num.toString().match(re);
    return fixedNum ? fixedNum[0] : num;
}
function $94b172869b555d93$export$f5dd818bff069720(amount, maximumFractionDigits = 2) {
    const { format: format  } = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: maximumFractionDigits
    });
    if (!amount) return "-";
    return format(amount);
}
const $94b172869b555d93$var$trauncateFractionAndFormat = (parts, digits)=>{
    return parts.map(({ type: type , value: value  })=>{
        if (type !== "fraction" || !value || value.length < digits) return value;
        let formattedValue = "";
        for(let idx = 0, counter = 0; idx < value.length && counter < digits; idx++){
            if (value[idx] !== "0") counter++;
            formattedValue += value[idx];
        }
        return formattedValue;
    }).reduce((string, part)=>string + part);
};
/**
 *  Convert ETH values to human readable formats
 * @param amount An ETH amount
 * @param maximumFractionDigits Number of decimal digits
 * @returns returns the ETH value as a `string` or `-` if the amount is `null` or `undefined`
 */ function $94b172869b555d93$export$87710fd8420713d9(amount, maximumFractionDigits, decimals = 18) {
    if (typeof amount === "undefined" || amount === null) return "-";
    const amountToFormat = typeof amount === "number" ? amount : +(0, $9O4lY$utils).formatUnits(amount, decimals);
    const parts = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
        notation: "compact",
        compactDisplay: "short"
    }).formatToParts(amountToFormat);
    if (parts && parts.length > 0) return $94b172869b555d93$var$trauncateFractionAndFormat(parts, maximumFractionDigits);
    else return typeof amount === "string" || typeof amount === "number" ? `${amount}` : "";
}




var $26a7fe0a528209f2$export$2e2bcd8739ae039 = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("span", {
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0,
    margin: 0,
    variants: {
        color: {
            base: {
                color: "$textColor"
            },
            subtle: {
                color: "$neutralText"
            },
            error: {
                color: "$errorAccent"
            },
            errorLight: {
                color: "$errorText"
            },
            accent: {
                color: "$accentText"
            },
            success: {
                color: "$successAccent"
            },
            button: {
                color: "$buttonTextColor"
            }
        },
        style: {
            h2: {
                fontWeight: 700,
                fontSize: 48,
                fontFamily: "$headline"
            },
            h3: {
                fontWeight: 700,
                fontSize: 32,
                fontFamily: "$headline"
            },
            h4: {
                fontWeight: 700,
                fontSize: 24,
                fontFamily: "$headline"
            },
            h5: {
                fontWeight: 700,
                fontSize: 20,
                fontFamily: "$headline"
            },
            h6: {
                fontWeight: 700,
                fontSize: 16,
                fontFamily: "$headline"
            },
            subtitle1: {
                fontWeight: 500,
                fontSize: 16
            },
            subtitle2: {
                fontWeight: 500,
                fontSize: 12
            },
            body1: {
                fontWeight: 400,
                fontSize: 16
            },
            body2: {
                fontWeight: 400,
                fontSize: 12
            },
            body3: {
                fontWeight: 400,
                fontSize: 14
            },
            tiny: {
                fontWeight: 500,
                fontSize: 10,
                color: "$neutralSolidHover"
            }
        },
        italic: {
            true: {
                fontStyle: "italic"
            }
        },
        ellipsify: {
            true: {
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }
    },
    defaultVariants: {
        style: "body1",
        color: "base"
    }
});


const $522a8c6cd3661cac$var$FormatCrypto = ({ amount: amount , maximumFractionDigits: maximumFractionDigits = 4 , decimals: decimals = 18 , css: css , textStyle: textStyle = "subtitle2" , textColor: textColor = "base" , children: children  })=>{
    const value = (0, $94b172869b555d93$export$87710fd8420713d9)(amount, maximumFractionDigits, decimals);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: "$1"
        },
        children: [
            value !== "-" ? children : null,
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: textStyle,
                color: textColor,
                css: css,
                as: "p",
                children: value
            })
        ]
    });
};
var $522a8c6cd3661cac$export$2e2bcd8739ae039 = $522a8c6cd3661cac$var$FormatCrypto;










var $5a52f8aea2af0057$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $9O4lY$jsx)("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
            d: "M11.9441 17.97L4.58008 13.62L11.9431 24L19.3131 13.62L11.9411 17.97H11.9441V17.97ZM12.0561 0L4.69008 12.223L12.0551 16.577L19.4201 12.227L12.0561 0Z",
            fill: "black"
        })
    });




var $64e50585b0cab3cd$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $9O4lY$jsxs)("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsxs)("g", {
                clipPath: "url(#clip0_2127_56739)",
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M11.9979 0L11.8369 0.546928V16.4161L11.9979 16.5767L19.3641 12.2225L11.9979 0Z",
                        fill: "#343434"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M11.9979 0L4.63159 12.2225L11.9979 16.5767V8.87428V0Z",
                        fill: "#8C8C8C"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M11.998 17.9714L11.9072 18.0821V23.7349L11.998 23.9999L19.3686 13.6195L11.998 17.9714Z",
                        fill: "#3C3C3B"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M11.9979 23.9999V17.9714L4.63159 13.6195L11.9979 23.9999Z",
                        fill: "#8C8C8C"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M11.998 16.5767L19.3642 12.2225L11.998 8.87427V16.5767Z",
                        fill: "#141414"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                        d: "M4.63159 12.2225L11.9979 16.5767V8.87427L4.63159 12.2225Z",
                        fill: "#393939"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("defs", {
                children: /*#__PURE__*/ (0, $9O4lY$jsx)("clipPath", {
                    id: "clip0_2127_56739",
                    children: /*#__PURE__*/ (0, $9O4lY$jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                    })
                })
            })
        ]
    });




var $a32772bf5a801c11$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $9O4lY$jsxs)("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M12.3654 8.87477V0L5 12.2224L12.3654 8.87477Z",
                fill: "#8A92B2"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M12.3654 16.5772V8.87477L5 12.2224L12.3654 16.5772ZM12.3654 8.87477L19.7322 12.2224L12.3654 0V8.87477Z",
                fill: "#62688F"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M12.3655 8.87476V16.5772L19.7322 12.2224L12.3655 8.87476Z",
                fill: "#454A75"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M12.3654 17.972L5 13.6199L12.3654 23.9999V17.972Z",
                fill: "#8A92B2"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M19.7363 13.6199L12.3655 17.972V23.9999L19.7363 13.6199Z",
                fill: "#62688F"
            })
        ]
    });


const $9052e939d4ef354b$var$EthLogo = ()=>{
    const themeContext = (0, $9O4lY$useContext)((0, $1c6f180e574ece24$export$2c657da244d00bd6));
    const ethIcon = themeContext && themeContext ? themeContext["assets"]["ethIcon"]["value"] : "glyph";
    switch(ethIcon){
        case "glyph":
            return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5a52f8aea2af0057$export$2e2bcd8739ae039), {});
        case "gray":
            return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $64e50585b0cab3cd$export$2e2bcd8739ae039), {});
        case "purple":
            return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $a32772bf5a801c11$export$2e2bcd8739ae039), {});
    }
};
var $9052e939d4ef354b$export$2e2bcd8739ae039 = $9052e939d4ef354b$var$EthLogo;






function $813be0bd658efb24$export$2e2bcd8739ae039() {
    const { chain: activeChain , chains: chains  } = (0, $9O4lY$useNetwork)();
    let chain = chains.find((chain)=>{
        return (activeChain === null || activeChain === void 0 ? void 0 : activeChain.id) === chain.id;
    });
    if (!chain && chains.length > 0) chain = chains[0];
    else chain = activeChain;
    const ETHChains = [
        (0, $9O4lY$mainnet).id,
        (0, $9O4lY$goerli).id
    ];
    if (!chain || !chain.nativeCurrency || ETHChains.includes(chain.id)) return {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        address: (0, $9O4lY$constants).AddressZero,
        chainId: (chain === null || chain === void 0 ? void 0 : chain.id) || (0, $9O4lY$mainnet).id
    };
    else return {
        ...chain.nativeCurrency,
        address: (0, $9O4lY$constants).AddressZero,
        chainId: chain.id
    };
}





const $08d6df3340a6ec2a$var$wrappedContracts = {
    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    5: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
};
var $08d6df3340a6ec2a$export$2e2bcd8739ae039 = $08d6df3340a6ec2a$var$wrappedContracts;




var $c9e5439bd3fdfd4b$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $9O4lY$jsxs)("svg", {
        width: "auto",
        height: "100%",
        viewBox: "0 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M7.49721 0L0 12.4432L7.49721 9.03511V0Z",
                fill: "#AE1955"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M7.49721 9.03506L0 12.4432L7.49721 16.8767V9.03506Z",
                fill: "#801D45"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M14.9959 12.4433L7.49731 0V9.03511L14.9959 12.4433Z",
                fill: "#801D45"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M7.49731 16.8767L14.9959 12.4432L11.2466 10.7391L7.49731 9.03506V16.8767Z",
                fill: "#641D3B"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M0 13.8661L7.49721 24.4337V18.2968L0 13.8661Z",
                fill: "#AE1955"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("path", {
                d: "M7.49731 18.2968V24.4337L15.0001 13.8661L7.49731 18.2968Z",
                fill: "#801D45"
            })
        ]
    });


const $4afdd532fe42c117$var$StyledImg = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {});
const $4afdd532fe42c117$var$CryptoCurrencyIcon = ({ address: address = (0, $9O4lY$constants).AddressZero , css: css  })=>{
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const chainCurrency = (0, $813be0bd658efb24$export$2e2bcd8739ae039)();
    if (chainCurrency.symbol === "ETH") {
        if ((0, $9O4lY$constants).AddressZero === address) return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
            css: {
                display: "flex",
                ...css
            },
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9052e939d4ef354b$export$2e2bcd8739ae039), {})
        });
        if ((0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[chainCurrency.chainId] === address) return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
            css: {
                display: "flex",
                ...css
            },
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c9e5439bd3fdfd4b$export$2e2bcd8739ae039), {})
        });
    }
    return /*#__PURE__*/ (0, $9O4lY$jsx)($4afdd532fe42c117$var$StyledImg, {
        src: `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/currency/${address}/icon/v1`,
        css: css
    });
};
var $4afdd532fe42c117$export$2e2bcd8739ae039 = $4afdd532fe42c117$var$CryptoCurrencyIcon;


const $306449c0c59737d5$var$FormatCryptoCurrency = ({ amount: amount , address: address = (0, $9O4lY$constants).AddressZero , maximumFractionDigits: maximumFractionDigits , logoWidth: logoWidth = 14 , textStyle: textStyle , css: css , textColor: textColor , decimals: decimals  })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $522a8c6cd3661cac$export$2e2bcd8739ae039), {
        css: css,
        textColor: textColor,
        textStyle: textStyle,
        amount: amount,
        maximumFractionDigits: maximumFractionDigits,
        decimals: decimals,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
            css: {
                height: logoWidth
            },
            address: address
        })
    });
};
var $306449c0c59737d5$export$2e2bcd8739ae039 = $306449c0c59737d5$var$FormatCryptoCurrency;




const $5ea0677ecfe8baaa$var$FormatCurrency = ({ amount: amount , maximumFractionDigits: maximumFractionDigits = 2 , currency: currency = "USD" , ...props })=>{
    const [formattedValue, setFormattedValue] = (0, $9O4lY$useState)("");
    (0, $9O4lY$useEffect)(()=>{
        if (amount) {
            const lowestValue = Number(`0.${new Array(maximumFractionDigits).join("0")}1`);
            const tooLow = +amount < lowestValue;
            const formatted = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: currency
            }).format(tooLow ? lowestValue : +amount);
            setFormattedValue(tooLow ? `< ${formatted}` : formatted);
        } else setFormattedValue("");
    }, [
        amount,
        maximumFractionDigits
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
        ...props,
        style: props.style || "subtitle2",
        color: props.color || "base",
        children: formattedValue
    });
};
var $5ea0677ecfe8baaa$export$2e2bcd8739ae039 = $5ea0677ecfe8baaa$var$FormatCurrency;






const $9d04e171ac46ecc2$var$StyledInput = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("input", {
    all: "unset",
    width: "100%",
    px: 16,
    py: 12,
    borderRadius: 8,
    fontFamily: "$body",
    fontSize: 16,
    color: "$neutralTextContrast",
    backgroundColor: "$inputBackground",
    $$focusColor: "$colors$accentBorderHover",
    "&:placeholder": {
        color: "$neutralText"
    },
    "&:focus": {
        boxShadow: "0 0 0 2px $$focusColor"
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
    },
    "&[type=number]": {
        "-moz-appearance": "textfield"
    }
});
const $9d04e171ac46ecc2$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ children: children , icon: icon , containerCss: containerCss , iconCss: iconCss , ...props }, forwardedRef)=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            ...containerCss,
            position: "relative"
        },
        children: [
            icon && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: 16,
                    color: "$neutralTextContrast",
                    pointerEvents: "none",
                    ...iconCss
                },
                children: icon
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($9d04e171ac46ecc2$var$StyledInput, {
                css: {
                    pl: icon ? 48 : 16,
                    ...props.css
                },
                ref: forwardedRef,
                ...props
            })
        ]
    }));
var $9d04e171ac46ecc2$export$2e2bcd8739ae039 = $9d04e171ac46ecc2$export$f5b8910cec6cf069;







const $91d2785b6af0bea8$var$LoaderContainer = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$neutralText"
});
function $91d2785b6af0bea8$export$2e2bcd8739ae039(props) {
    return /*#__PURE__*/ (0, $9O4lY$jsx)($91d2785b6af0bea8$var$LoaderContainer, {
        ...props,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$motion).div, {
            initial: {
                rotate: 0
            },
            transition: {
                repeat: Infinity,
                duration: 1,
                ease: "linear"
            },
            animate: {
                rotate: 360
            },
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                icon: (0, $9O4lY$faSpinner),
                width: 20,
                height: 20
            })
        })
    });
}








const $6e5ad66adf7c0a36$var$StyledTrigger = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Trigger, {
    boxSizing: "border-box",
    borderWidth: 0,
    width: "100%",
    px: "$4",
    py: "$3",
    borderRadius: "$borderRadius",
    fontfamily: "$body",
    fontSize: 16,
    display: "flex",
    justifyContent: "space-between",
    color: "$neutralTextContrast",
    backgroundColor: "$inputBackground",
    $$focusColor: "$colors$accentBorderHover",
    "&:placeholder": {
        color: "$neutralText"
    },
    "&:focus": {
        boxShadow: "0 0 0 2px $$focusColor"
    }
});
const $6e5ad66adf7c0a36$var$StyledContent = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Content, {
    backgroundColor: "$inputBackground",
    color: "$textColor",
    borderRadius: "$borderRadius",
    overflow: "hidden",
    $$focusColor: "$colors$accentBorderHover",
    boxShadow: "0 0 0 2px $$focusColor"
});
const $6e5ad66adf7c0a36$var$textCss = {
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0
};
const $6e5ad66adf7c0a36$var$StyledItemText = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$ItemText, $6e5ad66adf7c0a36$var$textCss);
const $6e5ad66adf7c0a36$var$StyledValue = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Value, $6e5ad66adf7c0a36$var$textCss);
const $6e5ad66adf7c0a36$var$SelectDownIcon = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$Icon, {
        asChild: true,
        ref: forwardedRef,
        ...props,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralSolidHover"
            },
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                icon: (0, $9O4lY$faChevronDown),
                width: "14",
                color: ""
            })
        })
    }));
const $6e5ad66adf7c0a36$export$863d5f18a1f54f2d = ({ children: children , trigger: trigger , css: css , ...props })=>/*#__PURE__*/ (0, $9O4lY$jsxs)($9O4lY$Root, {
        ...props,
        children: [
            trigger ? trigger : /*#__PURE__*/ (0, $9O4lY$jsxs)($6e5ad66adf7c0a36$var$StyledTrigger, {
                css: {
                    ...$6e5ad66adf7c0a36$var$textCss,
                    ...css
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)($6e5ad66adf7c0a36$var$StyledValue, {
                        placeholder: props.placeholder,
                        children: props.value
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)($6e5ad66adf7c0a36$var$SelectDownIcon, {})
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$Portal, {
                style: {
                    zIndex: 1000000
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsxs)($6e5ad66adf7c0a36$var$StyledContent, {
                    children: [
                        /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$ScrollUpButton, {}),
                        /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$Viewport, {
                            children: children
                        }),
                        /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$ScrollDownButton, {})
                    ]
                })
            })
        ]
    });
const $6e5ad66adf7c0a36$var$StyledItem = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Item, {
    cursor: "pointer",
    py: "$3",
    px: "$4",
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0,
    "&:hover": {
        background: "$neutralBgActive"
    }
});
$6e5ad66adf7c0a36$export$863d5f18a1f54f2d.Item = $6e5ad66adf7c0a36$var$StyledItem;
$6e5ad66adf7c0a36$export$863d5f18a1f54f2d.ItemText = $6e5ad66adf7c0a36$var$StyledItemText;
$6e5ad66adf7c0a36$export$863d5f18a1f54f2d.Trigger = $6e5ad66adf7c0a36$var$StyledTrigger;
$6e5ad66adf7c0a36$export$863d5f18a1f54f2d.Value = $6e5ad66adf7c0a36$var$StyledValue;
$6e5ad66adf7c0a36$export$863d5f18a1f54f2d.DownIcon = $6e5ad66adf7c0a36$var$SelectDownIcon;
var $6e5ad66adf7c0a36$export$2e2bcd8739ae039 = $6e5ad66adf7c0a36$export$863d5f18a1f54f2d;








const $96df3158c61a3869$var$Progress = ({ title: title , txHash: txHash , blockExplorerBaseUrl: blockExplorerBaseUrl  })=>{
    var _activeChain_blockExplorers;
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            alignItems: "center",
            gap: "$4",
            mt: "$5",
            mb: "$3"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "h6",
                children: title
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    color: "$neutralText"
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                    icon: txHash ? (0, $9O4lY$faCube) : (0, $9O4lY$faWallet),
                    style: {
                        width: "32px",
                        height: "32px",
                        marginTop: "12px 0px"
                    }
                })
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                color: "primary",
                weight: "medium",
                css: {
                    fontSize: 12,
                    visibility: txHash ? "visible" : "hidden"
                },
                href: blockExplorerBaseUrl,
                target: "_blank",
                children: [
                    "View on ",
                    (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                ]
            })
        ]
    });
};
var $96df3158c61a3869$export$2e2bcd8739ae039 = $96df3158c61a3869$var$Progress;







const $920fdcfe068d5f72$var$Arrow = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Arrow, {
    width: 15,
    height: 7,
    fill: "$popoverBackground"
});
const $920fdcfe068d5f72$var$Content = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Content1, {
    filter: "drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.75))",
    zIndex: 1000
});
const $920fdcfe068d5f72$var$RKPopover = ({ children: children , content: content , side: side = "bottom" , width: width = "100%" , ...props })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsxs)($9O4lY$Root1, {
        ...props,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$Trigger1, {
                style: {
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    cursor: "pointer",
                    padding: 0
                },
                children: children
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)($920fdcfe068d5f72$var$Content, {
                side: side,
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)($920fdcfe068d5f72$var$Arrow, {}),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            p: "$3",
                            maxWidth: 320,
                            overflowY: "auto",
                            maxHeight: 322,
                            width: width,
                            borderRadius: 8,
                            backgroundColor: "$popoverBackground"
                        },
                        children: content
                    })
                ]
            })
        ]
    });
};
$920fdcfe068d5f72$var$RKPopover.Root = $9O4lY$Root1;
$920fdcfe068d5f72$var$RKPopover.Portal = $9O4lY$Portal1;
$920fdcfe068d5f72$var$RKPopover.Trigger = $9O4lY$Trigger1;
$920fdcfe068d5f72$var$RKPopover.Arrow = $920fdcfe068d5f72$var$Arrow;
$920fdcfe068d5f72$var$RKPopover.Content = $920fdcfe068d5f72$var$Content;
var $920fdcfe068d5f72$export$2e2bcd8739ae039 = $920fdcfe068d5f72$var$RKPopover;
















const $fc33139f101a302d$var$useMediaQuery = (query)=>{
    const [matches, setMatches] = (0, $9O4lY$useState)(false);
    (0, $9O4lY$useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = ()=>{
            setMatches(media.matches);
        };
        media.addEventListener("change", listener);
        return ()=>media.removeEventListener("change", listener);
    }, [
        matches,
        query
    ]);
    return matches;
};
var $fc33139f101a302d$export$2e2bcd8739ae039 = $fc33139f101a302d$var$useMediaQuery;


const $e379050794d24200$export$c6fdb837b070b4ff = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Overlay, {
    backgroundColor: "$overlayBackground",
    position: "fixed",
    inset: 0,
    zIndex: 1000
});
const $e379050794d24200$export$a14718312a4275d3 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0, $9O4lY$jsx)($e379050794d24200$export$c6fdb837b070b4ff, {
        ...props,
        forceMount: true,
        asChild: true,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$motion).div, {
            ref: forwardedRef,
            transition: {
                duration: 0.5
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        })
    }));
const $e379050794d24200$export$7c6e2c02157bb7d2 = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Content2, {
    backgroundColor: "$contentBackground",
    borderRadius: "$borderRadius",
    $$shadowColor: "$colors$gray7",
    boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
    border: "1px solid $borderColor",
    position: "fixed",
    left: "50%",
    maxWidth: 516,
    top: "100%",
    width: "100%",
    zIndex: 1000,
    "&:focus": {
        outline: "none"
    },
    "@media(max-width: 520px)": {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        border: 0
    }
});
const $e379050794d24200$export$43a7eb3180015c73 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ children: children , ...props }, forwardedRef)=>{
    const isMobile = (0, $fc33139f101a302d$export$2e2bcd8739ae039)("(max-width: 520px)");
    const animation = isMobile ? {
        initial: {
            opacity: 0,
            bottom: "-100%",
            top: "auto",
            left: 0
        },
        animate: {
            opacity: 1,
            bottom: 0,
            top: "auto",
            left: 0
        },
        exit: {
            opacity: 0,
            bottom: "-100%",
            top: "auto",
            left: 0
        }
    } : {
        initial: {
            opacity: 0,
            top: "14%",
            transform: "translateX(-50%)"
        },
        animate: {
            opacity: 1,
            top: "9%",
            transform: "translateX(-50%)"
        },
        exit: {
            opacity: 0,
            top: "14%",
            transform: "translateX(-50%)"
        }
    };
    return /*#__PURE__*/ (0, $9O4lY$jsx)($e379050794d24200$export$7c6e2c02157bb7d2, {
        forceMount: true,
        asChild: true,
        ...props,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$motion).div, {
            ref: forwardedRef,
            transition: {
                type: isMobile ? "tween" : "spring",
                duration: 0.5
            },
            ...animation,
            children: children
        }, isMobile + "modal")
    });
});
const $e379050794d24200$var$StyledAnimatedContent = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($e379050794d24200$export$43a7eb3180015c73, {});
const $e379050794d24200$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ children: children , trigger: trigger , portalProps: portalProps , onOpenChange: onOpenChange , open: open , size: size , ...props }, forwardedRef)=>{
    const [dialogOpen, setDialogOpen] = (0, $9O4lY$useState)(false);
    (0, $9O4lY$useEffect)(()=>{
        if (open !== undefined) {
            setDialogOpen(open);
            if (onOpenChange) onOpenChange(open);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)($9O4lY$Root2, {
        onOpenChange: (open)=>{
            setDialogOpen(open);
            if (onOpenChange) onOpenChange(open);
        },
        open: dialogOpen,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$DialogTrigger, {
                asChild: true,
                children: trigger
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$AnimatePresence), {
                children: dialogOpen && /*#__PURE__*/ (0, $9O4lY$jsxs)($9O4lY$DialogPortal, {
                    forceMount: true,
                    ...portalProps,
                    children: [
                        /*#__PURE__*/ (0, $9O4lY$jsx)($e379050794d24200$export$a14718312a4275d3, {}),
                        /*#__PURE__*/ (0, $9O4lY$jsx)($e379050794d24200$var$StyledAnimatedContent, {
                            ref: forwardedRef,
                            ...props,
                            forceMount: true,
                            css: {
                                maxWidth: size === (0, $4619ff7ebe39c976$export$e8598848ef5f29c0).MD ? 516 : 750
                            },
                            children: children
                        })
                    ]
                })
            })
        ]
    });
});



const $4619ff7ebe39c976$var$Title = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Title, {
    margin: 0
});
let $4619ff7ebe39c976$export$e8598848ef5f29c0;
(function(ModalSize) {
    ModalSize[ModalSize["MD"] = 0] = "MD";
    ModalSize[ModalSize["LG"] = 1] = "LG";
})($4619ff7ebe39c976$export$e8598848ef5f29c0 || ($4619ff7ebe39c976$export$e8598848ef5f29c0 = {}));
const $4619ff7ebe39c976$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ title: title , children: children , trigger: trigger , onBack: onBack , open: open , size: size = $4619ff7ebe39c976$export$e8598848ef5f29c0.MD , onOpenChange: onOpenChange , loading: loading , onPointerDownOutside: onPointerDownOutside , onFocusCapture: onFocusCapture  }, forwardedRef)=>{
    const providerOptionsContext = (0, $9O4lY$useContext)((0, $1c6f180e574ece24$export$f66a1c3c9465af21));
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $e379050794d24200$export$3ddf2d174ce01153), {
        ref: forwardedRef,
        trigger: trigger,
        open: open,
        onOpenChange: onOpenChange,
        size: size,
        onPointerDownOutside: onPointerDownOutside,
        onFocusCapture: onFocusCapture,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    p: 16,
                    backgroundColor: "$headerBackground",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTopRightRadius: "$borderRadius",
                    borderTopLeftRadius: "$borderRadius"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsxs)($4619ff7ebe39c976$var$Title, {
                        css: {
                            alignItems: "center",
                            display: "flex"
                        },
                        children: [
                            onBack && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                color: "ghost",
                                size: "none",
                                css: {
                                    mr: "$2",
                                    color: "$neutralText"
                                },
                                onClick: onBack,
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                    icon: (0, $9O4lY$faChevronLeft),
                                    width: 16,
                                    height: 16
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "h6",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)($9O4lY$Close, {
                        asChild: true,
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                            color: "ghost",
                            size: "none",
                            css: {
                                color: "$neutralText"
                            },
                            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                icon: (0, $9O4lY$faClose),
                                width: 16,
                                height: 16
                            })
                        })
                    })
                ]
            }),
            loading && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {
                css: {
                    minHeight: 242,
                    backgroundColor: "$contentBackground"
                }
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    maxHeight: "85vh",
                    overflowY: "auto"
                },
                children: children
            }),
            !providerOptionsContext.disablePoweredByReservoir && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    mx: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "$footerBackground",
                    py: 10.5,
                    visibility: "$poweredByReservoirVisibility",
                    borderBottomRightRadius: "$borderRadius",
                    borderBottomLeftRadius: "$borderRadius"
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                    href: "https://lux.network/",
                    target: "_blank",
                    children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "body2",
                        css: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4
                        },
                        children: "Powered by ▼"
                    })
                })
            })
        ]
    });
});












function $c9208bc249041d08$export$2e2bcd8739ae039({ message: message , css: css  }) {
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            color: "$errorAccent",
            p: "$4",
            gap: "$2",
            background: "$wellBackground",
            ...css
        },
        align: "center",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                icon: (0, $9O4lY$faCircleExclamation),
                width: 16,
                height: 16
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "body2",
                color: "errorLight",
                children: message || "Oops, something went wrong. Please try again."
            })
        ]
    });
}






var $4cf4d37e8616013a$export$2e2bcd8739ae039 = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("div", {
    display: "grid",
    variants: {
        align: {
            start: {
                alignItems: "start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "end"
            },
            stretch: {
                alignItems: "stretch"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        justify: {
            start: {
                justifyContent: "start"
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "end"
            },
            between: {
                justifyContent: "space-between"
            }
        },
        flow: {
            row: {
                gridAutoFlow: "row"
            },
            column: {
                gridAutoFlow: "column"
            },
            dense: {
                gridAutoFlow: "dense"
            },
            rowDense: {
                gridAutoFlow: "row dense"
            },
            columnDense: {
                gridAutoFlow: "column dense"
            }
        }
    }
});


const $936f080260a8ef9e$var$Img = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {
    height: 56,
    width: 56
});
const $936f080260a8ef9e$var$TokenPrimitive = ({ img: img , name: name , collection: collection , currencyContract: currencyContract , currencyDecimals: currencyDecimals , expires: expires , warning: warning , isOffer: isOffer , source: source , usdPrice: usdPrice , price: price , isUnavailable: isUnavailable  })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "subtitle2",
                        color: "subtle",
                        css: {
                            mb: 10,
                            display: "block"
                        },
                        children: name ? "Item" : "Collection"
                    }),
                    isOffer && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "subtitle2",
                        color: "subtle",
                        css: {
                            mb: 10,
                            display: "block"
                        },
                        children: "Offer"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        css: {
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)($936f080260a8ef9e$var$Img, {
                                src: img,
                                alt: name,
                                css: {
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    visibility: !img || img.length === 0 ? "hidden" : "visible",
                                    flexShrink: 0,
                                    objectFit: "cover"
                                }
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4cf4d37e8616013a$export$2e2bcd8739ae039), {
                                css: {
                                    rowGap: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h6",
                                        ellipsify: true,
                                        color: isUnavailable ? "subtle" : "base",
                                        children: name ? name : collection
                                    }),
                                    name && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: isUnavailable ? "subtle" : "base",
                                        children: collection
                                    }),
                                    !!expires && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "tiny",
                                        children: [
                                            "Expires ",
                                            expires
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4cf4d37e8616013a$export$2e2bcd8739ae039), {
                        css: {
                            justifyItems: "end",
                            alignContent: "start",
                            rowGap: 4
                        },
                        children: [
                            source && /*#__PURE__*/ (0, $9O4lY$jsx)($936f080260a8ef9e$var$Img, {
                                src: source,
                                alt: "Source Icon",
                                css: {
                                    w: 17,
                                    h: 17,
                                    borderRadius: 99999,
                                    overflow: "hidden"
                                }
                            }),
                            price ? /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                amount: price,
                                textColor: isUnavailable ? "subtle" : "base",
                                address: currencyContract,
                                decimals: currencyDecimals,
                                logoWidth: 14.5
                            }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "subtitle2",
                                color: isUnavailable ? "subtle" : "base",
                                children: "--"
                            }),
                            usdPrice ? /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                                amount: usdPrice,
                                style: "tiny",
                                color: "subtle"
                            }) : null,
                            warning && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "subtitle2",
                                color: "error",
                                children: warning
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $936f080260a8ef9e$export$2e2bcd8739ae039 = $936f080260a8ef9e$var$TokenPrimitive;


const $767054f835c04ed0$var$TokenLineItem = ({ tokenDetails: tokenDetails , collection: collection , usdConversion: usdConversion = 0 , isSuspicious: isSuspicious , isUnavailable: isUnavailable , price: price , warning: warning , currency: currency , expires: expires , isOffer: isOffer , sourceImg: sourceImg  })=>{
    var _tokenDetails_token, _tokenDetails_token1, _tokenDetails_token2, _tokenDetails_token_collection, _tokenDetails_token3;
    if (!tokenDetails) return null;
    const usdPrice = price * usdConversion;
    const name = (tokenDetails === null || tokenDetails === void 0 ? void 0 : (_tokenDetails_token = tokenDetails.token) === null || _tokenDetails_token === void 0 ? void 0 : _tokenDetails_token.name) || `#${tokenDetails === null || tokenDetails === void 0 ? void 0 : (_tokenDetails_token1 = tokenDetails.token) === null || _tokenDetails_token1 === void 0 ? void 0 : _tokenDetails_token1.tokenId}`;
    const collectionName = (tokenDetails === null || tokenDetails === void 0 ? void 0 : (_tokenDetails_token2 = tokenDetails.token) === null || _tokenDetails_token2 === void 0 ? void 0 : (_tokenDetails_token_collection = _tokenDetails_token2.collection) === null || _tokenDetails_token_collection === void 0 ? void 0 : _tokenDetails_token_collection.name) || (collection === null || collection === void 0 ? void 0 : collection.name) || "";
    const img = (tokenDetails === null || tokenDetails === void 0 ? void 0 : (_tokenDetails_token3 = tokenDetails.token) === null || _tokenDetails_token3 === void 0 ? void 0 : _tokenDetails_token3.image) ? tokenDetails.token.image : collection === null || collection === void 0 ? void 0 : collection.image;
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        css: {
            p: "$4",
            borderBottom: "1px solid $borderColor"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $936f080260a8ef9e$export$2e2bcd8739ae039), {
                img: img,
                name: name,
                price: price,
                usdPrice: usdPrice,
                collection: collectionName,
                currencyContract: currency === null || currency === void 0 ? void 0 : currency.contract,
                currencyDecimals: currency === null || currency === void 0 ? void 0 : currency.decimals,
                expires: expires,
                warning: warning,
                source: sourceImg || "",
                isUnavailable: isUnavailable,
                isOffer: isOffer
            }),
            !!isSuspicious && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c9208bc249041d08$export$2e2bcd8739ae039), {
                css: {
                    p: "$3",
                    mt: "$3",
                    borderRadius: 4
                },
                message: "Token is not tradable on OpenSea"
            })
        ]
    });
};
var $767054f835c04ed0$export$2e2bcd8739ae039 = $767054f835c04ed0$var$TokenLineItem;





function $82b4f0a9692acbdc$export$2e2bcd8739ae039(vs_currency, symbols = "eth") {
    const { data: data  } = (0, $9O4lY$swr)(vs_currency ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&symbols=${symbols}` : null, null, {
        refreshInterval: 300000
    });
    if (data && data[0] && data[0].current_price) return data[0].current_price;
    return null;
}







let $16c71bdc4553eafd$export$b41ddf00b39567e8;
(function(BuyStep) {
    BuyStep[BuyStep["Checkout"] = 0] = "Checkout";
    BuyStep[BuyStep["Approving"] = 1] = "Approving";
    BuyStep[BuyStep["AddFunds"] = 2] = "AddFunds";
    BuyStep[BuyStep["Complete"] = 3] = "Complete";
    BuyStep[BuyStep["Unavailable"] = 4] = "Unavailable";
})($16c71bdc4553eafd$export$b41ddf00b39567e8 || ($16c71bdc4553eafd$export$b41ddf00b39567e8 = {}));
const $16c71bdc4553eafd$var$CHAIN_ID = process.env.CHAIN_ID ? Number(process.env.CHAIN_ID) : 1;
const $16c71bdc4553eafd$export$8913f774683cde87 = ({ open: open , tokenId: tokenId , collectionId: collectionId , orderId: orderId , referrer: referrer , referrerFeeBps: referrerFeeBps , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    var _activeChain_blockExplorers, _activeChain_blockExplorers_default, _token_market, _token_market_floorAsk, _token_market1, _token_market_floorAsk1, _listing_price;
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const [totalPrice, setTotalPrice] = (0, $9O4lY$useState)(0);
    const [referrerFee, setReferrerFee] = (0, $9O4lY$useState)(0);
    const [buyStep, setBuyStep] = (0, $9O4lY$useState)($16c71bdc4553eafd$export$b41ddf00b39567e8.Checkout);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [hasEnoughCurrency, setHasEnoughCurrency] = (0, $9O4lY$useState)(true);
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [steps, setSteps] = (0, $9O4lY$useState)(null);
    const [quantity, setQuantity] = (0, $9O4lY$useState)(1);
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    const blockExplorerBaseUrl = (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : (_activeChain_blockExplorers_default = _activeChain_blockExplorers.default) === null || _activeChain_blockExplorers_default === void 0 ? void 0 : _activeChain_blockExplorers_default.url) || "https://etherscan.io";
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const { data: tokens , mutate: mutateTokens  } = (0, $a22273d84f519011$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: collections , mutate: mutateCollection  } = (0, $02e139e000faba42$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const { data: listings , mutate: mutateListings , isValidating: isValidatingListing  } = (0, $f89e1fbc30486f4b$export$2e2bcd8739ae039)({
        token: `${contract}:${tokenId}`,
        ids: orderId ? orderId : token === null || token === void 0 ? void 0 : (_token_market = token.market) === null || _token_market === void 0 ? void 0 : (_token_market_floorAsk = _token_market.floorAsk) === null || _token_market_floorAsk === void 0 ? void 0 : _token_market_floorAsk.id,
        normalizeRoyalties: normalizeRoyalties,
        status: "active"
    }, {
        revalidateFirstPage: true
    }, open && ((token === null || token === void 0 ? void 0 : (_token_market1 = token.market) === null || _token_market1 === void 0 ? void 0 : (_token_market_floorAsk1 = _token_market1.floorAsk) === null || _token_market_floorAsk1 === void 0 ? void 0 : _token_market_floorAsk1.id) !== undefined || orderId) ? true : false);
    const listing = listings && listings[0] && listings[0].status === "active" ? listings[0] : undefined;
    const currency = listing === null || listing === void 0 ? void 0 : (_listing_price = listing.price) === null || _listing_price === void 0 ? void 0 : _listing_price.currency;
    const usdPrice = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open && token ? "USD" : undefined, currency === null || currency === void 0 ? void 0 : currency.symbol);
    const feeUsd = referrerFee * (usdPrice || 0);
    const totalUsd = totalPrice * (usdPrice || 0);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const buyToken = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!tokenId || !collectionId) {
            const error = new Error("Missing tokenId or collectionId");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        const contract = collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0];
        let options = {};
        if (referrer && referrerFeeBps) {
            const price = (0, $94b172869b555d93$export$a81f732198733497)(totalPrice, (currency === null || currency === void 0 ? void 0 : currency.decimals) || 18);
            const fee = (0, $9O4lY$utils).parseUnits(`${price}`, currency === null || currency === void 0 ? void 0 : currency.decimals).mul(referrerFeeBps).div(10000);
            const atomicUnitsFee = (0, $9O4lY$formatUnits)(fee, 0);
            options.feesOnTop = [
                `${referrer}:${atomicUnitsFee}`
            ];
        } else if (referrer === null && referrerFeeBps === null) delete options.feesOnTop;
        if (quantity > 1) options.quantity = quantity;
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Approving);
        let orderIds = orderId ? [
            orderId
        ] : undefined;
        let tokens = orderId ? undefined : [
            {
                tokenId: tokenId,
                contract: contract
            }
        ];
        client.actions.buyToken({
            orderIds: orderIds,
            expectedPrice: totalPrice,
            signer: signer,
            tokens: tokens,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    var _step_items;
                    currentStepItem = (_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>{
                    var _step_items;
                    return !step.items || step.items.length == 0 || ((_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.every((item)=>item.status === "complete"));
                })) setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Complete);
            },
            options: options
        }).catch((e)=>{
            const error = e;
            if (error && (error === null || error === void 0 ? void 0 : error.message) && (error === null || error === void 0 ? void 0 : error.message.includes("ETH balance"))) setHasEnoughCurrency(false);
            else {
                const errorType = error === null || error === void 0 ? void 0 : error.type;
                let message = "Oops, something went wrong. Please try again.";
                if (errorType && errorType === "price mismatch") message = error.message;
                const transactionError = new Error(message, {
                    cause: error
                });
                setTransactionError(transactionError);
                if (orderId) mutateListings();
                mutateCollection();
                mutateTokens();
            }
            setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Checkout);
            setStepData(null);
            setSteps(null);
        });
    }, [
        tokenId,
        collectionId,
        orderId,
        referrer,
        referrerFeeBps,
        quantity,
        normalizeRoyalties,
        client,
        signer,
        currency,
        totalPrice,
        mutateListings,
        mutateTokens,
        mutateCollection
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (listing) {
            var _listing_price, _listing_price_amount;
            if ((_listing_price = listing.price) === null || _listing_price === void 0 ? void 0 : (_listing_price_amount = _listing_price.amount) === null || _listing_price_amount === void 0 ? void 0 : _listing_price_amount.decimal) {
                var _listing_price1, _listing_price_amount1;
                let floorPrice = (_listing_price1 = listing.price) === null || _listing_price1 === void 0 ? void 0 : (_listing_price_amount1 = _listing_price1.amount) === null || _listing_price_amount1 === void 0 ? void 0 : _listing_price_amount1.decimal;
                if (referrerFeeBps && referrer) {
                    const fee = referrerFeeBps / 10000 * floorPrice;
                    floorPrice = floorPrice + fee;
                    setReferrerFee(fee);
                }
                setTotalPrice(floorPrice * quantity);
                setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Checkout);
            } else {
                setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Unavailable);
                setTotalPrice(0);
            }
        } else if (!listing && !isValidatingListing && token) {
            setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Unavailable);
            setTotalPrice(0);
        }
    }, [
        listing,
        isValidatingListing,
        referrerFeeBps,
        referrer,
        client,
        quantity,
        token
    ]);
    const { address: address  } = (0, $9O4lY$useAccount)();
    const { data: balance  } = (0, $9O4lY$useBalance)({
        address: address,
        token: (currency === null || currency === void 0 ? void 0 : currency.contract) !== (0, $9O4lY$constants).AddressZero ? currency === null || currency === void 0 ? void 0 : currency.contract : undefined,
        chainId: $16c71bdc4553eafd$var$CHAIN_ID,
        watch: open,
        formatUnits: currency === null || currency === void 0 ? void 0 : currency.decimals
    });
    (0, $9O4lY$useEffect)(()=>{
        if (balance) {
            const totalPriceTruncated = (0, $94b172869b555d93$export$a81f732198733497)(totalPrice, (currency === null || currency === void 0 ? void 0 : currency.decimals) || 18);
            if (!balance.value) setHasEnoughCurrency(false);
            else if (balance.value.lt((0, $9O4lY$utils).parseUnits(`${totalPriceTruncated}`, currency === null || currency === void 0 ? void 0 : currency.decimals))) setHasEnoughCurrency(false);
            else setHasEnoughCurrency(true);
        }
    }, [
        totalPrice,
        balance,
        currency
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setBuyStep($16c71bdc4553eafd$export$b41ddf00b39567e8.Checkout);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
            setQuantity(1);
        }
    }, [
        open
    ]);
    const isBanned = (0, $5e1eca9743a08381$export$2e2bcd8739ae039)(open ? contract : undefined, tokenId);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            loading: !listing && isValidatingListing || !token,
            token: token,
            collection: collection,
            listing: listing,
            quantityAvailable: (listing === null || listing === void 0 ? void 0 : listing.quantityRemaining) || 1,
            currency: currency,
            totalPrice: totalPrice,
            referrerFee: referrerFee,
            buyStep: buyStep,
            transactionError: transactionError,
            hasEnoughCurrency: hasEnoughCurrency,
            feeUsd: feeUsd,
            totalUsd: totalUsd,
            usdPrice: usdPrice,
            isBanned: isBanned,
            balance: balance === null || balance === void 0 ? void 0 : balance.value,
            address: address,
            blockExplorerBaseUrl: blockExplorerBaseUrl,
            steps: steps,
            stepData: stepData,
            quantity: quantity,
            setQuantity: setQuantity,
            setBuyStep: setBuyStep,
            buyToken: buyToken
        })
    });
};





const $0acedc8716225b2b$var$ProgressBar = ({ value: value , max: max , ...props })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        ...props,
        css: {
            width: "100%",
            gap: "$2",
            ...props.css
        },
        children: [
            ...Array(max)
        ].map((_item, i)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    height: 4,
                    borderRadius: 99999,
                    flex: 1,
                    background: "linear-gradient(to left, $neutralBorderHover 50%, $accentSolid 50%) right",
                    backgroundSize: "200% 100%",
                    backgroundPosition: i + 1 <= value ? "left" : "right",
                    transition: "all 0.5s ease"
                }
            }, i))
    });
};
var $0acedc8716225b2b$export$2e2bcd8739ae039 = $0acedc8716225b2b$var$ProgressBar;



function $b821869244bed169$var$titleForStep(step) {
    switch(step){
        case (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).AddFunds:
            return "Add Funds";
        case (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Unavailable:
            return "Selected item is no longer Available";
        default:
            return "Complete Checkout";
    }
}
function $b821869244bed169$export$7055e49b90860ae6({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , orderId: orderId , referrer: referrer , referrerFeeBps: referrerFeeBps , normalizeRoyalties: normalizeRoyalties , onPurchaseComplete: onPurchaseComplete , onPurchaseError: onPurchaseError , onClose: onClose , onGoToToken: onGoToToken  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const { copy: copyToClipboard , copied: copied  } = (0, $31437c4f21a5ffe7$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $16c71bdc4553eafd$export$8913f774683cde87), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        orderId: orderId,
        referrer: referrer,
        referrerFeeBps: referrerFeeBps,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ loading: loading , token: token , collection: collection , listing: listing , quantityAvailable: quantityAvailable , quantity: quantity , currency: currency , totalPrice: totalPrice , referrerFee: referrerFee , buyStep: buyStep , transactionError: transactionError , hasEnoughCurrency: hasEnoughCurrency , steps: steps , stepData: stepData , feeUsd: feeUsd , totalUsd: totalUsd , usdPrice: usdPrice , isBanned: isBanned , balance: balance , address: address , blockExplorerBaseUrl: blockExplorerBaseUrl , setQuantity: setQuantity , setBuyStep: setBuyStep , buyToken: buyToken  })=>{
            var _executableSteps_, _lastStepItems_, _listing_price, _listing_price_amount, _token_token, _token_token_lastSell, _token_token1, _token_token2, _token_token_collection, _token_token3, _token_token_collection1, _token_token4, _token_token5, _token_token6, _activeChain_blockExplorers;
            const title = $b821869244bed169$var$titleForStep(buyStep);
            (0, $9O4lY$useEffect)(()=>{
                if (buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Complete && onPurchaseComplete) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        maker: address
                    };
                    if (steps) data.steps = steps;
                    onPurchaseComplete(data);
                }
            }, [
                buyStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onPurchaseError) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        maker: address
                    };
                    onPurchaseError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            const executableSteps = (steps === null || steps === void 0 ? void 0 : steps.filter((step)=>step.items && step.items.length > 0)) || [];
            const lastStepItems = ((_executableSteps_ = executableSteps[executableSteps.length - 1]) === null || _executableSteps_ === void 0 ? void 0 : _executableSteps_.items) || [];
            let finalTxHash = (_lastStepItems_ = lastStepItems[lastStepItems.length - 1]) === null || _lastStepItems_ === void 0 ? void 0 : _lastStepItems_.txHash;
            let price = ((listing === null || listing === void 0 ? void 0 : (_listing_price = listing.price) === null || _listing_price === void 0 ? void 0 : (_listing_price_amount = _listing_price.amount) === null || _listing_price_amount === void 0 ? void 0 : _listing_price_amount.decimal) || 0) * quantity;
            if (!price && (token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : (_token_token_lastSell = _token_token.lastSell) === null || _token_token_lastSell === void 0 ? void 0 : _token_token_lastSell.value)) price = token === null || token === void 0 ? void 0 : token.token.lastSell.value;
            const sourceImg = (listing === null || listing === void 0 ? void 0 : listing.source) ? listing === null || listing === void 0 ? void 0 : listing.source["icon"] : undefined;
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                trigger: trigger,
                title: title,
                onBack: buyStep == (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).AddFunds ? ()=>{
                    setBuyStep((0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Checkout);
                } : null,
                open: open,
                onOpenChange: (open)=>{
                    setOpen(open);
                },
                loading: loading,
                children: [
                    buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Unavailable && !loading && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                isSuspicious: isBanned,
                                usdConversion: usdPrice || 0,
                                isUnavailable: true,
                                price: price,
                                currency: currency,
                                sourceImg: sourceImg
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: ()=>{
                                    setOpen(false);
                                },
                                css: {
                                    m: "$4"
                                },
                                children: "Close"
                            })
                        ]
                    }),
                    buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Checkout && !loading && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    color: "$errorAccent",
                                    p: "$4",
                                    gap: "$2",
                                    background: "$wellBackground"
                                },
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                        icon: (0, $9O4lY$faCircleExclamation),
                                        width: 16,
                                        height: 16
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: "errorLight",
                                        children: transactionError.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                usdConversion: usdPrice || 0,
                                isSuspicious: isBanned,
                                price: price,
                                currency: currency,
                                sourceImg: sourceImg
                            }),
                            quantityAvailable > 1 && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    pt: "$4",
                                    px: "$4"
                                },
                                align: "center",
                                justify: "between",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: "subtle",
                                        children: [
                                            quantityAvailable,
                                            " listings are available at this price"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039), {
                                        css: {
                                            minWidth: 77,
                                            width: "auto",
                                            flexGrow: 0
                                        },
                                        value: `${quantity}`,
                                        onValueChange: (value)=>{
                                            setQuantity(Number(value));
                                        },
                                        children: [
                                            ...Array(quantityAvailable)
                                        ].map((_a, i)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Item, {
                                                value: `${i + 1}`,
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).ItemText, {
                                                    children: i + 1
                                                })
                                            }, i))
                                    })
                                ]
                            }),
                            referrerFee > 0 && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        align: "center",
                                        justify: "between",
                                        css: {
                                            pt: "$4",
                                            px: "$4"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle2",
                                                children: "Referral Fee"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                                amount: referrerFee,
                                                address: currency === null || currency === void 0 ? void 0 : currency.contract,
                                                decimals: currency === null || currency === void 0 ? void 0 : currency.decimals
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        justify: "end",
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                                            amount: feeUsd,
                                            color: "subtle",
                                            css: {
                                                pr: "$4"
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                align: "center",
                                justify: "between",
                                css: {
                                    pt: "$4",
                                    px: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h6",
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                        textStyle: "h6",
                                        amount: totalPrice,
                                        address: currency === null || currency === void 0 ? void 0 : currency.contract,
                                        decimals: currency === null || currency === void 0 ? void 0 : currency.decimals
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                justify: "end",
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                                    amount: totalUsd,
                                    color: "subtle",
                                    css: {
                                        mr: "$4"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    width: "100%"
                                },
                                children: hasEnoughCurrency ? /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                    onClick: buyToken,
                                    css: {
                                        width: "100%"
                                    },
                                    color: "primary",
                                    children: "Checkout"
                                }) : /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                    direction: "column",
                                    align: "center",
                                    children: [
                                        /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                            align: "center",
                                            css: {
                                                mb: "$3"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    css: {
                                                        mr: "$3"
                                                    },
                                                    color: "error",
                                                    style: "body2",
                                                    children: "Insufficient Balance"
                                                }),
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                                    amount: balance,
                                                    address: currency === null || currency === void 0 ? void 0 : currency.contract,
                                                    decimals: currency === null || currency === void 0 ? void 0 : currency.decimals,
                                                    textStyle: "body2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            onClick: ()=>{
                                                setBuyStep((0, $16c71bdc4553eafd$export$b41ddf00b39567e8).AddFunds);
                                            },
                                            css: {
                                                width: "100%"
                                            },
                                            children: "Add Funds"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Approving && token && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                usdConversion: usdPrice || 0,
                                isSuspicious: isBanned,
                                price: price,
                                currency: currency,
                                sourceImg: sourceImg
                            }),
                            stepData && stepData.totalSteps > 1 && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $0acedc8716225b2b$export$2e2bcd8739ae039), {
                                css: {
                                    px: "$4",
                                    mt: "$3"
                                },
                                value: (stepData === null || stepData === void 0 ? void 0 : stepData.stepProgress) || 0,
                                max: (stepData === null || stepData === void 0 ? void 0 : stepData.totalSteps) || 0
                            }),
                            !stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {
                                css: {
                                    height: 206
                                }
                            }),
                            stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $96df3158c61a3869$export$2e2bcd8739ae039), {
                                title: (stepData === null || stepData === void 0 ? void 0 : stepData.currentStep.action) || "",
                                txHash: stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash,
                                blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash}`
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                disabled: true,
                                css: {
                                    m: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                    (stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) ? "Waiting for transaction to be validated" : "Waiting for approval..."
                                ]
                            })
                        ]
                    }),
                    buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).Complete && token && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    py: "$5",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h5",
                                        css: {
                                            mb: 24
                                        },
                                        children: "Congratulations!"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                                        src: token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : _token_token1.image,
                                        style: {
                                            width: 100,
                                            height: 100
                                        }
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mb: 24,
                                            mt: "$2",
                                            maxWidth: "100%"
                                        },
                                        align: "center",
                                        justify: "center",
                                        children: [
                                            !!((_token_token2 = token.token) === null || _token_token2 === void 0 ? void 0 : (_token_token_collection = _token_token2.collection) === null || _token_token_collection === void 0 ? void 0 : _token_token_collection.image) && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                css: {
                                                    mr: "$1"
                                                },
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                                                    src: (_token_token3 = token.token) === null || _token_token3 === void 0 ? void 0 : (_token_token_collection1 = _token_token3.collection) === null || _token_token_collection1 === void 0 ? void 0 : _token_token_collection1.image,
                                                    style: {
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: "50%"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle2",
                                                css: {
                                                    maxWidth: "100%"
                                                },
                                                ellipsify: true,
                                                children: (token === null || token === void 0 ? void 0 : (_token_token4 = token.token) === null || _token_token4 === void 0 ? void 0 : _token_token4.name) ? token === null || token === void 0 ? void 0 : (_token_token5 = token.token) === null || _token_token5 === void 0 ? void 0 : _token_token5.name : `#${token === null || token === void 0 ? void 0 : (_token_token6 = token.token) === null || _token_token6 === void 0 ? void 0 : _token_token6.tokenId}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mb: "$2"
                                        },
                                        align: "center",
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                css: {
                                                    color: "$successAccent",
                                                    mr: "$2"
                                                },
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                    icon: (0, $9O4lY$faCheckCircle)
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "body1",
                                                children: "Your transaction went through successfully"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                        color: "primary",
                                        weight: "medium",
                                        css: {
                                            fontSize: 12
                                        },
                                        href: `${blockExplorerBaseUrl}/tx/${finalTxHash}`,
                                        target: "_blank",
                                        children: [
                                            "View on",
                                            " ",
                                            (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    flexDirection: "column",
                                    gap: "$3",
                                    "@bp1": {
                                        flexDirection: "row"
                                    }
                                },
                                children: !!onGoToToken ? /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            onClick: ()=>{
                                                setOpen(false);
                                                if (onClose) onClose();
                                            },
                                            css: {
                                                flex: 1
                                            },
                                            color: "ghost",
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            style: {
                                                flex: 1
                                            },
                                            color: "primary",
                                            onClick: ()=>{
                                                onGoToToken();
                                                if (onClose) onClose();
                                            },
                                            children: "Go to Token"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                    onClick: ()=>{
                                        setOpen(false);
                                        if (onClose) onClose();
                                    },
                                    style: {
                                        flex: 1
                                    },
                                    color: "primary",
                                    children: "Close"
                                })
                            })
                        ]
                    }),
                    buyStep === (0, $16c71bdc4553eafd$export$b41ddf00b39567e8).AddFunds && token && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    py: "$5",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            color: "$neutralText"
                                        },
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                            icon: (0, $9O4lY$faExchange),
                                            style: {
                                                width: "32px",
                                                height: "32px",
                                                margin: "12px 0px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "subtitle1",
                                        css: {
                                            my: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $920fdcfe068d5f72$export$2e2bcd8739ae039), {
                                                content: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body2",
                                                    children: [
                                                        "Trade one crypto for another on a crypto exchange. Popular decentralized exchanges include",
                                                        " ",
                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                                            css: {
                                                                fontSize: 12
                                                            },
                                                            href: "https://app.uniswap.org/",
                                                            target: "_blank",
                                                            color: "primary",
                                                            children: "Uniswap"
                                                        }),
                                                        ",",
                                                        " ",
                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                                            css: {
                                                                fontSize: 12
                                                            },
                                                            href: "https://app.sushi.com/",
                                                            target: "_blank",
                                                            color: "primary",
                                                            children: "SushiSwap"
                                                        }),
                                                        " ",
                                                        "and many others."
                                                    ]
                                                }),
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    as: "span",
                                                    color: "accent",
                                                    children: "Exchange currencies"
                                                })
                                            }),
                                            " ",
                                            "or transfer funds to your",
                                            /*#__PURE__*/ (0, $9O4lY$jsx)("br", {}),
                                            " wallet address below:"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            width: "100%",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                css: {
                                                    pointerEvents: "none",
                                                    opacity: copied ? 1 : 0,
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: 8,
                                                    transition: "all 200ms ease-in-out",
                                                    pl: "$4",
                                                    alignItems: "center",
                                                    zIndex: 3,
                                                    textAlign: "left",
                                                    background: "$neutralBg"
                                                },
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body1",
                                                    children: "Copied Address!"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9d04e171ac46ecc2$export$2e2bcd8739ae039), {
                                                readOnly: true,
                                                onClick: ()=>copyToClipboard(address),
                                                value: address || "",
                                                css: {
                                                    color: "$neutralText",
                                                    textAlign: "left"
                                                }
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                css: {
                                                    position: "absolute",
                                                    right: "$3",
                                                    top: "50%",
                                                    touchEvents: "none",
                                                    transform: "translateY(-50%)",
                                                    color: "$neutralText",
                                                    pointerEvents: "none"
                                                },
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                    icon: (0, $9O4lY$faCopy),
                                                    width: 16,
                                                    height: 16
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                css: {
                                    m: "$4"
                                },
                                color: "primary",
                                onClick: ()=>copyToClipboard(address),
                                children: "Copy Wallet Address"
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$b821869244bed169$export$7055e49b90860ae6.Custom = (0, $16c71bdc4553eafd$export$8913f774683cde87);














function $820ff509488cb0b1$export$2e2bcd8739ae039(marketplaces, tokenId, collectionId) {
    const [unapprovedMarketplaces, setUnapprovedMarketplaces] = (0, $9O4lY$useState)([]);
    const [isFetching, setIsFetching] = (0, $9O4lY$useState)(false);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { data: signer  } = (0, $9O4lY$useSigner)();
    (0, $9O4lY$useEffect)(()=>{
        if (signer && client && tokenId && collectionId && marketplaces.length > 0) {
            const listings = marketplaces.map((market)=>{
                const listing = {
                    token: `${collectionId}:${tokenId}`,
                    weiPrice: "100000000000000000",
                    //@ts-ignore
                    orderbook: market.orderbook,
                    //@ts-ignore
                    orderKind: market.orderKind
                };
                return listing;
            });
            setIsFetching(true);
            client.actions.listToken({
                listings: listings,
                signer: signer,
                precheck: true
            }).then((data)=>{
                const steps = data;
                const approvalStep = steps.find((step)=>step.kind === "transaction" && step.items && step.items.length > 0);
                if (approvalStep && approvalStep.items) setUnapprovedMarketplaces(approvalStep.items.reduce((unapproved, item)=>{
                    if (item.status === "incomplete" && item.orderIndex !== undefined) {
                        const listing = listings[item.orderIndex];
                        marketplaces.forEach((marketplace)=>{
                            if (marketplace.orderKind === listing.orderKind) unapproved.push(marketplace);
                        });
                    }
                    return unapproved;
                }, []));
                else if (unapprovedMarketplaces.length > 0) setUnapprovedMarketplaces([]);
                setIsFetching(false);
            }).catch(()=>{
                setIsFetching(false);
            });
        } else if (unapprovedMarketplaces.length > 0) setUnapprovedMarketplaces([]);
    }, [
        client,
        signer,
        tokenId,
        collectionId,
        marketplaces.length
    ]);
    return {
        data: unapprovedMarketplaces,
        isFetching: isFetching
    };
}


var $acd20450708e0ac7$export$2e2bcd8739ae039 = ()=>{
    const client = (0, $9O4lY$getClient)();
    let reservoirTitleEl = document.querySelector("meta[property='reservoir:title']");
    let title = null;
    if (reservoirTitleEl) title = reservoirTitleEl.getAttribute("content");
    if (!title && client && client.source) title = client.source;
    else if (!title) title = location ? location.hostname.replace("www.", "") : "";
    const reservoirIconEl = document.querySelector("meta[property='reservoir:icon']");
    let icon = null;
    if (reservoirIconEl) icon = reservoirIconEl.getAttribute("content");
    if (!icon) {
        const favicon = document.querySelector("link[rel*='icon']");
        if (favicon) icon = favicon.getAttribute("href");
    }
    return {
        title: title,
        icon: icon
    };
};





function $c4db925a3b37a0c2$export$2e2bcd8739ae039(listingEnabledOnly) {
    const [marketplaces, setMarketplaces] = (0, $9O4lY$useState)([]);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const path = new URL(`${client === null || client === void 0 ? void 0 : client.apiBase}/admin/get-marketplaces`);
    const { data: data  } = (0, $9O4lY$swrimmutable)([
        path.href
    ], null);
    (0, $9O4lY$useEffect)(()=>{
        if (data && data.marketplaces) {
            let updatedMarketplaces = data.marketplaces;
            if (listingEnabledOnly) updatedMarketplaces = updatedMarketplaces.filter((marketplace)=>marketplace.listingEnabled && marketplace.orderbook !== "x2y2");
            updatedMarketplaces.forEach((marketplace)=>{
                if (marketplace.orderbook === "reservoir") {
                    const data = (0, $acd20450708e0ac7$export$2e2bcd8739ae039)();
                    marketplace.name = data.title;
                    marketplace.feeBps = (client === null || client === void 0 ? void 0 : client.marketplaceFee) ? client.marketplaceFee : 0;
                    marketplace.fee = {
                        bps: (client === null || client === void 0 ? void 0 : client.marketplaceFee) || 0,
                        percent: ((client === null || client === void 0 ? void 0 : client.marketplaceFee) || 0) / 100
                    };
                    if (data.icon) marketplace.imageUrl = data.icon;
                }
                marketplace.price = 0;
                marketplace.truePrice = 0;
                marketplace.isSelected = marketplace.orderbook === "reservoir" ? true : false;
            });
            setMarketplaces(updatedMarketplaces);
        }
    }, [
        data,
        listingEnabledOnly
    ]);
    return [
        marketplaces,
        setMarketplaces
    ];
}


function $e50e5ec7fac893b7$export$2e2bcd8739ae039(contract, tokenId, swrOptions = {}) {
    const path = new URL(`https://api.opensea.io/api/v1/asset/${contract}/${tokenId}`);
    const { data: data , mutate: mutate , error: error , isValidating: isValidating  } = (0, $9O4lY$swr)(contract && tokenId ? [
        path.href
    ] : null, (resource)=>{
        return fetch(resource).then((res)=>res.json()).catch((e)=>{
            throw e;
        });
    }, {
        revalidateOnMount: true,
        ...swrOptions
    });
    return {
        response: data,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}





const $7ac9c635758a4319$var$expirationOptions = [
    {
        text: "1 Hour",
        value: "hour",
        relativeTime: 1,
        relativeTimeUnit: "h"
    },
    {
        text: "12 Hours",
        value: "12 hours",
        relativeTime: 12,
        relativeTimeUnit: "h"
    },
    {
        text: "1 Day",
        value: "1 day",
        relativeTime: 1,
        relativeTimeUnit: "d"
    },
    {
        text: "3 Day",
        value: "3 days",
        relativeTime: 3,
        relativeTimeUnit: "d"
    },
    {
        text: "1 Week",
        value: "week",
        relativeTime: 1,
        relativeTimeUnit: "w"
    },
    {
        text: "1 Month",
        value: "month",
        relativeTime: 1,
        relativeTimeUnit: "M"
    },
    {
        text: "3 Months",
        value: "3 months",
        relativeTime: 3,
        relativeTimeUnit: "M"
    },
    {
        text: "None",
        value: "never",
        relativeTime: null,
        relativeTimeUnit: null
    }
];
var $7ac9c635758a4319$export$2e2bcd8739ae039 = $7ac9c635758a4319$var$expirationOptions;



let $ea2c0edddf367502$export$7f4afd65e1e67072;
(function(ListStep) {
    ListStep[ListStep["SelectMarkets"] = 0] = "SelectMarkets";
    ListStep[ListStep["SetPrice"] = 1] = "SetPrice";
    ListStep[ListStep["ListItem"] = 2] = "ListItem";
    ListStep[ListStep["Complete"] = 3] = "Complete";
})($ea2c0edddf367502$export$7f4afd65e1e67072 || ($ea2c0edddf367502$export$7f4afd65e1e67072 = {}));
const $ea2c0edddf367502$var$isCurrencyAllowed = (currency, marketplace, openseaPaymentTokens)=>{
    if (marketplace.listingEnabled) {
        if (currency.contract === (0, $9O4lY$constants).AddressZero) return true;
        switch(marketplace.orderbook){
            case "reservoir":
                return true;
            case "opensea":
                return openseaPaymentTokens.some((token)=>token.address === currency.contract);
        }
    }
    return false;
};
const $ea2c0edddf367502$export$5cb91f178b51ac3 = ({ open: open , tokenId: tokenId , collectionId: collectionId , currencies: currencies , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    var _openSeaToken_collection, _token_token, _userTokens__ownership;
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const account = (0, $9O4lY$useAccount)();
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const [listStep, setListStep] = (0, $9O4lY$useState)($ea2c0edddf367502$export$7f4afd65e1e67072.SelectMarkets);
    const [listingData, setListingData] = (0, $9O4lY$useState)([]);
    const [allMarketplaces] = (0, $c4db925a3b37a0c2$export$2e2bcd8739ae039)(true);
    const [marketplaces, setMarketplaces] = (0, $c4db925a3b37a0c2$export$2e2bcd8739ae039)(true);
    const [loadedInitalPrice, setLoadedInitalPrice] = (0, $9O4lY$useState)(false);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [localMarketplace, setLocalMarketplace] = (0, $9O4lY$useState)(null);
    const chainCurrency = (0, $813be0bd658efb24$export$2e2bcd8739ae039)();
    const defaultCurrency = {
        contract: chainCurrency.address,
        symbol: chainCurrency.symbol
    };
    const [currency, setCurrency] = (0, $9O4lY$useState)(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    const [quantity, setQuantity] = (0, $9O4lY$useState)(1);
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const { data: unapprovedMarketplaces , isFetching: isFetchingUnapprovedMarketplaces  } = (0, $820ff509488cb0b1$export$2e2bcd8739ae039)(marketplaces, open ? tokenId : undefined, open ? contract : undefined);
    const [expirationOption, setExpirationOption] = (0, $9O4lY$useState)((0, $7ac9c635758a4319$export$2e2bcd8739ae039)[5]);
    const { data: tokens  } = (0, $a22273d84f519011$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeAttributes: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: collections  } = (0, $02e139e000faba42$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const { response: openSeaToken  } = (0, $e50e5ec7fac893b7$export$2e2bcd8739ae039)(open ? contract : undefined, open ? tokenId : undefined);
    const paymentTokens = openSeaToken === null || openSeaToken === void 0 ? void 0 : (_openSeaToken_collection = openSeaToken.collection) === null || _openSeaToken_collection === void 0 ? void 0 : _openSeaToken_collection.payment_tokens;
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const is1155 = (token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.kind) === "erc1155";
    const { data: userTokens  } = (0, $45cacd3a46e0756d$export$2e2bcd8739ae039)(open && is1155 ? account.address : undefined, {
        tokens: [
            `${contract}:${tokenId}`
        ]
    });
    const quantityAvailable = is1155 && userTokens[0] ? Number(((_userTokens__ownership = userTokens[0].ownership) === null || _userTokens__ownership === void 0 ? void 0 : _userTokens__ownership.tokenCount) || 1) : 1;
    const usdPrice = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open ? "USD" : undefined, currency.symbol);
    const toggleMarketplace = (marketplace)=>{
        const updatedMarketplaces = marketplaces.map((market)=>{
            if (market.name == marketplace.name) return {
                ...market,
                isSelected: !market.isSelected
            };
            else return market;
        });
        const hasNonNativeMarketplace = updatedMarketplaces.find((marketplace)=>marketplace.isSelected && marketplace.orderbook !== "reservoir");
        if (hasNonNativeMarketplace) setQuantity(1);
        setMarketplaces(updatedMarketplaces);
    };
    const setMarketPrice = (price, market)=>{
        let updatedMarketplaces = marketplaces.map((marketplace)=>{
            if (marketplace.name == market.name) return {
                ...marketplace,
                price: price,
                truePrice: price
            };
            return marketplace;
        });
        setMarketplaces(updatedMarketplaces);
    };
    (0, $9O4lY$useEffect)(()=>{
        if (open && token && collection && !loadedInitalPrice && allMarketplaces.length > 0) {
            let updatedMarketplaces = allMarketplaces.map((marketplace)=>{
                const listingEnabled = $ea2c0edddf367502$var$isCurrencyAllowed(currency, marketplace, paymentTokens || [
                    chainCurrency
                ]);
                return {
                    ...marketplace,
                    price: "",
                    truePrice: "",
                    listingEnabled: listingEnabled,
                    isSelected: listingEnabled ? marketplace.isSelected : false
                };
            });
            setMarketplaces(updatedMarketplaces);
            setLoadedInitalPrice(true);
        }
    }, [
        token,
        collection,
        loadedInitalPrice,
        open,
        marketplaces.length
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (open && loadedInitalPrice) {
            let updatedMarketplaces = allMarketplaces.map((marketplace)=>{
                const listingEnabled = $ea2c0edddf367502$var$isCurrencyAllowed(currency, marketplace, paymentTokens || [
                    chainCurrency
                ]);
                return {
                    ...marketplace,
                    listingEnabled: listingEnabled,
                    isSelected: listingEnabled ? marketplace.isSelected : false
                };
            });
            setMarketplaces(updatedMarketplaces);
        }
    }, [
        open,
        currency,
        paymentTokens
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (marketplaces) setLocalMarketplace(marketplaces.find((marketplace)=>marketplace.orderbook === "reservoir") || null);
        else setLocalMarketplace(null);
    }, [
        marketplaces
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setListStep($ea2c0edddf367502$export$7f4afd65e1e67072.SelectMarkets);
            setTransactionError(null);
            if (marketplaces.length > 0) setMarketplaces(marketplaces.map((marketplace)=>{
                return {
                    ...marketplace,
                    isSelected: marketplace.orderbook === "reservoir"
                };
            }));
            setLoadedInitalPrice(false);
            setStepData(null);
            setExpirationOption((0, $7ac9c635758a4319$export$2e2bcd8739ae039)[5]);
            setQuantity(1);
        }
        setCurrency(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    }, [
        open
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (currencies && currencies.length > 5) console.warn("The ListModal UI was designed to have a maximum of 5 currencies, going above 5 may degrade the user experience.");
    }, [
        currencies
    ]);
    const listToken = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setTransactionError(null);
        const listingData = [];
        let expirationTime = null;
        if (expirationOption.relativeTime && expirationOption.relativeTimeUnit) expirationTime = (0, $9O4lY$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
        const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
        marketplaces.forEach((market)=>{
            if (market.isSelected) {
                const listing = {
                    token: `${contract}:${tokenId}`,
                    weiPrice: (0, $9O4lY$parseUnits)(`${+market.price * quantity}`, currency.decimals).toString(),
                    //@ts-ignore
                    orderbook: market.orderbook,
                    //@ts-ignore
                    orderKind: market.orderKind
                };
                if (quantity > 1) listing.quantity = quantity;
                if (expirationTime) listing.expirationTime = expirationTime;
                if (currency && currency.contract != (0, $9O4lY$constants).AddressZero) listing.currency = currency.contract;
                listingData.push({
                    listing: listing,
                    marketplace: market
                });
            }
        });
        setListingData(listingData);
        setListStep($ea2c0edddf367502$export$7f4afd65e1e67072.ListItem);
        client.actions.listToken({
            listings: listingData.map((data)=>data.listing),
            signer: signer,
            onProgress: (steps)=>{
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let incompleteStepItemIndex = null;
                let incompleteStepIndex = null;
                executableSteps.find((step, i)=>{
                    if (!step.items) return false;
                    incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
                    if (incompleteStepItemIndex !== -1) {
                        incompleteStepIndex = i;
                        return true;
                    }
                });
                if (incompleteStepIndex === null || incompleteStepItemIndex === null) {
                    const currentStep = executableSteps[executableSteps.length - 1];
                    const currentStepItem = currentStep.items ? currentStep.items[currentStep.items.length] : null;
                    setListStep($ea2c0edddf367502$export$7f4afd65e1e67072.Complete);
                    setStepData({
                        totalSteps: stepCount,
                        stepProgress: stepCount,
                        currentStep: currentStep,
                        listingData: currentStepItem && currentStepItem.orderIndex !== undefined ? listingData[currentStepItem.orderIndex] : listingData[listingData.length - 1]
                    });
                } else {
                    const currentStep = executableSteps[incompleteStepIndex];
                    const currentStepItem = currentStep.items ? currentStep.items[incompleteStepItemIndex] : null;
                    const listings = (currentStepItem === null || currentStepItem === void 0 ? void 0 : currentStepItem.orderIndex) !== undefined ? listingData[currentStepItem.orderIndex] : listingData[listingData.length - 1];
                    setStepData({
                        totalSteps: stepCount,
                        stepProgress: incompleteStepIndex,
                        currentStep: executableSteps[incompleteStepIndex],
                        listingData: listings
                    });
                }
            }
        }).catch((e)=>{
            const error = e;
            const transactionError = new Error((error === null || error === void 0 ? void 0 : error.message) || "", {
                cause: error
            });
            setTransactionError(transactionError);
        });
    }, [
        client,
        marketplaces,
        signer,
        collectionId,
        tokenId,
        expirationOption,
        currency,
        quantity
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            token: token,
            quantityAvailable: quantityAvailable,
            collection: collection,
            listStep: listStep,
            usdPrice: usdPrice,
            expirationOption: expirationOption,
            expirationOptions: $7ac9c635758a4319$export$2e2bcd8739ae039,
            marketplaces: marketplaces,
            unapprovedMarketplaces: unapprovedMarketplaces,
            isFetchingUnapprovedMarketplaces: isFetchingUnapprovedMarketplaces,
            localMarketplace: localMarketplace,
            listingData: listingData,
            transactionError: transactionError,
            stepData: stepData,
            currencies: currencies || [
                defaultCurrency
            ],
            currency: currency,
            quantity: quantity,
            setListStep: setListStep,
            toggleMarketplace: toggleMarketplace,
            setMarketPrice: setMarketPrice,
            setCurrency: setCurrency,
            setExpirationOption: setExpirationOption,
            setQuantity: setQuantity,
            listToken: listToken
        })
    });
};
$ea2c0edddf367502$export$5cb91f178b51ac3.displayName = "ListModalRenderer";











const $0493c9a888a03ec5$var$optimizeImage = (imageHref, width)=>{
    if (!imageHref) return "";
    let url = new URL(imageHref);
    if (url.host === "lh3.googleusercontent.com") {
        if (imageHref.includes("=s") || imageHref.includes("=w")) {
            let newImage = imageHref.split("=");
            return `${newImage[0]}=w${width}`;
        }
        return `${imageHref}=w${width}`;
    }
    return imageHref;
};
var $0493c9a888a03ec5$export$2e2bcd8739ae039 = $0493c9a888a03ec5$var$optimizeImage;


const $1c714b63c47d64fa$var$Img = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {
    width: "100%",
    "@bp1": {
        height: 150,
        width: 150
    },
    borderRadius: "$borderRadius"
});
const $1c714b63c47d64fa$var$Token = ({ token: token , collection: collection  })=>{
    var _token_token, _token_token1, _token_token2, _token_token3, _token_token_collection;
    const img = (0, $0493c9a888a03ec5$export$2e2bcd8739ae039)((token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.image) ? token.token.image : collection === null || collection === void 0 ? void 0 : collection.image, 600);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        css: {
            mr: "$4",
            width: 120,
            "@bp1": {
                mr: 0,
                width: "100%"
            }
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    mb: "$1",
                    display: "block"
                },
                children: "Item"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($1c714b63c47d64fa$var$Img, {
                src: img,
                css: {
                    mb: "$2",
                    visibility: !img || img.length === 0 ? "hidden" : "visible",
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "h6",
                css: {
                    flex: 1
                },
                as: "h6",
                ellipsify: true,
                children: (token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : _token_token1.name) || `#${token === null || token === void 0 ? void 0 : (_token_token2 = token.token) === null || _token_token2 === void 0 ? void 0 : _token_token2.tokenId}`
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                    style: "subtitle2",
                    color: "subtle",
                    as: "p",
                    ellipsify: true,
                    children: token === null || token === void 0 ? void 0 : (_token_token3 = token.token) === null || _token_token3 === void 0 ? void 0 : (_token_token_collection = _token_token3.collection) === null || _token_token_collection === void 0 ? void 0 : _token_token_collection.name
                })
            })
        ]
    });
};
var $1c714b63c47d64fa$export$2e2bcd8739ae039 = $1c714b63c47d64fa$var$Token;









const $c389eab4f2e0b419$var$FormatWrappedCurrency = ({ logoWidth: logoWidth , ...props })=>{
    const { chain: activeChain , chains: chains  } = (0, $9O4lY$useNetwork)();
    let chain = chains.find((chain)=>{
        return (activeChain === null || activeChain === void 0 ? void 0 : activeChain.id) === chain.id;
    });
    if (!chain && chains.length > 0) chain = chains[0];
    else chain = activeChain;
    const contractAddress = (chain === null || chain === void 0 ? void 0 : chain.id) !== undefined && chain.id in (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039) ? (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[chain.id] : (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[1];
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
        ...props,
        address: contractAddress
    });
};
var $c389eab4f2e0b419$export$2e2bcd8739ae039 = $c389eab4f2e0b419$var$FormatWrappedCurrency;


const $c79b3b97b280cefd$var$Stat = ({ label: label , value: value , asNative: asNative = false , asWrapped: asWrapped = false , ...props })=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        align: "center",
        justify: "between",
        className: "rk-stat-well",
        css: {
            backgroundColor: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            overflow: "hidden"
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    flex: 1,
                    minWidth: "0",
                    alignItems: "center",
                    gap: "$2",
                    mr: "$1"
                },
                children: label
            }),
            asNative && !asWrapped && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                amount: value,
                textStyle: "subtitle2"
            }),
            asWrapped && !asNative && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c389eab4f2e0b419$export$2e2bcd8739ae039), {
                amount: value,
                textStyle: "subtitle2"
            }),
            !asNative && !asWrapped && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                as: "p",
                css: {
                    marginLeft: "$2"
                },
                ellipsify: true,
                children: value ? value : "-"
            })
        ]
    });
$c79b3b97b280cefd$var$Stat.toString = ()=>".rk-stat-well";
var $c79b3b97b280cefd$export$2e2bcd8739ae039 = $c79b3b97b280cefd$var$Stat;







const $c706883c7caab76c$var$InfoTooltip = ({ side: side , content: content , width: width  })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $920fdcfe068d5f72$export$2e2bcd8739ae039), {
        side: side,
        width: width,
        content: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
            style: "body2",
            as: "p",
            children: content
        }),
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralText"
            },
            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                icon: (0, $9O4lY$faInfoCircle)
            })
        })
    });
};
var $c706883c7caab76c$export$2e2bcd8739ae039 = $c706883c7caab76c$var$InfoTooltip;


const $8d444b8d9f0443c3$var$TokenStats = ({ token: token , collection: collection  })=>{
    var _token_token, _collection_royalties, _token_token1, _token_token_lastSell, _collection_floorAsk, _collection_floorAsk_price, _collection_floorAsk_price_amount, _collection_floorAsk1, _collection_floorAsk_price1, _collection_floorAsk_price_amount1;
    let attributeFloor = (token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.attributes) ? Math.max(...token.token.attributes.map((attr)=>Number(attr.floorAskPrice)), 0) : 0;
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $1c714b63c47d64fa$export$2e2bcd8739ae039), {
                collection: collection,
                token: token
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    flex: 1,
                    mt: "$4",
                    [`& ${0, $c79b3b97b280cefd$export$2e2bcd8739ae039}:not(:last-child)`]: {
                        mb: "$1"
                    },
                    mb: "$3"
                },
                children: [
                    {
                        id: 0,
                        label: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                    style: "subtitle2",
                                    color: "subtle",
                                    css: {
                                        minWidth: "0"
                                    },
                                    ellipsify: true,
                                    children: "Creator Royalties"
                                }),
                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                                    side: "right",
                                    width: 200,
                                    content: "A fee on every order that goes to the collection creator."
                                })
                            ]
                        }),
                        value: ((collection === null || collection === void 0 ? void 0 : (_collection_royalties = collection.royalties) === null || _collection_royalties === void 0 ? void 0 : _collection_royalties.bps) || 0) * 0.01 + "%"
                    },
                    {
                        id: 1,
                        label: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                            style: "subtitle2",
                            color: "subtle",
                            css: {
                                minWidth: "0"
                            },
                            ellipsify: true,
                            children: "Last Sale"
                        }),
                        value: (token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : (_token_token_lastSell = _token_token1.lastSell) === null || _token_token_lastSell === void 0 ? void 0 : _token_token_lastSell.value) || null,
                        asNative: true
                    },
                    {
                        id: 2,
                        label: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                            style: "subtitle2",
                            color: "subtle",
                            css: {
                                minWidth: "0"
                            },
                            ellipsify: true,
                            children: "Collection Floor"
                        }),
                        value: (collection === null || collection === void 0 ? void 0 : (_collection_floorAsk = collection.floorAsk) === null || _collection_floorAsk === void 0 ? void 0 : (_collection_floorAsk_price = _collection_floorAsk.price) === null || _collection_floorAsk_price === void 0 ? void 0 : (_collection_floorAsk_price_amount = _collection_floorAsk_price.amount) === null || _collection_floorAsk_price_amount === void 0 ? void 0 : _collection_floorAsk_price_amount.native) || 0,
                        asNative: true
                    },
                    {
                        id: 3,
                        label: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                    style: "subtitle2",
                                    color: "subtle",
                                    css: {
                                        minWidth: "0"
                                    },
                                    ellipsify: true,
                                    children: "Highest Trait Floor"
                                }),
                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                                    side: "right",
                                    width: 200,
                                    content: "The floor price of the most valuable trait of a token."
                                })
                            ]
                        }),
                        value: attributeFloor || (collection === null || collection === void 0 ? void 0 : (_collection_floorAsk1 = collection.floorAsk) === null || _collection_floorAsk1 === void 0 ? void 0 : (_collection_floorAsk_price1 = _collection_floorAsk1.price) === null || _collection_floorAsk_price1 === void 0 ? void 0 : (_collection_floorAsk_price_amount1 = _collection_floorAsk_price1.amount) === null || _collection_floorAsk_price_amount1 === void 0 ? void 0 : _collection_floorAsk_price_amount1.native) || 0,
                        asNative: true
                    }
                ].map((stat)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $c79b3b97b280cefd$export$2e2bcd8739ae039), {
                        ...stat
                    }, stat.id))
            })
        ]
    });
};
var $8d444b8d9f0443c3$export$2e2bcd8739ae039 = $8d444b8d9f0443c3$var$TokenStats;








const $dd434690fab8333b$var$StyledSwitch = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Root3, {
    all: "unset",
    cursor: "pointer",
    width: 46,
    height: 24,
    backgroundColor: "$neutralBgActive",
    borderRadius: "9999px",
    position: "relative",
    transition: "background-color 250ms linear",
    $$focusColor: "$colors$accentBorder",
    '&[data-state="checked"]': {
        backgroundColor: "$accentSolid"
    },
    "&:focus-visible": {
        boxShadow: "0 0 0 2px $$focusColor"
    }
});
const $dd434690fab8333b$var$Thumb = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Thumb, {
    display: "block",
    width: 20,
    height: 20,
    backgroundColor: "$buttonTextColor",
    borderRadius: "9999px",
    transition: "transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transform: "translateX(4px)",
    willChange: "transform",
    $$borderColor: "$borderColor",
    //boxShadow: '0 0 0 1px $$borderColor',
    '&[data-state="checked"]': {
        transform: "translateX(22px)"
    }
});
const $dd434690fab8333b$var$Switch = (props)=>/*#__PURE__*/ (0, $9O4lY$jsx)($dd434690fab8333b$var$StyledSwitch, {
        ...props,
        children: /*#__PURE__*/ (0, $9O4lY$jsx)($dd434690fab8333b$var$Thumb, {})
    });
var $dd434690fab8333b$export$2e2bcd8739ae039 = $dd434690fab8333b$var$Switch;


const $4246e48992e97c7a$var$MarketplaceToggle = ({ marketplace: marketplace , onSelection: onSelection , ...props })=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        ...props,
        align: "center",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    mr: "$2"
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                    src: marketplace.imageUrl,
                    style: {
                        height: 32,
                        width: 32,
                        borderRadius: 4
                    }
                })
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "body3",
                css: {
                    flex: 1
                },
                children: marketplace.name
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    mr: "$2"
                },
                children: [
                    "Marketplace fee: ",
                    (marketplace.feeBps || 0) * 100,
                    "%"
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $dd434690fab8333b$export$2e2bcd8739ae039), {
                checked: marketplace.isSelected,
                onCheckedChange: onSelection
            })
        ]
    });
var $4246e48992e97c7a$export$2e2bcd8739ae039 = $4246e48992e97c7a$var$MarketplaceToggle;






const $ee06a8bf00fd929f$var$MarketplacePriceInput = ({ marketplace: marketplace , currency: currency , usdPrice: usdPrice , quantity: quantity = 1 , onChange: onChange , onBlur: onBlur , ...props })=>{
    var _marketplace_fee;
    let profit = (1 - (((_marketplace_fee = marketplace.fee) === null || _marketplace_fee === void 0 ? void 0 : _marketplace_fee.percent) || 0) / 100) * Number(marketplace.truePrice) * quantity;
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        ...props,
        align: "center",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    mr: "$2"
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                    src: marketplace.imageUrl,
                    style: {
                        height: 32,
                        width: 32,
                        borderRadius: 4
                    }
                })
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                align: "center",
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            width: "auto",
                            height: 20
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
                            css: {
                                height: 18
                            },
                            address: currency.contract
                        })
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "body1",
                        color: "subtle",
                        css: {
                            ml: "$1",
                            mr: "$4"
                        },
                        as: "p",
                        children: currency.symbol
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    flex: 1
                },
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9d04e171ac46ecc2$export$2e2bcd8739ae039), {
                    type: "number",
                    value: marketplace.price,
                    onChange: onChange,
                    onBlur: onBlur,
                    placeholder: "Enter a listing price"
                })
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                direction: "column",
                align: "end",
                css: {
                    ml: "$3"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                        amount: profit,
                        address: currency.contract,
                        decimals: currency.decimals,
                        textStyle: "h6",
                        logoWidth: 18
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                        amount: profit * (usdPrice || 0),
                        style: "subtitle2",
                        color: "subtle"
                    })
                ]
            })
        ]
    });
};
var $ee06a8bf00fd929f$export$2e2bcd8739ae039 = $ee06a8bf00fd929f$var$MarketplacePriceInput;














(0, $9O4lY$dayjs).extend((0, $9O4lY$dayjspluginrelativeTimejs));
function $0e59905e77eb8c48$export$2e2bcd8739ae039(timestamp) {
    const [timeSince, setTimeSince] = (0, $9O4lY$useState)("");
    (0, $9O4lY$useEffect)(()=>{
        if (timestamp) setTimeSince((0, $9O4lY$dayjs).unix(timestamp).fromNow());
        else setTimeSince("");
    }, [
        timestamp
    ]);
    return timeSince;
}


const $1316c09c24b44893$var$Img = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {
    width: 16,
    height: 16
});
const $1316c09c24b44893$var$ListingStat = ({ listing: listing , marketImg: marketImg , currency: currency , ...props })=>{
    const timeSince = (0, $0e59905e77eb8c48$export$2e2bcd8739ae039)(listing.expirationTime ? +listing.expirationTime : 0);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        direction: "column",
        className: "rk-stat-well",
        css: {
            backgroundColor: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            gap: "$1"
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                justify: "between",
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                        amount: listing.weiPrice,
                        textStyle: "subtitle2",
                        address: currency.contract,
                        decimals: currency.decimals
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)($1316c09c24b44893$var$Img, {
                        src: marketImg
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                as: "p",
                css: {
                    flex: 1
                },
                children: listing.expirationTime ? `Expires ${timeSince}` : "No Expiration"
            })
        ]
    });
};
$1316c09c24b44893$var$ListingStat.toString = ()=>".rk-stat-well";
var $1316c09c24b44893$export$2e2bcd8739ae039 = $1316c09c24b44893$var$ListingStat;


const $154e1e8725b42971$var$TokenListingDetails = ({ token: token , collection: collection , listingData: listingData , currency: currency  })=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $1c714b63c47d64fa$export$2e2bcd8739ae039), {
                collection: collection,
                token: token
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    flex: 1,
                    mt: "$4",
                    [`& ${0, $c79b3b97b280cefd$export$2e2bcd8739ae039}:not(:last-child)`]: {
                        mb: "$1"
                    },
                    mb: "$3"
                },
                children: listingData.map((data, i)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $1316c09c24b44893$export$2e2bcd8739ae039), {
                        listing: data.listing,
                        marketImg: data.marketplace.imageUrl || "",
                        currency: currency
                    }, i))
            })
        ]
    });
var $154e1e8725b42971$export$2e2bcd8739ae039 = $154e1e8725b42971$var$TokenListingDetails;







const $5da6a7316c0ab920$var$Img = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {
    width: 56,
    height: 56,
    borderRadius: 4,
    objectFit: "cover"
});
const $5da6a7316c0ab920$var$ProgressDot = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
    borderRadius: "50%",
    width: 5,
    height: 5
});
const $5da6a7316c0ab920$var$loadingStart = (0, $fa1a233ff8c38bd3$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "20%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $5da6a7316c0ab920$var$loadingMiddle = (0, $fa1a233ff8c38bd3$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "20%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "40%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $5da6a7316c0ab920$var$loadingEnd = (0, $fa1a233ff8c38bd3$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "40%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "60%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $5da6a7316c0ab920$var$TransactionProgress = ({ fromImg: fromImg , toImg: toImg , ...props })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        ...props,
        align: "center",
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)($5da6a7316c0ab920$var$Img, {
                src: fromImg
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                css: {
                    gap: "$1",
                    mx: 23
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)($5da6a7316c0ab920$var$ProgressDot, {
                        css: {
                            animation: `${$5da6a7316c0ab920$var$loadingStart} 1s ease-in-out infinite`
                        }
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)($5da6a7316c0ab920$var$ProgressDot, {
                        css: {
                            animation: `${$5da6a7316c0ab920$var$loadingMiddle} 1s ease-in-out infinite`
                        }
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)($5da6a7316c0ab920$var$ProgressDot, {
                        css: {
                            animation: `${$5da6a7316c0ab920$var$loadingEnd} 1s ease-in-out infinite`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($5da6a7316c0ab920$var$Img, {
                src: toImg
            })
        ]
    });
};
var $5da6a7316c0ab920$export$2e2bcd8739ae039 = $5da6a7316c0ab920$var$TransactionProgress;





const $77b4a3fcf105eff6$var$Image = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {});
const $77b4a3fcf105eff6$var$Span = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("span", {});
const $77b4a3fcf105eff6$var$ContentContainer = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
    width: "100%",
    flexDirection: "column",
    "@bp1": {
        flexDirection: "row"
    }
});
const $77b4a3fcf105eff6$var$MainContainer = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
    flex: 1,
    borderColor: "$borderColor",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    "@bp1": {
        borderTopWidth: 0,
        borderLeftWidth: 1
    },
    defaultVariants: {
        direction: "column"
    }
});
function $77b4a3fcf105eff6$export$d23efc006864db2f({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , currencies: currencies , nativeOnly: nativeOnly , normalizeRoyalties: normalizeRoyalties , onGoToToken: onGoToToken , onListingComplete: onListingComplete , onListingError: onListingError , onClose: onClose  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const [stepTitle, setStepTitle] = (0, $9O4lY$useState)("");
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const [marketplacesToApprove, setMarketplacesToApprove] = (0, $9O4lY$useState)([]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $ea2c0edddf367502$export$5cb91f178b51ac3), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        currencies: currencies,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ token: token , quantityAvailable: quantityAvailable , collection: collection , usdPrice: usdPrice , listStep: listStep , expirationOption: expirationOption , expirationOptions: expirationOptions , marketplaces: marketplaces , unapprovedMarketplaces: unapprovedMarketplaces , localMarketplace: localMarketplace , listingData: listingData , transactionError: transactionError , stepData: stepData , currencies: currencies , currency: currency , quantity: quantity , setListStep: setListStep , listToken: listToken , setMarketPrice: setMarketPrice , setCurrency: setCurrency , toggleMarketplace: toggleMarketplace , setExpirationOption: setExpirationOption , setQuantity: setQuantity  })=>{
            var _token_token, _localMarketplace_fee, _token_token1, _token_token2, _token_token3, _token_token4, _token_token_collection;
            const tokenImage = token && ((_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.image) ? token.token.image : collection === null || collection === void 0 ? void 0 : collection.image;
            (0, $9O4lY$useEffect)(()=>{
                if (stepData) {
                    const isNativeOrder = stepData.listingData.marketplace.orderbook === "reservoir";
                    const isSeaportOrder = stepData.listingData.marketplace.orderKind === "seaport";
                    const marketplaceName = isNativeOrder && isSeaportOrder ? `${stepData.listingData.marketplace.name} (on Seaport)` : stepData.listingData.marketplace.name;
                    switch(stepData.currentStep.kind){
                        case "transaction":
                            setStepTitle(`Approve ${marketplaceName} to access item\nin your wallet`);
                            break;
                        case "signature":
                            setStepTitle(`Confirm listing on ${marketplaceName}\nin your wallet`);
                            break;
                    }
                }
            }, [
                stepData
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (unapprovedMarketplaces.length > 0) {
                    const unapprovedNames = unapprovedMarketplaces.reduce((names, marketplace)=>{
                        if (marketplace.name && (localMarketplace === null || localMarketplace === void 0 ? void 0 : localMarketplace.orderKind) !== marketplace.orderKind) names.push(marketplace.name);
                        return names;
                    }, []);
                    setMarketplacesToApprove(marketplaces.filter((marketplace)=>marketplace.isSelected && marketplace.name && unapprovedNames.includes(marketplace.name)));
                } else setMarketplacesToApprove([]);
            }, [
                unapprovedMarketplaces,
                marketplaces,
                localMarketplace
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (listStep === (0, $ea2c0edddf367502$export$7f4afd65e1e67072).Complete && onListingComplete) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        listings: listingData
                    };
                    onListingComplete(data);
                }
            }, [
                listStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onListingError) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        listings: listingData
                    };
                    onListingError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            const availableMarketplaces = marketplaces.filter((market)=>{
                const isNative = market.orderbook === "reservoir";
                return nativeOnly ? market.listingEnabled && isNative : market.listingEnabled;
            });
            const selectedMarketplaces = availableMarketplaces.filter((marketplace)=>marketplace.isSelected);
            const quantitySelectionAvailable = selectedMarketplaces.every((marketplace)=>marketplace.orderbook === "reservoir" || marketplace.orderbook === "opensea");
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                trigger: trigger,
                size: (0, $4619ff7ebe39c976$export$e8598848ef5f29c0).LG,
                title: "List Item for sale",
                open: open,
                onOpenChange: (open)=>{
                    setOpen(open);
                },
                loading: !token,
                children: [
                    token && listStep == (0, $ea2c0edddf367502$export$7f4afd65e1e67072).SelectMarkets && /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $8d444b8d9f0443c3$export$2e2bcd8739ae039), {
                                token: token,
                                collection: collection
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$MainContainer, {
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            p: "$4",
                                            flex: 1
                                        },
                                        children: [
                                            currencies.length > 1 ? /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle1",
                                                as: (0, $d0895fe590f10fcf$export$2e2bcd8739ae039),
                                                css: {
                                                    mb: "$4",
                                                    gap: "$2",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    "List item in",
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039), {
                                                        trigger: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Trigger, {
                                                            css: {
                                                                width: "auto",
                                                                p: 0,
                                                                backgroundColor: "transparent"
                                                            },
                                                            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Value, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                                    align: "center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
                                                                            address: currency.contract,
                                                                            css: {
                                                                                height: 18
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                            style: "subtitle1",
                                                                            color: "subtle",
                                                                            css: {
                                                                                ml: "$1"
                                                                            },
                                                                            children: currency.symbol
                                                                        }),
                                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).DownIcon, {
                                                                            style: {
                                                                                marginLeft: 6
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        value: currency.contract,
                                                        onValueChange: (value)=>{
                                                            const option = currencies.find((option)=>option.contract == value);
                                                            if (option) setCurrency(option);
                                                        },
                                                        children: currencies.map((option)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Item, {
                                                                value: option.contract,
                                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).ItemText, {
                                                                    children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                                        align: "center",
                                                                        css: {
                                                                            gap: "$1"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
                                                                                address: option.contract,
                                                                                css: {
                                                                                    height: 18
                                                                                }
                                                                            }),
                                                                            option.symbol
                                                                        ]
                                                                    })
                                                                })
                                                            }, option.contract))
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle1",
                                                as: "h3",
                                                css: {
                                                    mb: "$4"
                                                },
                                                children: availableMarketplaces.length > 1 ? "Select Marketplaces" : "Available Marketplace"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle2",
                                                as: "p",
                                                color: "subtle",
                                                children: "Default"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                align: "center",
                                                css: {
                                                    mb: "$4",
                                                    mt: "$2"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                        css: {
                                                            mr: "$2"
                                                        },
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                                                            src: (localMarketplace === null || localMarketplace === void 0 ? void 0 : localMarketplace.imageUrl) || "",
                                                            style: {
                                                                height: 32,
                                                                width: 32,
                                                                borderRadius: 4,
                                                                visibility: (localMarketplace === null || localMarketplace === void 0 ? void 0 : localMarketplace.imageUrl) ? "visible" : "hidden"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                        css: {
                                                            mr: "$2",
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                style: "body3",
                                                                children: localMarketplace === null || localMarketplace === void 0 ? void 0 : localMarketplace.name
                                                            }),
                                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                                css: {
                                                                    alignItems: "center",
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                        style: "body3",
                                                                        color: "subtle",
                                                                        as: "div",
                                                                        children: "on Reservoir"
                                                                    }),
                                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                                                                        side: "bottom",
                                                                        width: 200,
                                                                        content: "Listings made on this marketplace will be distributed across the reservoir ecosystem"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "subtitle2",
                                                        color: "subtle",
                                                        css: {
                                                            mr: "$2"
                                                        },
                                                        children: [
                                                            "Marketplace fee:",
                                                            " ",
                                                            ((localMarketplace === null || localMarketplace === void 0 ? void 0 : (_localMarketplace_fee = localMarketplace.fee) === null || _localMarketplace_fee === void 0 ? void 0 : _localMarketplace_fee.bps) || 0) / 10000 * 100,
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            availableMarketplaces.length > 1 && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle2",
                                                color: "subtle",
                                                as: "p",
                                                css: {
                                                    mb: "$2"
                                                },
                                                children: "Select other marketplaces to list on"
                                            }),
                                            availableMarketplaces.filter((marketplace)=>marketplace.orderbook !== "reservoir").map((marketplace)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                    css: {
                                                        mb: "$3"
                                                    },
                                                    children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4246e48992e97c7a$export$2e2bcd8739ae039), {
                                                        marketplace: marketplace,
                                                        onSelection: ()=>{
                                                            toggleMarketplace(marketplace);
                                                        }
                                                    })
                                                }, marketplace.name))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            p: "$4",
                                            width: "100%"
                                        },
                                        children: [
                                            marketplacesToApprove.length > 0 && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                color: "accent",
                                                style: "subtitle2",
                                                css: {
                                                    my: 10,
                                                    width: "100%",
                                                    textAlign: "center",
                                                    display: "block"
                                                },
                                                children: `Additional Gas fee required to approve listing (${marketplacesToApprove.map((marketplace)=>marketplace.name).join(", ")})`
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                onClick: ()=>setListStep((0, $ea2c0edddf367502$export$7f4afd65e1e67072).SetPrice),
                                                css: {
                                                    width: "100%"
                                                },
                                                children: "Next"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    token && listStep == (0, $ea2c0edddf367502$export$7f4afd65e1e67072).SetPrice && /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $8d444b8d9f0443c3$export$2e2bcd8739ae039), {
                                token: token,
                                collection: collection
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$MainContainer, {
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            p: "$4",
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                align: "center",
                                                css: {
                                                    mb: "$4"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                        color: "ghost",
                                                        size: "none",
                                                        css: {
                                                            mr: "$2",
                                                            color: "$neutralText"
                                                        },
                                                        onClick: ()=>setListStep((0, $ea2c0edddf367502$export$7f4afd65e1e67072).SelectMarkets),
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                            icon: (0, $9O4lY$faChevronLeft),
                                                            width: 16,
                                                            height: 16
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "subtitle1",
                                                        as: "h3",
                                                        children: "Set Your Price"
                                                    })
                                                ]
                                            }),
                                            quantityAvailable > 1 && quantitySelectionAvailable && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                        css: {
                                                            mb: "$2"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                as: "div",
                                                                css: {
                                                                    mb: "$2"
                                                                },
                                                                style: "subtitle2",
                                                                color: "subtle",
                                                                children: "Quantity"
                                                            }),
                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039), {
                                                                value: `${quantity}`,
                                                                onValueChange: (value)=>{
                                                                    setQuantity(Number(value));
                                                                },
                                                                children: [
                                                                    ...Array(quantityAvailable)
                                                                ].map((_a, i)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Item, {
                                                                        value: `${i + 1}`,
                                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).ItemText, {
                                                                            children: i + 1
                                                                        })
                                                                    }, i))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "body2",
                                                        css: {
                                                            mb: 24,
                                                            display: "inline-block"
                                                        },
                                                        children: [
                                                            quantityAvailable,
                                                            " items available"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                css: {
                                                    mb: "$2"
                                                },
                                                justify: "between",
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "subtitle2",
                                                        color: "subtle",
                                                        as: "p",
                                                        children: quantityAvailable > 1 && quantitySelectionAvailable ? "Unit Price" : "Price"
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                        css: {
                                                            alignItems: "center",
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                style: "subtitle2",
                                                                color: "subtle",
                                                                as: "p",
                                                                children: quantityAvailable > 1 && quantitySelectionAvailable ? "Total Profit" : "Profit"
                                                            }),
                                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                                                                side: "left",
                                                                width: 200,
                                                                content: `How much ${currency.symbol} you will receive after marketplace fees and creator royalties are subtracted.`
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            selectedMarketplaces.map((marketplace)=>{
                                                var _collection_floorAsk, _collection_floorAsk_price, _collection_floorAsk_price_amount, _collection_floorAsk1;
                                                /*#__PURE__*/ return (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                    css: {
                                                        mb: "$3"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $ee06a8bf00fd929f$export$2e2bcd8739ae039), {
                                                            marketplace: marketplace,
                                                            currency: currency,
                                                            usdPrice: usdPrice,
                                                            quantity: quantity,
                                                            onChange: (e)=>{
                                                                setMarketPrice(e.target.value, marketplace);
                                                            },
                                                            onBlur: ()=>{
                                                                if (marketplace.price === "") setMarketPrice(0, marketplace);
                                                            }
                                                        }),
                                                        collection && (collection === null || collection === void 0 ? void 0 : (_collection_floorAsk = collection.floorAsk) === null || _collection_floorAsk === void 0 ? void 0 : (_collection_floorAsk_price = _collection_floorAsk.price) === null || _collection_floorAsk_price === void 0 ? void 0 : (_collection_floorAsk_price_amount = _collection_floorAsk_price.amount) === null || _collection_floorAsk_price_amount === void 0 ? void 0 : _collection_floorAsk_price_amount.native) !== undefined && marketplace.truePrice !== "" && marketplace.truePrice !== null && currency.contract === (0, $9O4lY$constants).AddressZero && marketplace.truePrice < (collection === null || collection === void 0 ? void 0 : (_collection_floorAsk1 = collection.floorAsk) === null || _collection_floorAsk1 === void 0 ? void 0 : _collection_floorAsk1.price.amount.native) && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                            children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                style: "body2",
                                                                color: "error",
                                                                children: [
                                                                    "Price is",
                                                                    " ",
                                                                    Math.round((collection.floorAsk.price.amount.native - +marketplace.truePrice) / ((collection.floorAsk.price.amount.native + +marketplace.truePrice) / 2) * 100000) / 1000,
                                                                    "% below the floor"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, marketplace.name);
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                css: {
                                                    mb: "$3",
                                                    mt: "$4"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        as: "div",
                                                        css: {
                                                            mb: "$2"
                                                        },
                                                        style: "subtitle2",
                                                        color: "subtle",
                                                        children: "Expiration Date"
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039), {
                                                        value: (expirationOption === null || expirationOption === void 0 ? void 0 : expirationOption.text) || "",
                                                        onValueChange: (value)=>{
                                                            const option = expirationOptions.find((option)=>option.value == value);
                                                            if (option) setExpirationOption(option);
                                                        },
                                                        children: expirationOptions.map((option)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Item, {
                                                                value: option.value,
                                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).ItemText, {
                                                                    children: option.text
                                                                })
                                                            }, option.text))
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            p: "$4",
                                            width: "100%"
                                        },
                                        children: selectedMarketplaces.some((marketplace)=>marketplace.price === "" || marketplace.price == 0) ? /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            disabled: true,
                                            css: {
                                                width: "100%"
                                            },
                                            children: "Set your price"
                                        }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            onClick: listToken,
                                            css: {
                                                width: "100%"
                                            },
                                            children: "Next"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    token && listStep == (0, $ea2c0edddf367502$export$7f4afd65e1e67072).ListItem && /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $154e1e8725b42971$export$2e2bcd8739ae039), {
                                token: token,
                                collection: collection,
                                listingData: listingData,
                                currency: currency
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$MainContainer, {
                                css: {
                                    p: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $0acedc8716225b2b$export$2e2bcd8739ae039), {
                                        value: (stepData === null || stepData === void 0 ? void 0 : stepData.stepProgress) || 0,
                                        max: (stepData === null || stepData === void 0 ? void 0 : stepData.totalSteps) || 0
                                    }),
                                    transactionError && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c9208bc249041d08$export$2e2bcd8739ae039), {
                                        css: {
                                            mt: 24
                                        }
                                    }),
                                    stepData && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                css: {
                                                    textAlign: "center",
                                                    mt: 48,
                                                    mb: 28
                                                },
                                                style: "subtitle1",
                                                children: stepTitle
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5da6a7316c0ab920$export$2e2bcd8739ae039), {
                                                justify: "center",
                                                fromImg: tokenImage,
                                                toImg: (stepData === null || stepData === void 0 ? void 0 : stepData.listingData.marketplace.imageUrl) || ""
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                css: {
                                                    textAlign: "center",
                                                    mt: 24,
                                                    maxWidth: 395,
                                                    mx: "auto",
                                                    mb: "$4"
                                                },
                                                style: "body3",
                                                color: "subtle",
                                                children: stepData === null || stepData === void 0 ? void 0 : stepData.currentStep.description
                                            })
                                        ]
                                    }),
                                    !stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            height: "100%"
                                        },
                                        justify: "center",
                                        align: "center",
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {})
                                    }),
                                    !transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                        css: {
                                            width: "100%",
                                            mt: "auto"
                                        },
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                            "Waiting for Approval"
                                        ]
                                    }),
                                    transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mt: "auto",
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                color: "secondary",
                                                css: {
                                                    flex: 1
                                                },
                                                onClick: ()=>setListStep((0, $ea2c0edddf367502$export$7f4afd65e1e67072).SetPrice),
                                                children: "Edit Listing"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                css: {
                                                    flex: 1
                                                },
                                                onClick: ()=>listToken(),
                                                children: "Retry"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    token && listStep == (0, $ea2c0edddf367502$export$7f4afd65e1e67072).Complete && /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $154e1e8725b42971$export$2e2bcd8739ae039), {
                                token: token,
                                collection: collection,
                                listingData: listingData,
                                currency: currency
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($77b4a3fcf105eff6$var$MainContainer, {
                                css: {
                                    p: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $0acedc8716225b2b$export$2e2bcd8739ae039), {
                                        value: (stepData === null || stepData === void 0 ? void 0 : stepData.totalSteps) || 0,
                                        max: (stepData === null || stepData === void 0 ? void 0 : stepData.totalSteps) || 0
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        align: "center",
                                        justify: "center",
                                        direction: "column",
                                        css: {
                                            flex: 1,
                                            textAlign: "center",
                                            py: "$5"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                css: {
                                                    color: "$successAccent",
                                                    mb: 24
                                                },
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                    icon: (0, $9O4lY$faCheckCircle),
                                                    size: "3x"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "h5",
                                                css: {
                                                    mb: "$2"
                                                },
                                                as: "h5",
                                                children: "Your item has been listed!"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "body3",
                                                color: "subtle",
                                                as: "p",
                                                css: {
                                                    mb: 24,
                                                    maxWidth: 300,
                                                    overflow: "hidden"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        color: "accent",
                                                        ellipsify: true,
                                                        style: "body3",
                                                        children: (token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : _token_token1.name) ? token === null || token === void 0 ? void 0 : (_token_token2 = token.token) === null || _token_token2 === void 0 ? void 0 : _token_token2.name : `#${token === null || token === void 0 ? void 0 : (_token_token3 = token.token) === null || _token_token3 === void 0 ? void 0 : _token_token3.tokenId}`
                                                    }),
                                                    " ",
                                                    "from",
                                                    " ",
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)($77b4a3fcf105eff6$var$Span, {
                                                        css: {
                                                            color: "$accentText"
                                                        },
                                                        children: token === null || token === void 0 ? void 0 : (_token_token4 = token.token) === null || _token_token4 === void 0 ? void 0 : (_token_token_collection = _token_token4.collection) === null || _token_token_collection === void 0 ? void 0 : _token_token_collection.name
                                                    }),
                                                    " ",
                                                    "has been listed for sale"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "subtitle2",
                                                as: "p",
                                                css: {
                                                    mb: "$3"
                                                },
                                                children: "View Listing on"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                css: {
                                                    gap: "$3"
                                                },
                                                children: listingData.map((data)=>{
                                                    var _token_token, _token_token1;
                                                    const source = data.listing.orderbook === "reservoir" && (client === null || client === void 0 ? void 0 : client.source) ? client === null || client === void 0 ? void 0 : client.source : data.marketplace.name;
                                                    return /*#__PURE__*/ (0, $9O4lY$jsx)("a", {
                                                        target: "_blank",
                                                        href: `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/sources/${source}/tokens/${(_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.contract}:${token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : _token_token1.tokenId}/link/v2`,
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)($77b4a3fcf105eff6$var$Image, {
                                                            css: {
                                                                width: 24
                                                            },
                                                            src: data.marketplace.imageUrl
                                                        })
                                                    }, data.listing.orderbook);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            flexDirection: "column",
                                            gap: "$3",
                                            "@bp1": {
                                                flexDirection: "row"
                                            }
                                        },
                                        children: !!onGoToToken ? /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                            children: [
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                    onClick: ()=>{
                                                        setOpen(false);
                                                        if (onClose) onClose();
                                                    },
                                                    css: {
                                                        flex: 1
                                                    },
                                                    color: "secondary",
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    color: "primary",
                                                    onClick: ()=>{
                                                        onGoToToken();
                                                        if (onClose) onClose();
                                                    },
                                                    children: "Go to Token"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                            onClick: ()=>{
                                                setOpen(false);
                                                if (onClose) onClose();
                                            },
                                            style: {
                                                flex: 1
                                            },
                                            color: "primary",
                                            children: "Close"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$77b4a3fcf105eff6$export$d23efc006864db2f.Custom = (0, $ea2c0edddf367502$export$5cb91f178b51ac3);










//@ts-ignore
const $ed80e242af57734b$var$Flatpickr = (0, $9O4lY$reactflatpickr).default;
var $ed80e242af57734b$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $9O4lY$forwardRef)(({ options: options , onChange: onChange , value: value , defaultValue: defaultValue , ...inputProps }, forwardedRef)=>{
    return /*#__PURE__*/ (0, $9O4lY$jsx)($ed80e242af57734b$var$Flatpickr, {
        ref: forwardedRef,
        value: value,
        options: {
            dateFormat: "m/d/Y h:i K",
            ...options
        },
        onChange: onChange,
        defaultValue: defaultValue,
        render: ({ defaultValue: defaultValue  }, ref)=>{
            return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9d04e171ac46ecc2$export$2e2bcd8739ae039), {
                ...inputProps,
                ref: ref,
                defaultValue: defaultValue
            });
        }
    });
});







function $94bdf2ee0c890db8$export$2e2bcd8739ae039(params) {
    const { chain: activeChain , chains: chains  } = (0, $9O4lY$useNetwork)();
    let chain = chains.find((chain)=>{
        return (activeChain === null || activeChain === void 0 ? void 0 : activeChain.id) === chain.id;
    });
    if (!chain && chains.length > 0) chain = chains[0];
    else chain = activeChain;
    const contractAddress = (chain === null || chain === void 0 ? void 0 : chain.id) !== undefined && chain.id in (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039) ? (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[chain.id] : (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[1];
    const balance = (0, $9O4lY$useBalance)({
        ...params,
        token: contractAddress
    });
    return {
        balance: balance,
        contractAddress: contractAddress
    };
}









const $1064107b99b4c67e$var$wrappedContractNames = {
    1: "WETH",
    5: "WETH",
    137: "WMATIC"
};
var $1064107b99b4c67e$export$2e2bcd8739ae039 = $1064107b99b4c67e$var$wrappedContractNames;



const $f3b5da59e2d3c343$var$expirationOptions = [
    ...(0, $7ac9c635758a4319$export$2e2bcd8739ae039),
    {
        text: "Custom",
        value: "custom",
        relativeTime: null,
        relativeTimeUnit: null
    }
];
let $f3b5da59e2d3c343$export$7a92ddb9e11f37f7;
(function(BidStep) {
    BidStep[BidStep["SetPrice"] = 0] = "SetPrice";
    BidStep[BidStep["Offering"] = 1] = "Offering";
    BidStep[BidStep["Complete"] = 2] = "Complete";
})($f3b5da59e2d3c343$export$7a92ddb9e11f37f7 || ($f3b5da59e2d3c343$export$7a92ddb9e11f37f7 = {}));
const $f3b5da59e2d3c343$export$89d91658eb2b6698 = ({ open: open , tokenId: tokenId , collectionId: collectionId , attribute: attribute , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const [bidStep, setBidStep] = (0, $9O4lY$useState)($f3b5da59e2d3c343$export$7a92ddb9e11f37f7.SetPrice);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [bidAmount, setBidAmount] = (0, $9O4lY$useState)("");
    const [expirationOption, setExpirationOption] = (0, $9O4lY$useState)($f3b5da59e2d3c343$var$expirationOptions[3]);
    const [hasEnoughNativeCurrency, setHasEnoughNativeCurrency] = (0, $9O4lY$useState)(false);
    const [hasEnoughWrappedCurrency, setHasEnoughWrappedCurrency] = (0, $9O4lY$useState)(false);
    const [amountToWrap, setAmountToWrap] = (0, $9O4lY$useState)("");
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [bidData, setBidData] = (0, $9O4lY$useState)(null);
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const [trait, setTrait] = (0, $9O4lY$useState)(attribute);
    const [attributes, setAttributes] = (0, $9O4lY$useState)();
    const chainCurrency = (0, $813be0bd658efb24$export$2e2bcd8739ae039)();
    const wrappedContractAddress = chainCurrency.chainId in (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039) ? (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $08d6df3340a6ec2a$export$2e2bcd8739ae039)[1];
    const wrappedContractName = chainCurrency.chainId in (0, $1064107b99b4c67e$export$2e2bcd8739ae039) ? (0, $1064107b99b4c67e$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $1064107b99b4c67e$export$2e2bcd8739ae039)[1];
    const { data: tokens  } = (0, $a22273d84f519011$export$2e2bcd8739ae039)(open && tokenId !== undefined && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: traits  } = (0, $6038836de528509a$export$2e2bcd8739ae039)(open && !tokenId ? collectionId : undefined);
    const { data: collections  } = (0, $02e139e000faba42$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const usdPrice = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open ? "USD" : undefined, wrappedContractName);
    const bidAmountUsd = +bidAmount * (usdPrice || 0);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { address: address  } = (0, $9O4lY$useAccount)();
    const { data: balance  } = (0, $9O4lY$useBalance)({
        address: address,
        watch: open
    });
    const { balance: { data: wrappedBalance  } , contractAddress: contractAddress  } = (0, $94bdf2ee0c890db8$export$2e2bcd8739ae039)({
        address: address,
        watch: open
    });
    const { chain: chain  } = (0, $9O4lY$useNetwork)();
    const uniswapConvertLink = (chain === null || chain === void 0 ? void 0 : chain.id) === (0, $9O4lY$mainnet).id || (chain === null || chain === void 0 ? void 0 : chain.id) === (0, $9O4lY$goerli).id ? `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}&chain=${(chain === null || chain === void 0 ? void 0 : chain.network) || "mainnet"}&inputCurrency=eth&outputCurrency=${contractAddress}` : `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}`;
    (0, $9O4lY$useEffect)(()=>{
        if (bidAmount !== "") {
            const bid = (0, $9O4lY$parseEther)(bidAmount);
            if (!(wrappedBalance === null || wrappedBalance === void 0 ? void 0 : wrappedBalance.value) || (wrappedBalance === null || wrappedBalance === void 0 ? void 0 : wrappedBalance.value.lt(bid))) {
                setHasEnoughWrappedCurrency(false);
                const wrappedAmount = (wrappedBalance === null || wrappedBalance === void 0 ? void 0 : wrappedBalance.value) || (0, $9O4lY$constants).Zero;
                const amountToWrap = bid.sub(wrappedAmount);
                setAmountToWrap((0, $94b172869b555d93$export$87710fd8420713d9)(bid.sub(wrappedAmount), 5));
                if (!(balance === null || balance === void 0 ? void 0 : balance.value) || balance.value.lt(amountToWrap)) setHasEnoughNativeCurrency(false);
                else setHasEnoughNativeCurrency(true);
            } else {
                setHasEnoughWrappedCurrency(true);
                setHasEnoughNativeCurrency(true);
                setAmountToWrap("");
            }
        } else {
            setHasEnoughNativeCurrency(true);
            setHasEnoughWrappedCurrency(true);
            setAmountToWrap("");
        }
    }, [
        bidAmount,
        balance,
        wrappedBalance
    ]);
    (0, $9O4lY$useEffect)(()=>{
        const validAttributes = traits ? traits.filter((attribute)=>attribute.values && attribute.values.length > 0) : undefined;
        setAttributes(validAttributes);
    }, [
        traits
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setBidStep($f3b5da59e2d3c343$export$7a92ddb9e11f37f7.SetPrice);
            setExpirationOption($f3b5da59e2d3c343$var$expirationOptions[3]);
            setHasEnoughNativeCurrency(false);
            setHasEnoughWrappedCurrency(false);
            setAmountToWrap("");
            setBidAmount("");
            setStepData(null);
            setBidData(null);
            setTransactionError(null);
            setTrait(undefined);
        } else setTrait(attribute);
    }, [
        open
    ]);
    const isBanned = (0, $5e1eca9743a08381$export$2e2bcd8739ae039)(open ? contract : undefined, tokenId);
    const placeBid = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!tokenId && !collectionId) {
            const error = new Error("Missing tokenId and collectionId");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setBidStep($f3b5da59e2d3c343$export$7a92ddb9e11f37f7.Offering);
        setTransactionError(null);
        setBidData(null);
        const bid = {
            weiPrice: (0, $9O4lY$parseEther)(`${bidAmount}`).toString(),
            orderbook: "reservoir",
            orderKind: "seaport",
            attributeKey: trait === null || trait === void 0 ? void 0 : trait.key,
            attributeValue: trait === null || trait === void 0 ? void 0 : trait.value
        };
        if (tokenId && collectionId) {
            const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
            bid.token = `${contract}:${tokenId}`;
        } else if (collectionId) bid.collection = collectionId;
        if (expirationOption.relativeTime) {
            if (expirationOption.relativeTimeUnit) bid.expirationTime = (0, $9O4lY$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
            else bid.expirationTime = `${expirationOption.relativeTime}`;
        }
        setBidData(bid);
        client.actions.placeBid({
            signer: signer,
            bids: [
                bid
            ],
            onProgress: (steps)=>{
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let incompleteStepItemIndex = null;
                let incompleteStepIndex = null;
                executableSteps.find((step, i)=>{
                    if (!step.items) return false;
                    incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
                    if (incompleteStepItemIndex !== -1) {
                        incompleteStepIndex = i;
                        return true;
                    }
                });
                if (incompleteStepIndex !== null) setStepData({
                    totalSteps: stepCount,
                    stepProgress: incompleteStepIndex,
                    currentStep: executableSteps[incompleteStepIndex]
                });
                else setBidStep($f3b5da59e2d3c343$export$7a92ddb9e11f37f7.Complete);
            }
        }).catch((e)=>{
            const transactionError = new Error((e === null || e === void 0 ? void 0 : e.message) || "", {
                cause: e
            });
            setTransactionError(transactionError);
        });
    }, [
        tokenId,
        collectionId,
        client,
        signer,
        bidAmount,
        expirationOption,
        trait
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            token: token,
            collection: collection,
            attributes: attributes,
            usdPrice: usdPrice,
            isBanned: isBanned,
            balance: balance,
            wrappedBalance: wrappedBalance,
            wrappedContractName: wrappedContractName,
            wrappedContractAddress: wrappedContractAddress,
            uniswapConvertLink: uniswapConvertLink,
            bidAmount: bidAmount,
            bidData: bidData,
            bidAmountUsd: bidAmountUsd,
            bidStep: bidStep,
            hasEnoughNativeCurrency: hasEnoughNativeCurrency,
            hasEnoughWrappedCurrency: hasEnoughWrappedCurrency,
            amountToWrap: amountToWrap,
            transactionError: transactionError,
            expirationOption: expirationOption,
            expirationOptions: $f3b5da59e2d3c343$var$expirationOptions,
            stepData: stepData,
            setBidStep: setBidStep,
            setBidAmount: setBidAmount,
            setExpirationOption: setExpirationOption,
            setTrait: setTrait,
            trait: trait,
            placeBid: placeBid
        })
    });
};










const $a0c808947d4d83e2$var$Img = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("img", {
    width: "100%",
    "@bp1": {
        height: 100,
        width: 100
    },
    borderRadius: "$borderRadius"
});
const $a0c808947d4d83e2$var$TokenStatsHeader = ({ token: token , collection: collection  })=>{
    var _token_token, _token_token1, _token_token_collection;
    const img = (0, $0493c9a888a03ec5$export$2e2bcd8739ae039)((token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.image) ? token.token.image : collection === null || collection === void 0 ? void 0 : collection.image, 600);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        css: {
            mr: "$4",
            marginBottom: "$4",
            width: 120,
            "@bp1": {
                mr: 0,
                width: "100%"
            }
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    mb: "$1",
                    display: "block"
                },
                children: token ? "Item" : "Collection"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($a0c808947d4d83e2$var$Img, {
                src: img,
                css: {
                    mb: "$2",
                    visibility: !img || img.length === 0 ? "hidden" : "visible",
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "h6",
                css: {
                    flex: 1
                },
                as: "h6",
                ellipsify: true,
                children: (token === null || token === void 0 ? void 0 : token.token) ? token.token.name || `#${token.token.tokenId}` : collection === null || collection === void 0 ? void 0 : collection.name
            }),
            token && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                    style: "subtitle2",
                    color: "subtle",
                    as: "p",
                    ellipsify: true,
                    children: token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : (_token_token_collection = _token_token1.collection) === null || _token_token_collection === void 0 ? void 0 : _token_token_collection.name
                })
            })
        ]
    });
};
var $a0c808947d4d83e2$export$2e2bcd8739ae039 = $a0c808947d4d83e2$var$TokenStatsHeader;








const $e1ba2ef8b1d7ae49$var$SelectedAttribute = ({ attributeKey: attributeKey , attributeValue: attributeValue  })=>{
    const isMobile = (0, $fc33139f101a302d$export$2e2bcd8739ae039)("(max-width: 520px)");
    if (!attributeKey || !attributeValue) return null;
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            padding: "$2",
            borderRadius: 4,
            backgroundColor: "$neutralBgHover",
            marginBottom: "$4",
            overflow: "hidden",
            gap: "$1",
            justifyContent: "space-between",
            maxWidth: "100%",
            "@bp1": {
                justifyContent: "start",
                width: "fit-content"
            }
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                color: "accent",
                style: "subtitle2",
                children: [
                    attributeKey,
                    `${isMobile ? "" : ":"}`
                ]
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                css: {
                    maxWidth: 200,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                children: attributeValue
            })
        ]
    });
};
var $e1ba2ef8b1d7ae49$export$2e2bcd8739ae039 = $e1ba2ef8b1d7ae49$var$SelectedAttribute;


const $30fdb4574870a10b$var$TokenStats = ({ token: token , collection: collection , trait: trait  })=>{
    var _collection_royalties, _token_market, _token_market_topBid, _token_market_topBid_price, _token_market_topBid_price_amount, _collection_topBid, _collection_topBid_price, _collection_topBid_price_amount, _token_market1, _token_market_floorAsk, _token_market_floorAsk_price, _token_market_floorAsk_price_amount, _collection_floorAsk, _collection_floorAsk_price, _collection_floorAsk_price_amount;
    let stats = [];
    stats.push({
        id: 0,
        label: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
            children: [
                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                    style: "subtitle2",
                    color: "subtle",
                    css: {
                        minWidth: "0"
                    },
                    ellipsify: true,
                    children: "Creator Royalties"
                }),
                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                    side: "right",
                    width: 200,
                    content: "A fee on every order that goes to the collection creator."
                })
            ]
        }),
        value: ((collection === null || collection === void 0 ? void 0 : (_collection_royalties = collection.royalties) === null || _collection_royalties === void 0 ? void 0 : _collection_royalties.bps) || 0) * 0.01 + "%"
    }, {
        id: 1,
        label: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true,
            children: "Highest Offer"
        }),
        value: token ? ((_token_market = token.market) === null || _token_market === void 0 ? void 0 : (_token_market_topBid = _token_market.topBid) === null || _token_market_topBid === void 0 ? void 0 : (_token_market_topBid_price = _token_market_topBid.price) === null || _token_market_topBid_price === void 0 ? void 0 : (_token_market_topBid_price_amount = _token_market_topBid_price.amount) === null || _token_market_topBid_price_amount === void 0 ? void 0 : _token_market_topBid_price_amount.native) || null : (collection === null || collection === void 0 ? void 0 : (_collection_topBid = collection.topBid) === null || _collection_topBid === void 0 ? void 0 : (_collection_topBid_price = _collection_topBid.price) === null || _collection_topBid_price === void 0 ? void 0 : (_collection_topBid_price_amount = _collection_topBid_price.amount) === null || _collection_topBid_price_amount === void 0 ? void 0 : _collection_topBid_price_amount.native) || null,
        asWrapped: true
    });
    if (token) stats.push({
        id: 2,
        label: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true,
            children: "List Price"
        }),
        value: ((_token_market1 = token.market) === null || _token_market1 === void 0 ? void 0 : (_token_market_floorAsk = _token_market1.floorAsk) === null || _token_market_floorAsk === void 0 ? void 0 : (_token_market_floorAsk_price = _token_market_floorAsk.price) === null || _token_market_floorAsk_price === void 0 ? void 0 : (_token_market_floorAsk_price_amount = _token_market_floorAsk_price.amount) === null || _token_market_floorAsk_price_amount === void 0 ? void 0 : _token_market_floorAsk_price_amount.native) || null,
        asNative: true
    });
    else if (!token && collection) stats.push({
        id: 2,
        label: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true,
            children: "Floor"
        }),
        value: (collection === null || collection === void 0 ? void 0 : (_collection_floorAsk = collection.floorAsk) === null || _collection_floorAsk === void 0 ? void 0 : (_collection_floorAsk_price = _collection_floorAsk.price) === null || _collection_floorAsk_price === void 0 ? void 0 : (_collection_floorAsk_price_amount = _collection_floorAsk_price.amount) === null || _collection_floorAsk_price_amount === void 0 ? void 0 : _collection_floorAsk_price_amount.native) || null,
        asNative: true
    });
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $a0c808947d4d83e2$export$2e2bcd8739ae039), {
                collection: collection,
                token: token
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4cf4d37e8616013a$export$2e2bcd8739ae039), {
                css: {
                    flex: 1,
                    alignContent: "start",
                    width: "100%",
                    gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $e1ba2ef8b1d7ae49$export$2e2bcd8739ae039), {
                        attributeKey: trait === null || trait === void 0 ? void 0 : trait.key,
                        attributeValue: trait === null || trait === void 0 ? void 0 : trait.value
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            flex: 1,
                            [`& ${0, $c79b3b97b280cefd$export$2e2bcd8739ae039}:not(:last-child)`]: {
                                mb: "$1"
                            }
                        },
                        children: stats.map((stat)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $c79b3b97b280cefd$export$2e2bcd8739ae039), {
                                ...stat
                            }, stat.id))
                    })
                ]
            })
        ]
    });
};
var $30fdb4574870a10b$export$2e2bcd8739ae039 = $30fdb4574870a10b$var$TokenStats;















const $829ddca8f3abc833$var$TransactionBidDetails = ({ token: token , collection: collection , bidData: bidData  })=>{
    const [value, setValue] = (0, $9O4lY$useState)("");
    const timeSince = (0, $0e59905e77eb8c48$export$2e2bcd8739ae039)((bidData === null || bidData === void 0 ? void 0 : bidData.expirationTime) ? +bidData.expirationTime : 0);
    (0, $9O4lY$useEffect)(()=>{
        setValue(bidData ? (0, $9O4lY$formatEther)(bidData.weiPrice) : "");
    }, [
        bidData
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $a0c808947d4d83e2$export$2e2bcd8739ae039), {
                collection: collection,
                token: token
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                css: {
                    flex: 1,
                    mb: "$3"
                },
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $e1ba2ef8b1d7ae49$export$2e2bcd8739ae039), {
                        attributeKey: bidData === null || bidData === void 0 ? void 0 : bidData.attributeKey,
                        attributeValue: bidData === null || bidData === void 0 ? void 0 : bidData.attributeValue
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        className: "rk-stat-well",
                        css: {
                            backgroundColor: "$wellBackground",
                            p: "$2",
                            borderRadius: "$borderRadius",
                            gap: "$1"
                        },
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                justify: "between",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "subtitle2",
                                        children: "Offer Price"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c389eab4f2e0b419$export$2e2bcd8739ae039), {
                                        amount: +value,
                                        textStyle: "subtitle2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "subtitle2",
                                color: "subtle",
                                as: "p",
                                css: {
                                    flex: 1
                                },
                                children: (bidData === null || bidData === void 0 ? void 0 : bidData.expirationTime) ? `Expires ${timeSince}` : "No Expiration"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $829ddca8f3abc833$export$2e2bcd8739ae039 = $829ddca8f3abc833$var$TransactionBidDetails;










const $5a19ef1605e77707$var$SCROLLBAR_SIZE = 10;
const $5a19ef1605e77707$var$ScrollArea = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Root4, {
    height: 322,
    borderRadius: "$space$2",
    overflow: "hidden",
    boxShadow: `0 2px 10px $inputBackground`
});
const $5a19ef1605e77707$var$ScrollAreaViewport = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Viewport1, {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    borderRadius: "inherit"
});
const $5a19ef1605e77707$var$ScrollAreaScrollbar = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Scrollbar, {
    display: "flex",
    // ensures no selection
    userSelect: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: "none",
    padding: 2,
    background: "$inputBackground",
    transition: "background 160ms ease-out",
    "&:hover": {
        background: "$inputBackground"
    },
    '&[data-orientation="vertical"]': {
        width: $5a19ef1605e77707$var$SCROLLBAR_SIZE
    },
    '&[data-orientation="horizontal"]': {
        flexDirection: "column",
        height: $5a19ef1605e77707$var$SCROLLBAR_SIZE
    }
});
const $5a19ef1605e77707$var$ScrollAreaThumb = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Thumb1, {
    flex: 1,
    background: "$wellBackground",
    borderRadius: $5a19ef1605e77707$var$SCROLLBAR_SIZE,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: 44,
        minHeight: 44
    }
});
const $5a19ef1605e77707$var$ScrollAreaCorner = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)($9O4lY$Corner, {
    background: "$wellBackground"
});
const $5a19ef1605e77707$var$RKScrollArea = ({ children: children , ...props })=>{
    return /*#__PURE__*/ (0, $9O4lY$jsxs)($5a19ef1605e77707$var$ScrollArea, {
        ...props,
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaViewport, {
                children: children
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaScrollbar, {
                orientation: "vertical",
                children: /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaThumb, {})
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaScrollbar, {
                orientation: "horizontal",
                children: /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaThumb, {})
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)($5a19ef1605e77707$var$ScrollAreaCorner, {})
        ]
    });
};
$5a19ef1605e77707$var$RKScrollArea.Root = $5a19ef1605e77707$var$ScrollArea;
$5a19ef1605e77707$var$RKScrollArea.Viewport = $5a19ef1605e77707$var$ScrollAreaViewport;
$5a19ef1605e77707$var$RKScrollArea.Scrollbar = $5a19ef1605e77707$var$ScrollAreaScrollbar;
$5a19ef1605e77707$var$RKScrollArea.Thumb = $5a19ef1605e77707$var$ScrollAreaThumb;
$5a19ef1605e77707$var$RKScrollArea.Corner = $5a19ef1605e77707$var$ScrollAreaCorner;
var $5a19ef1605e77707$export$2e2bcd8739ae039 = $5a19ef1605e77707$var$RKScrollArea;



const $c4e4a87d225bbda6$var$AttributeSelector = ({ attributes: attributes , setTrait: setTrait , setOpen: setOpen , tokenCount: tokenCount  })=>{
    const [results, setResults] = (0, $9O4lY$useState)([]);
    const [query, setQuery] = (0, $9O4lY$useState)("");
    (0, $9O4lY$useEffect)(()=>{
        if (query === "") setResults(attributes);
        else {
            let results = [];
            attributes === null || attributes === void 0 ? void 0 : attributes.forEach((attribute)=>{
                var _attribute_values;
                const values = (_attribute_values = attribute.values) === null || _attribute_values === void 0 ? void 0 : _attribute_values.filter(({ value: value  })=>value.toLowerCase().includes(query.toLowerCase()));
                if (values && values.length > 0) results === null || results === void 0 ? void 0 : results.push({
                    ...attribute,
                    values: values
                });
            });
            setResults(results ? [
                ...results
            ] : []);
        }
    }, [
        query
    ]);
    if (!attributes) return null;
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        css: {
            maxWidth: 500,
            zIndex: 1000,
            padding: "$4",
            overflowY: "auto",
            borderRadius: "$space$2",
            backgroundColor: "$popoverBackground"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9d04e171ac46ecc2$export$2e2bcd8739ae039), {
                css: {
                    marginBottom: "$4",
                    padding: "$space$4 $space$4 $space$4 48px"
                },
                placeholder: "Filter attribute",
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                iconCss: {
                    top: "26px",
                    color: "$neutralText"
                },
                icon: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                    icon: (0, $9O4lY$faMagnifyingGlass),
                    width: 16,
                    height: 16
                })
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5a19ef1605e77707$export$2e2bcd8739ae039), {
                css: {
                    minWidth: "80vw",
                    "@bp1": {
                        minWidth: 468
                    }
                },
                children: results === null || results === void 0 ? void 0 : results.map(({ key: key , values: values  })=>{
                    if ((values === null || values === void 0 ? void 0 : values.length) === 0) return null;
                    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            paddingRight: "$4",
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "subtitle1",
                                color: "accent",
                                as: "div",
                                css: {
                                    marginBottom: "$4"
                                },
                                children: key
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4cf4d37e8616013a$export$2e2bcd8739ae039), {
                                css: {
                                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                    gap: "$2",
                                    "@bp1": {
                                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
                                    }
                                },
                                children: values === null || values === void 0 ? void 0 : values.map(({ value: value , count: count , floorAskPrice: floorAskPrice  })=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            display: "grid",
                                            alignContent: "space-between",
                                            cursor: "pointer",
                                            backgroundColor: "$contentBackground",
                                            borderRadius: "$space$2",
                                            $$shadowColor: "$colors$gray7",
                                            boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
                                            border: "1px solid $borderColor",
                                            width: "100%",
                                            padding: "12px 16px"
                                        },
                                        as: "button",
                                        onClick: ()=>{
                                            setTrait({
                                                key: key,
                                                value: value,
                                                floorAskPrice: floorAskPrice
                                            });
                                            setOpen(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                justify: "between",
                                                css: {
                                                    gap: "$2",
                                                    marginBottom: "$1"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        css: {
                                                            maxWidth: 85,
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            textAlign: "start"
                                                        },
                                                        style: "subtitle2",
                                                        children: value
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                        css: {
                                                            flex: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                                            amount: floorAskPrice,
                                                            logoWidth: 10,
                                                            maximumFractionDigits: 1,
                                                            textStyle: "subtitle2"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                justify: "between",
                                                css: {
                                                    gap: "$2"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "body2",
                                                        color: "subtle",
                                                        children: count && tokenCount ? `${Math.round(count / tokenCount * 100)}%` : "-"
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "body2",
                                                        color: "subtle",
                                                        children: "floor"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, value))
                            })
                        ]
                    }, key);
                })
            })
        ]
    });
};
var $c4e4a87d225bbda6$export$2e2bcd8739ae039 = $c4e4a87d225bbda6$var$AttributeSelector;




const $332dace0b1be931a$var$PseudoInput = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)("div", {
    all: "unset",
    width: "auto",
    padding: "$4",
    borderRadius: "$space$2",
    fontFamily: "$body",
    fontSize: 16,
    fontWeight: 400,
    color: "$neutralText",
    backgroundColor: "$inputBackground"
});
var $332dace0b1be931a$export$2e2bcd8739ae039 = $332dace0b1be931a$var$PseudoInput;



function $1c5244c9b46bef80$var$titleForStep(step) {
    switch(step){
        case (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).SetPrice:
            return "Make an Offer";
        case (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Offering:
            return "Complete Offer";
        case (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Complete:
            return "Offer Submitted";
    }
}
const $1c5244c9b46bef80$var$ContentContainer = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
    width: "100%",
    flexDirection: "column",
    "@bp1": {
        flexDirection: "row"
    }
});
const $1c5244c9b46bef80$var$MainContainer = (0, $fa1a233ff8c38bd3$export$3817b7a54a07cec7)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
    flex: 1,
    borderColor: "$borderColor",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    "@bp1": {
        borderTopWidth: 0,
        borderLeftWidth: 1
    },
    defaultVariants: {
        direction: "column"
    }
});
const $1c5244c9b46bef80$var$minimumDate = (0, $9O4lY$dayjs)().add(1, "h").format("MM/DD/YYYY h:mm A");
function $1c5244c9b46bef80$export$556cfc4a654987bd({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , attribute: attribute , normalizeRoyalties: normalizeRoyalties , onViewOffers: onViewOffers , onClose: onClose , onBidComplete: onBidComplete , onBidError: onBidError  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const datetimeElement = (0, $9O4lY$useRef)(null);
    const [stepTitle, setStepTitle] = (0, $9O4lY$useState)("");
    const [localMarketplace, setLocalMarketplace] = (0, $9O4lY$useState)(null);
    const [attributesSelectable, setAttributesSelectable] = (0, $9O4lY$useState)(false);
    (0, $9O4lY$useEffect)(()=>{
        setLocalMarketplace((0, $acd20450708e0ac7$export$2e2bcd8739ae039)());
    }, []);
    const [attributeSelectorOpen, setAttributeSelectorOpen] = (0, $9O4lY$useState)(false);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $f3b5da59e2d3c343$export$89d91658eb2b6698), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        attribute: attribute,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ token: token , collection: collection , attributes: attributes , bidStep: bidStep , expirationOption: expirationOption , expirationOptions: expirationOptions , wrappedBalance: wrappedBalance , wrappedContractName: wrappedContractName , wrappedContractAddress: wrappedContractAddress , bidAmount: bidAmount , bidAmountUsd: bidAmountUsd , hasEnoughNativeCurrency: hasEnoughNativeCurrency , hasEnoughWrappedCurrency: hasEnoughWrappedCurrency , amountToWrap: amountToWrap , balance: balance , uniswapConvertLink: uniswapConvertLink , transactionError: transactionError , stepData: stepData , bidData: bidData , isBanned: isBanned , setBidAmount: setBidAmount , setExpirationOption: setExpirationOption , setBidStep: setBidStep , setTrait: setTrait , trait: trait , placeBid: placeBid  })=>{
            var _token_token, _token_token1;
            const [expirationDate, setExpirationDate] = (0, $9O4lY$useState)("");
            const tokenCount = (collection === null || collection === void 0 ? void 0 : collection.tokenCount) ? +collection.tokenCount : undefined;
            const itemImage = token && ((_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.image) ? (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : _token_token1.image : collection === null || collection === void 0 ? void 0 : collection.image;
            (0, $9O4lY$useEffect)(()=>{
                if (stepData) switch(stepData.currentStep.kind){
                    case "signature":
                        setStepTitle("Confirm Offer");
                        break;
                    default:
                        setStepTitle(stepData.currentStep.action);
                        break;
                }
            }, [
                stepData
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (expirationOption && expirationOption.relativeTime) {
                    const newExpirationTime = expirationOption.relativeTimeUnit ? (0, $9O4lY$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit) : (0, $9O4lY$dayjs).unix(expirationOption.relativeTime);
                    setExpirationDate(newExpirationTime.format("MM/DD/YYYY h:mm A"));
                } else setExpirationDate("");
            }, [
                expirationOption
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (bidStep === (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Complete && onBidComplete) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        bidData: bidData
                    };
                    onBidComplete(data);
                }
            }, [
                bidStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onBidError) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        bidData: bidData
                    };
                    onBidError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (open && attributes && !tokenId && attribute) setTrait(attribute);
                else setTrait(undefined);
                if (open && attributes && !tokenId) {
                    let attributeCount = 0;
                    for(let i = 0; i < attributes.length; i++){
                        attributeCount += attributes[i].attributeCount || 0;
                        if (attributeCount >= 2000) break;
                    }
                    if (attributeCount >= 2000) setAttributesSelectable(false);
                    else setAttributesSelectable(true);
                } else setAttributesSelectable(false);
            }, [
                open,
                attributes
            ]);
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                size: bidStep !== (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Complete ? (0, $4619ff7ebe39c976$export$e8598848ef5f29c0).LG : (0, $4619ff7ebe39c976$export$e8598848ef5f29c0).MD,
                trigger: trigger,
                title: $1c5244c9b46bef80$var$titleForStep(bidStep),
                open: open,
                onOpenChange: (open)=>{
                    setOpen(open);
                },
                loading: !collection,
                onPointerDownOutside: (e)=>{
                    var _datetimeElement_current, _datetimeElement_current_flatpickr;
                    if (e.target instanceof Element && ((_datetimeElement_current = datetimeElement.current) === null || _datetimeElement_current === void 0 ? void 0 : (_datetimeElement_current_flatpickr = _datetimeElement_current.flatpickr) === null || _datetimeElement_current_flatpickr === void 0 ? void 0 : _datetimeElement_current_flatpickr.calendarContainer) && datetimeElement.current.flatpickr.calendarContainer.contains(e.target)) e.preventDefault();
                },
                onFocusCapture: (e)=>{
                    e.stopPropagation();
                },
                children: [
                    bidStep === (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).SetPrice && collection && /*#__PURE__*/ (0, $9O4lY$jsxs)($1c5244c9b46bef80$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $30fdb4574870a10b$export$2e2bcd8739ae039), {
                                token: token ? token : undefined,
                                collection: collection,
                                trait: trait
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($1c5244c9b46bef80$var$MainContainer, {
                                css: {
                                    p: "$4"
                                },
                                children: [
                                    isBanned && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c9208bc249041d08$export$2e2bcd8739ae039), {
                                        message: "Token is not tradable on OpenSea",
                                        css: {
                                            mb: "$2",
                                            p: "$2",
                                            borderRadius: 4
                                        }
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        justify: "between",
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                style: "tiny",
                                                children: "Offer Amount"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                as: (0, $d0895fe590f10fcf$export$2e2bcd8739ae039),
                                                css: {
                                                    gap: "$1"
                                                },
                                                align: "center",
                                                style: "tiny",
                                                children: [
                                                    "Balance:",
                                                    " ",
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c389eab4f2e0b419$export$2e2bcd8739ae039), {
                                                        logoWidth: 10,
                                                        textStyle: "tiny",
                                                        amount: wrappedBalance === null || wrappedBalance === void 0 ? void 0 : wrappedBalance.value
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mt: "$2",
                                            gap: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                as: (0, $d0895fe590f10fcf$export$2e2bcd8739ae039),
                                                css: {
                                                    gap: "$2",
                                                    ml: "$3",
                                                    flexShrink: 0
                                                },
                                                align: "center",
                                                style: "body1",
                                                color: "subtle",
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
                                                        css: {
                                                            height: 20
                                                        },
                                                        address: wrappedContractAddress
                                                    }),
                                                    wrappedContractName
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9d04e171ac46ecc2$export$2e2bcd8739ae039), {
                                                type: "number",
                                                value: bidAmount,
                                                onChange: (e)=>{
                                                    setBidAmount(e.target.value);
                                                },
                                                placeholder: "Enter price here",
                                                containerCss: {
                                                    width: "100%"
                                                },
                                                css: {
                                                    color: "$neutralText",
                                                    textAlign: "left"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                                        css: {
                                            marginLeft: "auto",
                                            mt: "$2",
                                            display: "inline-block",
                                            minHeight: 15
                                        },
                                        style: "tiny",
                                        amount: bidAmountUsd
                                    }),
                                    attributes && attributes.length > 0 && (attributesSelectable || trait) && !tokenId && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                as: (0, $6bc6fb211dac7330$export$2e2bcd8739ae039),
                                                css: {
                                                    mb: "$2"
                                                },
                                                style: "tiny",
                                                children: "Attributes"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $920fdcfe068d5f72$export$2e2bcd8739ae039).Root, {
                                                open: attributeSelectorOpen,
                                                onOpenChange: attributesSelectable ? setAttributeSelectorOpen : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $920fdcfe068d5f72$export$2e2bcd8739ae039).Trigger, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $332dace0b1be931a$export$2e2bcd8739ae039), {
                                                            children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                                justify: "between",
                                                                css: {
                                                                    gap: "$2",
                                                                    alignItems: "center",
                                                                    color: "$neutralText"
                                                                },
                                                                children: trait ? /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                                            css: {
                                                                                maxWidth: 385,
                                                                                overflow: "hidden",
                                                                                textOverflow: "ellipsis",
                                                                                whiteSpace: "nowrap"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                                    color: "accent",
                                                                                    style: "subtitle1",
                                                                                    children: [
                                                                                        trait === null || trait === void 0 ? void 0 : trait.key,
                                                                                        ":",
                                                                                        " "
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                                    style: "subtitle1",
                                                                                    children: trait === null || trait === void 0 ? void 0 : trait.value
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                                            css: {
                                                                                alignItems: "center",
                                                                                gap: "$2"
                                                                            },
                                                                            children: [
                                                                                (trait === null || trait === void 0 ? void 0 : trait.floorAskPrice) && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                                                                    css: {
                                                                                        flex: "none"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                                                                        amount: trait === null || trait === void 0 ? void 0 : trait.floorAskPrice,
                                                                                        maximumFractionDigits: 2,
                                                                                        logoWidth: 11
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                                                    style: {
                                                                                        cursor: "pointer"
                                                                                    },
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setTrait(undefined);
                                                                                    },
                                                                                    icon: (0, $9O4lY$faClose),
                                                                                    width: 16,
                                                                                    height: 16
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }) : /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                                            css: {
                                                                                color: "$neutralText"
                                                                            },
                                                                            children: "All Attributes"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                                            icon: (0, $9O4lY$faChevronDown),
                                                                            width: 16,
                                                                            height: 16
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $920fdcfe068d5f72$export$2e2bcd8739ae039).Content, {
                                                        sideOffset: -50,
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c4e4a87d225bbda6$export$2e2bcd8739ae039), {
                                                            attributes: attributes,
                                                            tokenCount: tokenCount,
                                                            setTrait: setTrait,
                                                            setOpen: setAttributeSelectorOpen
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        as: (0, $6bc6fb211dac7330$export$2e2bcd8739ae039),
                                        css: {
                                            mt: "$4",
                                            mb: "$2"
                                        },
                                        style: "tiny",
                                        children: "Expiration Date"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            gap: "$2",
                                            mb: "$4"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039), {
                                                css: {
                                                    flex: 1,
                                                    "@bp1": {
                                                        width: 160,
                                                        flexDirection: "row"
                                                    }
                                                },
                                                value: (expirationOption === null || expirationOption === void 0 ? void 0 : expirationOption.text) || "",
                                                onValueChange: (value)=>{
                                                    const option = expirationOptions.find((option)=>option.value == value);
                                                    if (option) setExpirationOption(option);
                                                },
                                                children: expirationOptions.map((option)=>/*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).Item, {
                                                        value: option.value,
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6e5ad66adf7c0a36$export$2e2bcd8739ae039).ItemText, {
                                                            children: option.text
                                                        })
                                                    }, option.text))
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $ed80e242af57734b$export$2e2bcd8739ae039), {
                                                ref: datetimeElement,
                                                icon: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                                    icon: (0, $9O4lY$faCalendar),
                                                    width: 14,
                                                    height: 16
                                                }),
                                                value: expirationDate,
                                                options: {
                                                    minDate: $1c5244c9b46bef80$var$minimumDate,
                                                    enableTime: true,
                                                    minuteIncrement: 1
                                                },
                                                defaultValue: expirationDate,
                                                onChange: (e)=>{
                                                    if (Array.isArray(e)) {
                                                        const customOption = expirationOptions.find((option)=>option.value === "custom");
                                                        if (customOption) setExpirationOption({
                                                            ...customOption,
                                                            relativeTime: e[0] / 1000
                                                        });
                                                    }
                                                },
                                                containerCss: {
                                                    width: 46,
                                                    "@bp1": {
                                                        flex: 1,
                                                        width: "100%"
                                                    }
                                                },
                                                css: {
                                                    padding: 0,
                                                    "@bp1": {
                                                        padding: "12px 16px 12px 48px"
                                                    }
                                                }
                                            })
                                        ]
                                    }),
                                    bidAmount === "" && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                        disabled: true,
                                        css: {
                                            width: "100%",
                                            mt: "auto"
                                        },
                                        children: "Enter a Price"
                                    }),
                                    bidAmount !== "" && hasEnoughWrappedCurrency && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                        onClick: placeBid,
                                        css: {
                                            width: "100%",
                                            mt: "auto"
                                        },
                                        children: token && token.token ? "Make an Offer" : trait ? "Make an Attribute Offer" : "Make a Collection Offer"
                                    }),
                                    bidAmount !== "" && !hasEnoughWrappedCurrency && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            width: "100%",
                                            mt: "auto"
                                        },
                                        children: [
                                            !hasEnoughNativeCurrency && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                css: {
                                                    gap: "$2",
                                                    mt: 10
                                                },
                                                justify: "center",
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                        style: "body2",
                                                        color: "error",
                                                        children: [
                                                            (balance === null || balance === void 0 ? void 0 : balance.symbol) || "ETH",
                                                            " Balance"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                                        amount: balance === null || balance === void 0 ? void 0 : balance.value
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                css: {
                                                    gap: "$2",
                                                    mt: 10,
                                                    overflow: "hidden",
                                                    flexDirection: "column-reverse",
                                                    "@bp1": {
                                                        flexDirection: "row"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                        css: {
                                                            flex: "1 0 auto"
                                                        },
                                                        color: "secondary",
                                                        onClick: ()=>{
                                                            window.open(uniswapConvertLink, "_blank");
                                                        },
                                                        children: "Convert Manually"
                                                    }),
                                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                        css: {
                                                            flex: 1,
                                                            maxHeight: 44
                                                        },
                                                        disabled: !hasEnoughNativeCurrency,
                                                        onClick: placeBid,
                                                        children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                            style: "h6",
                                                            color: "button",
                                                            ellipsify: true,
                                                            children: [
                                                                "Convert ",
                                                                amountToWrap,
                                                                " ",
                                                                (balance === null || balance === void 0 ? void 0 : balance.symbol) || "ETH",
                                                                " ",
                                                                "for me"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    bidStep === (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Offering && collection && /*#__PURE__*/ (0, $9O4lY$jsxs)($1c5244c9b46bef80$var$ContentContainer, {
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $829ddca8f3abc833$export$2e2bcd8739ae039), {
                                token: token ? token : undefined,
                                collection: collection,
                                bidData: bidData
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)($1c5244c9b46bef80$var$MainContainer, {
                                css: {
                                    p: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $0acedc8716225b2b$export$2e2bcd8739ae039), {
                                        value: (stepData === null || stepData === void 0 ? void 0 : stepData.stepProgress) || 0,
                                        max: (stepData === null || stepData === void 0 ? void 0 : stepData.totalSteps) || 0
                                    }),
                                    transactionError && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c9208bc249041d08$export$2e2bcd8739ae039), {
                                        css: {
                                            mt: 24
                                        }
                                    }),
                                    stepData && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                css: {
                                                    textAlign: "center",
                                                    mt: 48,
                                                    mb: 28
                                                },
                                                style: "subtitle1",
                                                children: stepTitle
                                            }),
                                            stepData.currentStep.kind === "signature" && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5da6a7316c0ab920$export$2e2bcd8739ae039), {
                                                justify: "center",
                                                fromImg: itemImage || "",
                                                toImg: (localMarketplace === null || localMarketplace === void 0 ? void 0 : localMarketplace.icon) || ""
                                            }),
                                            stepData.currentStep.kind !== "signature" && // <WethApproval style={{ margin: '0 auto' }} />
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                align: "center",
                                                justify: "center",
                                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                                    css: {
                                                        background: "$neutalLine",
                                                        borderRadius: 8
                                                    },
                                                    children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4afdd532fe42c117$export$2e2bcd8739ae039), {
                                                        css: {
                                                            height: 56,
                                                            width: 56
                                                        },
                                                        address: wrappedContractAddress
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                css: {
                                                    textAlign: "center",
                                                    mt: 24,
                                                    maxWidth: 395,
                                                    mx: "auto",
                                                    mb: "$4"
                                                },
                                                style: "body3",
                                                color: "subtle",
                                                children: stepData === null || stepData === void 0 ? void 0 : stepData.currentStep.description
                                            })
                                        ]
                                    }),
                                    !stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            height: "100%"
                                        },
                                        justify: "center",
                                        align: "center",
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {})
                                    }),
                                    !transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                        css: {
                                            width: "100%",
                                            mt: "auto"
                                        },
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                            "Waiting for Approval"
                                        ]
                                    }),
                                    transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mt: "auto",
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                color: "secondary",
                                                css: {
                                                    flex: 1
                                                },
                                                onClick: ()=>setBidStep((0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).SetPrice),
                                                children: "Edit Bid"
                                            }),
                                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                                css: {
                                                    flex: 1
                                                },
                                                onClick: placeBid,
                                                children: "Retry"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    bidStep === (0, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7).Complete && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        align: "center",
                        css: {
                            p: "$4"
                        },
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    color: "$successAccent",
                                    mt: 48
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                    icon: (0, $9O4lY$faCheckCircle),
                                    style: {
                                        width: "32px",
                                        height: "32px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "h5",
                                css: {
                                    textAlign: "center",
                                    mt: 36,
                                    mb: 80
                                },
                                children: "Offer Submitted!"
                            }),
                            onViewOffers ? /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                css: {
                                    width: "100%"
                                },
                                onClick: ()=>{
                                    onViewOffers();
                                    if (onClose) onClose();
                                },
                                children: "View Offers"
                            }) : /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                css: {
                                    width: "100%"
                                },
                                onClick: ()=>{
                                    setOpen(false);
                                    if (onClose) onClose();
                                },
                                children: "Close"
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$1c5244c9b46bef80$export$556cfc4a654987bd.Custom = (0, $f3b5da59e2d3c343$export$89d91658eb2b6698);













let $00c173e9832cf2f5$export$f4dd52ca63b5fdde;
(function(AcceptBidStep) {
    AcceptBidStep[AcceptBidStep["Checkout"] = 0] = "Checkout";
    AcceptBidStep[AcceptBidStep["ApproveMarketplace"] = 1] = "ApproveMarketplace";
    AcceptBidStep[AcceptBidStep["Confirming"] = 2] = "Confirming";
    AcceptBidStep[AcceptBidStep["Finalizing"] = 3] = "Finalizing";
    AcceptBidStep[AcceptBidStep["Complete"] = 4] = "Complete";
    AcceptBidStep[AcceptBidStep["Unavailable"] = 5] = "Unavailable";
})($00c173e9832cf2f5$export$f4dd52ca63b5fdde || ($00c173e9832cf2f5$export$f4dd52ca63b5fdde = {}));
const $00c173e9832cf2f5$export$2d08bd3f57775802 = ({ open: open , tokenId: tokenId , bidId: bidId , collectionId: collectionId , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    var _activeChain_blockExplorers, _activeChain_blockExplorers_etherscan, _collection_royalties;
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [totalPrice, setTotalPrice] = (0, $9O4lY$useState)(0);
    const [acceptBidStep, setAcceptBidStep] = (0, $9O4lY$useState)($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Checkout);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [txHash, setTxHash] = (0, $9O4lY$useState)(null);
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    const etherscanBaseUrl = (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : (_activeChain_blockExplorers_etherscan = _activeChain_blockExplorers.etherscan) === null || _activeChain_blockExplorers_etherscan === void 0 ? void 0 : _activeChain_blockExplorers_etherscan.url) || "https://etherscan.io";
    const contract = collectionId ? collectionId === null || collectionId === void 0 ? void 0 : collectionId.split(":")[0] : undefined;
    const { data: tokens , mutate: mutateTokens  } = (0, $a22273d84f519011$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: collections , mutate: mutateCollection  } = (0, $02e139e000faba42$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const { data: bids , isValidating: isFetchingBidData , mutate: mutateBids  } = (0, $b172d3ea1d6f916c$export$2e2bcd8739ae039)({
        ids: bidId,
        status: "active",
        includeCriteriaMetadata: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    }, open && bidId ? true : false);
    const bid = bids && bids[0] ? bids[0] : undefined;
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    let feeBreakdown;
    let source;
    let expiration;
    let bidAmount = 0;
    let bidAmountCurrency;
    let ethBidAmount;
    if (acceptBidStep !== $00c173e9832cf2f5$export$f4dd52ca63b5fdde.Unavailable) {
        var _token_market, _token_market_topBid, _token_market1, _token_market_topBid1, _bid_price, _bid_price_amount, _token_market2, _token_market_topBid2, _token_market_topBid_price, _token_market_topBid_price_amount, _bid_price1, _token_market3, _token_market_topBid3, _token_market_topBid_price1, _bid_price2, _bid_price_amount1, _token_market4, _token_market_floorAsk, _token_market_floorAsk_price, _token_market_floorAsk_price_amount, _token_market5, _token_market_topBid4;
        source = bidId ? bid === null || bid === void 0 ? void 0 : bid.source : token === null || token === void 0 ? void 0 : (_token_market = token.market) === null || _token_market === void 0 ? void 0 : (_token_market_topBid = _token_market.topBid) === null || _token_market_topBid === void 0 ? void 0 : _token_market_topBid.source;
        expiration = bidId ? bid === null || bid === void 0 ? void 0 : bid.expiration : token === null || token === void 0 ? void 0 : (_token_market1 = token.market) === null || _token_market1 === void 0 ? void 0 : (_token_market_topBid1 = _token_market1.topBid) === null || _token_market_topBid1 === void 0 ? void 0 : _token_market_topBid1.validUntil;
        bidAmount = bidId ? (bid === null || bid === void 0 ? void 0 : (_bid_price = bid.price) === null || _bid_price === void 0 ? void 0 : (_bid_price_amount = _bid_price.amount) === null || _bid_price_amount === void 0 ? void 0 : _bid_price_amount.decimal) || 0 : (token === null || token === void 0 ? void 0 : (_token_market2 = token.market) === null || _token_market2 === void 0 ? void 0 : (_token_market_topBid2 = _token_market2.topBid) === null || _token_market_topBid2 === void 0 ? void 0 : (_token_market_topBid_price = _token_market_topBid2.price) === null || _token_market_topBid_price === void 0 ? void 0 : (_token_market_topBid_price_amount = _token_market_topBid_price.amount) === null || _token_market_topBid_price_amount === void 0 ? void 0 : _token_market_topBid_price_amount.decimal) || 0;
        bidAmountCurrency = bidId ? bid === null || bid === void 0 ? void 0 : (_bid_price1 = bid.price) === null || _bid_price1 === void 0 ? void 0 : _bid_price1.currency : token === null || token === void 0 ? void 0 : (_token_market3 = token.market) === null || _token_market3 === void 0 ? void 0 : (_token_market_topBid3 = _token_market3.topBid) === null || _token_market_topBid3 === void 0 ? void 0 : (_token_market_topBid_price1 = _token_market_topBid3.price) === null || _token_market_topBid_price1 === void 0 ? void 0 : _token_market_topBid_price1.currency;
        ethBidAmount = bidId ? bid === null || bid === void 0 ? void 0 : (_bid_price2 = bid.price) === null || _bid_price2 === void 0 ? void 0 : (_bid_price_amount1 = _bid_price2.amount) === null || _bid_price_amount1 === void 0 ? void 0 : _bid_price_amount1.native : token === null || token === void 0 ? void 0 : (_token_market4 = token.market) === null || _token_market4 === void 0 ? void 0 : (_token_market_floorAsk = _token_market4.floorAsk) === null || _token_market_floorAsk === void 0 ? void 0 : (_token_market_floorAsk_price = _token_market_floorAsk.price) === null || _token_market_floorAsk_price === void 0 ? void 0 : (_token_market_floorAsk_price_amount = _token_market_floorAsk_price.amount) === null || _token_market_floorAsk_price_amount === void 0 ? void 0 : _token_market_floorAsk_price_amount.native;
        feeBreakdown = bidId ? bid === null || bid === void 0 ? void 0 : bid.feeBreakdown : token === null || token === void 0 ? void 0 : (_token_market5 = token.market) === null || _token_market5 === void 0 ? void 0 : (_token_market_topBid4 = _token_market5.topBid) === null || _token_market_topBid4 === void 0 ? void 0 : _token_market_topBid4.feeBreakdown;
    }
    const usdPrice = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open && bidAmountCurrency ? "USD" : undefined, bidAmountCurrency === null || bidAmountCurrency === void 0 ? void 0 : bidAmountCurrency.symbol);
    const totalUsd = totalPrice * (usdPrice || 0);
    const fees = {
        creatorRoyalties: (collection === null || collection === void 0 ? void 0 : (_collection_royalties = collection.royalties) === null || _collection_royalties === void 0 ? void 0 : _collection_royalties.bps) || 0,
        feeBreakdown: feeBreakdown
    };
    const acceptBid = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!tokenId || !collectionId) {
            const error = new Error("Missing tokenId or collectionId");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            setTransactionError(null);
            throw error;
        }
        const contract = collectionId.split(":")[0];
        let options = {};
        if (bidId) options = {
            ...options,
            orderId: bidId
        };
        setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Confirming);
        client.actions.acceptOffer({
            expectedPrice: totalPrice,
            signer: signer,
            token: {
                tokenId: tokenId,
                contract: contract
            },
            onProgress: (steps)=>{
                if (!steps) return;
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                let currentStepIndex = 0;
                executableSteps.find((step, index)=>{
                    var _step_items;
                    currentStepIndex = index;
                    currentStepItem = (_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) {
                    setStepData({
                        totalSteps: stepCount,
                        currentStep: currentStep,
                        currentStepItem: currentStepItem
                    });
                    if (currentStepIndex !== executableSteps.length - 1) setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.ApproveMarketplace);
                    else if (currentStepItem.txHash) {
                        setTxHash(currentStepItem.txHash);
                        setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Finalizing);
                    } else setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Confirming);
                } else if (executableSteps.every((step)=>{
                    var _step_items;
                    return !step.items || step.items.length == 0 || ((_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.every((item)=>item.status === "complete"));
                })) {
                    var _currentStep_items;
                    setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Complete);
                    const lastStepItem = currentStep.items ? currentStep.items[((_currentStep_items = currentStep.items) === null || _currentStep_items === void 0 ? void 0 : _currentStep_items.length) - 1] : undefined;
                    if (lastStepItem) setStepData({
                        totalSteps: stepCount,
                        currentStep: currentStep,
                        currentStepItem: lastStepItem
                    });
                }
            },
            options: options
        }).catch((e)=>{
            const error = e;
            const errorType = error === null || error === void 0 ? void 0 : error.type;
            let message = "Oops, something went wrong. Please try again.";
            if (errorType && errorType === "price mismatch") message = error.message;
            const transactionError = new Error(message, {
                cause: error
            });
            setTransactionError(transactionError);
            setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Checkout);
            setStepData(null);
            if (bidId) mutateBids();
            mutateCollection();
            mutateTokens();
        });
    }, [
        tokenId,
        collectionId,
        client,
        signer,
        totalPrice,
        mutateTokens,
        mutateCollection,
        mutateBids
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (bidId) {
            var _bid_price, _bid_price_netAmount, _bid_criteria, _bid_criteria_data, _bid_criteria_data_collection;
            let price = 0;
            if (bid && bid.status === "active" && ((_bid_price = bid.price) === null || _bid_price === void 0 ? void 0 : (_bid_price_netAmount = _bid_price.netAmount) === null || _bid_price_netAmount === void 0 ? void 0 : _bid_price_netAmount.native) && ((_bid_criteria = bid.criteria) === null || _bid_criteria === void 0 ? void 0 : (_bid_criteria_data = _bid_criteria.data) === null || _bid_criteria_data === void 0 ? void 0 : (_bid_criteria_data_collection = _bid_criteria_data.collection) === null || _bid_criteria_data_collection === void 0 ? void 0 : _bid_criteria_data_collection.id) === collectionId) {
                var _bid_criteria1, _bid_price1, _bid_price_netAmount1;
                if (((_bid_criteria1 = bid.criteria) === null || _bid_criteria1 === void 0 ? void 0 : _bid_criteria1.kind) === "token") {
                    var _bid_price2, _bid_price_netAmount2;
                    const tokenSetPieces = bid.tokenSetId.split(":");
                    const bidTokenId = tokenSetPieces[tokenSetPieces.length - 1];
                    if (tokenId === bidTokenId) price = (_bid_price2 = bid.price) === null || _bid_price2 === void 0 ? void 0 : (_bid_price_netAmount2 = _bid_price2.netAmount) === null || _bid_price_netAmount2 === void 0 ? void 0 : _bid_price_netAmount2.native;
                } else price = (_bid_price1 = bid.price) === null || _bid_price1 === void 0 ? void 0 : (_bid_price_netAmount1 = _bid_price1.netAmount) === null || _bid_price_netAmount1 === void 0 ? void 0 : _bid_price_netAmount1.native;
            }
            if (!isFetchingBidData) {
                setTotalPrice(price);
                setAcceptBidStep(price > 0 ? $00c173e9832cf2f5$export$f4dd52ca63b5fdde.Checkout : $00c173e9832cf2f5$export$f4dd52ca63b5fdde.Unavailable);
            }
        } else if (token) {
            var _token_market, _token_market_topBid, _token_market_topBid_price, _token_market_topBid_price_netAmount;
            let topBid = (_token_market = token.market) === null || _token_market === void 0 ? void 0 : (_token_market_topBid = _token_market.topBid) === null || _token_market_topBid === void 0 ? void 0 : (_token_market_topBid_price = _token_market_topBid.price) === null || _token_market_topBid_price === void 0 ? void 0 : (_token_market_topBid_price_netAmount = _token_market_topBid_price.netAmount) === null || _token_market_topBid_price_netAmount === void 0 ? void 0 : _token_market_topBid_price_netAmount.native;
            if (topBid) {
                setTotalPrice(topBid);
                setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Checkout);
            } else {
                setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Unavailable);
                setTotalPrice(0);
            }
        }
    }, [
        token,
        client,
        bid,
        isFetchingBidData
    ]);
    const { address: address  } = (0, $9O4lY$useAccount)();
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setAcceptBidStep($00c173e9832cf2f5$export$f4dd52ca63b5fdde.Checkout);
            setTxHash(null);
            setStepData(null);
            setTransactionError(null);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            loading: bidId ? isFetchingBidData || !token : !token,
            token: token,
            collection: collection,
            source: source,
            expiration: expiration,
            totalPrice: totalPrice,
            bidAmount: bidAmount,
            bidAmountCurrency: bidAmountCurrency,
            ethBidAmount: ethBidAmount,
            fees: fees,
            acceptBidStep: acceptBidStep,
            transactionError: transactionError,
            txHash: txHash,
            totalUsd: totalUsd,
            usdPrice: usdPrice,
            address: address,
            etherscanBaseUrl: etherscanBaseUrl,
            acceptBid: acceptBid,
            setAcceptBidStep: setAcceptBidStep,
            stepData: stepData
        })
    });
};






const $0b5d8b156530df6e$export$b25a304ec7d746bb = ({ acceptBidStep: acceptBidStep , etherscanBaseUrl: etherscanBaseUrl , marketplace: marketplace , tokenImage: tokenImage , stepData: stepData  })=>{
    var _activeChain_blockExplorers;
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            alignItems: "center",
            gap: "$4",
            mt: "$5",
            mb: "$3"
        },
        children: [
            acceptBidStep == (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).ApproveMarketplace && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "h6",
                        css: {
                            mb: 28
                        },
                        children: stepData && stepData.totalSteps > 2 ? stepData.currentStep.action : `Approve ${marketplace === null || marketplace === void 0 ? void 0 : marketplace.name} to access item in your wallet`
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        css: {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 22,
                            mb: 24
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5da6a7316c0ab920$export$2e2bcd8739ae039), {
                            fromImg: tokenImage || "",
                            toImg: marketplace === null || marketplace === void 0 ? void 0 : marketplace.image
                        })
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "subtitle2",
                        css: {
                            mx: 56,
                            textAlign: "center"
                        },
                        children: stepData && stepData.totalSteps > 2 ? stepData.currentStep.description : `We’ll ask your approval for the ${marketplace === null || marketplace === void 0 ? void 0 : marketplace.name} exchange to
            access your token. This is a one-time only operation per collection.`
                    })
                ]
            }),
            acceptBidStep == (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Confirming && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "h6",
                        children: "Confirm transaction in your wallet"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            color: "$neutralText"
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                            icon: (0, $9O4lY$faWallet),
                            style: {
                                width: "32px",
                                height: "32px",
                                margin: "12px 0px"
                            }
                        })
                    })
                ]
            }),
            acceptBidStep == (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Finalizing && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                        style: "h6",
                        children: "Finalizing on blockchain"
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                        css: {
                            color: "$neutralText"
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                            icon: (0, $9O4lY$faCube),
                            style: {
                                width: "32px",
                                height: "32px",
                                margin: "12px 0px"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                        color: "primary",
                        weight: "medium",
                        css: {
                            fontSize: 12
                        },
                        href: etherscanBaseUrl,
                        target: "_blank",
                        children: [
                            "View on ",
                            (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                        ]
                    })
                ]
            })
        ]
    });
};











const $54fc1b945c5d2e2f$var$Fees = ({ fees: { feeBreakdown: feeBreakdown  } , marketplace: marketplace  })=>{
    // Return null when there are no fees
    if (!(feeBreakdown && (feeBreakdown === null || feeBreakdown === void 0 ? void 0 : feeBreakdown.length) > 0)) return null;
    const parsedFeeBreakdown = feeBreakdown === null || feeBreakdown === void 0 ? void 0 : feeBreakdown.map(({ bps: bps , kind: kind  })=>{
        const percentage = bps ? bps * 0.01 : 0;
        let name = "";
        let tooltipMessage = null;
        switch(kind){
            case "royalty":
                name = "Creator Royalties";
                tooltipMessage = "A fee on every order that goes to the collection creator.";
                break;
            case "marketplace":
                name = `${marketplace} Fee`;
                tooltipMessage = "A fee included in the order from the marketplace in which it was created.";
                break;
            default:
                name = "Misc. Fees";
                break;
        }
        return {
            name: name,
            percentage: percentage,
            tooltipMessage: tooltipMessage
        };
    });
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        css: {
            px: "$4",
            mt: "$4",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    mb: "$2"
                },
                children: "Fees"
            }),
            parsedFeeBreakdown === null || parsedFeeBreakdown === void 0 ? void 0 : parsedFeeBreakdown.map(({ name: name , percentage: percentage , tooltipMessage: tooltipMessage  }, i)=>/*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                    css: {
                        justifyContent: "space-between",
                        mb: "$2"
                    },
                    children: [
                        /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                            css: {
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                    style: "subtitle2",
                                    color: "subtle",
                                    children: name
                                }),
                                tooltipMessage && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $c706883c7caab76c$export$2e2bcd8739ae039), {
                                    side: "right",
                                    width: 200,
                                    content: tooltipMessage
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                            style: "subtitle2",
                            children: [
                                percentage,
                                "%"
                            ]
                        })
                    ]
                }, i))
        ]
    });
};
var $54fc1b945c5d2e2f$export$2e2bcd8739ae039 = $54fc1b945c5d2e2f$var$Fees;




function $3d45aaecc6d03b3c$var$titleForStep(step) {
    switch(step){
        case (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Unavailable:
            return "Selected item is no longer available";
        default:
            return "Accept Offer";
    }
}
function $3d45aaecc6d03b3c$export$91ee3fa7c9f4e6c2({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , bidId: bidId , normalizeRoyalties: normalizeRoyalties , onBidAccepted: onBidAccepted , onClose: onClose , onBidAcceptError: onBidAcceptError , onCurrentStepUpdate: onCurrentStepUpdate  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $00c173e9832cf2f5$export$2d08bd3f57775802), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        bidId: bidId,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ loading: loading , token: token , collection: collection , source: source , expiration: expiration , totalPrice: totalPrice , bidAmount: bidAmount , bidAmountCurrency: bidAmountCurrency , ethBidAmount: ethBidAmount , fees: fees , acceptBidStep: acceptBidStep , transactionError: transactionError , txHash: txHash , totalUsd: totalUsd , usdPrice: usdPrice , address: address , etherscanBaseUrl: etherscanBaseUrl , stepData: stepData , acceptBid: acceptBid  })=>{
            var _token_market, _token_market_floorAsk, _token_market_floorAsk_price, _token_market_floorAsk_price_amount, _token_token, _token_token1, _token_token_collection, _token_token2, _token_token3, _token_token4, _token_token5, _token_token6, _token_token7, _token_token_collection1, _activeChain_blockExplorers;
            const title = $3d45aaecc6d03b3c$var$titleForStep(acceptBidStep);
            (0, $9O4lY$useEffect)(()=>{
                if (acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Complete && onBidAccepted) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        maker: address
                    };
                    if (txHash) data.txHash = txHash;
                    onBidAccepted(data);
                }
            }, [
                acceptBidStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onBidAcceptError) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        maker: address
                    };
                    onBidAcceptError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (stepData && onCurrentStepUpdate) onCurrentStepUpdate(stepData);
            }, [
                stepData
            ]);
            const floorPrice = token === null || token === void 0 ? void 0 : (_token_market = token.market) === null || _token_market === void 0 ? void 0 : (_token_market_floorAsk = _token_market.floorAsk) === null || _token_market_floorAsk === void 0 ? void 0 : (_token_market_floorAsk_price = _token_market_floorAsk.price) === null || _token_market_floorAsk_price === void 0 ? void 0 : (_token_market_floorAsk_price_amount = _token_market_floorAsk_price.amount) === null || _token_market_floorAsk_price_amount === void 0 ? void 0 : _token_market_floorAsk_price_amount.native;
            const difference = floorPrice && ethBidAmount ? (floorPrice - ethBidAmount) / floorPrice * 100 : undefined;
            const warning = difference && difference > 50 ? `${difference}% lower than floor price` : undefined;
            const marketplace = {
                name: (source === null || source === void 0 ? void 0 : source.name) || "Marketplace",
                image: (source === null || source === void 0 ? void 0 : source.icon) || ""
            };
            const tokenImage = (token === null || token === void 0 ? void 0 : (_token_token = token.token) === null || _token_token === void 0 ? void 0 : _token_token.image) || (token === null || token === void 0 ? void 0 : (_token_token1 = token.token) === null || _token_token1 === void 0 ? void 0 : (_token_token_collection = _token_token1.collection) === null || _token_token_collection === void 0 ? void 0 : _token_token_collection.image);
            const expires = (0, $0e59905e77eb8c48$export$2e2bcd8739ae039)(expiration);
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                trigger: trigger,
                title: title,
                open: open,
                onOpenChange: (open)=>setOpen(open),
                loading: loading,
                children: [
                    acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Unavailable && !loading && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                usdConversion: usdPrice || 0,
                                isUnavailable: true,
                                price: bidAmount,
                                warning: warning,
                                currency: bidAmountCurrency,
                                expires: expires,
                                isOffer: true,
                                sourceImg: (source === null || source === void 0 ? void 0 : source.icon) ? source.icon : undefined
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: ()=>setOpen(false),
                                css: {
                                    m: "$4"
                                },
                                children: "Close"
                            })
                        ]
                    }),
                    acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Checkout && !loading && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    color: "$errorAccent",
                                    p: "$4",
                                    gap: "$2",
                                    background: "$wellBackground"
                                },
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                        icon: (0, $9O4lY$faCircleExclamation),
                                        width: 16,
                                        height: 16
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: "errorLight",
                                        children: transactionError.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                usdConversion: usdPrice || 0,
                                price: bidAmount,
                                warning: warning,
                                currency: bidAmountCurrency,
                                expires: expires,
                                isOffer: true,
                                sourceImg: (source === null || source === void 0 ? void 0 : source.icon) ? source.icon : undefined
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $54fc1b945c5d2e2f$export$2e2bcd8739ae039), {
                                fees: fees,
                                marketplace: marketplace.name
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                align: "center",
                                justify: "between",
                                css: {
                                    px: "$4",
                                    mt: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h6",
                                        children: "You Get"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $306449c0c59737d5$export$2e2bcd8739ae039), {
                                        textStyle: "h6",
                                        amount: totalPrice,
                                        address: bidAmountCurrency === null || bidAmountCurrency === void 0 ? void 0 : bidAmountCurrency.contract,
                                        logoWidth: 16
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                justify: "end",
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $5ea0677ecfe8baaa$export$2e2bcd8739ae039), {
                                    amount: totalUsd,
                                    color: "subtle",
                                    css: {
                                        mr: "$4"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                style: {
                                    flex: 1,
                                    marginBottom: 16,
                                    marginTop: 16,
                                    marginRight: 16,
                                    marginLeft: 16
                                },
                                color: "primary",
                                onClick: acceptBid,
                                children: "Accept"
                            })
                        ]
                    }),
                    (acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Confirming || acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Finalizing || acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).ApproveMarketplace) && token && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $767054f835c04ed0$export$2e2bcd8739ae039), {
                                tokenDetails: token,
                                collection: collection,
                                usdConversion: usdPrice || 0,
                                price: bidAmount,
                                warning: warning,
                                currency: bidAmountCurrency,
                                expires: expires,
                                isOffer: true,
                                sourceImg: (source === null || source === void 0 ? void 0 : source.icon) ? source.icon : undefined
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $0b5d8b156530df6e$export$b25a304ec7d746bb), {
                                acceptBidStep: acceptBidStep,
                                etherscanBaseUrl: `${etherscanBaseUrl}/tx/${txHash}`,
                                marketplace: marketplace,
                                tokenImage: tokenImage,
                                stepData: stepData
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                disabled: true,
                                css: {
                                    m: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                    acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Confirming ? "Waiting for approval..." : "Waiting for transaction to be validated"
                                ]
                            })
                        ]
                    }),
                    acceptBidStep === (0, $00c173e9832cf2f5$export$f4dd52ca63b5fdde).Complete && token && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    py: "$5",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                        css: {
                                            color: "$successAccent",
                                            mb: 24
                                        },
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                            icon: (0, $9O4lY$faCheckCircle),
                                            fontSize: 32
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h5",
                                        css: {
                                            mb: 8
                                        },
                                        children: "Bid accepted!"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        css: {
                                            mb: 24,
                                            maxWidth: "100%"
                                        },
                                        align: "center",
                                        justify: "center",
                                        children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                            style: "subtitle2",
                                            css: {
                                                maxWidth: "100%"
                                            },
                                            ellipsify: true,
                                            children: [
                                                "You’ve sold",
                                                " ",
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                                    color: "primary",
                                                    weight: "medium",
                                                    css: {
                                                        fontSize: 12
                                                    },
                                                    href: `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/sources/${client === null || client === void 0 ? void 0 : client.source}/tokens/${(_token_token2 = token.token) === null || _token_token2 === void 0 ? void 0 : _token_token2.contract}:${token === null || token === void 0 ? void 0 : (_token_token3 = token.token) === null || _token_token3 === void 0 ? void 0 : _token_token3.tokenId}/link/v2`,
                                                    target: "_blank",
                                                    children: (token === null || token === void 0 ? void 0 : (_token_token4 = token.token) === null || _token_token4 === void 0 ? void 0 : _token_token4.name) ? token === null || token === void 0 ? void 0 : (_token_token5 = token.token) === null || _token_token5 === void 0 ? void 0 : _token_token5.name : `#${token === null || token === void 0 ? void 0 : (_token_token6 = token.token) === null || _token_token6 === void 0 ? void 0 : _token_token6.tokenId}`
                                                }),
                                                " ",
                                                "from the ",
                                                token === null || token === void 0 ? void 0 : (_token_token7 = token.token) === null || _token_token7 === void 0 ? void 0 : (_token_token_collection1 = _token_token7.collection) === null || _token_token_collection1 === void 0 ? void 0 : _token_token_collection1.name,
                                                " collection."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                        color: "primary",
                                        weight: "medium",
                                        css: {
                                            fontSize: 12
                                        },
                                        href: `${etherscanBaseUrl}/tx/${txHash}`,
                                        target: "_blank",
                                        children: [
                                            "View on",
                                            " ",
                                            (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    flexDirection: "column",
                                    gap: "$3",
                                    "@bp1": {
                                        flexDirection: "row"
                                    }
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                    css: {
                                        width: "100%"
                                    },
                                    onClick: ()=>{
                                        setOpen(false);
                                        if (onClose) onClose();
                                    },
                                    children: "Done"
                                })
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$3d45aaecc6d03b3c$export$91ee3fa7c9f4e6c2.Custom = (0, $00c173e9832cf2f5$export$2d08bd3f57775802);











let $4bbfc5d47221d456$export$c5c5c857eaef0fde;
(function(CancelStep) {
    CancelStep[CancelStep["Cancel"] = 0] = "Cancel";
    CancelStep[CancelStep["Approving"] = 1] = "Approving";
    CancelStep[CancelStep["Complete"] = 2] = "Complete";
})($4bbfc5d47221d456$export$c5c5c857eaef0fde || ($4bbfc5d47221d456$export$c5c5c857eaef0fde = {}));
const $4bbfc5d47221d456$export$d2f670ba420b64c2 = ({ open: open , bidId: bidId , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    var _activeChain_blockExplorers, _bid_price, _bid_price1, _bid_price_amount, _bid_criteria, _bid_tokenSetId;
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const [cancelStep, setCancelStep] = (0, $9O4lY$useState)($4bbfc5d47221d456$export$c5c5c857eaef0fde.Cancel);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [steps, setSteps] = (0, $9O4lY$useState)(null);
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    const blockExplorerBaseUrl = (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.url) || "https://etherscan.io";
    const { data: bids , isFetchingPage: isFetchingPage  } = (0, $b172d3ea1d6f916c$export$2e2bcd8739ae039)({
        ids: bidId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true
    }, {
        revalidateFirstPage: true
    }, open && bidId ? true : false);
    const bid = bids && bids[0] ? bids[0] : undefined;
    const currency = bid === null || bid === void 0 ? void 0 : (_bid_price = bid.price) === null || _bid_price === void 0 ? void 0 : _bid_price.currency;
    const coinConversion = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open && bid ? "USD" : undefined, currency === null || currency === void 0 ? void 0 : currency.symbol);
    const usdPrice = coinConversion !== undefined && coinConversion !== null ? Number(coinConversion) : 0;
    const totalUsd = usdPrice * ((bid === null || bid === void 0 ? void 0 : (_bid_price1 = bid.price) === null || _bid_price1 === void 0 ? void 0 : (_bid_price_amount = _bid_price1.amount) === null || _bid_price_amount === void 0 ? void 0 : _bid_price_amount.decimal) || 0);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const cancelOrder = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!bidId) {
            const error = new Error("Missing bid id to cancel");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setCancelStep($4bbfc5d47221d456$export$c5c5c857eaef0fde.Approving);
        client.actions.cancelOrder({
            id: bidId,
            signer: signer,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    var _step_items;
                    currentStepItem = (_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>{
                    var _step_items;
                    return !step.items || step.items.length == 0 || ((_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.every((item)=>item.status === "complete"));
                })) setCancelStep($4bbfc5d47221d456$export$c5c5c857eaef0fde.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const message = "Oops, something went wrong. Please try again.";
            const transactionError = new Error(message, {
                cause: error
            });
            setTransactionError(transactionError);
            setCancelStep($4bbfc5d47221d456$export$c5c5c857eaef0fde.Cancel);
            setStepData(null);
            setSteps(null);
        });
    }, [
        bidId,
        client,
        signer
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setCancelStep($4bbfc5d47221d456$export$c5c5c857eaef0fde.Cancel);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
        }
    }, [
        open
    ]);
    let tokenId;
    if ((bid === null || bid === void 0 ? void 0 : (_bid_criteria = bid.criteria) === null || _bid_criteria === void 0 ? void 0 : _bid_criteria.kind) === "token") tokenId = bid === null || bid === void 0 ? void 0 : (_bid_tokenSetId = bid.tokenSetId) === null || _bid_tokenSetId === void 0 ? void 0 : _bid_tokenSetId.split(":")[2];
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            loading: isFetchingPage !== undefined ? isFetchingPage : true,
            bid: bid,
            tokenId: tokenId,
            cancelStep: cancelStep,
            transactionError: transactionError,
            usdPrice: usdPrice,
            totalUsd: totalUsd,
            blockExplorerBaseUrl: blockExplorerBaseUrl,
            steps: steps,
            stepData: stepData,
            setCancelStep: setCancelStep,
            cancelOrder: cancelOrder
        })
    });
};








function $b76ef49ac730b418$export$89d1e00b7fa831db({ openState: openState , bidId: bidId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , onClose: onClose , onCancelComplete: onCancelComplete , onCancelError: onCancelError  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $4bbfc5d47221d456$export$d2f670ba420b64c2), {
        bidId: bidId,
        open: open,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ loading: loading , bid: bid , tokenId: tokenId , cancelStep: cancelStep , transactionError: transactionError , stepData: stepData , totalUsd: totalUsd , blockExplorerBaseUrl: blockExplorerBaseUrl , cancelOrder: cancelOrder  })=>{
            var _bid_criteria, _bid_criteria_data, _bid_criteria_data_collection, _bid_criteria1, _bid_criteria2, _bid_criteria_data1, _bid_criteria_data_token, _bid_price, _bid_price_amount, _bid_criteria3, _bid_criteria_data2, _bid_criteria_data_collection1, _bid_price1, _bid_price_currency, _bid_price2, _bid_price_currency1, _bid_source, _bid_criteria4, _bid_criteria_data3, _bid_criteria_data_token1, _bid_price3, _bid_price_amount1, _bid_criteria5, _bid_criteria_data4, _bid_criteria_data_collection2, _bid_price4, _bid_price_currency2, _bid_price5, _bid_price_currency3, _bid_source1, _bid_source2, _bid_criteria6, _bid_criteria_data5, _bid_criteria_data_token2, _bid_criteria7, _bid_criteria_data6, _bid_criteria_data_collection3, _bid_price6, _bid_price_amount2, _bid_price7, _bid_price_currency4, _activeChain_blockExplorers;
            const expires = (0, $0e59905e77eb8c48$export$2e2bcd8739ae039)(bid === null || bid === void 0 ? void 0 : bid.expiration);
            const collectionId = bid === null || bid === void 0 ? void 0 : (_bid_criteria = bid.criteria) === null || _bid_criteria === void 0 ? void 0 : (_bid_criteria_data = _bid_criteria.data) === null || _bid_criteria_data === void 0 ? void 0 : (_bid_criteria_data_collection = _bid_criteria_data.collection) === null || _bid_criteria_data_collection === void 0 ? void 0 : _bid_criteria_data_collection.id;
            const bidImg = tokenId ? `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/tokens/${collectionId}:${tokenId}/image/v1` : `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/collections/${collectionId}/image/v1`;
            const isAttributeOffer = (bid === null || bid === void 0 ? void 0 : (_bid_criteria1 = bid.criteria) === null || _bid_criteria1 === void 0 ? void 0 : _bid_criteria1.kind) === "attribute";
            (0, $9O4lY$useEffect)(()=>{
                if (cancelStep === (0, $4bbfc5d47221d456$export$c5c5c857eaef0fde).Complete && onCancelComplete) {
                    const data = {
                        bid: bid,
                        stepData: stepData
                    };
                    onCancelComplete(data);
                }
            }, [
                cancelStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onCancelError) {
                    const data = {
                        bid: bid,
                        stepData: stepData
                    };
                    onCancelError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            const isBidAvailable = bid && (bid.status === "active" || bid.status === "inactive") && !loading;
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                trigger: trigger,
                title: "Cancel Offer",
                open: open,
                onOpenChange: (open)=>{
                    setOpen(open);
                },
                loading: loading,
                children: [
                    !isBidAvailable && !loading && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        justify: "center",
                        css: {
                            px: "$4",
                            py: "$6"
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                            style: "h6",
                            css: {
                                textAlign: "center"
                            },
                            children: "Selected bid is no longer available"
                        })
                    }),
                    isBidAvailable && cancelStep === (0, $4bbfc5d47221d456$export$c5c5c857eaef0fde).Cancel && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    color: "$errorAccent",
                                    p: "$4",
                                    gap: "$2",
                                    background: "$wellBackground"
                                },
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                        icon: (0, $9O4lY$faCircleExclamation),
                                        width: 16,
                                        height: 16
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: "errorLight",
                                        children: transactionError.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    borderBottom: "1px solid $borderColor"
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $936f080260a8ef9e$export$2e2bcd8739ae039), {
                                    img: bidImg,
                                    name: bid === null || bid === void 0 ? void 0 : (_bid_criteria2 = bid.criteria) === null || _bid_criteria2 === void 0 ? void 0 : (_bid_criteria_data1 = _bid_criteria2.data) === null || _bid_criteria_data1 === void 0 ? void 0 : (_bid_criteria_data_token = _bid_criteria_data1.token) === null || _bid_criteria_data_token === void 0 ? void 0 : _bid_criteria_data_token.name,
                                    price: bid === null || bid === void 0 ? void 0 : (_bid_price = bid.price) === null || _bid_price === void 0 ? void 0 : (_bid_price_amount = _bid_price.amount) === null || _bid_price_amount === void 0 ? void 0 : _bid_price_amount.decimal,
                                    usdPrice: totalUsd,
                                    collection: (bid === null || bid === void 0 ? void 0 : (_bid_criteria3 = bid.criteria) === null || _bid_criteria3 === void 0 ? void 0 : (_bid_criteria_data2 = _bid_criteria3.data) === null || _bid_criteria_data2 === void 0 ? void 0 : (_bid_criteria_data_collection1 = _bid_criteria_data2.collection) === null || _bid_criteria_data_collection1 === void 0 ? void 0 : _bid_criteria_data_collection1.name) || "",
                                    currencyContract: bid === null || bid === void 0 ? void 0 : (_bid_price1 = bid.price) === null || _bid_price1 === void 0 ? void 0 : (_bid_price_currency = _bid_price1.currency) === null || _bid_price_currency === void 0 ? void 0 : _bid_price_currency.contract,
                                    currencyDecimals: bid === null || bid === void 0 ? void 0 : (_bid_price2 = bid.price) === null || _bid_price2 === void 0 ? void 0 : (_bid_price_currency1 = _bid_price2.currency) === null || _bid_price_currency1 === void 0 ? void 0 : _bid_price_currency1.decimals,
                                    expires: expires,
                                    source: (bid === null || bid === void 0 ? void 0 : (_bid_source = bid.source) === null || _bid_source === void 0 ? void 0 : _bid_source.icon) || "",
                                    isOffer: true
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "body3",
                                color: "subtle",
                                css: {
                                    mt: "$3",
                                    mr: "$3",
                                    ml: "$3",
                                    textAlign: "center"
                                },
                                children: "This will cancel your offer. You will be asked to confirm this cancelation from your wallet."
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: cancelOrder,
                                css: {
                                    m: "$4"
                                },
                                children: "Continue to Cancel"
                            })
                        ]
                    }),
                    cancelStep === (0, $4bbfc5d47221d456$export$c5c5c857eaef0fde).Approving && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    borderBottom: "1px solid $borderColor"
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $936f080260a8ef9e$export$2e2bcd8739ae039), {
                                    img: bidImg,
                                    name: bid === null || bid === void 0 ? void 0 : (_bid_criteria4 = bid.criteria) === null || _bid_criteria4 === void 0 ? void 0 : (_bid_criteria_data3 = _bid_criteria4.data) === null || _bid_criteria_data3 === void 0 ? void 0 : (_bid_criteria_data_token1 = _bid_criteria_data3.token) === null || _bid_criteria_data_token1 === void 0 ? void 0 : _bid_criteria_data_token1.name,
                                    price: bid === null || bid === void 0 ? void 0 : (_bid_price3 = bid.price) === null || _bid_price3 === void 0 ? void 0 : (_bid_price_amount1 = _bid_price3.amount) === null || _bid_price_amount1 === void 0 ? void 0 : _bid_price_amount1.decimal,
                                    usdPrice: totalUsd,
                                    collection: (bid === null || bid === void 0 ? void 0 : (_bid_criteria5 = bid.criteria) === null || _bid_criteria5 === void 0 ? void 0 : (_bid_criteria_data4 = _bid_criteria5.data) === null || _bid_criteria_data4 === void 0 ? void 0 : (_bid_criteria_data_collection2 = _bid_criteria_data4.collection) === null || _bid_criteria_data_collection2 === void 0 ? void 0 : _bid_criteria_data_collection2.name) || "",
                                    currencyContract: bid === null || bid === void 0 ? void 0 : (_bid_price4 = bid.price) === null || _bid_price4 === void 0 ? void 0 : (_bid_price_currency2 = _bid_price4.currency) === null || _bid_price_currency2 === void 0 ? void 0 : _bid_price_currency2.contract,
                                    currencyDecimals: bid === null || bid === void 0 ? void 0 : (_bid_price5 = bid.price) === null || _bid_price5 === void 0 ? void 0 : (_bid_price_currency3 = _bid_price5.currency) === null || _bid_price_currency3 === void 0 ? void 0 : _bid_price_currency3.decimals,
                                    expires: expires,
                                    source: (bid === null || bid === void 0 ? void 0 : (_bid_source1 = bid.source) === null || _bid_source1 === void 0 ? void 0 : _bid_source1.icon) || "",
                                    isOffer: true
                                })
                            }),
                            !stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {
                                css: {
                                    height: 206
                                }
                            }),
                            stepData && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $96df3158c61a3869$export$2e2bcd8739ae039), {
                                        title: (stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) ? "Finalizing on blockchain" : "Confirm cancelation in your wallet",
                                        txHash: stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash,
                                        blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash}`
                                    }),
                                    isAttributeOffer && !(stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                        justify: "center",
                                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                            style: "body3",
                                            color: "subtle",
                                            css: {
                                                maxWidth: 400,
                                                textAlign: "center",
                                                mx: "$3"
                                            },
                                            children: "This will cancel your offer on all items that were included in this attribute offer."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                disabled: true,
                                css: {
                                    m: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                    (stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) ? "Waiting for transaction to be validated" : "Waiting for approval..."
                                ]
                            })
                        ]
                    }),
                    cancelStep === (0, $4bbfc5d47221d456$export$c5c5c857eaef0fde).Complete && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    py: "$5",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h5",
                                        css: {
                                            mb: "$2"
                                        },
                                        children: "Offer Canceled!"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body3",
                                        color: "subtle",
                                        css: {
                                            mb: 24
                                        },
                                        children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                            children: [
                                                "Your",
                                                " ",
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body3",
                                                    color: "accent",
                                                    children: bid === null || bid === void 0 ? void 0 : (_bid_source2 = bid.source) === null || _bid_source2 === void 0 ? void 0 : _bid_source2.name
                                                }),
                                                " ",
                                                "offer for",
                                                " ",
                                                /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body3",
                                                    color: "accent",
                                                    children: [
                                                        (bid === null || bid === void 0 ? void 0 : (_bid_criteria6 = bid.criteria) === null || _bid_criteria6 === void 0 ? void 0 : (_bid_criteria_data5 = _bid_criteria6.data) === null || _bid_criteria_data5 === void 0 ? void 0 : (_bid_criteria_data_token2 = _bid_criteria_data5.token) === null || _bid_criteria_data_token2 === void 0 ? void 0 : _bid_criteria_data_token2.name) || (bid === null || bid === void 0 ? void 0 : (_bid_criteria7 = bid.criteria) === null || _bid_criteria7 === void 0 ? void 0 : (_bid_criteria_data6 = _bid_criteria7.data) === null || _bid_criteria_data6 === void 0 ? void 0 : (_bid_criteria_data_collection3 = _bid_criteria_data6.collection) === null || _bid_criteria_data_collection3 === void 0 ? void 0 : _bid_criteria_data_collection3.name),
                                                        " "
                                                    ]
                                                }),
                                                "at ",
                                                bid === null || bid === void 0 ? void 0 : (_bid_price6 = bid.price) === null || _bid_price6 === void 0 ? void 0 : (_bid_price_amount2 = _bid_price6.amount) === null || _bid_price_amount2 === void 0 ? void 0 : _bid_price_amount2.decimal,
                                                " ",
                                                bid === null || bid === void 0 ? void 0 : (_bid_price7 = bid.price) === null || _bid_price7 === void 0 ? void 0 : (_bid_price_currency4 = _bid_price7.currency) === null || _bid_price_currency4 === void 0 ? void 0 : _bid_price_currency4.symbol,
                                                " has been canceled."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                        color: "primary",
                                        weight: "medium",
                                        css: {
                                            fontSize: 12
                                        },
                                        href: `${blockExplorerBaseUrl}/tx/${stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash}`,
                                        target: "_blank",
                                        children: [
                                            "View on",
                                            " ",
                                            (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: ()=>{
                                    setOpen(false);
                                    if (onClose) onClose();
                                },
                                css: {
                                    m: "$4"
                                },
                                children: "Close"
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$b76ef49ac730b418$export$89d1e00b7fa831db.Custom = (0, $4bbfc5d47221d456$export$d2f670ba420b64c2);











let $3e8d169234bf8072$export$c5c5c857eaef0fde;
(function(CancelStep) {
    CancelStep[CancelStep["Cancel"] = 0] = "Cancel";
    CancelStep[CancelStep["Approving"] = 1] = "Approving";
    CancelStep[CancelStep["Complete"] = 2] = "Complete";
})($3e8d169234bf8072$export$c5c5c857eaef0fde || ($3e8d169234bf8072$export$c5c5c857eaef0fde = {}));
const $3e8d169234bf8072$export$784ecbb108ae6a2c = ({ open: open , listingId: listingId , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    var _activeChain_blockExplorers, _listing_price, _listing_price1, _listing_price_amount, _listing_tokenSetId, _listing_tokenSetId1;
    const { data: signer  } = (0, $9O4lY$useSigner)();
    const [cancelStep, setCancelStep] = (0, $9O4lY$useState)($3e8d169234bf8072$export$c5c5c857eaef0fde.Cancel);
    const [transactionError, setTransactionError] = (0, $9O4lY$useState)();
    const [stepData, setStepData] = (0, $9O4lY$useState)(null);
    const [steps, setSteps] = (0, $9O4lY$useState)(null);
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    const blockExplorerBaseUrl = (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.url) || "https://etherscan.io";
    const { data: listings , isFetchingPage: isFetchingPage  } = (0, $f89e1fbc30486f4b$export$2e2bcd8739ae039)({
        ids: listingId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true
    }, {
        revalidateFirstPage: true
    }, open && listingId ? true : false);
    const listing = listings && listings[0] ? listings[0] : undefined;
    const currency = listing === null || listing === void 0 ? void 0 : (_listing_price = listing.price) === null || _listing_price === void 0 ? void 0 : _listing_price.currency;
    const coinConversion = (0, $82b4f0a9692acbdc$export$2e2bcd8739ae039)(open && listing ? "USD" : undefined, currency === null || currency === void 0 ? void 0 : currency.symbol);
    const usdPrice = coinConversion !== undefined && coinConversion !== null ? Number(coinConversion) : 0;
    const totalUsd = usdPrice * ((listing === null || listing === void 0 ? void 0 : (_listing_price1 = listing.price) === null || _listing_price1 === void 0 ? void 0 : (_listing_price_amount = _listing_price1.amount) === null || _listing_price_amount === void 0 ? void 0 : _listing_price_amount.decimal) || 0);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const cancelOrder = (0, $9O4lY$useCallback)(()=>{
        if (!signer) {
            const error = new Error("Missing a signer");
            setTransactionError(error);
            throw error;
        }
        if (!listingId) {
            const error = new Error("Missing list id to cancel");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setCancelStep($3e8d169234bf8072$export$c5c5c857eaef0fde.Approving);
        client.actions.cancelOrder({
            id: listingId,
            signer: signer,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    var _step_items;
                    currentStepItem = (_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>{
                    var _step_items;
                    return !step.items || step.items.length == 0 || ((_step_items = step.items) === null || _step_items === void 0 ? void 0 : _step_items.every((item)=>item.status === "complete"));
                })) setCancelStep($3e8d169234bf8072$export$c5c5c857eaef0fde.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const message = "Oops, something went wrong. Please try again.";
            const transactionError = new Error(message, {
                cause: error
            });
            setTransactionError(transactionError);
            setCancelStep($3e8d169234bf8072$export$c5c5c857eaef0fde.Cancel);
            setStepData(null);
            setSteps(null);
        });
    }, [
        listingId,
        client,
        signer
    ]);
    (0, $9O4lY$useEffect)(()=>{
        if (!open) {
            setCancelStep($3e8d169234bf8072$export$c5c5c857eaef0fde.Cancel);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
        }
    }, [
        open
    ]);
    const tokenId = listing === null || listing === void 0 ? void 0 : (_listing_tokenSetId = listing.tokenSetId) === null || _listing_tokenSetId === void 0 ? void 0 : _listing_tokenSetId.split(":")[2];
    const contract = listing === null || listing === void 0 ? void 0 : (_listing_tokenSetId1 = listing.tokenSetId) === null || _listing_tokenSetId1 === void 0 ? void 0 : _listing_tokenSetId1.split(":")[1];
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
        children: children({
            loading: isFetchingPage !== undefined ? isFetchingPage : true,
            listing: listing,
            tokenId: tokenId,
            contract: contract,
            cancelStep: cancelStep,
            transactionError: transactionError,
            usdPrice: usdPrice,
            totalUsd: totalUsd,
            blockExplorerBaseUrl: blockExplorerBaseUrl,
            steps: steps,
            stepData: stepData,
            setCancelStep: setCancelStep,
            cancelOrder: cancelOrder
        })
    });
};








function $23bb84617a8645c6$export$5ccdc2f8532db25b({ openState: openState , listingId: listingId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , onClose: onClose , onCancelComplete: onCancelComplete , onCancelError: onCancelError  }) {
    const [open, setOpen] = (0, $d28bf5c50086a68a$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $9O4lY$useNetwork)();
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $3e8d169234bf8072$export$784ecbb108ae6a2c), {
        listingId: listingId,
        open: open,
        normalizeRoyalties: normalizeRoyalties,
        children: ({ loading: loading , listing: listing , tokenId: tokenId , contract: contract , cancelStep: cancelStep , transactionError: transactionError , stepData: stepData , totalUsd: totalUsd , blockExplorerBaseUrl: blockExplorerBaseUrl , cancelOrder: cancelOrder  })=>{
            var _listing_criteria, _listing_criteria_data, _listing_criteria_data_token, _listing_price, _listing_price_amount, _listing_criteria1, _listing_criteria_data1, _listing_criteria_data_collection, _listing_price1, _listing_price_currency, _listing_price2, _listing_price_currency1, _listing_source, _listing_criteria2, _listing_criteria_data2, _listing_criteria_data_token1, _listing_price3, _listing_price_amount1, _listing_criteria3, _listing_criteria_data3, _listing_criteria_data_collection1, _listing_price4, _listing_price_currency2, _listing_price5, _listing_price_currency3, _listing_source1, _listing_source2, _listing_criteria4, _listing_criteria_data4, _listing_criteria_data_token2, _listing_criteria5, _listing_criteria_data5, _listing_criteria_data_collection2, _listing_price6, _listing_price_amount2, _listing_price7, _listing_price_currency4, _activeChain_blockExplorers;
            const expires = (0, $0e59905e77eb8c48$export$2e2bcd8739ae039)(listing === null || listing === void 0 ? void 0 : listing.expiration);
            const listingImg = tokenId ? `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/tokens/${contract}:${tokenId}/image/v1` : `${client === null || client === void 0 ? void 0 : client.apiBase}/redirect/collections/${contract}/image/v1`;
            (0, $9O4lY$useEffect)(()=>{
                if (cancelStep === (0, $3e8d169234bf8072$export$c5c5c857eaef0fde).Complete && onCancelComplete) {
                    const data = {
                        listing: listing,
                        stepData: stepData
                    };
                    onCancelComplete(data);
                }
            }, [
                cancelStep
            ]);
            (0, $9O4lY$useEffect)(()=>{
                if (transactionError && onCancelError) {
                    const data = {
                        listing: listing,
                        stepData: stepData
                    };
                    onCancelError(transactionError, data);
                }
            }, [
                transactionError
            ]);
            const isListingAvailable = listing && (listing.status === "active" || listing.status === "inactive") && !loading;
            return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $4619ff7ebe39c976$export$2b77a92f1a5ad772), {
                trigger: trigger,
                title: "Cancel Listing",
                open: open,
                onOpenChange: (open)=>{
                    setOpen(open);
                },
                loading: loading,
                children: [
                    !isListingAvailable && !loading && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        justify: "center",
                        css: {
                            px: "$4",
                            py: "$6"
                        },
                        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                            style: "h6",
                            css: {
                                textAlign: "center"
                            },
                            children: "Selected listing is no longer available"
                        })
                    }),
                    isListingAvailable && cancelStep === (0, $3e8d169234bf8072$export$c5c5c857eaef0fde).Cancel && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            transactionError && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    color: "$errorAccent",
                                    p: "$4",
                                    gap: "$2",
                                    background: "$wellBackground"
                                },
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
                                        icon: (0, $9O4lY$faCircleExclamation),
                                        width: 16,
                                        height: 16
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body2",
                                        color: "errorLight",
                                        children: transactionError.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    borderBottom: "1px solid $borderColor"
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $936f080260a8ef9e$export$2e2bcd8739ae039), {
                                    img: listingImg,
                                    name: (_listing_criteria = listing.criteria) === null || _listing_criteria === void 0 ? void 0 : (_listing_criteria_data = _listing_criteria.data) === null || _listing_criteria_data === void 0 ? void 0 : (_listing_criteria_data_token = _listing_criteria_data.token) === null || _listing_criteria_data_token === void 0 ? void 0 : _listing_criteria_data_token.name,
                                    price: listing === null || listing === void 0 ? void 0 : (_listing_price = listing.price) === null || _listing_price === void 0 ? void 0 : (_listing_price_amount = _listing_price.amount) === null || _listing_price_amount === void 0 ? void 0 : _listing_price_amount.decimal,
                                    usdPrice: totalUsd,
                                    collection: ((_listing_criteria1 = listing.criteria) === null || _listing_criteria1 === void 0 ? void 0 : (_listing_criteria_data1 = _listing_criteria1.data) === null || _listing_criteria_data1 === void 0 ? void 0 : (_listing_criteria_data_collection = _listing_criteria_data1.collection) === null || _listing_criteria_data_collection === void 0 ? void 0 : _listing_criteria_data_collection.name) || "",
                                    currencyContract: (_listing_price1 = listing.price) === null || _listing_price1 === void 0 ? void 0 : (_listing_price_currency = _listing_price1.currency) === null || _listing_price_currency === void 0 ? void 0 : _listing_price_currency.contract,
                                    currencyDecimals: listing === null || listing === void 0 ? void 0 : (_listing_price2 = listing.price) === null || _listing_price2 === void 0 ? void 0 : (_listing_price_currency1 = _listing_price2.currency) === null || _listing_price_currency1 === void 0 ? void 0 : _listing_price_currency1.decimals,
                                    expires: expires,
                                    source: (listing === null || listing === void 0 ? void 0 : (_listing_source = listing.source) === null || _listing_source === void 0 ? void 0 : _listing_source.icon) || ""
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                style: "body3",
                                color: "subtle",
                                css: {
                                    mt: "$3",
                                    mr: "$3",
                                    ml: "$3",
                                    textAlign: "center"
                                },
                                children: "This will cancel your listing. You will be asked to confirm this cancelation from your wallet."
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: cancelOrder,
                                css: {
                                    m: "$4"
                                },
                                children: "Continue to Cancel"
                            })
                        ]
                    }),
                    cancelStep === (0, $3e8d169234bf8072$export$c5c5c857eaef0fde).Approving && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    borderBottom: "1px solid $borderColor"
                                },
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $936f080260a8ef9e$export$2e2bcd8739ae039), {
                                    img: listingImg,
                                    name: listing === null || listing === void 0 ? void 0 : (_listing_criteria2 = listing.criteria) === null || _listing_criteria2 === void 0 ? void 0 : (_listing_criteria_data2 = _listing_criteria2.data) === null || _listing_criteria_data2 === void 0 ? void 0 : (_listing_criteria_data_token1 = _listing_criteria_data2.token) === null || _listing_criteria_data_token1 === void 0 ? void 0 : _listing_criteria_data_token1.name,
                                    price: listing === null || listing === void 0 ? void 0 : (_listing_price3 = listing.price) === null || _listing_price3 === void 0 ? void 0 : (_listing_price_amount1 = _listing_price3.amount) === null || _listing_price_amount1 === void 0 ? void 0 : _listing_price_amount1.decimal,
                                    usdPrice: totalUsd,
                                    collection: (listing === null || listing === void 0 ? void 0 : (_listing_criteria3 = listing.criteria) === null || _listing_criteria3 === void 0 ? void 0 : (_listing_criteria_data3 = _listing_criteria3.data) === null || _listing_criteria_data3 === void 0 ? void 0 : (_listing_criteria_data_collection1 = _listing_criteria_data3.collection) === null || _listing_criteria_data_collection1 === void 0 ? void 0 : _listing_criteria_data_collection1.name) || "",
                                    currencyContract: listing === null || listing === void 0 ? void 0 : (_listing_price4 = listing.price) === null || _listing_price4 === void 0 ? void 0 : (_listing_price_currency2 = _listing_price4.currency) === null || _listing_price_currency2 === void 0 ? void 0 : _listing_price_currency2.contract,
                                    currencyDecimals: listing === null || listing === void 0 ? void 0 : (_listing_price5 = listing.price) === null || _listing_price5 === void 0 ? void 0 : (_listing_price_currency3 = _listing_price5.currency) === null || _listing_price_currency3 === void 0 ? void 0 : _listing_price_currency3.decimals,
                                    expires: expires,
                                    source: (listing === null || listing === void 0 ? void 0 : (_listing_source1 = listing.source) === null || _listing_source1 === void 0 ? void 0 : _listing_source1.icon) || ""
                                })
                            }),
                            !stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {
                                css: {
                                    height: 206
                                }
                            }),
                            stepData && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$Fragment), {
                                children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $96df3158c61a3869$export$2e2bcd8739ae039), {
                                    title: (stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) ? "Finalizing on blockchain" : "Confirm cancelation in your wallet",
                                    txHash: stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash,
                                    blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash}`
                                })
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                disabled: true,
                                css: {
                                    m: "$4"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $91d2785b6af0bea8$export$2e2bcd8739ae039), {}),
                                    (stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash) ? "Waiting for transaction to be validated" : "Waiting for approval..."
                                ]
                            })
                        ]
                    }),
                    cancelStep === (0, $3e8d169234bf8072$export$c5c5c857eaef0fde).Complete && /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
                                css: {
                                    p: "$4",
                                    py: "$5",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "h5",
                                        css: {
                                            mb: "$2"
                                        },
                                        children: "Listing Canceled!"
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                        style: "body3",
                                        color: "subtle",
                                        css: {
                                            mb: 24
                                        },
                                        children: /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $9O4lY$Fragment), {
                                            children: [
                                                "Your",
                                                " ",
                                                /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body3",
                                                    color: "accent",
                                                    children: listing === null || listing === void 0 ? void 0 : (_listing_source2 = listing.source) === null || _listing_source2 === void 0 ? void 0 : _listing_source2.name
                                                }),
                                                " ",
                                                "listing for",
                                                " ",
                                                /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                                                    style: "body3",
                                                    color: "accent",
                                                    children: [
                                                        (listing === null || listing === void 0 ? void 0 : (_listing_criteria4 = listing.criteria) === null || _listing_criteria4 === void 0 ? void 0 : (_listing_criteria_data4 = _listing_criteria4.data) === null || _listing_criteria_data4 === void 0 ? void 0 : (_listing_criteria_data_token2 = _listing_criteria_data4.token) === null || _listing_criteria_data_token2 === void 0 ? void 0 : _listing_criteria_data_token2.name) || (listing === null || listing === void 0 ? void 0 : (_listing_criteria5 = listing.criteria) === null || _listing_criteria5 === void 0 ? void 0 : (_listing_criteria_data5 = _listing_criteria5.data) === null || _listing_criteria_data5 === void 0 ? void 0 : (_listing_criteria_data_collection2 = _listing_criteria_data5.collection) === null || _listing_criteria_data_collection2 === void 0 ? void 0 : _listing_criteria_data_collection2.name),
                                                        " "
                                                    ]
                                                }),
                                                "at ",
                                                listing === null || listing === void 0 ? void 0 : (_listing_price6 = listing.price) === null || _listing_price6 === void 0 ? void 0 : (_listing_price_amount2 = _listing_price6.amount) === null || _listing_price_amount2 === void 0 ? void 0 : _listing_price_amount2.decimal,
                                                " ",
                                                listing === null || listing === void 0 ? void 0 : (_listing_price7 = listing.price) === null || _listing_price7 === void 0 ? void 0 : (_listing_price_currency4 = _listing_price7.currency) === null || _listing_price_currency4 === void 0 ? void 0 : _listing_price_currency4.symbol,
                                                " has been canceled."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $75c8f4bea838a71f$export$2e2bcd8739ae039), {
                                        color: "primary",
                                        weight: "medium",
                                        css: {
                                            fontSize: 12
                                        },
                                        href: `${blockExplorerBaseUrl}/tx/${stepData === null || stepData === void 0 ? void 0 : stepData.currentStepItem.txHash}`,
                                        target: "_blank",
                                        children: [
                                            "View on",
                                            " ",
                                            (activeChain === null || activeChain === void 0 ? void 0 : (_activeChain_blockExplorers = activeChain.blockExplorers) === null || _activeChain_blockExplorers === void 0 ? void 0 : _activeChain_blockExplorers.default.name) || "Etherscan"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                                onClick: ()=>{
                                    setOpen(false);
                                    if (onClose) onClose();
                                },
                                css: {
                                    m: "$4"
                                },
                                children: "Close"
                            })
                        ]
                    })
                ]
            });
        }
    });
}
$23bb84617a8645c6$export$5ccdc2f8532db25b.Custom = (0, $3e8d169234bf8072$export$784ecbb108ae6a2c);






let $f368500b033f3a91$var$modelViewerInjected = false;
const $f368500b033f3a91$var$importScript = (src)=>{
    if (document) {
        const script = document.createElement("script");
        script.async = true;
        script.src = src;
        script.type = "module";
        document.body.appendChild(script);
    }
};
const $f368500b033f3a91$var$useModelViewer = (enabled)=>{
    (0, $9O4lY$useEffect)(()=>{
        if (enabled && !$f368500b033f3a91$var$modelViewerInjected) {
            $f368500b033f3a91$var$modelViewerInjected = true;
            $f368500b033f3a91$var$importScript("https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js");
        }
    }, [
        enabled
    ]);
};
var $f368500b033f3a91$export$2e2bcd8739ae039 = $f368500b033f3a91$var$useModelViewer;









const $b20573c7a0ded2fc$var$MediaPlayButton = ({ mediaRef: mediaRef  })=>{
    const [playing, setPlaying] = (0, $9O4lY$useState)(false);
    (0, $9O4lY$useEffect)(()=>{
        if (mediaRef.current) {
            mediaRef.current.onplaying = ()=>{
                setPlaying(true);
            };
            mediaRef.current.onpause = ()=>{
                setPlaying(false);
            };
        }
        return ()=>{
            if (mediaRef.current) {
                mediaRef.current.onplaying = null;
                mediaRef.current.onpause = null;
            }
        };
    }, [
        mediaRef
    ]);
    return /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
        css: {
            zIndex: 5,
            position: "absolute",
            right: 16,
            bottom: 16,
            backdropFilter: "blur(2px)",
            background: "rgba(105, 113, 119, 0.5)",
            width: 48,
            height: 48,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            "&:hover": {
                background: "rgba(105, 113, 119, 0.7)"
            }
        },
        onClick: ()=>{
            if (mediaRef.current) {
                if (mediaRef.current.paused) mediaRef.current.play();
                else mediaRef.current.pause();
            }
        },
        children: /*#__PURE__*/ (0, $9O4lY$jsx)((0, $9O4lY$FontAwesomeIcon), {
            icon: playing ? (0, $9O4lY$faPause) : (0, $9O4lY$faPlay),
            width: 24,
            height: 24
        })
    });
};
var $b20573c7a0ded2fc$export$2e2bcd8739ae039 = $b20573c7a0ded2fc$var$MediaPlayButton;








const $7853153beedba782$var$TokenFallback = ({ style: style , className: className , token: token , onRefreshClicked: onRefreshClicked  })=>{
    var _token_collection, _token_collection1;
    const client = (0, $e000965a5c78353a$export$2e2bcd8739ae039)();
    return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $d0895fe590f10fcf$export$2e2bcd8739ae039), {
        justify: "center",
        align: "center",
        direction: "column",
        css: {
            gap: "$2",
            aspectRatio: "1/1",
            p: "$2",
            ...style
        },
        className: className,
        children: [
            (token === null || token === void 0 ? void 0 : (_token_collection = token.collection) === null || _token_collection === void 0 ? void 0 : _token_collection.image) && /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                style: {
                    width: 64,
                    height: 64,
                    objectFit: "cover",
                    borderRadius: 8
                },
                src: token === null || token === void 0 ? void 0 : (_token_collection1 = token.collection) === null || _token_collection1 === void 0 ? void 0 : _token_collection1.image
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $26a7fe0a528209f2$export$2e2bcd8739ae039), {
                style: "body3",
                css: {
                    textAlign: "center"
                },
                children: "No Content Available"
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)((0, $12eefc85e5b38f93$export$2e2bcd8739ae039), {
                color: "secondary",
                onClick: ()=>{
                    var _token_collection;
                    onRefreshClicked();
                    const url = `${client === null || client === void 0 ? void 0 : client.apiBase}/tokens/refresh/v1`;
                    const body = {
                        token: `${token === null || token === void 0 ? void 0 : (_token_collection = token.collection) === null || _token_collection === void 0 ? void 0 : _token_collection.id}:${token === null || token === void 0 ? void 0 : token.tokenId}`
                    };
                    const headers = {
                        ...(0, $d51d6eaf550b2a07$export$a6f1ecf08e412113)(client === null || client === void 0 ? void 0 : client.apiKey, client === null || client === void 0 ? void 0 : client.version),
                        "Content-Type": "application/json"
                    };
                    fetch(url, {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify(body)
                    }).then((res)=>res.json()).catch((e)=>{
                        throw e;
                    });
                },
                children: "Refresh"
            })
        ]
    });
};
var $7853153beedba782$export$2e2bcd8739ae039 = $7853153beedba782$var$TokenFallback;


const $513d6c3019dd1a78$export$b7d45a46da28b4d3 = (token)=>{
    let extension = null;
    if (token === null || token === void 0 ? void 0 : token.media) {
        const pieces = token.media.split("/");
        const file = pieces && pieces[pieces.length - 1] ? pieces[pieces.length - 1] : null;
        const matches = file ? file.match("(\\.[^.]+)$") : null;
        extension = matches && matches[0] ? matches[0].replace(".", "") : null;
    }
    return extension ? extension : null;
};
const $513d6c3019dd1a78$var$TokenMedia = ({ preview: preview , token: token , style: style , className: className , modelViewerOptions: modelViewerOptions = {} , videoOptions: videoOptions = {} , audioOptions: audioOptions = {} , iframeOptions: iframeOptions = {} , fallback: fallback , onError: onError = ()=>{} , onRefreshToken: onRefreshToken = ()=>{}  })=>{
    var _themeContext_radii, _themeContext_radii_borderRadius;
    const mediaRef = (0, $9O4lY$useRef)(null);
    const themeContext = (0, $9O4lY$useContext)((0, $1c6f180e574ece24$export$2c657da244d00bd6));
    let borderRadius = (themeContext === null || themeContext === void 0 ? void 0 : (_themeContext_radii = themeContext.radii) === null || _themeContext_radii === void 0 ? void 0 : (_themeContext_radii_borderRadius = _themeContext_radii.borderRadius) === null || _themeContext_radii_borderRadius === void 0 ? void 0 : _themeContext_radii_borderRadius.value) || "0";
    const [error, setError] = (0, $9O4lY$useState)(null);
    const media = token === null || token === void 0 ? void 0 : token.media;
    const tokenPreview = token === null || token === void 0 ? void 0 : token.image;
    const mediaType = $513d6c3019dd1a78$export$b7d45a46da28b4d3(token);
    const defaultStyle = {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: borderRadius,
        position: "relative"
    };
    const computedStyle = {
        ...defaultStyle,
        ...style
    };
    (0, $f368500b033f3a91$export$2e2bcd8739ae039)(!preview && mediaType && (mediaType === "gltf" || mediaType === "glb") ? true : false);
    const [measurements, containerRef] = (0, $9O4lY$useMeasure)();
    const isContainerLarge = ((measurements === null || measurements === void 0 ? void 0 : measurements.width) || 0) >= 360;
    if (!token && !preview) {
        console.warn("A token object or a media url are required!");
        return null;
    }
    if (error || !media && !tokenPreview) {
        let fallbackElement;
        if (fallback) fallbackElement = fallback(mediaType);
        if (!fallbackElement) fallbackElement = /*#__PURE__*/ (0, $9O4lY$jsx)((0, $7853153beedba782$export$2e2bcd8739ae039), {
            style: style,
            className: className,
            token: token,
            onRefreshClicked: onRefreshToken
        });
        return fallbackElement;
    }
    const onErrorCb = (e)=>{
        setError(e);
        onError(e.nativeEvent);
    };
    if (preview || !media) return /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
        alt: "Token Image",
        src: tokenPreview,
        style: {
            ...computedStyle,
            visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible"
        },
        className: className,
        onError: onErrorCb
    });
    // VIDEO
    if (mediaType === "mp4") return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        className: className,
        style: computedStyle,
        ref: containerRef,
        children: [
            !isContainerLarge && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $b20573c7a0ded2fc$export$2e2bcd8739ae039), {
                mediaRef: mediaRef
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)("video", {
                style: computedStyle,
                className: className,
                poster: tokenPreview,
                ...videoOptions,
                controls: isContainerLarge,
                loop: true,
                playsInline: true,
                onError: onErrorCb,
                ref: mediaRef,
                children: [
                    /*#__PURE__*/ (0, $9O4lY$jsx)("source", {
                        src: media,
                        type: "video/mp4"
                    }),
                    "Your browser does not support the",
                    /*#__PURE__*/ (0, $9O4lY$jsx)("code", {
                        children: "video"
                    }),
                    " element."
                ]
            })
        ]
    });
    // AUDIO
    if (mediaType === "wav" || mediaType === "mp3") return /*#__PURE__*/ (0, $9O4lY$jsxs)((0, $6bc6fb211dac7330$export$2e2bcd8739ae039), {
        className: className,
        style: computedStyle,
        ref: containerRef,
        children: [
            !isContainerLarge && /*#__PURE__*/ (0, $9O4lY$jsx)((0, $b20573c7a0ded2fc$export$2e2bcd8739ae039), {
                mediaRef: mediaRef
            }),
            /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
                alt: "Audio Poster",
                src: tokenPreview,
                style: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible",
                    objectFit: "cover"
                },
                onError: onErrorCb
            }),
            /*#__PURE__*/ (0, $9O4lY$jsxs)("audio", {
                src: media,
                ...audioOptions,
                onError: onErrorCb,
                ref: mediaRef,
                controls: isContainerLarge,
                style: {
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    width: "calc(100% - 32px)"
                },
                children: [
                    "Your browser does not support the",
                    /*#__PURE__*/ (0, $9O4lY$jsx)("code", {
                        children: "audio"
                    }),
                    " element."
                ]
            })
        ]
    });
    // 3D
    if (mediaType === "gltf" || mediaType === "glb") return /*#__PURE__*/ (0, $9O4lY$jsx)("model-viewer", {
        src: media,
        ar: true,
        "ar-modes": "webxr scene-viewer quick-look",
        poster: tokenPreview,
        "seamless-poster": true,
        "shadow-intensity": "1",
        "camera-controls": true,
        "enable-pan": true,
        ...modelViewerOptions,
        style: computedStyle,
        className: className,
        onError: onErrorCb
    });
    //Image
    if (mediaType === "png" || mediaType === "jpeg" || mediaType === "jpg" || mediaType === "gif") return /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
        alt: "Token Image",
        src: media,
        className: className,
        style: {
            ...computedStyle,
            visibility: !media || media.length === 0 ? "hidden" : "visible"
        },
        onError: onErrorCb
    });
    // HTML
    if (mediaType === "html" || mediaType === null || mediaType === undefined || mediaType === "other" || mediaType === "svg") return /*#__PURE__*/ (0, $9O4lY$jsx)("iframe", {
        style: computedStyle,
        className: className,
        src: media,
        sandbox: "allow-scripts",
        frameBorder: "0",
        ...iframeOptions
    });
    return /*#__PURE__*/ (0, $9O4lY$jsx)("img", {
        alt: "Token Image",
        src: tokenPreview,
        style: {
            ...computedStyle,
            visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible"
        },
        className: className,
        onError: onErrorCb
    });
};
var $513d6c3019dd1a78$export$2e2bcd8739ae039 = $513d6c3019dd1a78$var$TokenMedia;




export {$1c6f180e574ece24$export$14ec072536e53e19 as ReservoirKitProvider, $984ab59112b3fd36$export$9d733ffc7f61c45c as ReservoirClientProvider, $02e139e000faba42$export$2e2bcd8739ae039 as useCollections, $50e9626ee309fa09$export$2e2bcd8739ae039 as useCollectionActivity, $5a3def0f02cbf5bb$export$2e2bcd8739ae039 as useUsersActivity, $e000965a5c78353a$export$2e2bcd8739ae039 as useReservoirClient, $a22273d84f519011$export$2e2bcd8739ae039 as useTokens, $5e1eca9743a08381$export$2e2bcd8739ae039 as useTokenOpenseaBanned, $f89e1fbc30486f4b$export$2e2bcd8739ae039 as useListings, $f491475ec91fff7b$export$2e2bcd8739ae039 as useOwnerListings, $6038836de528509a$export$2e2bcd8739ae039 as useAttributes, $b172d3ea1d6f916c$export$2e2bcd8739ae039 as useBids, $45cacd3a46e0756d$export$2e2bcd8739ae039 as useUserTokens, $9099420e6dfe76fe$export$2e2bcd8739ae039 as useUserTopBids, $9708d57cc63f3a07$export$2e2bcd8739ae039 as useUserCollections, $ea0d7f856eff774e$export$2e2bcd8739ae039 as lightTheme, $be3b08e52dfef907$export$2e2bcd8739ae039 as darkTheme, $b821869244bed169$export$7055e49b90860ae6 as BuyModal, $16c71bdc4553eafd$export$b41ddf00b39567e8 as BuyStep, $77b4a3fcf105eff6$export$d23efc006864db2f as ListModal, $ea2c0edddf367502$export$7f4afd65e1e67072 as ListStep, $1c5244c9b46bef80$export$556cfc4a654987bd as BidModal, $f3b5da59e2d3c343$export$7a92ddb9e11f37f7 as BidStep, $3d45aaecc6d03b3c$export$91ee3fa7c9f4e6c2 as AcceptBidModal, $00c173e9832cf2f5$export$f4dd52ca63b5fdde as AcceptBidStep, $b76ef49ac730b418$export$89d1e00b7fa831db as CancelBidModal, $4bbfc5d47221d456$export$c5c5c857eaef0fde as CancelBidStep, $23bb84617a8645c6$export$5ccdc2f8532db25b as CancelListingModal, $3e8d169234bf8072$export$c5c5c857eaef0fde as CancelListingStep, $513d6c3019dd1a78$export$2e2bcd8739ae039 as TokenMedia, $513d6c3019dd1a78$export$b7d45a46da28b4d3 as extractMediaType};
//# sourceMappingURL=index.module.js.map
