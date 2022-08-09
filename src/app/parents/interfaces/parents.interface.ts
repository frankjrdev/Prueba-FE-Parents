export interface Parent {
  id: Number;
  parent?: String;
  title: String;
  created_at: String;
  updated_at: String;
  translation?: Translation
}

export interface Translation {
  id: number,
  node_id: number,
  locale: string,
  title: string,
  created_at?: any,
  updated_at?: any
}
