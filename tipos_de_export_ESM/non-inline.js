function group() {
  console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault() {
  console.log('Export default não-inline')
}

export { group }
export default exportDefault
// Os exports também podem ser feitos no começo do código
