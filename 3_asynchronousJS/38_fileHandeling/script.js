const fs = require('fs');
const path = require("path");

// Specify the file path you want to read
const filePath = path.resolve(__dirname, "hello.json");

// Use the fs.readFile method to read the file

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        res.send("Error");
    }

    todo_list = JSON.parse(data);
    todo_list.push({
        'id': 4,
        'title': "some title",
        'description': "some description"
    });
    fs.writeFile(filePath, JSON.stringify(todo_list), (err) => {
        if (err) {
            console.error(err);
            res.send("Error");
        }
        res.json({ 'current_array': todo_list });
    });
});
