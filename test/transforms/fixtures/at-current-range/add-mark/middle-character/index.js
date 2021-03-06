
import assert from 'assert'

export default function (state) {
  const { document, selection } = state
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 1,
    focusKey: first.key,
    focusOffset: 2
  })

  const next = state
    .transform()
    .select(range)
    .addMark('bold')
    .apply()

  assert.deepEqual(next.selection.toJS(), range.toJS())

  return next
}
