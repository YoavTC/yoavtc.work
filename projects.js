// --- PROJECT DATA ---
const portfolioData = {
    games: [
        { title: "Emoji General TD", desc: "emoji tower defense game", image: "banners/emoji-general-td.png", link: "projects/emoji-general-td/" },
        { title: "[REDACTED]", desc: "2D speedrunning platformer", image: "banners/redacted.png", link: "https://github.com/YoavTC/openu-group-project" },
        { title: "Israel Wolfenstein", desc: "parody boomer-shooter", image: "banners/israel-wolfenstein.png", link: "https://yoav-tc.itch.io/israel-wolfenstein" },
        { title: "Pizza Defender", desc: "Casual mobile game", image: "banners/pizza-defender.png", link: "https://www.youtube.com/watch?v=ZIDMgc64Wtw" },
        { title: "Chef Shooter", desc: "arcade-like shooter", image: "banners/chef-shooter.png", link: "https://yoav-tc.itch.io/chef-shooter" }
    ],
    jams: [
        { title: "Swing King", desc: "swinging speedrunning", image: "banners/swing-king.png", link: "https://yoav-tc.itch.io/swing-king", note: "GMTK 2025" },
        { title: "Safezone", desc: "casual bullet-hell", image: "banners/safezone.png", link: "https://yoav-tc.itch.io/mamad-jam", external: true, note: "Mamad Game Jam" },
        { title: "Bubble Brawl", desc: "1v1 brawler", image: "banners/bubble-brawl.png", link: "https://brohad.itch.io/bubble-brawl", external: true, note: "GGJ 2025" },
        { title: "Sinking", desc: "speedrunning platformer", image: "banners/sinking.png", link: "https://brohad.itch.io/sinking", external: true, note: "GMTK 2024" },
        { title: "Catch the Cat", desc: "puzzle platformer", image: "banners/catch-the-cat.png", link: "https://yoav-tc.itch.io/catch-the-cat", external: true, note: "GMTK 2023" }
    ],
    mods: [
        { title: "Christmas Decorations", desc: "32 christmas decorations", image: "banners/christmas-decorations.png", link: "https://yoavtc.github.io/christmas-decorations/", external: true, type: "datapack", note: "1.21.11" },
        { title: "Halloween Decorations", desc: "30 halloween decorations", image: "banners/halloween-decorations.png", link: "https://yoavtc.github.io/halloween-decorations/", external: true, type: "datapack", note: "1.21.10" },
        { title: "Decorations Plus", desc: "53 new decorations", image: "banners/decorations-plus.png", link: "https://yoavtc.github.io/deco-plus/", external: true, type: "datapack", note: "1.21.11" },
        { title: "Display Containers", desc: "display blocks in containers", image: "banners/display-containers.png", link: "https://modrinth.com/datapack/display-containers", external: true, type: "datapack", note: "1.21.9" },
        { title: "Rain Temple", desc: "control the weather", image: "banners/rain-temple.png", link: "https://modrinth.com/datapack/rain-temple", external: true, type: "datapack", note: "1.21.8" },
        { title: "Dynamic Light Sources", desc: "automate lights activation", image: "banners/dynamic-light-sources.png", link: "https://modrinth.com/datapack/dynamic-light-sources", external: true, type: "datapack", note: "1.21.8" },
        { title: "Beer Brewing", desc: "brew your own beers", image: "banners/beer-brewing.webp", link: "https://www.planetminecraft.com/data-pack/beer-brewing/", external: true, type: "datapack", note: "1.20" },
        { title: "Upgrade Enchantments", desc: "Enhanced enchantment system", image: "banners/upgrade-enchantments.png", link: "https://www.planetminecraft.com/data-pack/upgrade-enchantments/", external: true, type: "datapack", note: "1.19" },
        { title: "More Ice", desc: "Ice variants mod", image: "banners/more-ice.png", link: "https://www.curseforge.com/minecraft/mc-mods/more-ice", external: true, type: "mod", note: "1.16.5" },
        { title: "Bamboo Flute", desc: "Musical instrument mod", image: "banners/bamboo-flute.png", link: "https://www.curseforge.com/minecraft/mc-mods/bamboo-flute", external: true, type: "mod", note: "1.19.3" },
        { title: "Vineyard Mod", desc: "Grape farming & wine", image: "banners/vineyard.png", link: "https://www.curseforge.com/minecraft/mc-mods/vineyard-mod", external: true, type: "mod", note: "1.19.2" },
        { title: "Mulberry", desc: "Mulberry trees & berries", image: "banners/mulberry.webp", link: "https://www.curseforge.com/minecraft/mc-mods/mulberry", external: true, type: "mod", note: "1.19.2" }
    ],
    misc: [
        { title: "CLAYTYNE", desc: "minecraft server", image: "banners/claytyne.png", link: "https://www.youtube.com/@claytyneserver3182" },
        { title: "de_jaffa", desc: "Counter Strike map", image: "banners/de_jaffa.png", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2784890244", external: true },
        { title: "Roll 20 Die", desc: "D20 dice roller", image: "banners/roll-20-die.png", link: "https://yoav-tc.itch.io/roll-20-die", external: true },
        { title: "VCT Coin Toss", desc: "valorant teams coin flip", image: "banners/vct-cointoss.png", link: "https://yoav-tc.itch.io/vct-coin-toss", external: true }
    ]
};

function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => {
        const isExternal = project.link.startsWith('http://') || project.link.startsWith('https://');
        const clickAction = isExternal ? `window.open('${project.link}', '_blank')` : `window.location='${project.link}'`;
        return `
        <div class="card" style="--hover-bg: #facc15" onclick="${clickAction}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}${project.note ? `<span class="note-text">${project.note}</span>` : ''}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `;
    }).join('');
}

