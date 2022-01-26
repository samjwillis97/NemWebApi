interface Unit {
  id: number | null
  duid: string
  station_name: string
  region_id: string
  fuel_source: string
  technology_type: string
  max_capacity: number
}

interface UnitFilter {
  duid?: StringEqFilter | StringLikeFilter
  station_name?: StringEqFilter | StringLikeFilter
  region_id?: StringEqFilter | StringLikeFilter
  fuel_source?: StringEqFilter | StringLikeFilter
  technology_type?: StringEqFilter | StringLikeFilter
  max_capacity?: NumberCompFilter | NumberEqFilter
}

type UnitArrayCallback = (err: any, row: any) => void

