export default [
    {
        name: "Manage_Staff",
        path: "/manage_staff",
        component: () => import("../pages/staff/manage_staff/manage_staff.vue"),
        meta: {
            title: "Manage Staff",
        },
    },
    {
        name: "type_staff",
        path: "/type_staff",
        component: () => import("../pages/staff/type_staff/type_staff.vue"),
        meta: {
            title: "Type staff",
        },
    },
    {
        name: "Position_Staff",
        path: "/position_staff",
        component: () => import("../pages/staff/position_staff/position_staff.vue"),
        meta: {
            title: "Position Staff",
        },
    },
]