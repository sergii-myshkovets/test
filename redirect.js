(function () {
    function getCookie(name) {
        let value = '; ' + document.cookie;
        let parts = value.split('; ' + name + '=');
        if (parts.length === 2) {
            return parts.pop().split(';').shift()
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        // proceed with redirect if customer is already logged in and there is a cookie
        if (document.body.getAttribute('authenticated') && getCookie('optimizelyTest')) {
            window.location.href = 'https://sports.williamhill.es/betting/es-es';
            return;
        }

        // proceed with redirect after successful authentication event
        window.messageBus && window.messageBus.subscribe('authenticated:true', () => {
            if (getCookie('optimizelyTest')) {
                window.location.href = 'https://sports.williamhill.es/betting/es-es';
            }
        });

    }, false);
})();
