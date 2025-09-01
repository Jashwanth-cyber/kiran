export function handleDemo(req, res) {
  // Example: respond with query parameters or a default message
  const name = req.query.name ?? "Guest";

  res.status(200).json({
    message: `Hello, ${name}! This is the demo endpoint.`,
    timestamp: new Date().toISOString(),
  });
}
