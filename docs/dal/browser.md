# Browser Integration

In a typical React, Angular or Vue application you install Qwiery (and plugins) via NPM. If you wish to use Qwiery
purely as a client-side library you can do so via the UMD files as follows:

```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8"/>
    <title></title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js"></script>
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <script type="module" src="qwiery.umd.js"></script>
    <script type="module" src="qwiery-utils.umd.js"></script>
    <script type="module" src="qwiery-graphs.umd.js"></script>
    <script>

        async function go() {
            const div = document.getElementById("output");
            div.innerHTML = QwieryUtils.Utils.randomLetters(50)
            const q = new Qwiery();
            console.log(Qwiery.version);
            const n = await q.createNode("a");
            console.log(n);
        }
    </script>
</head>

<body>
<div class="container">
    <div class="btn btn-primary" onclick="go()">Random Letters</div>
    <div id="output"></div>
</div>
</body>
</html>
```

The jQuery and such are not strictly necessary and Qwiery does not depend on them, they're just there to make the
playing more enjoyable. The essential bit is the fact that the various Qwiery elements are accessible through Qwiery,
QwieryUtils, QwieryGraphs and so on.
