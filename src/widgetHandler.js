import 'babel-polyfill'
import map from 'lodash/fp/map'
import keys from 'lodash/fp/keys'
import flattenDeep from 'lodash/fp/flattenDeep'
import flatten from 'lodash/fp/flatten'
import filter from 'lodash/fp/filter'


export const flattenWigdets = _json => _flattenWidgets(_json.assets, extractWidgets(_json))

export const _flattenWidgets = (assets, widgets) => 
  Promise.resolve(flatten(assets.map(asset => (filter(widget => widget['asset-uuid'] === asset.uuid)(widgets)).map(pairing => {return {...asset, ...pairing}}))))

export const extractWidgets = data => {
    const _keys = keys(data.sizes)
    const _extractions = [
      map(k => data.sizes[k]['frames'].map(frame => frame.widgets))(map(k=>k)(_keys)),
      map(k => data.sizes[k]['background']['widgets'])(map(k=>k)(_keys))
    ]
    return flattenDeep(map(e=>e)(_extractions))
}


