# Anchor Block Tune for Editor.js 2.20
Append field with anchor to any block.

## Preview
![Preview image](https://github.com/VolgaIgor/editorjs-anchor/raw/main/asset/screenshot.png)

### Required
- Editor.js v2.20+

## Installation

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage
### For all blocks
```javascript
var editor = EditorJS({
  // ...
  tools: {
    // ...
    anchorTune: AnchorTune
  },
  tunes: ['anchorTune']
  // ...
});
```

### For particular block
```javascript
var editor = EditorJS({
  // ...
  tools: {
    // ...
    anchorTune: AnchorTune,
    header: {
      class: Header,
      tunes: ['anchorTune']
    }
  }
  // ...
});
```

## Config Params
You can add a localized string
```javascript
new Editorjs({
  // ...
  tools: {
    anchorTune: AnchorTune
  },
  i18n: {
    tools: {
      anchorTune: {
        'Anchor': 'Якорь'
      }
    }
  },
})
```

## Output data
Example for [Header block](https://github.com/editor-js/header)
```json
{
  "type": "header",
  "data": {
    "text": "Header",
    "level": 2
  },
  "tunes": {
    "anchorTune": {
      "anchor": "header-anchor"
    }
  }
}
```
If the anchor field is empty, then the tune data will not be serialized into JSON.