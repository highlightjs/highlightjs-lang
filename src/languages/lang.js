/* 
  Language: Minecraft Lang
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

module.exports = function (hljs) {
  return {
    name: "lang",
    case_insensitive: false,
    // §[0-9a-gk-or]{1}
    contains: [
      {
        className: "attr",
        begin: "^[A-Za-z0-9]",
        end: "[A-Za-z0-9](?==)|(?=#)",
        contains: [
          {
            begin: "[A-Za-z0-9\\-_]+:[A-Za-z0-9\\-_]+",
            end: "(?=\\.)",
          },
        ],
      },
      {
        className: "string",
        begin: "(?<=\\=)[A-Za-z]",
        end: "(?!.)|(?=#)",
        contains: [
          {
            className: "built_in",
            begin: "§(?=[0-9a-gk-or])",
            end: "[0-9a-gk-or]",
          },
          {
            className: "variable",
            begin: ":_",
            end: ":|(?!.)",
          },
          {
            className: "regexp",
            begin: "%([1-9]+\\$)?(\\d)*(\\.(\\d)+)?(?=[dcbsfexh0-9])",
            end: "[dcbsfexh0-9]",
          },
          {
            className: "title",
            begin: "<(?=[A-Za-z0-9 :]+>)",
            end: ">|(?!.)",
          },
        ],
      },
      hljs.COMMENT("#", "$"),
    ],
  };
};
