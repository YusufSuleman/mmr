migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtpbkknc",
    "name": "author",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  // remove
  collection.schema.removeField("dtpbkknc")

  return dao.saveCollection(collection)
})
