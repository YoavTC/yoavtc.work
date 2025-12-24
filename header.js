document.addEventListener('DOMContentLoaded', function() {
    // Determine the path to root based on script location
    const scripts = document.getElementsByTagName('script');
    let basePath = '';
    
    for (let script of scripts) {
        if (script.src.includes('header.js')) {
            const scriptPath = script.src;
            const pagePath = window.location.href;
            
            // Calculate relative path from current page to root
            const pagePathParts = pagePath.split('/');
            const scriptPathParts = scriptPath.split('/');
            
            // Find where header.js is relative to root
            const headerIndex = scriptPathParts.findIndex(part => part === 'header.js');
            const rootParts = scriptPathParts.slice(0, headerIndex);
            
            // Calculate how many levels deep the current page is from root
            const rootUrl = rootParts.join('/') + '/';
            const relativePagePath = pagePath.replace(rootUrl, '');
            const depth = relativePagePath.split('/').length - 1;
            
            basePath = depth > 0 ? '../'.repeat(depth) : '';
            break;
        }
    }

    // alert(window.location)

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isAtRoot = basePath === '';

    // Helper function to add 'active' class if link matches current page
    // For index.html, only mark active if we're at the root level
    const activeClass = (page) => {
        if (page === 'index.html') {
            return (currentPage === 'index.html' && isAtRoot) ? 'active' : '';
        }
        return currentPage === page ? 'active' : '';
    };

    const headerHTML = `
        <nav class="nav-links">
            <a href="${basePath}index.html" class="${activeClass('index.html')}">🏡Home</a>
            <a href="${basePath}games.html" class="${activeClass('games.html')}">👾Games</a>
            <a href="${basePath}minecraft.html" class="${activeClass('minecraft.html')}">⛏️Minecraft</a>
            <a href="${basePath}misc.html" class="${activeClass('misc.html')}">🗃️Misc</a>
        </nav>
    `;

    // Insert nav links into existing header element
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('beforeend', headerHTML);
    }
});