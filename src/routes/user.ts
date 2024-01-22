export default [
    {
        name: "User",
        path: "/user",
        component: () => import("../pages/user/user/user.vue"),
        meta: {
            title: "User",
        },
    },
    {
        name: "Role",
        path: "/role",
        component: () => import("../pages/user/user_role/role.vue"),
        meta: {
            title: "Role",
        },
    },
]