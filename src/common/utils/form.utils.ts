export const emailRules = {
  required: 'E-mail deve ser preenchido',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Digite um formato de e-mail válido',
  },
};

export const passwordRules = {
  required: 'Senha deve ser preenchido',
  minLength: {
    value: 8,
    message: 'Senha deve ter no mínimo 8 caracteres',
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).+/,
    message: 'Senha deve conter letras e números',
  },
};

export const confirmPasswordRules = {
  required: 'Confirmar senha deve ser preenchido',
};
