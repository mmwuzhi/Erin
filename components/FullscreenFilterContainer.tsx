import clsx from "clsx"

import { EZIndexRecord } from "~types"
import { onStopPaClickPropagation } from "~utils/browser"

export default function ({
  children = null,
  onClickOutside,
  classnames,
  enableContextMenu = false,
  zIndex = EZIndexRecord.fullscreenLayout
}: {
  children?: React.ReactNode
  onClickOutside?: () => void
  classnames?: string
  enableContextMenu?: boolean
  zIndex?: number
}) {
  return (
    <div
      className={clsx("fixed inset-0 w-screen h-screen", classnames)}
      style={{ zIndex }}
      onClick={() => {
        onClickOutside?.()
      }}
      onContextMenu={enableContextMenu ? undefined : onStopPaClickPropagation}>
      <div
        onClick={enableContextMenu ? undefined : onStopPaClickPropagation}
        className="inline-block">
        {children}
      </div>
    </div>
  )
}
