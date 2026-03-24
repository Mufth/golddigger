export function createAlert(type, price) {
    const alert = {
        type,
        price,
        timestamp: new Date().toISOString()
    }
    console.log('Alert created:', alert)
    // Here you could also save the alert to a database or send it to another service
}