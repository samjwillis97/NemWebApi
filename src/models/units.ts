import db from "../loaders/sqlite";

const UnitKeys: string[] = ['id', 'duid', 'station_name', 'region_id', 'fuel_source', 'technology_type', 'max_capacity']

export const getAllUnits = (
  callback: UnitArrayCallback,
  limit?: number,
  offset?: number,
  filter?: UnitFilter,
  sort?: string,
) => {
  let where: boolean = false
  let sql = "SELECT duid, station_name, region_id, fuel_source, technology_type, max_capacity FROM units";
  if (filter) {
    if (filter.duid) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("like" in filter.duid) {
        sql += `duid LIKE '%${filter.duid.like}%'`
      } else if ("eq" in filter.duid) {
        sql += `duid='${filter.duid.eq}'`
      }
    }
    if (filter.station_name) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("like" in filter.station_name) {
        sql += `station_name LIKE '%${filter.station_name.like}%'`
      } else if ("eq" in filter.station_name) {
        sql += `station_name='${filter.station_name.eq}'`
      }
    }
    if (filter.region_id) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("like" in filter.region_id) {
        sql += `region_id LIKE '%${filter.region_id.like}%'`
      } else if ("eq" in filter.region_id) {
        sql += `region_id='${filter.region_id.eq}'`
      }
    }
    if (filter.fuel_source) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("like" in filter.fuel_source) {
        sql += `fuel_source LIKE '%${filter.fuel_source.like}%'`
      } else if ("eq" in filter.fuel_source) {
        sql += `fuel_source='${filter.fuel_source.eq}'`
      }
    }
    if (filter.technology_type) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("like" in filter.technology_type) {
        sql += `technology_type LIKE '%${filter.technology_type.like}%'`
      } else if ("eq" in filter.technology_type) {
        sql += `technology_type='${filter.technology_type.eq}'`
      }
    }
    if (filter.max_capacity) {
      if (where) {
        sql += '\nAND '
      } else {
        sql += '\nWHERE '
        where = true
      }
      if ("eq" in filter.max_capacity) {
        sql += `max_capacity=${filter.max_capacity.eq}`
      } else {
        let prev: boolean = false
        if ("gr" in filter.max_capacity) {
          sql += `max_capacity > ${filter.max_capacity.gr}`
          prev = true
        }
        if ("le" in filter.max_capacity) {
          if (prev) {
            sql += '\nAND '
          }
          sql += `max_capacity < ${filter.max_capacity.le}`
        }
      }
    }
  }
  if (limit) {
    sql += `\nLIMIT ${limit}`
  }
  if (offset) {
    sql += `\nOFFSET ${offset}`
  }
  if (sort) {
    if (UnitKeys.indexOf(sort) != -1 || UnitKeys.indexOf(sort.slice(1)) != -1) {
      if (sort.slice(0, 1) == "-") {
        sql += `\nORDER BY ${sort.slice(0, 1)} DESC`
      } else {
        sql += `\nORDER BY ${sort} ASC`
      }
    }
  }
  db.all(sql, [], (err: any, rows: any) => {
    if (err) {
      callback(err, rows);
    }
    callback(null, rows)
  });
}

module.exports = {
  getAllUnits,
}