const Mutations = {
  async createItem(parent, args, ctx, info) {
    // Check if they are logged in
    console.log({ ctx: ctx.db });
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};

module.exports = Mutations;
