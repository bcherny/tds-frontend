export type Store = {
  distribution: number
  measure: '15_miles' | '20_miles' | '30_miles'
  standard: 'time_distance' | 'time' | 'distance'
}

export let store: Store = {
  distribution: 0.5,
  measure: '15_miles',
  standard: 'time_distance'
}