export const required = value => {
  if (value) return undefined
  return "Wrong message (required-Filed)"
  
}
export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `You can't write more ${maxLength} symbols`
  return undefined
  
}


