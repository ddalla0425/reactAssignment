const BASE_URL = '/v4/';
const CLIENT_ID = 'ivucfolmhiro02m7vyymjg3vui0vis'

export async function getToken() {
    const CLIENT_SECRET = 'chfuzcz4o6by8dvo7zaf2kx2qkl95d'

    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    const data = await response.json();
    return data.access_token;
}

export async function getGameList(token) {
    const url = `${BASE_URL}games`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${token}`,
        },
        body: "fields id, name, summary, cover.*;"

    });

    const data = await response.json();
    console.table('게임 : ', data)

    return data;
}

export async function getGameDetail(gameId, token) {
    const url = `${BASE_URL}games`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${token}`,
        },
        body: `fields id, name, summary, cover.*, screenshots.*; where id = ${gameId};`

    });
    const data = await response.json();
    console.table('게임 상세 : ', data)
    return data[0];
}







