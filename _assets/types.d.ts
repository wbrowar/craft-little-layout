export type SelectionMode = 'box' | 'single'

export type IconValue =
  | 'alignTop'
  | 'alignCenterVertical'
  | 'alignBottom'
  | 'alignCenter'
  | 'alignLeft'
  | 'alignCenterHorizontal'
  | 'alignRight'
  | 'arrowUp'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowsInCorners'
  | 'arrowsOutCardinal'
  | 'arrowsOutCorners'
  | 'textAlignLeft'
  | 'textAlignCenter'
  | 'textAlignRight'
  | 'textAlignJustified'

export type BoxIcons = Record<
  string,
  {
    description?: string
    id: IconValue
  }
>
