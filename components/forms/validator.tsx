class Validator {
  static test(value: string, valueType: 'email' | 'password') {
    if (!value) {
      return { isValid: false, message: Validator.message[valueType].required }
    }
    if (valueType === 'password' && value.length < 8) {
      return { isValid: false, message: Validator.message.password.tooShort }
    }
    if (!Validator.pattern[valueType].test(value)) {
      return { isValid: false, message: Validator.message[valueType].format }
    }
    return { isValid: true, message: '' }
  }

  static testEmpty(value: string, valueType: 'email' | 'password') {
    if (!value) {
      return { isValid: false, message: Validator.message[valueType].required }
    }
    return { isValid: true }
  }

  private static message = {
    email: {
      required: 'メールアドレスを入力してください。',
      format: 'メールアドレスのフォーマットが不正です。',
    },
    password: {
      required: 'パスワードを入力してください。',
      tooShort: 'パスワードは8文字以上にしてください。',
      format: '半角英小文字・大文字・数字をそれぞれ1種類以上を含めてください。',
    },
  }

  private static pattern = {
    email: /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
    password: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/,
  }
}

export default Validator
