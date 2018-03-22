## Lassie API Docs

This API Doc generator makes a standalone static documentation of the Lassie Core codebase you have running locally.

Run the following command while in the lassie-api-docs root directory:
```
./src/git/bin/apidoc -i ~/htdocs/lassie-core/app/application -o export/ -t template/
```

Please note that you should adjust the ```-i``` parameter accordingly to your file system to allocate the application directory of your local copy of Lassie Core.
