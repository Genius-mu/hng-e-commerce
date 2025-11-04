import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Add or update a cart item
export const addOrUpdateCartItem = mutation({
  args: {
    cartId: v.string(),
    item: v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      image: v.string(),
      quantity: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const { cartId, item } = args;

    // Check if cart exists
    const existingCart = await ctx.db
      .query("carts")
      .withIndex("by_cartId", (q) => q.eq("cartId", cartId))
      .first();

    if (existingCart) {
      // Check if item already exists in cart
      const existingItems = existingCart.items || [];
      const itemIndex = existingItems.findIndex((i) => i.id === item.id);

      if (itemIndex >= 0) {
        // Update quantity of existing item
        existingItems[itemIndex].quantity += item.quantity;
      } else {
        // Add new item to cart
        existingItems.push(item);
      }

      // Update cart
      await ctx.db.patch(existingCart._id, {
        items: existingItems,
        updatedAt: Date.now(),
      });

      return { success: true, cartId: existingCart._id };
    } else {
      // Create new cart
      const newCartId = await ctx.db.insert("carts", {
        cartId,
        items: [item],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      return { success: true, cartId: newCartId };
    }
  },
});

// Get cart by cartId
export const getCart = query({
  args: { cartId: v.string() },
  handler: async (ctx, args) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_cartId", (q) => q.eq("cartId", args.cartId))
      .first();

    return cart;
  },
});

// Clear cart
export const clearCart = mutation({
  args: { cartId: v.string() },
  handler: async (ctx, args) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_cartId", (q) => q.eq("cartId", args.cartId))
      .first();

    if (cart) {
      await ctx.db.delete(cart._id);
      return { success: true };
    }

    return { success: false, message: "Cart not found" };
  },
});