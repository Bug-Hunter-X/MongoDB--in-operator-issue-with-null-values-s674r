```javascript
// Solution: Handle null values separately
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```