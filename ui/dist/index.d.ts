import React, { FC, ReactNode, ComponentPropsWithoutRef, Dispatch, ReactElement, SetStateAction, CSSProperties, VideoHTMLAttributes, AudioHTMLAttributes, IframeHTMLAttributes } from "react";
import { ReservoirClientOptions, paths, ReservoirClientActions, Execute } from "@luxmarket/sdk";
import { SWRConfig, SWRConfiguration } from "swr";
import { SWRInfiniteConfiguration } from "swr/infinite";
import * as DialogPrimitive from "@radix-ui/react-dialog";
export interface ReservoirKitTheme {
    radii: {
        borderRadius: string;
    };
    fonts: {
        body: string;
        button: string;
        headline: string;
    };
    colors: ReservoirKitThemeColors;
    assets: {
        ethIcon: 'glyph' | 'gray' | 'purple';
    };
}
interface ReservoirKitThemeColors {
    accentBase: string;
    accentBgSubtle: string;
    accentBg: string;
    accentBgHover: string;
    accentBgActive: string;
    accentLine: string;
    accentBorder: string;
    accentBorderHover: string;
    accentSolid: string;
    accentSolidHover: string;
    accentText: string;
    accentTextContrast: string;
    neutralBase: string;
    neutralBgSubtle: string;
    neutralBg: string;
    neutralBgHover: string;
    neutralBgActive: string;
    neutalLine: string;
    neutralBorder: string;
    neutralBorderHover: string;
    neutralSolid: string;
    neutralSolidHover: string;
    neutralText: string;
    neutralTextContrast: string;
    secondaryBase: string;
    secondaryBgSubtle: string;
    secondaryBg: string;
    secondaryBgHover: string;
    secondaryBgActive: string;
    secondaryLine: string;
    secondaryBorder: string;
    secondaryBorderHover: string;
    secondarySolid: string;
    secondarySolidHover: string;
    secondaryText: string;
    secondaryTextContrast: string;
    borderColor: string;
    textColor: string;
    focusColor: string;
    errorText: string;
    errorAccent: string;
    successAccent: string;
    reservoirLogoColor: string;
    inputBackground: string;
    buttonTextColor: string;
    buttonTextHoverColor: string;
    overlayBackground: string;
    headerBackground: string;
    footerBackground: string;
    contentBackground: string;
    wellBackground: string;
    popoverBackground: string;
}
type ReservoirKitOverrides = {
    borderRadius?: string;
    font?: string;
    buttonFont?: string;
    buttonTextColor?: string;
    buttonTextHoverColor?: string;
    headlineFont?: string;
    primaryColor?: string;
    primaryHoverColor?: string;
    wellBackground?: string;
    textColor?: string;
    headerBackground?: string;
    contentBackground?: string;
    footerBackground?: string;
    overlayBackground?: string;
    popoverBackground?: string;
    borderColor?: string;
    ethIcon?: ReservoirKitTheme['assets']['ethIcon'];
};
export function lightTheme(overrides?: ReservoirKitOverrides): ReservoirKitTheme;
export function darkTheme(overrides?: ReservoirKitOverrides): ReservoirKitTheme;
interface ReservoirClientProviderProps {
    children: ReactNode;
    options: ReservoirClientOptions;
}
export const ReservoirClientProvider: FC<ReservoirClientProviderProps>;
type ReservoirKitProviderOptions = {
    disablePoweredByReservoir?: boolean;
};
interface ReservoirKitProviderProps {
    children: ReactNode;
    options?: ReservoirClientOptions & ReservoirKitProviderOptions;
    theme?: ReservoirKitTheme;
    swrOptions?: ComponentPropsWithoutRef<typeof SWRConfig>['value'];
}
export const ReservoirKitProvider: FC<ReservoirKitProviderProps>;
type CollectionsQuery = paths['/collections/v5']['get']['parameters']['query'];
export function useCollections(options?: CollectionsQuery | false, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        continuation?: string | undefined;
        collections?: {
            id?: string | undefined;
            slug?: string | undefined;
            createdAt?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            primaryContract?: string | undefined;
            tokenSetId?: string | undefined;
            royalties?: {
                recipient?: string | undefined;
                breakdown?: {
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                bps?: number | undefined;
            } | undefined;
            allRoyalties?: {
                [key: string]: unknown;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            floorAsk?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
            } | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSaleChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            salesCount?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            collectionBidSupported?: boolean | undefined;
            ownerCount?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                count?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }[] | undefined;
    data: {
        id?: string | undefined;
        slug?: string | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        image?: string | undefined;
        banner?: string | undefined;
        discordUrl?: string | undefined;
        externalUrl?: string | undefined;
        twitterUsername?: string | undefined;
        openseaVerificationStatus?: string | undefined;
        description?: string | undefined;
        sampleImages?: string[] | undefined;
        tokenCount?: string | undefined;
        onSaleCount?: string | undefined;
        primaryContract?: string | undefined;
        tokenSetId?: string | undefined;
        royalties?: {
            recipient?: string | undefined;
            breakdown?: {
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            bps?: number | undefined;
        } | undefined;
        allRoyalties?: {
            [key: string]: unknown;
        } | undefined;
        lastBuy?: {
            value?: number | undefined;
            timestamp?: number | undefined;
        } | undefined;
        floorAsk?: {
            id?: string | undefined;
            sourceDomain?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            maker?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
            } | undefined;
        } | undefined;
        topBid?: {
            id?: string | undefined;
            sourceDomain?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            maker?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
        } | undefined;
        rank?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        volume?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        volumeChange?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        floorSale?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        floorSaleChange?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        salesCount?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        collectionBidSupported?: boolean | undefined;
        ownerCount?: number | undefined;
        attributes?: {
            key?: string | undefined;
            kind?: string | undefined;
            count?: number | undefined;
        }[] | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        collections?: {
            id?: string | undefined;
            slug?: string | undefined;
            createdAt?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            primaryContract?: string | undefined;
            tokenSetId?: string | undefined;
            royalties?: {
                recipient?: string | undefined;
                breakdown?: {
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                bps?: number | undefined;
            } | undefined;
            allRoyalties?: {
                [key: string]: unknown;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            floorAsk?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
            } | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSaleChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            salesCount?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            collectionBidSupported?: boolean | undefined;
            ownerCount?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                count?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        collections?: {
            id?: string | undefined;
            slug?: string | undefined;
            createdAt?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            primaryContract?: string | undefined;
            tokenSetId?: string | undefined;
            royalties?: {
                recipient?: string | undefined;
                breakdown?: {
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                bps?: number | undefined;
            } | undefined;
            allRoyalties?: {
                [key: string]: unknown;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            floorAsk?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
            } | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSaleChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            salesCount?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            collectionBidSupported?: boolean | undefined;
            ownerCount?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                count?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
export function useReservoirClient(): import("~/../sdk/dist").ReservoirClient | null;
type CollectionActivityQuery = paths['/collections/activity/v5']['get']['parameters']['query'];
export function useCollectionActivity(options?: CollectionActivityQuery | false, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
    data: ({
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: number | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        createdAt?: string | undefined;
        contract?: string | undefined;
        token?: {
            tokenId?: string | undefined;
            tokenName?: string | undefined;
            tokenImage?: string | undefined;
        } | undefined;
        collection?: {
            collectionId?: string | undefined;
            collectionName?: string | undefined;
            collectionImage?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type UsersActivityBaseQuery = paths['/users/activity/v5']['get']['parameters']['query'];
type UsersQuery = UsersActivityBaseQuery['users'] | undefined;
type UsersActivityQuery = Omit<UsersActivityBaseQuery, 'users'>;
export function useUsersActivity(users?: UsersQuery, options?: UsersActivityQuery | false, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                tokenRarityScore?: number | undefined;
                tokenRarityRank?: number | undefined;
                tokenMedia?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            createdAt?: string | undefined;
        }[] | undefined;
    }[] | undefined;
    data: ({
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: number | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        contract?: string | undefined;
        token?: {
            tokenId?: string | undefined;
            tokenName?: string | undefined;
            tokenImage?: string | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            lastSell?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            tokenRarityScore?: number | undefined;
            tokenRarityRank?: number | undefined;
            tokenMedia?: string | undefined;
        } | undefined;
        collection?: {
            collectionId?: string | undefined;
            collectionName?: string | undefined;
            collectionImage?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: string | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                tokenRarityScore?: number | undefined;
                tokenRarityRank?: number | undefined;
                tokenMedia?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            createdAt?: string | undefined;
        }[] | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: number | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                tokenRarityScore?: number | undefined;
                tokenRarityRank?: number | undefined;
                tokenMedia?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            createdAt?: string | undefined;
        }[] | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type TokensQuery = paths['/tokens/v5']['get']['parameters']['query'];
export function useTokens(options?: TokensQuery | false, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value?: string | undefined;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        token?: {
            contract: string;
            tokenId: string;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            media?: string | undefined;
            kind?: string | undefined;
            isFlagged?: boolean | undefined;
            lastFlagUpdate?: string | undefined;
            lastFlagChange?: string | undefined;
            rarity?: number | undefined;
            rarityRank?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                slug?: string | undefined;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            lastSell?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            owner?: string | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                value?: string | undefined;
                tokenCount?: number | undefined;
                onSaleCount?: number | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                createdAt?: string | undefined;
            }[] | undefined;
        } | undefined;
        market?: {
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | "pool" | undefined;
                    data?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value?: string | undefined;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value?: string | undefined;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
export function useTokenOpenseaBanned(contract?: string, token?: number | string): boolean;
type AsksQuery = paths['/orders/asks/v4']['get']['parameters']['query'];
export function useListings(options: AsksQuery, swrOptions?: SWRInfiniteConfiguration, enabled?: boolean): {
    response: {
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        id: string;
        kind: string;
        side: "buy" | "sell";
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        status?: string | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        isDynamic?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
export function useOwnerListings(query?: paths['/orders/asks/v4']['get']['parameters']['query'] | false, swrOptions?: SWRConfiguration): {
    response: {
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        id: string;
        kind: string;
        side: "buy" | "sell";
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        status?: string | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        isDynamic?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            status?: string | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type BidsQuery = paths['/orders/bids/v5']['get']['parameters']['query'];
export function useBids(options: BidsQuery, swrOptions?: SWRInfiniteConfiguration, enabled?: boolean): {
    response: {
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        id: string;
        kind: string;
        side: "buy" | "sell";
        status?: string | undefined;
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
export function useAttributes(collection?: string | undefined, swrOptions?: SWRConfiguration): {
    response: {
        attributes?: {
            key: string;
            attributeCount?: number | undefined;
            kind: "string" | "number" | "date" | "range";
            minRange?: number | undefined;
            maxRange?: number | undefined;
            values?: {
                value: string;
                count?: number | undefined;
                floorAskPrice?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } | undefined;
    data: {
        key: string;
        attributeCount?: number | undefined;
        kind: "string" | "number" | "date" | "range";
        minRange?: number | undefined;
        maxRange?: number | undefined;
        values?: {
            value: string;
            count?: number | undefined;
            floorAskPrice?: number | undefined;
        }[] | undefined;
    }[] | null;
    mutate: import("swr/_internal").KeyedMutator<{
        attributes?: {
            key: string;
            attributeCount?: number | undefined;
            kind: "string" | "number" | "date" | "range";
            minRange?: number | undefined;
            maxRange?: number | undefined;
            values?: {
                value: string;
                count?: number | undefined;
                floorAskPrice?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    error: any;
    isValidating: boolean;
};
type UserTokenQuery = paths['/users/{user}/tokens/v6']['get']['parameters']['query'];
export function useUserTokens(user?: string | undefined, options?: UserTokenQuery | false, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        tokens?: {
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                rarityScore?: number | undefined;
                rarityRank?: number | undefined;
                media?: string | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                acquiredAt?: string | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        token?: {
            contract?: string | undefined;
            tokenId?: string | undefined;
            kind?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            lastSell?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            rarityScore?: number | undefined;
            rarityRank?: number | undefined;
            media?: string | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                imageUrl?: string | undefined;
                floorAskPrice?: number | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        ownership?: {
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            acquiredAt?: string | undefined;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens?: {
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                rarityScore?: number | undefined;
                rarityRank?: number | undefined;
                media?: string | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                acquiredAt?: string | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        tokens?: {
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                rarityScore?: number | undefined;
                rarityRank?: number | undefined;
                media?: string | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                acquiredAt?: string | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type _BidsQuery1 = paths['/orders/users/{user}/top-bids/v2']['get']['parameters']['query'];
export function useUserTopBids(user?: string, options?: _BidsQuery1, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        totalTokensWithBids?: number | undefined;
        topBids?: {
            id?: string | undefined;
            price?: number | undefined;
            value?: number | undefined;
            maker?: string | undefined;
            createdAt?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            floorDifferencePercentage?: number | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                floorAskPrice?: number | undefined;
                lastSalePrice?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined;
    data: ({
        id?: string | undefined;
        price?: number | undefined;
        value?: number | undefined;
        maker?: string | undefined;
        createdAt?: string | undefined;
        validFrom?: number | undefined;
        validUntil?: number | undefined;
        floorDifferencePercentage?: number | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token?: {
            contract?: string | undefined;
            tokenId?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            floorAskPrice?: number | undefined;
            lastSalePrice?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                imageUrl?: string | undefined;
                floorAskPrice?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        totalTokensWithBids?: number | undefined;
        topBids?: {
            id?: string | undefined;
            price?: number | undefined;
            value?: number | undefined;
            maker?: string | undefined;
            createdAt?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            floorDifferencePercentage?: number | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                floorAskPrice?: number | undefined;
                lastSalePrice?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        totalTokensWithBids?: number | undefined;
        topBids?: {
            id?: string | undefined;
            price?: number | undefined;
            value?: number | undefined;
            maker?: string | undefined;
            createdAt?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            floorDifferencePercentage?: number | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                floorAskPrice?: number | undefined;
                lastSalePrice?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type UserCollectionsQuery = paths['/users/{user}/collections/v2']['get']['parameters']['query'];
export function useUserCollections(user?: string, options?: UserCollectionsQuery, swrOptions?: SWRInfiniteConfiguration): {
    response: {
        collections?: {
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                tokenSetId?: string | undefined;
                primaryContract?: string | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                topBidMaker?: string | undefined;
                topBidSourceDomain?: string | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                liquidCount?: string | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
    data: ({
        collection?: {
            id?: string | undefined;
            slug?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            tokenSetId?: string | undefined;
            primaryContract?: string | undefined;
            floorAskPrice?: number | undefined;
            topBidValue?: number | undefined;
            topBidMaker?: string | undefined;
            topBidSourceDomain?: string | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
        } | undefined;
        ownership?: {
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            liquidCount?: string | undefined;
        } | undefined;
    } | undefined)[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: boolean | undefined;
    fetchNextPage: () => void;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        collections?: {
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                tokenSetId?: string | undefined;
                primaryContract?: string | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                topBidMaker?: string | undefined;
                topBidSourceDomain?: string | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                liquidCount?: string | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    mutate: import("swr/_internal").KeyedMutator<{
        collections?: {
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                tokenSetId?: string | undefined;
                primaryContract?: string | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                topBidMaker?: string | undefined;
                topBidSourceDomain?: string | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                liquidCount?: string | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    error: any;
    isValidating: boolean;
};
type Marketplace = NonNullable<paths['/admin/get-marketplaces']['get']['responses']['200']['schema']['marketplaces']>[0] & {
    isSelected: boolean;
    price: number | string;
    truePrice: number | string;
};
type Currency = {
    contract: string;
    symbol: string;
    decimals?: number;
};
export enum ListStep {
    SelectMarkets = 0,
    SetPrice = 1,
    ListItem = 2,
    Complete = 3
}
type Listings = Parameters<ReservoirClientActions['listToken']>['0']['listings'];
type ListingData = {
    listing: Listings[0];
    marketplace: Marketplace;
};
enum ModalSize {
    MD = 0,
    LG = 1
}
declare const Modal: React.ForwardRefExoticComponent<{
    title: string;
    children: ReactNode;
    size?: ModalSize | undefined;
    onBack?: (() => void) | null | undefined;
    loading?: boolean | undefined;
} & Pick<Pick<Pick<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "id" | "key" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "onCloseAutoFocus" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onOpenAutoFocus" | "forceMount"> & {
    trigger: React.ReactNode;
    portalProps?: Pick<import("@radix-ui/react-portal").PortalProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "id" | "key" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "container"> | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    open?: boolean | undefined;
    size?: ModalSize | undefined;
} & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "id" | "key" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "onCloseAutoFocus" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onOpenAutoFocus" | "forceMount" | keyof {
    trigger: React.ReactNode;
    portalProps?: Pick<import("@radix-ui/react-portal").PortalProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "id" | "key" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "container"> | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    open?: boolean | undefined;
    size?: ModalSize | undefined;
}>, "open" | "onFocusCapture" | "onOpenChange" | "trigger" | "onPointerDownOutside"> & React.RefAttributes<HTMLDivElement>>;
export enum BuyStep {
    Checkout = 0,
    Approving = 1,
    AddFunds = 2,
    Complete = 3,
    Unavailable = 4
}
type PurchaseData = {
    tokenId?: string;
    collectionId?: string;
    maker?: string;
    steps?: Execute['steps'];
};
type Props = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    orderId?: string;
    referrerFeeBps?: number | null;
    referrer?: string | null;
    normalizeRoyalties?: boolean;
    onGoToToken?: () => any;
    onPurchaseComplete?: (data: PurchaseData) => void;
    onPurchaseError?: (error: Error, data: PurchaseData) => void;
    onClose?: () => void;
};
export function BuyModal({ openState, trigger, tokenId, collectionId, orderId, referrer, referrerFeeBps, normalizeRoyalties, onPurchaseComplete, onPurchaseError, onClose, onGoToToken, }: Props): ReactElement;
export declare namespace BuyModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        orderId?: string | undefined;
        referrerFeeBps?: number | null | undefined;
        referrer?: string | null | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastBuy?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    lastSell?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value?: string | undefined;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
            } | undefined;
            listing?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                status?: string | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            quantityAvailable: number;
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            totalPrice: number;
            referrerFee: number;
            buyStep: BuyStep;
            transactionError?: Error | null | undefined;
            hasEnoughCurrency: boolean;
            feeUsd: number;
            totalUsd: number;
            usdPrice: any;
            isBanned: boolean;
            balance?: import("ethers").BigNumber | undefined;
            address?: string | undefined;
            blockExplorerBaseUrl: string;
            steps: {
                message?: string | undefined;
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    txHash?: string | undefined;
                    orderId?: string | undefined;
                    orderIndex?: number | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/modal/buy/BuyModalRenderer").StepData | null;
            quantity: number;
            setBuyStep: React.Dispatch<React.SetStateAction<BuyStep>>;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            buyToken: () => void;
        }) => React.ReactNode;
    }>;
}
type ListingCallbackData = {
    listings?: ListingData[];
    tokenId?: string;
    collectionId?: string;
};
type _Props1 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    currencies?: Currency[];
    nativeOnly?: boolean;
    normalizeRoyalties?: boolean;
    onGoToToken?: () => any;
    onListingComplete?: (data: ListingCallbackData) => void;
    onListingError?: (error: Error, data: ListingCallbackData) => void;
    onClose?: () => void;
};
export function ListModal({ openState, trigger, tokenId, collectionId, currencies, nativeOnly, normalizeRoyalties, onGoToToken, onListingComplete, onListingError, onClose, }: _Props1): ReactElement;
export declare namespace ListModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        currencies?: Currency[] | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastBuy?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    lastSell?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value?: string | undefined;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            quantityAvailable: number;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
            } | undefined;
            listStep: ListStep;
            usdPrice: any;
            expirationOptions: import("~/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/types/ExpirationOption").ExpirationOption;
            marketplaces: Marketplace[];
            unapprovedMarketplaces: Marketplace[];
            isFetchingUnapprovedMarketplaces: boolean;
            localMarketplace: Marketplace | null;
            listingData: ListingData[];
            transactionError?: Error | null | undefined;
            stepData: import("~/modal/list/ListModalRenderer").StepData | null;
            currencies: Currency[];
            currency: Currency;
            quantity: number;
            setListStep: React.Dispatch<React.SetStateAction<ListStep>>;
            toggleMarketplace: (marketplace: Marketplace) => void;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/types/ExpirationOption").ExpirationOption>>;
            setMarketPrice: (price: number, market: Marketplace) => void;
            setCurrency: (currency: Currency) => void;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            listToken: () => void;
        }) => React.ReactNode;
    }>;
}
export enum BidStep {
    SetPrice = 0,
    Offering = 1,
    Complete = 2
}
type Trait = {
    key: string;
    value: string;
    floorAskPrice?: number;
} | undefined;
type _Props2 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    attribute?: Trait;
    normalizeRoyalties?: boolean;
    onViewOffers?: () => void;
    onClose?: () => void;
    onBidComplete?: (data: any) => void;
    onBidError?: (error: Error, data: any) => void;
};
export function BidModal({ openState, trigger, tokenId, collectionId, attribute, normalizeRoyalties, onViewOffers, onClose, onBidComplete, onBidError, }: _Props2): ReactElement;
export declare namespace BidModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        attribute?: Trait;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastBuy?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    lastSell?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value?: string | undefined;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
            } | undefined;
            attributes?: import("~/modal/bid/BidModalRenderer").Traits;
            bidAmount: string;
            bidData: {
                token?: string | undefined;
                tokenSetId?: string | undefined;
                collection?: string | undefined;
                attributeKey?: string | undefined;
                attributeValue?: string | undefined;
                quantity?: number | undefined;
                weiPrice: string;
                orderKind?: "x2y2" | "looks-rare" | "universe" | "infinity" | "zeroex-v4" | "seaport" | "forward" | undefined;
                orderbook?: "x2y2" | "reservoir" | "opensea" | "looks-rare" | "universe" | "infinity" | undefined;
                orderbookApiKey?: string | undefined;
                automatedRoyalties?: boolean | undefined;
                fees?: string[] | undefined;
                excludeFlaggedTokens?: boolean | undefined;
                listingTime?: string | undefined;
                expirationTime?: string | undefined;
                salt?: string | undefined;
                nonce?: string | undefined;
                currency?: string | undefined;
            } | null;
            bidAmountUsd: number;
            bidStep: BidStep;
            hasEnoughNativeCurrency: boolean;
            hasEnoughWrappedCurrency: boolean;
            amountToWrap: string;
            usdPrice: any;
            isBanned: boolean;
            balance?: import("@wagmi/core").FetchBalanceResult | undefined;
            wrappedBalance?: import("@wagmi/core").FetchBalanceResult | undefined;
            wrappedContractName: string;
            wrappedContractAddress: string;
            uniswapConvertLink: string;
            transactionError?: Error | null | undefined;
            expirationOptions: import("~/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/types/ExpirationOption").ExpirationOption;
            stepData: import("~/modal/bid/BidModalRenderer").StepData | null;
            setBidStep: React.Dispatch<React.SetStateAction<BidStep>>;
            setBidAmount: React.Dispatch<React.SetStateAction<string>>;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/types/ExpirationOption").ExpirationOption>>;
            setTrait: React.Dispatch<React.SetStateAction<Trait>>;
            trait: Trait;
            placeBid: () => void;
        }) => React.ReactNode;
    }>;
}
export enum AcceptBidStep {
    Checkout = 0,
    ApproveMarketplace = 1,
    Confirming = 2,
    Finalizing = 3,
    Complete = 4,
    Unavailable = 5
}
type StepData = {
    totalSteps: number;
    currentStep: Execute['steps'][0];
    currentStepItem?: NonNullable<Execute['steps'][0]['items']>[0];
};
type BidData = {
    tokenId?: string;
    collectionId?: string;
    txHash?: string;
    maker?: string;
};
type _Props3 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    bidId?: string;
    normalizeRoyalties?: boolean;
    onBidAccepted?: (data: BidData) => void;
    onClose?: () => void;
    onBidAcceptError?: (error: Error, data: BidData) => void;
    onCurrentStepUpdate?: (data: StepData) => void;
};
export function AcceptBidModal({ openState, trigger, tokenId, collectionId, bidId, normalizeRoyalties, onBidAccepted, onClose, onBidAcceptError, onCurrentStepUpdate, }: _Props3): ReactElement;
export declare namespace AcceptBidModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        bidId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastBuy?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    lastSell?: {
                        value?: number | undefined;
                        timestamp?: number | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value?: string | undefined;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            expiration?: number | undefined;
            totalPrice: number;
            bidAmount: number;
            bidAmountCurrency?: {
                contract?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            ethBidAmount?: number | undefined;
            acceptBidStep: AcceptBidStep;
            fees: {
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
            };
            transactionError?: Error | null | undefined;
            txHash: string | null;
            totalUsd: number;
            usdPrice: any;
            address?: string | undefined;
            etherscanBaseUrl: string;
            stepData: StepData | null;
            acceptBid: () => void;
            setAcceptBidStep: React.Dispatch<React.SetStateAction<AcceptBidStep>>;
        }) => React.ReactNode;
    }>;
}
export enum CancelBidStep {
    Cancel = 0,
    Approving = 1,
    Complete = 2
}
type _Props4 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    bidId?: string;
    normalizeRoyalties?: boolean;
    onClose?: () => void;
    onCancelComplete?: (data: any) => void;
    onCancelError?: (error: Error, data: any) => void;
};
export function CancelBidModal({ openState, bidId, trigger, normalizeRoyalties, onClose, onCancelComplete, onCancelError, }: _Props4): ReactElement;
export declare namespace CancelBidModal {
    var Custom: React.FC<{
        open: boolean;
        bidId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            bid?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            tokenId?: string | undefined;
            cancelStep: CancelStep;
            transactionError?: Error | null | undefined;
            totalUsd: number;
            usdPrice: any;
            blockExplorerBaseUrl: string;
            steps: {
                message?: string | undefined;
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    txHash?: string | undefined;
                    orderId?: string | undefined;
                    orderIndex?: number | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/modal/cancelBid/CancelBidModalRenderer").StepData | null;
            setCancelStep: React.Dispatch<React.SetStateAction<CancelStep>>;
            cancelOrder: () => void;
        }) => React.ReactNode;
    }>;
}
export enum CancelListingStep {
    Cancel = 0,
    Approving = 1,
    Complete = 2
}
type _Props5 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    listingId?: string;
    normalizeRoyalties?: boolean;
    onClose?: () => void;
    onCancelComplete?: (data: any) => void;
    onCancelError?: (error: Error, data: any) => void;
};
export function CancelListingModal({ openState, listingId, trigger, normalizeRoyalties, onClose, onCancelComplete, onCancelError, }: _Props5): ReactElement;
export declare namespace CancelListingModal {
    var Custom: React.FC<{
        open: boolean;
        listingId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            listing?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                status?: string | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            tokenId?: string | undefined;
            contract?: string | undefined;
            cancelStep: CancelStep;
            transactionError?: Error | null | undefined;
            totalUsd: number;
            usdPrice: any;
            blockExplorerBaseUrl: string;
            steps: {
                message?: string | undefined;
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    txHash?: string | undefined;
                    orderId?: string | undefined;
                    orderIndex?: number | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/modal/cancelListing/CancelListingModalRenderer").StepData | null;
            setCancelStep: React.Dispatch<React.SetStateAction<CancelStep>>;
            cancelOrder: () => void;
        }) => React.ReactNode;
    }>;
}
type MediaType = 'mp4' | 'mp3' | 'wav' | 'gltf' | 'glb' | 'png' | 'jpeg' | 'jpg' | 'svg' | 'gif' | 'html' | 'other' | undefined;
export const extractMediaType: (token?: RequiredTokenProps) => MediaType | null;
type Token = NonNullable<NonNullable<ReturnType<typeof useTokens>['data']>['0']>['token'];
type RequiredTokenProps = Pick<NonNullable<Token>, 'image' | 'media' | 'collection' | 'tokenId'>;
type _Props6 = {
    token?: RequiredTokenProps;
    preview?: boolean;
    style?: CSSProperties;
    className?: string;
    modelViewerOptions?: any;
    videoOptions?: VideoHTMLAttributes<HTMLVideoElement>;
    audioOptions?: AudioHTMLAttributes<HTMLAudioElement>;
    iframeOptions?: IframeHTMLAttributes<HTMLIFrameElement>;
    fallback?: (mediaType: MediaType | null) => ReactElement | null;
    onError?: (e: Event) => void;
    onRefreshToken?: () => void;
};
export const TokenMedia: FC<_Props6>;

//# sourceMappingURL=index.d.ts.map
