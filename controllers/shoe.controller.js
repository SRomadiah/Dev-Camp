const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
const prisma = new PrismaClient();

class ShoeController {
  static async listPage(req, res) {
    const result = await prisma.shoe.findMany();
    res.render("pages/list", { shoes: result });
  }
  static async detailPage(req, res, next) {
    const result = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/detail", { shoe: result });
  }
  static async addProduct(req, res, next) {
    res.render("pages/addProduct");
  }
  static async aboutProduct(req, res, next) {
    res.render("pages/about");
  }
}

module.exports = ShoeController;
