export default [
    {
        name: "Daily_Account",
        path: "/daily_account",
        component: () => import("../pages/account/daily_account/manage_dailyaccount.vue"),
        meta: {
            title: "Daily Account",
        },
    },
    {
        name: "Pattern_ recive",
        path: "/pattern_recive",
        component: () => import("../pages/account/pattern receive/pattern_received.vue"),
        meta: {
            title: "Pattern Recive",
        },
    },
]