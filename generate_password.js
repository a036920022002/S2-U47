function generatePassword(options) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@#$%^&*()-_+={}[]|;:"<>,.?/'
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  if (options.excludeCharacters) {

    collection = collection.filter(character => {
      return !options.excludeCharacters.includes(character)
    })
  }
  if (collection.length === 0) {
    return "The password can't be generate"
  }

  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    password += sample(collection)
  }

  //console.log(collection)
  return password

}

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  //console.log(index)
  return array[index]
}


module.exports = generatePassword