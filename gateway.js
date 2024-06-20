const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/event-service",
  createProxyMiddleware({ target: "http://localhost:7000", changeOrigin: true })
);
app.use(
  "/payment-service",
  createProxyMiddleware({ target: "http://localhost:8567", changeOrigin: true })
);
app.use(
  "/booking-service",
  createProxyMiddleware({ target: "http://localhost:5050", changeOrigin: true })
);
app.use(
  "/notification-service",
  createProxyMiddleware({ target: "http://localhost:8003", changeOrigin: true })
);
app.use(
  "/auth-service",
  createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true })
);

PORT = 5555;
// Start Express server
app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});
