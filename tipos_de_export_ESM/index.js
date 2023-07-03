import { inline } from './inline.js'
/* Podemos renomear esse import da seguinte forma:
import { inline as i } from './inline.js'
e usaríamos i()
*/
import defaultInline from './inline.js'
/* Para o import default podemos dar o nome que quisermos como:
import d from './inline.js'
que ainda daria certo, a função defultInline seria exportada
por padrão. Só pode haver um export default por arquivo.
*/
import { group } from './non-inline.js'
import exportDefault from './non-inline.js'

inline()
defaultInline()

group()
exportDefault()
