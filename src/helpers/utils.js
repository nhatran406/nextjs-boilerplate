export const isEmpty = input => {
  if (input === null || input === undefined) {
    return true;
  }
  if (typeof input === 'string' && input.trim() === '') {
    return true;
  }
  if (Array.isArray(input) && input.length === 0) {
    return true;
  }
  if (typeof input === 'object' && Object.keys(input).length === 0) {
    return true;
  }
  return false;
};

export const removeSpace = string => {
  let str = string;
  str = str.toLowerCase();
  str = str.replace(/\s/g, '');
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, '');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, '');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, '');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, '');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, '');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, '');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\"|\'|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    '',
	); // eslint-disable-line
  return str;
};
