// --- PROJECT DATA ---
const portfolioData = {
    games: [
        { title: "Emoji General TD", desc: "Tower defense game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/emoji-general-td.png", link: "old_site/website-2.0/project/emoji-general-td/index.html" },
        { title: "Redacted", desc: "Mystery game project", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/redacted.png", link: "old_site/website-2.0/project/redacted/index.html" },
        { title: "Israel Wolfenstein", desc: "FPS game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/israel-wolfenstein.png", link: "old_site/website-2.0/projects/israel-wolfenstein.html" },
        { title: "Pizza Defender", desc: "Defense game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/pizza-defender.png", link: "old_site/website-2.0/project/pizza-defender/index.html" },
        { title: "Chef Shooter", desc: "Cooking action game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/chef-shooter.png", link: "old_site/website-2.0/project/chef-shooter/index.html" }
    ],
    jams: [
        { title: "Swing King", desc: "Swinging mechanics game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/swing-king.png", link: "old_site/website-2.0/project/swing-king/index.html" },
        { title: "Safezone (Mamad Jam)", desc: "Survival shelter game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/safezone.png", link: "https://yoav-tc.itch.io/mamad-jam", external: true },
        { title: "Bubble Brawl", desc: "Bubble fighting game", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/bubble-brawl.png", link: "https://brohad.itch.io/bubble-brawl", external: true },
        { title: "Sinking", desc: "Underwater survival", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/sinking.png", link: "https://brohad.itch.io/sinking", external: true },
        { title: "Catch the Cat", desc: "Cat catching puzzle", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/catch-the-cat.png", link: "https://yoav-tc.itch.io/catch-the-cat", external: true }
    ],
    mods: [
        { title: "Halloween Decorations", desc: "Spooky decorative blocks", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/halloween-decorations.png", link: "https://yoavtc.github.io/halloween-decorations/", external: true },
        { title: "Display Containers", desc: "Container display datapack", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/display-containers.png", link: "https://modrinth.com/datapack/display-containers", external: true },
        { title: "Rain Temple", desc: "New temple structure", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/rain-temple.png", link: "https://modrinth.com/datapack/rain-temple", external: true },
        { title: "Decorations Plus", desc: "Extra decorative options", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/decorations-plus.png", link: "https://modrinth.com/datapack/decorations-plus", external: true },
        { title: "Dynamic Light Sources", desc: "Portable lighting", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/dynamic-light-sources.png", link: "https://modrinth.com/datapack/dynamic-light-sources", external: true },
        { title: "Beer Brewing", desc: "Brewing mechanics", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/beer-brewing.png", link: "https://www.planetminecraft.com/data-pack/beer-brewing/", external: true },
        { title: "Upgrade Enchantments", desc: "Enhanced enchantment system", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/upgrade-enchantments.png", link: "https://www.planetminecraft.com/data-pack/upgrade-enchantments/", external: true },
        { title: "More Ice", desc: "Ice variants mod", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/more-ice.png", link: "https://www.curseforge.com/minecraft/mc-mods/more-ice", external: true },
        { title: "Bamboo Flute", desc: "Musical instrument mod", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/bamboo-flute.png", link: "https://www.curseforge.com/minecraft/mc-mods/bamboo-flute", external: true },
        { title: "Vineyard Mod", desc: "Grape farming & wine", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/vineyard.png", link: "https://www.curseforge.com/minecraft/mc-mods/vineyard-mod", external: true },
        { title: "Mulberry", desc: "Mulberry trees & berries", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/mullberry.png", link: "https://www.curseforge.com/minecraft/mc-mods/mulberry", external: true }
    ],
    misc: [
        { title: "Claytyne", desc: "Claymation project", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/claytyne.png", link: "old_site/website-2.0/project/claytyne/index.html" },
        { title: "de_jaffa", desc: "CS:GO map", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/de_jaffa.png", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2784890244", external: true },
        { title: "Super Toolbelt", desc: "Unity utility package", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/super-toolbelt.png", link: "https://github.com/YoavTC/super-toolbelt", external: true },
        { title: "Helper Functions", desc: "Unity helper utilities", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/helper-functions.png", link: "https://github.com/YoavTC/helper-functions", external: true },
        { title: "Roll 20 Die", desc: "D20 dice roller", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/roll-20-die.png", link: "https://yoav-tc.itch.io/roll-20-die", external: true },
        { title: "VCT Coin Toss", desc: "Valorant coin flip", color: "#facc15", image: "old_site/website-2.0/pages/assets/project_thumbnails/vct-cointoss.png", link: "https://yoav-tc.itch.io/vct-coin-toss", external: true }
    ]
};

function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="card" style="--hover-bg: ${project.color}" onclick="${project.external ? `window.open('${project.link}')` : `window.location='${project.link}'`}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderProjectsGrid(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="card" style="--hover-bg: ${project.color}" onclick="${project.external ? `window.open('${project.link}')` : `window.location='${project.link}'`}" role="button" tabindex="0">
            <div class="card-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="card-info">
                <div class="card-title">${project.title}</div>
                <div class="card-desc">${project.desc}</div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects('games-container', portfolioData.games);
    renderProjects('jams-container', portfolioData.jams);
    renderProjects('mods-container', portfolioData.mods);
    renderProjects('misc-container', portfolioData.misc);

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
