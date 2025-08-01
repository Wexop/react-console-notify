export function hexToRgba( hex: string, alpha: number ) {
  const r = parseInt( hex.slice( 1, 3 ), 16 )
  const g = parseInt( hex.slice( 3, 5 ), 16 )
  const b = parseInt( hex.slice( 5, 7 ), 16 )

  return `rgba(${ r }, ${ g }, ${ b }, ${ alpha })`
}

export function darkenHexColor( hex: string, amount: number ): string {
  const r = Math.max( 0, parseInt( hex.slice( 1, 3 ), 16 ) - amount )
  const g = Math.max( 0, parseInt( hex.slice( 3, 5 ), 16 ) - amount )
  const b = Math.max( 0, parseInt( hex.slice( 5, 7 ), 16 ) - amount )
  return `#${ r.toString( 16 ).padStart( 2, "0" ) }${ g
    .toString( 16 )
    .padStart( 2, "0" ) }${ b.toString( 16 ).padStart( 2, "0" ) }`
}
