migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oivuuvq2sdu4x0k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3amjb3m7",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyj7vfav",
    "name": "post",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "as1w1tb4unzxjdo",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oivuuvq2sdu4x0k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3amjb3m7",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyj7vfav",
    "name": "post",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "as1w1tb4unzxjdo",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
