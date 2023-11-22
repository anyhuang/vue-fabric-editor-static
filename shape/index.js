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
    label: "嗨兴",
    value: "hingin",
    dir: "8-hingin",
  },
  {
    label: "fabric",
    value: "fabric",
    dir: "9-fabric",
  },
  {
    label: "卡通",
    value: "carton",
    dir: "10-carton",
  },
  {
    label: "其他",
    value: "other",
    dir: "11-other",
  },
];

const baseUrl =
  "https://raw.githubusercontent.com/anyhuang/vue-fabric-editor-static/main/shape/";
JSONData.data = group.map((group_item, i) => {
  const list = [];
  let arr = fs.readdirSync(group_item.dir);
  arr.forEach((item) => {
    let name = item.split("-");
    // 去掉第一个
    name.shift();
    name = name.join("-");

    name = name.replace(".svg", "");

    list.push({
      label: group_item.label + name,
      value: name,
      tempUrl: baseUrl + group_item.dir + "/" + item,
      src: baseUrl + group_item.dir + "/" + item,
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
