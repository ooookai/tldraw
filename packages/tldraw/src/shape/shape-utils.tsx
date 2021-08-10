import { Rectangle, Ellipse, Arrow, Draw, Text } from './shapes'
import { TLDrawShapeType, TLDrawShape, TLDrawShapeUtil, TLDrawShapeUtils } from './shape-types'

export const tldrawShapeUtils: TLDrawShapeUtils = {
  [TLDrawShapeType.Rectangle]: new Rectangle(),
  [TLDrawShapeType.Ellipse]: new Ellipse(),
  [TLDrawShapeType.Draw]: new Draw(),
  [TLDrawShapeType.Arrow]: new Arrow(),
  [TLDrawShapeType.Text]: new Text(),
}

export type ShapeByType<T extends keyof TLDrawShapeUtils> = TLDrawShapeUtils[T]

export function getShapeUtilsByType<T extends TLDrawShape>(shape: T): TLDrawShapeUtil<T> {
  return tldrawShapeUtils[shape.type as T['type']] as TLDrawShapeUtil<T>
}

export function getShapeUtils<T extends TLDrawShape>(shape: T): TLDrawShapeUtil<T> {
  return tldrawShapeUtils[shape.type as T['type']] as TLDrawShapeUtil<T>
}

export function createShape<TLDrawShape>(type: TLDrawShapeType, props: Partial<TLDrawShape>) {
  return tldrawShapeUtils[type].create(props)
}