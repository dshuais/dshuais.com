/*
 * @Author: dushuai
 * @Date: 2023-03-18 23:26:10
 * @LastEditors: dushuai
 * @LastEditTime: 2023-03-19 00:11:11
 * @Description: 自动获取预加载图片列表
 */
// 图片列表类型接口
interface FilesObject {
  [key: string]: string[];
}

let fs = require("fs"),
  path = require("path"),
  filesList: FilesObject = {},
  imgPath: string = "../../assets/img",
  imgPathName: string = "ROOT";

function readFileList(
  dir: string,
  dirName: string,
  filesList: FilesObject = {}
) {
  const files: string[] = fs.readdirSync(dir);
  files.forEach((file) => {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      readFileList(`${dir}/${file}`, file, filesList);
    } else {
      if (!filesList[dirName]) {
        filesList[dirName] = [];
      }
      let fullPath: string = `${dir}/${file}`.replace(
        `${path.resolve(__dirname, imgPath)}/`,
        ""
      );
      filesList[dirName].push(fullPath);
    }
  });
  return filesList;
}

readFileList(path.resolve(__dirname, imgPath), imgPathName, filesList);
let str: string = `/* eslint-disable */
const imgList=${JSON.stringify(filesList)}
export default imgList
`;
fs.writeFileSync(path.resolve(__dirname, "../assets/ts/imgList.ts"), str);

export {};
