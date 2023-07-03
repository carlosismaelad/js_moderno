export function inline() {
  console.log('Export nomeado inline')
}

export default function defaultInline() {
  console.log('Export default inline')
}

/* O export default pode ser uma função anônima e ele continuará 
funcionando normalmente:
export default function() {
  console.log('Export default inline')
}
*/
