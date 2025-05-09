function analytics(id, config = {}) {
    gtag('js', new Date());
    gtag('config', id, config);

    // https://developers.google.com/analytics/devguides/collection/gtagjs/
    getScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
}

function gtag() {
    let { dataLayer } = window;

    if (!dataLayer) {
        dataLayer = window.dataLayer = [];
    }

    dataLayer.push(arguments);
}

function getScript(src) {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    document.head.appendChild(script);
}

analytics('G-CFB78X3F60', { anonymize_ip: true });
