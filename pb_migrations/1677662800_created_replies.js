migrate((db) => {
  const collection = new Collection({
    "id": "3gk8i8tx9hf4vxn",
    "created": "2023-03-01 09:26:40.165Z",
    "updated": "2023-03-01 09:26:40.165Z",
    "name": "replies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gfzjsa23",
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
        "id": "837p05sd",
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
        "id": "aobxrfzp",
        "name": "replyingTo",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "oivuuvq2sdu4x0k",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("3gk8i8tx9hf4vxn");

  return dao.deleteCollection(collection);
})
