import { TLNuApp, TLNuBinding } from '@tldraw/next'
import {
  NuBoxShape,
  NuDotShape,
  NuPenShape,
  NuPolygonShape,
  NuEllipseShape,
  NuHighlighterShape,
  Shape,
} from './shapes'
import {
  NuDotTool,
  NuDrawTool,
  NuPolygonTool,
  NuBoxTool,
  NuEllipseTool,
  NuHighlighterTool,
} from './tools'

export class NuApp extends TLNuApp<Shape, TLNuBinding> {
  constructor() {
    super()
    this.registerShapes(
      NuBoxShape,
      NuEllipseShape,
      NuPolygonShape,
      NuPenShape,
      NuHighlighterShape,
      NuDotShape
    )
    this.registerTools(
      NuBoxTool,
      NuEllipseTool,
      NuPolygonTool,
      NuDrawTool,
      NuHighlighterTool,
      NuDotTool
    )
    this.selectTool('select')
  }
}