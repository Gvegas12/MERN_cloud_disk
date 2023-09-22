const fs = require("fs");
const File = require("../models/File");
const config = require("config");

class FileService {
  createDir(file) {
    const filePath = `${config.get("server.file_path")}\\${file.user}\\${
      file.path
    }`;

    return new Promise((res, rej) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return res({ message: "Файл успешно создан" });
        } else {
          return rej({ message: "Файл по такому пути уже существует" });
        }
      } catch (e) {
        return rej({ message: "Ошибка при обработке файла" });
      }
    });
  }
}

module.exports = new FileService();
