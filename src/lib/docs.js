(function ({ notification, util: { $, on } }) {
    new ClipboardJS('a.js-copy', {
        text: (trigger) => $(trigger.rel)?.innerText,
    })

        .on('success', () => {
            notification({ message: 'Copied!', pos: 'bottom-right' });
        })
        .on('error', () => {
            notification({ message: 'Copy failed!', status: 'danger', pos: 'bottom-right' });
        });

    on(document, 'click', 'a.js-codepen', (e) => {
        e.preventDefault();

        openOnCodepen($(e.current.rel).innerText);
    });

    on(document, 'click', '.js-example [href="#"],a.js-copy', (e) => e.preventDefault());

    // https://blog.codepen.io/documentation/api/prefill/
    function openOnCodepen(code) {
        const regexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        const scripts = (code.match(regexp) || []).join('\n').replace(/<\/?script>/g, '');
        const base = location.href.substring(0, location.href.lastIndexOf('/'));

        code = code
            .replace(regexp, '')
            .replace(
                /<(?:img|a)[^>]+(?:src|href)="(?!\/|#|[a-z0-9\-.]+:)(.+?)"|url\((?!\/|#|[a-z0-9\-.]+:)(.+?)\)/g,
                (match, src, url) => match.replace(src || url, `${base}/${src || url}`),
            );

        const nc = Date.now() % 9999;
        let data = {
            title: '',
            description: '',
            html: code,
            html_pre_processor: 'none',
            css: '',
            css_pre_processor: 'none',
            css_starter: 'neither',
            css_prefix_free: false,
            js: scripts || '',
            js_pre_processor: 'none',
            js_modernizr: false,
            html_classes: '',
            css_external: `https://getuikit.com/assets/uikit/dist/css/uikit.css?nc=${nc}`,
            js_external: `https://getuikit.com/assets/uikit/dist/js/uikit.js?nc=${nc};https://getuikit.com/assets/uikit/dist/js/uikit-icons.js?nc=${nc}`,
        };

        data = JSON.stringify(data)
            // Quotes will screw up the JSON
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');

        const form = $(`<form action="https://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value='${data}'>
        </form>`);
        document.body.append(form);
        form.submit();
        form.remove();
    }

    const sidebar = $('.tm-sidebar-left');
    on(sidebar, 'scroll', () => sessionStorage.setItem('scroll', sidebar.scrollTop));
    sidebar.scrollTop = sessionStorage.getItem('scroll') || 0;
})(UIkit);
