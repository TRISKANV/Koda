import Gamedig from 'gamedig';

export default {
  async fetch(request) {
    // 
    const { searchParams } = new URL(request.url);
    const host = searchParams.get('host');
    const port = parseInt(searchParams.get('port') || '27015');
    const type = searchParams.get('type') || 'cs16';

    if (!host) return new Response("Koda: Falta el Host", { status: 400 });

    try {
      const state = await Gamedig.query({
        type: type,
        host: host,
        port: port,
        maxAttempts: 1,
        socketTimeout: 2000
      });

      return new Response(JSON.stringify(state), {
        headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Offline" }), {
        status: 200,
        headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
  }
};
