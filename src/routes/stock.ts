export default [
    {
        name: "Stock_Remain",
        path: "/stock_remain",
        component: () => import("../pages/stock/stock_remain/stock_remain.vue"),
        meta: {
            title: "Stock Remain",
        },
    },
    {
        name: "Product_Boken",
        path: "/product_boken",
        component: () => import("../pages/stock/stock_boken/product_boken.vue"),
        meta: {
            title: "Product Boken",
        },
    },
]