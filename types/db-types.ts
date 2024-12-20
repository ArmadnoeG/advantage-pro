export interface DBunit {
  id: number
  type: 'B' | 'BR' | 'R' | 'BT' | 'Z' | 'BM' | 'H' | 'J' | 'K' | 'L' | 'M'
  name: string
  status: '0-8' | '0-9' | 'no-driver' | 'dispatched' | 'other'
  driver: string
  km: number
  model: string
  event: '6-13' | '6-14' | '6-10'
  specialty: string
}
export interface DBdrivers {
  id: number
  name: string
  company?: string
  authorize: string
}