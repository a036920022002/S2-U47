function generatePassword() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@#$%^&*()-_+={}[]|;:"<>,.?/'
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }
  const collection = []
  if (options.lowerCaseLetters === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.upperCaseLetters === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  console.log('collection', collection)
  console.log('options', options)

}

generatePassword()