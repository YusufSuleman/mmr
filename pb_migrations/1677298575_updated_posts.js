migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
