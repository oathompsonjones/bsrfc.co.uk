"use client";

import { useEffect, useRef, useState } from "react";

// These must match the scroll ranges in layout.css.
const navStickAt = 266;
const navHiddenAt = 480;

/**
 * Tracks scrolling to control the nav bar's scroll-up reveal.
 * @returns Whether JS controls the nav, and whether it is currently hidden.
 */
export function useNavScroll(): { navHidden: boolean; navJs: boolean; } {
    const [navJs, setNavJs] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const lastY = useRef(0);
    const js = useRef(false);

    useEffect(() => {
        const onScroll = (): void => {
            const y = Math.max(0, window.scrollY);
            const up = y < lastY.current;

            lastY.current = y;

            if (y <= 0) {
                js.current = false;
                setNavJs(false);
                setNavHidden(false);

                return;
            }

            if (up) {
                if (y > navStickAt || js.current) {
                    js.current = true;
                    setNavJs(true);
                    setNavHidden(false);
                }
            } else if (y >= navHiddenAt) {
                js.current = true;
                setNavJs(true);
                setNavHidden(true);
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return (): void => window.removeEventListener("scroll", onScroll);
    }, []);

    return { navHidden, navJs };
}
