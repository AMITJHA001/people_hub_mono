import {Router} from "express"
import healthRoutes from "../modules/health/health.routes.js"
import v1 from "./v1/index.js"
import v2 from "./v2/index.js"


const router = Router();


v1.use("/health",healthRoutes)
router.use("/v1",v1)
router.use("/v2",v2)

export default router;

