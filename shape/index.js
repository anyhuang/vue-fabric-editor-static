/*
 * @Author: 黄某人
 * @Date: 2023-11-04 17:14:05
 * @Description:
 */
var fs = require("fs");

const JSONData = {
  data: [],
};

const group = [
  {
    label: "基础",
    value: "basic",
    dir: "1-basic",
  },
  {
    label: "边框",
    value: "border",
    dir: "2-border",
  },
  {
    label: "植物",
    value: "plant",
    dir: "3-plant",
  },
  {
    label: "动物",
    value: "animal",
    dir: "4-animal",
  },
  {
    label: "节日",
    value: "festival",
    dir: "5-festival",
  },
  {
    label: "图案",
    value: "pattern",
    dir: "6-pattern",
  },
  {
    label: "零件",
    value: "parts",
    dir: "7-parts",
  },
  {
    label: "其他",
    value: "other",
    dir: "8-other",
  },
];

const baseUrl = "https://github.com/anyhuang/vue-fabric-editor-static/blob/main/shape/";
JSONData.data = group.map((group_item, i) => {
  const list = [];
  let arr = fs.readdirSync(group_item.dir);
  arr.forEach((item) => {
    let name  = item.split("-");
    // 去掉第一个
    name.shift();
    name = name.join("-");

    name = name.replace(".svg", "");

    list.push({
      label: group_item.label + name,
      value: name,
      tempUrl: baseUrl + group_item.dir +'/' + item + '?raw=true',
      src:  baseUrl + group_item.dir +'/' + item + '?raw=true',
    });

   
  });

  return {
    label: group_item.label,
    value: group_item.value,
    list,
  };
});

fs.writeFile("type.json", JSON.stringify(JSONData), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("写入成功");
});