function renderProjectsGrid(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => {
        const isExternal = project.link.startsWith('http://') || project.link.startsWith('https://');
        const clickAction = isExternal ? `window.open('${project.link}', '_blank')` : `window.location='${project.link}'`;
        return `
        <div class="card" style="--hover-bg: #facc15" onclick="${clickAction}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}${project.note ? `<span class="note-text">${project.note}</span>` : ''}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // Merge games and jams into one array
    portfolioData.games = [...portfolioData.games, ...portfolioData.jams];

    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const container = carousel.querySelector('.scroll-container');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        const updateUI = () => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            const buffer = 5;
            const isAtStart = scrollLeft <= buffer;
            const isAtEnd = scrollLeft >= maxScroll - buffer;

            // Mask Logic
            container.classList.remove('fade-left', 'fade-right', 'fade-both');
            if (!isAtStart && !isAtEnd) {
                container.classList.add('fade-both');
            } else if (!isAtStart) {
                container.classList.add('fade-left');
            } else if (!isAtEnd) {
                container.classList.add('fade-right');
            }

            // Button Logic
            if (isAtStart) prevBtn.classList.add('hidden');
            else prevBtn.classList.remove('hidden');

            if (isAtEnd) nextBtn.classList.add('hidden');
            else nextBtn.classList.remove('hidden');
            
            if (scrollWidth <= clientWidth) {
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
                container.classList.remove('fade-left', 'fade-right', 'fade-both');
            }
        };

        setTimeout(updateUI, 50);
        container.addEventListener('scroll', updateUI);
        window.addEventListener('resize', updateUI);

        const getScrollAmount = () => {
            const card = container.querySelector('.card');
            if (!card) return 0;
            return card.offsetWidth + 20; 
        };

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    });

    // Cycle category button backgrounds with crossfade
    const categoryButtons = document.querySelectorAll('.category-btn-h');
    
    if (categoryButtons.length > 0) {
        const categoryData = {
            'games': [...portfolioData.games, ...portfolioData.jams],
            'minecraft': portfolioData.mods,
            'misc': portfolioData.misc
        };

        categoryButtons.forEach((button) => {
            const categoryKey = button.getAttribute('data-category');
            const projects = categoryData[categoryKey];
            
            if (!projects || projects.length === 0) return;

            // Create overlay div for crossfade effect
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundSize = 'cover';
            overlay.style.backgroundPosition = 'center';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 1s ease-in-out';
            overlay.style.pointerEvents = 'none';
            button.insertBefore(overlay, button.firstChild);

            let currentIndex = 0;
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % projects.length;
                
                // Set new image on overlay and fade it in
                overlay.style.backgroundImage = `url('${projects[currentIndex].image}')`;
                overlay.style.opacity = '1';
                
                // After fade completes, swap images and reset
                setTimeout(() => {
                    button.style.backgroundImage = `url('${projects[currentIndex].image}')`;
                    overlay.style.opacity = '0';
                }, 1000);
            }, 3000); // Change every 3 seconds
        });
    }
});
