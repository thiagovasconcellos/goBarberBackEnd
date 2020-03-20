import File from '../models/File';

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
      });

      return res.json(file);
    } catch (error) {
      return res.send(error).status(401);
    }
  }
}

export default new FileController();
