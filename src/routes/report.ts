export default [
    {
        name: "ReportSale",
        path: "/report/sale",
        component: () => import("../pages/report/report_sale.vue"),
        meta: {
            title: "Report Sale",
        },
    },
    {
        name: "Report Stock",
        path: "/report/stock",
        component: () => import("../pages/report/report_stock.vue"),
        meta: {
            title: "Report Stock",
        },
    },
]