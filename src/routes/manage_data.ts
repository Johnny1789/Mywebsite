export default [
    {
        name: "Manage_Type",
        path: "/manage_type",
        component: () => import("../pages/manage_data/manage_type/manage_type.vue"),
        meta: {
            title: "Manage Type",
        },
    },
    {
        name: "Manage_Unit",
        path: "/manage_unit",
        component: () => import("../pages/manage_data/manage_unit/manage_unit.vue"),
        meta: {
            title: "Manage_Unit",
        },
    },
    {
        name: "Manage_Table",
        path: "/manage_table",
        component: () => import("../pages/manage_data/manage_table/manage_table.vue"),
        meta: {
            title: "Manage Table",
        },
    },
]