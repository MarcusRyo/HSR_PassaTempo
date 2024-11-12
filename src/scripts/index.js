
banners.forEach(banner => {
    const teste = document.getElementById('teste');
    const bannerElement = document.createElement('div');

    const element = getElementType(banner);
    console.log(element);
    
    bannerElement.innerHTML = `
        <img src="${banner.img}" alt="${banner.name}" />
        <h2>${banner.characterName}</h2>
        <p>${banner.path}</p>
        <p>${element}</p>
        <img src="${getElementIcon(element)}" alt="${element}" />
        <p>Versão de lançamento: ${banner.releaseVersion}</p>
        <p>Metade: ${banner.phase}</p>
        <p>Cone de Luz ${banner.lightCone}</p>

    `;
    teste.appendChild(bannerElement);

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

function getElementIcon(element) {
    let elementIcon = "";
    if (element === 'Vento') {
        elementIcon = './src/img/Wind.png';
    } else if (element === 'Quantico') {
        elementIcon = './src/img/Quantum.png';
    } else if (element === 'Imaginário') {
        elementIcon = './src/img/Imaginary.png';
    } else if (element === 'Fogo') {
        elementIcon = './src/img/Fire.png';
    } else if (element === 'Raio') {
        elementIcon = './src/img/Lightning.png';
    } else if (element === 'Gelo') {
        elementIcon = './src/img/Ice.png';
    } else if (element === 'Físico') {
        elementIcon = './src/img/Physical.png';
    }

    return elementIcon;
}
