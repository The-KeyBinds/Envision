import React from "react";
import styles from "./components.module.css";

import {
    YoutubeLogo,
    InstagramLogo,
    TwitterLogo,
    TiktokLogo,
    LinkedinLogo,
} from "@phosphor-icons/react";

const PLATFORM_ICONS: Record<string, JSX.Element> = {
    instagram: <InstagramLogo color="#E1306C" />,
    youtube: <YoutubeLogo color="#FF0000" />,
    twitter: <TwitterLogo color="#1DA1F2" />,
    tiktok: <TiktokLogo color="#000" />,
    linkedin: <LinkedinLogo color="#0A66C2" />,
};

export const trustedAccounts = [
    {
        platform: "youtube",
        url: "https://www.youtube.com/@TheTradingGeek",
        name: "The Trading Geek",
        followers: "1.55M",
        pfp: "/images/tradinggeek.jpg",
        showPfp: true,
    },
    {
        platform: "youtube",
        url: "https://www.youtube.com/@WhopIO",
        name: "WhopIO",
        followers: "247K",
        pfp: "/images/whopio.jpg",
        showPfp: true,
    },
    {
        platform: "instagram",
        url: "https://www.instagram.com/sargeantjerry/",
        name: "sargeantjerry",
        followers: "195K",
        pfp: "/images/sargeantjerry.png",
        showPfp: true,
    },
    {
        platform: "youtube",
        url: "https://www.youtube.com/@DelusionByDesign",
        name: "DelusionByDesign",
        pfp: "/images/delusionbydesign.jpg",
        showPfp: true,
    },
    {
        platform: "youtube",
        url: "https://www.youtube.com/@ahmedeldin",
        name: "Ahmed Eldin",
        followers: "16K",
        pfp: "/images/ahmedeldin.jpg",
        showPfp: true,
    },
];
function getHandle(url: string) {
    try {
        const m = url.match(/^https?:\/\/(?:www\.)?\w+\.\w+\/(?:@)?([\w.-]+)/i);
        if (m && m[1]) return m[1];
        return url;
    } catch {
        return url;
    }
}

export default function TrustedByCarousel() {
    const repeated = [...trustedAccounts, ...trustedAccounts];
    return (
        <div style={{ width: "100%", overflow: "hidden", margin: "2rem 0" }}>
            <div
                style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: 12,
                }}
            >
                Trusted by:
            </div>
            <div
                className="trustedByMarqueeContainer"
                style={{
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    className="trustedByMarqueeTrack"
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        gap: "2.4rem",
                        willChange: "transform",
                        animation: "marquee-hz 30s linear infinite",
                    }}
                >
                    {repeated.map((acct, i) => (
                        <a
                            href={acct.url}
                            key={acct.url + i}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={
                                acct.platform +
                                (acct.name ? ": " + acct.name : "")
                            }
                            style={{
                                minWidth: 170,
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: 32,
                                padding: "0.45rem 1.25rem",
                                boxShadow: "0 2px 12px 0 rgba(20,20,20,0.10)",
                                textDecoration: "none",
                                color: "#fff",
                                transition: "box-shadow 0.2s",
                            }}
                        >
                            {/* Avatar + platform overlay */}
                            {acct.showPfp !== false && acct.pfp ? (
                                <span
                                    style={{
                                        position: "relative",
                                        width: 36,
                                        height: 36,
                                        display: "inline-block",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src={acct.pfp}
                                        alt={acct.name || getHandle(acct.url)}
                                        style={{
                                            width: 36,
                                            height: 36,
                                            objectFit: "cover",
                                            borderRadius: "14px",
                                            border: "2px solid #fff",
                                            display: "block",
                                            background: "#181820",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: "absolute",
                                            right: -5,
                                            bottom: -5,
                                            width: 18,
                                            height: 18,
                                            borderRadius: 6,
                                            background: "#fff",

                                            padding: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            zIndex: 2,
                                        }}
                                    >
                                        {PLATFORM_ICONS[acct.platform] &&
                                            React.cloneElement(
                                                PLATFORM_ICONS[acct.platform],
                                                {
                                                    size: 14,
                                                    weight: "fill",
                                                },
                                            )}
                                    </span>
                                </span>
                            ) : (
                                <span
                                    style={{
                                        flexShrink: 0,
                                        width: 36,
                                        height: 36,
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#24243a",
                                        borderRadius: 12,
                                        border: "2px solid #fff",
                                    }}
                                >
                                    {PLATFORM_ICONS[acct.platform] || (
                                        <span
                                            style={{
                                                width: 24,
                                                height: 24,
                                                background: "#ccc",
                                                display: "inline-block",
                                                borderRadius: 6,
                                            }}
                                        />
                                    )}
                                </span>
                            )}
                            <span
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    minWidth: 0,
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        lineHeight: "1.2",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        maxWidth: 100,
                                    }}
                                >
                                    {acct.name || getHandle(acct.url)}
                                </span>
                                {acct.followers && (
                                    <span
                                        style={{
                                            color: "#FFD86C",
                                            fontWeight: 500,
                                            fontSize: "0.93rem",
                                        }}
                                    >
                                        {acct.followers} {acct.platform === "youtube" ? "subscribers" : "followers"}
                                    </span>
                                )}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee-hz {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .trustedByMarqueeTrack {
                    min-width: 200%;
                }
                .trustedByMarqueeContainer {
                    mask-image: linear-gradient(
                        to right,
                        transparent 0%,
                        #000 5%,
                        #000 95%,
                        transparent 100%
                    );
                }
                a:hover {
                    box-shadow: 0 4px 28px rgba(255, 51, 102, 0.29);
                }
            `}</style>
        </div>
    );
}
