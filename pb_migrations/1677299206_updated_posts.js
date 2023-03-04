migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("as1w1tb4unzxjdo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amulmpes",
    "name": "previewContent",
    "type": "text",
    "required": false,
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
  collection.schema.removeField("amulmpes")

  return dao.saveCollection(collection)
})
