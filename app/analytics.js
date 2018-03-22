export default function() {

    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    window.addEventListener('load', () => getScript('//www.google-analytics.com/analytics.js'));

    ga('create', 'UA-42150424-1', 'getuikit.com');
    ga('send', 'pageview');

}

export function getScript(src) {

    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    document.head.appendChild(script);

}
