export const required = value => {
  if (value) return undefined
  return "some error"
}

export const maxLength = (max) => value => {
  if (value.length > max ) return  "Field is max length"
  return undefined
}
