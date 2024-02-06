const express = require("express");
const router = express.Router();
let server = null;

const blogRoutes = require("./partials/blog.routes");
const emailRoutes = require("./partials/email.routes");
const userRoutes = require("./partials/user.routes");
const userRoleRoutes = require("./partials/user_role.routes");
const dashboardRoutes = require("./partials/dashboard.routes");
const websiteRoutes = require("./partials/website.routes");
const authRoutes = require("./partials/auth.routes");
const categoryRoutes = require("./partials/category.routes");
const apiRoutes = require("./api.routes");

module.exports = (mainserver) => {
    router.use(apiRoutes());

    router.use(websiteRoutes(mainserver));

    router.use(authRoutes());
    router.use(dashboardRoutes());
    router.use(blogRoutes());
    router.use(emailRoutes());
    router.use(userRoutes());
    router.use(userRoleRoutes());
    router.use(categoryRoutes());

    return router;

};
