

export async function handleLive(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

    const sendPrice = () => {
        const price = (Math.random() * 100 + 2000).toFixed(2);
        res.write(`data: ${JSON.stringify({ price })}\n\n`);
    }

    sendPrice();
    const interval = setInterval(sendPrice, 5000);

    req.on('close', () => {
        clearInterval(interval);
    });

}