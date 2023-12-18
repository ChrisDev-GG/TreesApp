
class Tree {
  arbol_id: number;
  nombre_arbol: string;
  ubicacion_id: number|null;
  created_at: string;
  latitud: string|number;
  longitud: string|number;

  constructor(
    arbol_id: number,
    nombre_arbol: string,
    ubicacion_id: number|null = null,
    created_at: string,
    latitud: string|number = '',
    longitud: string|number = '',
  ) {
    this.arbol_id = arbol_id;
    this.nombre_arbol = nombre_arbol;
    this.ubicacion_id = ubicacion_id;
    this.created_at = created_at;
    this.latitud = latitud;
    this.longitud = longitud;
  }


}
