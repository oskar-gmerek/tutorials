Object.assign(window.search, {"doc_urls":["community/01-Cloudflare_worker_with_SurrealDB.html#connection-variables-from-environment","community/01-Cloudflare_worker_with_SurrealDB.html#connection-variables-defined-in-code","community/01-Cloudflare_worker_with_SurrealDB.html#strong-type-result"],"index":{"documentStore":{"docInfo":{"0":{"body":127,"breadcrumbs":7,"title":3},"1":{"body":46,"breadcrumbs":8,"title":4},"2":{"body":30,"breadcrumbs":7,"title":3}},"docs":{"0":{"body":"Cloudflare worker with SurrealDB Tutorial by Micha de Vries I am building an open-source social media platform with cloudflare workers. Internally, we we're in debate between projects like Cloudflare D1 and Planetscale but eventually we stumbled upon SurrealDB . It really made a lot of sense for our project, so we went with it! To be able to achieve this, we built our own database driver , which is also available via NPM . Below follow a few examples on how to use the database drivers with cloudflare workers. In these examples we use the worker typescript template. import Surreal from 'surrealdb-cloudflare'; // Type safety, typescript example :D\ntype Env = { HOST: string; USER: string; PASS: string; NAMESPACE: string; DATABASE: string;\n} // We can update the connection variables later on, as we don't have them available here just yet...\nconst db = new Surreal(); export default { async fetch( request: Request, env: Env ): Promise<Response> { // If database not yet connected, let's update the connection details. if (!db.connected()) db.connect({ host: env.HOST ?? '', username: env.USER ?? '', password: env.PASS ?? '', namespace: env.NAMESPACE ?? '', database: env.DATABASE ?? '' }); // Example query: Retrieves all records from table 'table'. let res = await db.getRecords('table'); console.log(res[0].result); return new Response(\"Hello World!\"); },\n};","breadcrumbs":"Introduction » Cloudflare worker with SurrealDB » Connection variables from environment","id":"0","title":"Connection variables from environment"},"1":{"body":"import Surreal from 'surrealdb-cloudflare'; // We can update the connection variables later on, as we don't have them available here just yet...\nconst db = new Surreal({ host: 'http://surreal.domain.com', username: 'root', password: 'password', namespace: 'awesome', database: 'example'\n}); export default { async fetch( request: Request ): Promise<Response> { // Example query: Retrieves all records from table 'table'. let res = await db.getRecords('table'); console.log(res[0].result); return new Response(\"Hello World!\"); },\n};","breadcrumbs":"Introduction » Cloudflare worker with SurrealDB » Connection variables defined in code","id":"1","title":"Connection variables defined in code"},"2":{"body":"const res = await db.getRecords<{ id: string; username: string; status: \"verified\" | \"unverified\";\n}>('user'); res.forEach(record => { // Everything in \"result\" is now strong typed with the defined type. const { result: { id, username, status } } = record; console.log(`${id} - User ${username} is ${status}`);\n});","breadcrumbs":"Introduction » Cloudflare worker with SurrealDB » Strong type result","id":"2","title":"Strong type result"}},"length":3,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.0},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"(":{"`":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"[":{"0":{"]":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"t":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}},"d":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}},"s":{"(":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}},"e":{"b":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{".":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":2.0},"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{":":{"/":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{".":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"i":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}},"p":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"<":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}}}}},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":2.23606797749979},"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"d":{"b":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}},"n":{"a":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":2.0}}}}},"l":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"(":{"`":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"[":{"0":{"]":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"t":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}},"d":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}},"s":{"(":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}},"e":{"b":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{".":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":2.0},"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{":":{"/":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{".":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"i":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}},"p":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"<":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}}}}},"s":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":2.23606797749979},"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"d":{"b":{"df":3,"docs":{"0":{"tf":2.0},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":2.0}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}},"n":{"a":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0},"2":{"tf":1.0}}}}},"l":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});