const Main = imports.ui.main;
const { Meta, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { BaseTilingLayout } = Me.imports.tilingManager.tilingLayouts.baseTiling;

/* exported FloatLayout */
var FloatLayout = class FloatLayout extends BaseTilingLayout {
    onTile() {}

    onTileDialogs(windows) {}
};

FloatLayout.key = 'float';
