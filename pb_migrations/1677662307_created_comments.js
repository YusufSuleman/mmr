migrate((db) => {
  const collection = new Collection({
    "id": "oivuuvq2sdu4x0k",
    "created": "2023-03-01 09:18:26.913Z",
    "updated": "2023-03-01 09:18:26.913Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "wuhbftor",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "author = @request.auth.name",
    "updateRule": "author = @request.auth.name",
    "deleteRule": "author = @request.auth.name",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oivuuvq2sdu4x0k");

  return dao.deleteCollection(collection);
})
