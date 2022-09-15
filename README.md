| URL                                                         | Without middlware       | With middleware                           |
| ----------------------------------------------------------- | ----------------------- | ----------------------------------------- |
| [/en-gb/nextjs.org](http://localhost:3000/en-gb/nextjs.org) | en-gb content ✔         | flash of en-gb content ❌                 |
| [/en-ca/nextjs.org](http://localhost:3000/en-ca/nextjs.org) | en-ca content ✔         | flash of en-ca content ❌                 |
| [/](http://localhost:3000)                                  | en-gb/nextjs.org page ✔ | en-gb/nextjs.org page keeps refreshing ❌ |
| [/en-ca/](http://localhost:3000/en-ca)                      | en-ca/nextjs.org page ✔ | en-ca/nextjs.org page ✔                   |
| [/en-gb/](http://localhost:3000/en-gb)                      | 404 ✔                   | 404 ✔                                     |
