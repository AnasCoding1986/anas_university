import { Router } from "express";
import { StudentRoute } from "../modules/student/student.route";
import { UserRoute } from "../modules/users/user.route";

const router = Router();

const moduleRoutes = [
        {
        path: '/user',
        route: UserRoute,
    },
    {
        path: '/student',
        route: StudentRoute,
    },

];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;