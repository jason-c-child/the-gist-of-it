export function* logger(next){
  var start = new Date
  yield next
  var ms = new Date - start
  console.log('method: %s querystring: %s path: %s - ms: [%s]', this.method, this.querystring, this.path, ms)
}
