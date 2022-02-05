const checkNumbersOfConstants = (body) => {
  const properties = Object.keys(body);
  if (properties[0] !== 'displayName') return { code: 400, message: '"displayName" is required' };
  if (properties[1] !== 'email') return { code: 400, message: '"email" is required' };
  if (properties[2] !== 'password') return { code: 400, message: '"password" is required' };
  if (properties[3] !== 'image') return { ...body, image: 'null' };
  return body;
};

const isDisplayNameValid = (name) => {
  const MIN_CHARACTERS = 8;
  console.log(name);
  if (!name || typeof name !== 'string' || name.length < MIN_CHARACTERS) {
    return {
      code: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return true;
};

const isEmailValid = (email) => {
  if (email.includes(undefined)) {
    return { code: 400, message: '"email" is required' };
  }

  if (!(email.includes('@') && email.includes('.com'))) {
    return { code: 400, message: '"email" must be a valid email' };
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    return { code: 400, message: '"email" must be a valid email' };
  }

  // validar se imagem já existe no banco de dados
  // return { code: 409, message: 'User already registered' };
  return true;
};

const isPasswordValid = (password) => {
  const NUM_CHARACTERS = 6;
  if (password.length !== NUM_CHARACTERS) {
    return { code: 400, message: '"password" length must be 6 characters long' };
  }
  return true;
};

const propertiesValidation = (displayName, email, password) => {
    const nameIsValid = isDisplayNameValid(displayName);
    if (nameIsValid.code) return nameIsValid;

    const emailIsValid = isEmailValid(email);
    if (emailIsValid.code) return emailIsValid;

    const passwordIsValid = isPasswordValid(password);
    if (passwordIsValid.code) return passwordIsValid;

    return true;
};

module.exports = async (req, res, next) => {
  try {
    const initialValidation = checkNumbersOfConstants(req.body);
    if (initialValidation.code) {
      return res.status(initialValidation.code).json(initialValidation.message);
    }

    const { displayName, email, password } = initialValidation;

    const isValid = propertiesValidation(displayName, email, password);
    if (isValid.code) return res.status(isValid.code).json(isValid.message);

    next();
  } catch (err) {
    next(err);
  }
};
