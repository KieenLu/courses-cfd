const ERROR_MESSAGE = {
  required: "Vui lòng điền đầy đủ thông tin",
  regexp: "Vui lòng nhập đúng định dạng",
};

const REGEXP = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  facebook:
    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  website:
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
};

export const validate = (rules, forms) => {
  const errorObject = {};
  for (let name in rules) {
    for (let rule of rules[name]) {
      if (rule.required) {
        if (!forms[name]?.trim()) {
          errorObject[name] = rule.message || ERROR_MESSAGE.required;
        }
      }
      if (forms[name] && rule.regexp) {
        let regexp = rule.regexp;
        if (regexp in REGEXP) {
          regexp = REGEXP[regexp];
        } else if (!(regexp instanceof RegExp)) {
          regexp = new RegExp();
        }
        if (!regexp.test(forms[name])) {
          errorObject[name] = rule.message || ERROR_MESSAGE.regexp;
        }
      }
    }
  }
  return errorObject;
};
export const required = (message) => ({
  message,
  required: true,
});
export const regexp = (pattern, message) => ({
  regexp: pattern,
  message,
});
