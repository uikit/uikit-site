export default function (id, config = {}) {
    gtag('js', new Date());
    gtag('config', id, config);

    // https://developers.google.com/analytics/devguides/collection/gtagjs/
    getScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
}

export function gtag() {
    let { dataLayer } = window;

    if (!dataLayer) {
        dataLayer = window.dataLayer = [];
    }

    dataLayer.push(arguments);
}

export function getScript(src) {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    document.head.appendChild(script);
}
