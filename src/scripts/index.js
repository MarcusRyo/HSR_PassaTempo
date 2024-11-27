banners.forEach(banner => {
    const content = document.getElementById('content');
    const bannerElement = document.createElement('div');
    bannerElement.classList.add('bannerBox');
    
    bannerElement.innerHTML = `
        <div class="bannerImage">
            <img class="characterImg" src="${banner.img}" alt="${banner.characterName}" />
            <img class="characterElement" src="${getElementIcon(banner.element)}" alt="${getElementType(banner)}" />
            <img class="characterPath" src="${getPathIcon(banner.path)}" alt="${getPath(banner)}" />
        </div>
        <div class="bannerInfo">
            <h2 class="characterName">${banner.characterName}</h2>
            <p>Caminho: ${getPath(banner)}</p>
            <p>Elemento: ${getElementType(banner)}</p>
            <p>Versão de lançamento: ${banner.releaseVersion}</p>
            <p>${getPhase(banner)}</p>
            <p>Cone de Luz: ${banner.lightCone}</p>
        </div>
    `;
    content.appendChild(bannerElement);

});

function getElementType(character) {
    let element = '';
    if (character.element === 'Wind') {
        element = 'Vento';
    } else if (character.element === 'Quantum') {
        element = 'Quantico';
    } else if (character.element === 'Imaginary') {
        element = 'Imaginário';
    } else if (character.element === 'Fire') {
        element = 'Fogo';
    } else if (character.element === 'Lightning') {
        element = 'Raio';
    } else if (character.element === 'Ice') {
        element = 'Gelo';
    } else if (character.element === 'Physical') {
        element = 'Físico';
    }

    return element;
}

function getElementIcon(characterElement) {
    let elementIcon = "";
    elements.forEach(element => {
        if (element.name == characterElement) {
            elementIcon = element.icon;
        }
    });
    return elementIcon;
}

function getPath(character) {
    let path = "";
    if (character.path === 'Hunt') {
        path = 'Caça';
    } else if (character.path === 'Erudition') {
        path = 'Erudição';
    } else if (character.path === 'Nihility') {
        path = 'Inexistencia';
    } else if (character.path === 'Abundance') {
        path = 'Abundancia';
    } else if (character.path === 'Destruction') {
        path = 'Destruição';
    } else if (character.path === 'Preservation') {
        path = 'Preservação';
    } else if (character.path === 'Harmony') {
        path = 'Harmonia';
    }

    return path;
}

function getPhase(character) {
    if (character.phase === 1) {
        return 'Primeira Parte';
    } else if (character.phase === 2) {
        return 'Segunda Parte';
    }
}

function getPathIcon(characterPath){
    let pathIcon = "";
    paths.forEach(path => {
        if (path.name == characterPath) {
            pathIcon = path.icon;
        }
    });
    console.log(pathIcon);
    return pathIcon;
}