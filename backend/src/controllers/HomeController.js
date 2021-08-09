class HomeController {
  index(req, res) {
    res.json({
      Ok: true,
    });
  }
}

export default new HomeController();
