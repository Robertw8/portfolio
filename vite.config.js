import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["js-big-decimal"],
	},
	base: "/portfolio/",
	server: {
		// ...
		middleware: [
			(req, res, next) => {
				const mimeType = mime.lookup(req.url);
				if (mimeType) {
					res.setHeader("Content-Type", mimeType);
				}
				next();
			},
		],
	},
});
