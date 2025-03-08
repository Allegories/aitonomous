'use client';

export default function GoogleTagManagerNoScript() {
    return (
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M6CLQV56"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
        </noscript>
    );
}
