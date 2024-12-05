const APIController = (function () {
    const clientId = '0d594fae287f4bcca5d4b327c62f67a6';
    const clientSecret = '0295e6e28cab42f4be10b4e42606bcaa';
    let token = '';

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        token = data.access_token;
        console.log('Access Token: ', token);
    }

    (async () => {
        await _getToken();
    })();

    const getArtist = async (token) => {
        const result = await fetch(`https://api.spotify.com/artists/7Gi6gjaWy3DxyilpF1a8Is?si=ORNrGjx6QfiL2h5lD2LlDw`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        console.log(data);
        return data;
    }

    return {
        getToken: () => token,
        getArtist
    };
})();

export {
    APIController
}