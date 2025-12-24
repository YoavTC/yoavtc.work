document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    const currentHost = window.location.hostname;
    
    links.forEach(function(link) {
        const href = link.getAttribute('href');
        
        // Skip if no href, or if it's a relative/internal link
        if (!href || 
            href.startsWith('#') || 
            href.startsWith('/') || 
            href.startsWith('./') || 
            href.startsWith('../') ||
            !href.includes('://')) {
            return;
        }
        
        // Check if the link goes to an external domain
        try {
            const linkUrl = new URL(href);
            if (linkUrl.hostname !== currentHost) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        } catch (e) {
            // Invalid URL, skip it
        }
    });
});
