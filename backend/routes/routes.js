// routes/routes.js
import express from "express";
import usersRouter from "./api/usersRouter.js";
import productsRouter from "./api/productsRouter.js";

//import loginRouter from "./loginRouter.js";

const routes = express.Router();

//routes.use("/login", loginRouter);
routes.use("/api/users", usersRouter);
routes.use("/api/products", productsRouter);


export default routes;


// import express from "express";
// import usersRouter from "./usersRouter.js";
// import productsRouter from "./productsRouter.js";
// import categoryRouter from "./categoryRouter.js";
// import ordersRouter from "./orderRouter.js";
// import paymentRouter from "./paymentRouter.js";
// import cartRouter from "./cartRouter.js";
// import reviewRouter from "./reviewRouter.js";

// const router = express.Router();

// router.use("/users", usersRouter);
// router.use("/products", productsRouter);
// router.use("/categories", categoryRouter);
// router.use("/orders", ordersRouter);
// router.use("/payments", paymentRouter);
// router.use("/cart", cartRouter);
// router.use("/reviews", reviewRouter);

// export default router;
