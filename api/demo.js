import { handleDemo } from "../routes/demo.js"; 

// Vercel handler
export default function handler(req, res) {
  return handleDemo(req, res);
}
