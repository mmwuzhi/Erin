import { atom } from "jotai"

import {
  ENewtabMode,
  ESearchEngine,
  IAsideSettingConfig,
  IReadItLaterItem,
  ISettingConfig
} from "~types"

export const DEFAULT_SETTING = {
  mode: ENewtabMode.wallpaper,
  showBookmark: false,
  showWallpaperMarket: false,
  showSearchBar: false,
  hadInit: false,
  searchEngine: ESearchEngine.google,
  showBrowserTreeNav: false,
  showReadItLater: false,
  showClock: false
} as ISettingConfig

export const settingConfigStore = atom(DEFAULT_SETTING)

export const currentWallpaperStore = atom("")
export const ReadItLaterStore = atom([] as IReadItLaterItem[])

export const syncBookmarksStore = atom(
  [] as chrome.bookmarks.BookmarkTreeNode[]
)

export const showAsideSettingStore = atom(false)
export const DEFAULT_ASIDE_SETTING = {
  bookmark: {
    iconSize: 24
  },
  searchBar: {
    iconSize: 24
  },
  shortcut: {
    showWallpaperMarket: "Alt+.",
    showBookmark: "Alt+,",
    selectPrevWallpaper: "Alt+[",
    selectNextWallpaper: "Alt+]",
    showSearchComponent: "Alt+/",
    showTabTree: "Ctrl+Alt+N"
  }
} as IAsideSettingConfig

export const asideSettingConfigStore = atom(DEFAULT_ASIDE_SETTING)
