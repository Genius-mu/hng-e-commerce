// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   cartItems: defineTable({
//     cartId: v.string(),
//     productId: v.string(),
//     name: v.string(),
//     price: v.number(),
//     quantity: v.number(),
//     image: v.string(),
//   })
//     // 👇 These replace your _indexes.ts file
//     .index("byCartAndProduct", ["cartId", "productId"])
//     .index("byCartId", ["cartId"]),
// });


import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  carts: defineTable({
    cartId: v.string(),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        image: v.string(),
        quantity: v.number(),
      })
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_cartId", ["cartId"]),
});