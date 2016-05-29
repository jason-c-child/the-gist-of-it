import 'babel-polyfill'
import * as seedData from '../util/dataSeed.json'
import * as extractedWidgets from '../util/extractedWidgets.json'
import * as flattenedWidgets from '../util/flattenedWidgets.json'
import {extractWidgets, _flattenWidgets} from '../lib/widgetHandler'
import {assert} from 'chai'
import _ from 'lodash'

describe('widgetHandler', () => {
  describe('extractWidgets', () => {
    it('extracts the correct number of widgets from seed', async () => {
      const _widgets = await extractWidgets(seedData)
      assert.equal(_widgets.length, extractedWidgets.widgets.length)
    })

    it('extracts the expected widgets', async () => {
      const _widgets = await extractWidgets(seedData)
      assert.deepEqual(_widgets, extractedWidgets.widgets)
    })
  })
  describe('_flattenWidgets', async () => {
    it('returns a Promise', async () => {
      const _ret = _flattenWidgets(seedData.assets, extractedWidgets.widgets)
      assert.isOk(_ret.then)
    })
    it('returns the correct number of flattened widgets', async () => {
      const _ret = await _flattenWidgets(seedData.assets, extractedWidgets.widgets)
      assert.equal(_ret.length, flattenedWidgets.widgets.length)
    })
    it('returns expected flattened widgets', async () => {
      const _ret = await _flattenWidgets(seedData.assets, extractedWidgets.widgets)
      assert.deepEqual(_ret, flattenedWidgets.widgets)
    })
  })
})