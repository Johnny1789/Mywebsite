export default [
    {
        name: "Money_Save",
        path: "/money_save",
        component: () => import("../pages/money/money_saved/money_save.vue"),
        meta: {
            title: "Money Save",
        },
    },
    {
        name: "Type_Money",
        path: "/type_money",
        component: () => import("../pages/money/type_money/type_money.vue"),
        meta: {
            title: "Type Money",
        },
    },
]