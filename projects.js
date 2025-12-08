// --- PROJECT DATA ---
const portfolioData = {
    games: [
        { title: "Emoji General TD", desc: "Tower defense game", image: "banners/emoji-general-td.png", link: "old_site/website-2.0/project/emoji-general-td/index.html" },
        { title: "Redacted", desc: "Mystery game project", image: "banners/redacted.png", link: "old_site/website-2.0/project/redacted/index.html" },
        { title: "Israel Wolfenstein", desc: "FPS game", image: "banners/israel-wolfenstein.png", link: "old_site/website-2.0/projects/israel-wolfenstein.html" },
        { title: "Pizza Defender", desc: "Defense game", image: "banners/pizza-defender.png", link: "old_site/website-2.0/project/pizza-defender/index.html" },
        { title: "Chef Shooter", desc: "Cooking action game", image: "banners/chef-shooter.png", link: "old_site/website-2.0/project/chef-shooter/index.html" }
    ],
    jams: [
        { title: "Swing King", desc: "Swinging mechanics game", image: "banners/swing-king.png", link: "old_site/website-2.0/project/swing-king/index.html", note: "GMTK 2025" },
        { title: "Safezone", desc: "Survival shelter game", image: "banners/safezone.png", link: "https://yoav-tc.itch.io/mamad-jam", external: true, note: "Mamad Game Jam" },
        { title: "Bubble Brawl", desc: "Bubble fighting game", image: "banners/bubble-brawl.png", link: "https://brohad.itch.io/bubble-brawl", external: true, note: "GGJ 2025" },
        { title: "Sinking", desc: "Underwater survival", image: "banners/sinking.png", link: "https://brohad.itch.io/sinking", external: true, note: "GMTK 2024" },
        { title: "Catch the Cat", desc: "Cat catching puzzle", image: "banners/catch-the-cat.png", link: "https://yoav-tc.itch.io/catch-the-cat", external: true, note: "GMTK 2023" }
    ],
    mods: [
        { title: "Christmas Decorations", desc: "Festive decorative blocks", image: "banners/christmas-decorations.png", link: "https://yoavtc.github.io/christmas-decorations/", external: true, type: "datapack", note: "1.21" },
        { title: "Halloween Decorations", desc: "Spooky decorative blocks", image: "banners/halloween-decorations.png", link: "https://yoavtc.github.io/halloween-decorations/", external: true, type: "datapack", note: "1.21" },
        { title: "Display Containers", desc: "Container display datapack", image: "banners/display-containers.png", link: "https://modrinth.com/datapack/display-containers", external: true, type: "datapack", note: "1.21" },
        { title: "Rain Temple", desc: "New temple structure", image: "banners/rain-temple.png", link: "https://modrinth.com/datapack/rain-temple", external: true, type: "datapack", note: "1.21" },
        { title: "Decorations Plus", desc: "Extra decorative options", image: "banners/decorations-plus.png", link: "https://modrinth.com/datapack/decorations-plus", external: true, type: "datapack", note: "1.21" },
        { title: "Dynamic Light Sources", desc: "Portable lighting", image: "banners/dynamic-light-sources.png", link: "https://modrinth.com/datapack/dynamic-light-sources", external: true, type: "datapack", note: "1.21" },
        { title: "Beer Brewing", desc: "Brewing mechanics", image: "banners/beer-brewing.webp", link: "https://www.planetminecraft.com/data-pack/beer-brewing/", external: true, type: "datapack", note: "1.20" },
        { title: "Upgrade Enchantments", desc: "Enhanced enchantment system", image: "banners/upgrade-enchantments.png", link: "https://www.planetminecraft.com/data-pack/upgrade-enchantments/", external: true, type: "datapack", note: "1.19" },
        { title: "More Ice", desc: "Ice variants mod", image: "banners/more-ice.png", link: "https://www.curseforge.com/minecraft/mc-mods/more-ice", external: true, type: "mod", note: "1.20" },
        { title: "Bamboo Flute", desc: "Musical instrument mod", image: "banners/bamboo-flute.png", link: "https://www.curseforge.com/minecraft/mc-mods/bamboo-flute", external: true, type: "mod", note: "1.20" },
        { title: "Vineyard Mod", desc: "Grape farming & wine", image: "banners/vineyard.png", link: "https://www.curseforge.com/minecraft/mc-mods/vineyard-mod", external: true, type: "mod", note: "1.20" },
        { title: "Mulberry", desc: "Mulberry trees & berries", image: "banners/mulberry.webp", link: "https://www.curseforge.com/minecraft/mc-mods/mulberry", external: true, type: "mod", note: "1.20" }
    ],
    misc: [
        { title: "Claytyne", desc: "Claymation project", image: "banners/claytyne.png", link: "old_site/website-2.0/project/claytyne/index.html" },
        { title: "de_jaffa", desc: "CS:GO map", image: "banners/de_jaffa.png", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2784890244", external: true },
        { title: "Roll 20 Die", desc: "D20 dice roller", image: "banners/roll-20-die.png", link: "https://yoav-tc.itch.io/roll-20-die", external: true },
        { title: "VCT Coin Toss", desc: "Valorant coin flip", image: "banners/vct-cointoss.png", link: "https://yoav-tc.itch.io/vct-coin-toss", external: true }
    ]
};

function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="card" style="--hover-bg: #facc15" onclick="${project.external ? `window.open('${project.link}')` : `window.location='${project.link}'`}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}${project.note ? `<span class="note-text">${project.note}</span>` : ''}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderProjectsGrid(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="card" style="--hover-bg: #facc15" onclick="${project.external ? `window.open('${project.link}')` : `window.location='${project.link}'`}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}${project.note ? `<span class="note-text">${project.note}</span>` : ''}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `).join('');
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
});
