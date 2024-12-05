const createTrackHTML = (item, index) => `
    <div>
        <img src="${item.album?.images[0]?.url || 'https://via.placeholder.com/100'}" alt="Track Cover">
        <div>
            <h4>${index + 1}. ${item.name}</h4>
            <p>${item.artists[0]?.name || 'Artista desconocido'}</p>
            <button class="btn">Ver más</button>
        </div>
    </div>
`;

const createArtistHTML = (item, index) => `
    <div>
        <img src="${item.images[0]?.url || 'https://via.placeholder.com/100'}" alt="${item.name}">
        <div>
            <h4>${index + 1}. ${item.name}</h4>
        </div>
    </div>
`;

const createAlbumHTML = (item, index) => `
    <div>
        <img src="${item.images[0]?.url || 'https://via.placeholder.com/100'}" alt="Album Cover">
        <div>
            <h4>${index + 1}. ${item.name}</h4>
            <p>${item.artists[0]?.name || 'Artista desconocido'}</p>
        </div>
    </div>
`;

const printResultExplore = (results, searchBy) => {
    return results
        .map((item, index) => {
            switch (searchBy) {
                case 'track':
                    return createTrackHTML(item, index);
                case 'artist':
                    return createArtistHTML(item, index);
                case 'album':
                    return createAlbumHTML(item, index);
                default:
                    return `<p>No se encontraron resultados para ${searchBy}.</p>`;
            }
        })
        .join('');
};

export {
    printResultExplore
}