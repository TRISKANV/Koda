const Gamedig = require('gamedig');
const fs = require('fs');

const servers = [
    { type: 'cs16', host: '45.235.98.52', port: 27015 }, // 
    { type: 'tf2', host: '162.254.192.86', port: 27015 }  //
];

async function updateKoda() {
    const results = [];
    for (const s of servers) {
        try {
            const state = await Gamedig.query(s);
            results.push({
                name: state.name,
                map: state.map,
                players: `${state.players.length}/${state.maxplayers}`,
                ping: state.ping,
                status: 'online'
            });
        } catch (e) {
            results.push({ name: 'Offline Server', status: 'offline' });
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(results, null, 2));
}

updateKoda();
