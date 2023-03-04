migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrc5rhb9",
    "name": "comments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "oivuuvq2sdu4x0k",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  // remove
  collection.schema.removeField("lrc5rhb9")

  return dao.saveCollection(collection)
})
