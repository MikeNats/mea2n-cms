'use struct';

const mogoDdInjection = (bodyAttr) => (
    typeof bodyAttr === 'string' && 
    (bodyAttr.indexOf('script') === 0 || bodyAttr.indexOf('$_GET') === 0 || bodyAttr.indexOf('$_POST') === 0)
  )

export default (body) => { 
  for (let key in body) {
    if (mogoDdInjection(body[key])) {
      return false
    }
  }
  return true
}
 