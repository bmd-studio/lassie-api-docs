define({ "api": [
  {
    "type": "get",
    "url": "api/model/",
    "title": "Execute model method",
    "version": "1.1.0",
    "name": "Get_Model",
    "group": "Model",
    "permission": [
      {
        "name": "Model API"
      }
    ],
    "description": "<p>Execution of a public or protected method found in a specific model. When a method is protected we will use the API key and its right records</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/model\n    ?name=group_model\n    &method=get_groups\n    &active_only=true\n    &order_column=name\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Model.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>The Method you want to execute.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "argument",
            "description": "<p>Argument you want to pass to the Method. Note that this varies per method (see model documentation).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mixed",
            "optional": false,
            "field": "result",
            "description": "<p>The response depends on which Method you have called.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n{\n    \"183\": {\n        \"id\": \"183\",\n        \"active\": \"1\",\n        \"name\": \"Bar Management\",\n        \"__origin_table_name\": \"rights_def_groups\",\n        \"__origin_record_id\": \"183\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFound",
            "description": "<p>The <code>name</code> of the Model was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MethodNotFound",
            "description": "<p>The <code>method</code> of the Model was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid method name and model name parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Model",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/model/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/person_information/",
    "title": "Get personal information",
    "version": "1.1.0",
    "name": "Get_Person_Information",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Fetches personal information through a person specific API Key.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_information\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "person_record",
            "description": "<p>A populated person record containing personal details, bank information and current account balances.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n{\n    \"id\": \"1202274\",\n    \"create_timestamp\": \"2015-08-14 12:26:04\",\n    \"update_timestamp\": \"2015-08-18 09:15:15\",\n    \"phone_mobile\": \"06-12345678\",\n    \"email_primary\": \"example@gmail.com\",\n    \"birthdate\": \"1997-03-07 00:00:00\",\n    \"bank_iban\": \"NL80SNSB0969365480\",\n    \"first_balance\": 9.51,\n    \"second_balance\": 4.88,\n    ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PersonNotFound",
            "description": "<p>The <code>person_id</code> could not be found in the Person database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": false,\n    \"error\": \"Unknown person\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_information/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/person_payments/",
    "title": "Get payments",
    "version": "1.1.0",
    "name": "Get_Person_Payments",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Fetches a limited amount of payments that were most recently received for a specific person.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_payments\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selection",
            "description": "<p>Determines which associated payments one wants to fetch. <code>first</code>: payments associated with the first account balance (Bar Module). <code>second</code>: payments associated with the second account balance. <code>other</code>: remaining payments linked to this person such as events and memberships. <code>all</code>: all payments associated with this person.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>A list of the most recent payments associated with this person.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n[\n    {\n        \"id\": \"37281\",\n        \"active\": \"1\",\n        \"product_id\": \"Grolsch Pilsner\",\n        \"product_table_name\": \"bar_products\",\n        \"target_type_id\": \"0\",\n        \"target_id\": \"0\",\n        \"source_id\": \"none\",\n        \"costcenter_id\": \"1140\",\n        \"quantity\": \"4\",\n        \"delta_balance\": \"3.56\",\n        \"request_id\": \"7a8ab39e3f05c76dcde5d54a0687bab2\",\n        \"create_timestamp\": \"2015-02-02 19:27:42\",\n        \"type_id\": \"Token\",\n        \"has_refund_request\": 0,\n        \"__origin_record_id\": \"37281\",\n        \"__origin_table_name\": \"bar_transactions\",\n        \"__module_name\": \"bar\",\n        \"__type_id\": \"1\",\n        \"__source_id\": \"1202274\",\n        \"__product_id\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_payments/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/person_create_api/",
    "title": "Create person API key",
    "version": "1.1.0",
    "name": "Post_Person_Api",
    "group": "Person_Auth",
    "permission": [
      {
        "name": "Person Auth API"
      }
    ],
    "description": "<p>Creates a new Person API record to be used by a specific device / application to fetch personal information.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_create_api --data\n    \"username=example@gmail.com\n    &password=952bf87c967660b7bbd4e1eb08cefc92\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The login identity associated with the targeted person (e.g. email address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>An encrypted password. The plain-text password can be used, because we are using an SSL protocol.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "api_key_record",
            "description": "<p>An API Key Record containing all the Person API credentials and details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"id\": \"46\",\n     \"active\": \"1\",\n     \"api_key\": \"28bdccc9cd9792c6e37dda66372620b7\",\n     \"api_secret\": \"53b60f95789b3a43edc5fc9aac8618c7\",\n     \"name\": \"Person API for John Doe\",\n     \"type_id\": \"2\",\n     \"target_id\": \"1201717\",\n     \"description\": \"Personal data API for John Doe requested by 127.0.0.1 using windows\",\n     \"responsible_name\": \"John Doe\",\n     \"responsible_email\": \"example@gmail.com\",\n     \"create_timestamp\": \"2016-02-26 22:31:10\",\n     \"update_timestamp\": \"2016-02-26 22:31:10\",\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>The <code>username</code> and/or <code>password</code> were invalid or not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username and password parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_create_api/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/person_authenticate/",
    "title": "Verify person authentication",
    "version": "1.1.0",
    "name": "Post_Person_Authenticate",
    "group": "Person_Auth",
    "permission": [
      {
        "name": "Person Auth API"
      }
    ],
    "description": "<p>Check whether person credentials (username and password) are valid for login without the creation of any new API records.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_authenticate --data\n    \"username=example@gmail.com\n    &password=952bf87c967660b7bbd4e1eb08cefc92\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The login identity associated with the targeted person (e.g. email address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>An encrypted password. The plain-text password can be used, because we are using an SSL protocol.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>A response identifying success or failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>The <code>username</code> and/or <code>password</code> were invalid or not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username and password parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_authenticate/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/person_create/",
    "title": "Create new person record",
    "version": "1.1.0",
    "name": "Post_Create_Person",
    "group": "Person_Management",
    "permission": [
      {
        "name": "Person Management API"
      }
    ],
    "description": "<p>Insert a new person record prefilled with the fields of your choice. You should pay attention to which fields are required and/or validated in another way. For example within your person creation forms the first name and last name might be required. This would also apply to the API functionality.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_create --data\n    \"first_name=Pieter\n    &last_name=Jansen\n    &external_id=9039493\n    &email_primary=pieter.jansen@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>A response identifying success or failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"person_id\": 12345,\n     \"error\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": [\n       \"The primary email field is required.\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Management",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_create/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Whether this person can be used throughout the system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initials",
            "description": "<p>The first characters of all the names.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The full first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "infix",
            "description": "<p>Optional characters in between the first name and last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The full last name / surname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": "<p>An identifier that might refer to an external system. This is used to synchronize data with the external system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The name this person uses to login into Lassie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_street",
            "description": "<p>The street where the person currently lives. Note this is without number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_number",
            "description": "<p>The house number of the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_zip",
            "description": "<p>The zipcode / postal code of the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_city",
            "description": "<p>The city where the person currently lives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_country",
            "description": "<p>The country where the person resides.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_mobile",
            "description": "<p>The mobile phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_home",
            "description": "<p>An alternative phone number (e.g. parents).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_primary",
            "description": "<p>The main email address of the person. This email address can also be used to login.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_secondary",
            "description": "<p>An alternative email addresse (e.g. private or company email address).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pref_email",
            "description": "<p>The preference where to send the email to. Please note this should be an ID identifying one of the settings in: administration/email_preferences/</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pref_newsletter",
            "description": "<p>The preference whether or not to receive a newsletter. Please note this should be an ID identifying one of the settings in: administration/newsletter_preferences/</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender_id",
            "description": "<p>The ID identifying the gender. Note this ID should match the ID of one of the settings in: administration/genders</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language_id",
            "description": "<p>The ID identyfing the native language of the person. Note this ID should match the ID of one of the settings in: administraion/languages</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department_id",
            "description": "<p>The ID identyfing which department the person is from. Note that this ID should match the ID of one of the records in: administration/departments</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subdepartment_id",
            "description": "<p>The ID identyfing which sub department the person is from. Note that this ID should match the ID of one of the records in: administration/sub_departments</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Any informal nick names that are given to the person.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature_form_id",
            "description": "<p>An administrative reference ID of a possible form the person has signed to join the asosciation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fcm_token",
            "description": "<p>The Firebase Cloud Messaging (FCM) access token to send notifications to mobile devices of this person.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_active",
            "description": "<p>Whether the token is active or not (0 = inactive, 1 = active).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_id",
            "description": "<p>The ID of the token the person uses to pay for transactions (e.g. in the bar).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_iban",
            "description": "<p>The IBAN number of the bank account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_bic",
            "description": "<p>The BIC number of the bank the bank account is registred at.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection",
            "description": "<p>Whether or not automatic collection is active (0 = inactive, 1 = active).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_id",
            "description": "<p>An administrative reference ID of a possible form the person has signed to allow automatic collections.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_fee",
            "description": "<p>A custom fee the person might want to donate additionally to the association.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_date",
            "description": "<p>The date the agreement form for the automatic ocllection was signed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/person_update/",
    "title": "Update existing person record",
    "version": "1.1.0",
    "name": "Post_Update_Person",
    "group": "Person_Management",
    "permission": [
      {
        "name": "Person & Person Management"
      }
    ],
    "description": "<p>Update an existing person record. Please note two API types are allowed to use this method: a Person API and Person Management API. The key difference is that a Person Management API can alter all person records by specifying the additional person_id and/or external_id field. A Person API will ignore these fields and uses the persion information record linked to this specific API key. Also, a new record will be created if no person ID or external ID is passed.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/person_update --data\n    \"first_name=Pieter\n    &last_name=Jansen\n    &external_id=9039493\n    &email_primary=pieter.jansen@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>A response identifying success or failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"person_id\": 12345,\n     \"error\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>The <code>person_id</code> and/or <code>external_id</code> were invalid or not found. Please note that these fields are only required with a Person Management API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": [\n       \"The primary email field is required.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Management",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/person_update/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Whether this person can be used throughout the system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initials",
            "description": "<p>The first characters of all the names.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The full first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "infix",
            "description": "<p>Optional characters in between the first name and last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The full last name / surname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": "<p>An identifier that might refer to an external system. This is used to synchronize data with the external system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The name this person uses to login into Lassie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_street",
            "description": "<p>The street where the person currently lives. Note this is without number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_number",
            "description": "<p>The house number of the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_zip",
            "description": "<p>The zipcode / postal code of the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_city",
            "description": "<p>The city where the person currently lives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address_country",
            "description": "<p>The country where the person resides.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_mobile",
            "description": "<p>The mobile phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_home",
            "description": "<p>An alternative phone number (e.g. parents).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_primary",
            "description": "<p>The main email address of the person. This email address can also be used to login.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_secondary",
            "description": "<p>An alternative email addresse (e.g. private or company email address).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pref_email",
            "description": "<p>The preference where to send the email to. Please note this should be an ID identifying one of the settings in: administration/email_preferences/</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pref_newsletter",
            "description": "<p>The preference whether or not to receive a newsletter. Please note this should be an ID identifying one of the settings in: administration/newsletter_preferences/</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender_id",
            "description": "<p>The ID identifying the gender. Note this ID should match the ID of one of the settings in: administration/genders</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language_id",
            "description": "<p>The ID identyfing the native language of the person. Note this ID should match the ID of one of the settings in: administraion/languages</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "department_id",
            "description": "<p>The ID identyfing which department the person is from. Note that this ID should match the ID of one of the records in: administration/departments</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subdepartment_id",
            "description": "<p>The ID identyfing which sub department the person is from. Note that this ID should match the ID of one of the records in: administration/sub_departments</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Any informal nick names that are given to the person.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature_form_id",
            "description": "<p>An administrative reference ID of a possible form the person has signed to join the asosciation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fcm_token",
            "description": "<p>The Firebase Cloud Messaging (FCM) access token to send notifications to mobile devices of this person.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_active",
            "description": "<p>Whether the token is active or not (0 = inactive, 1 = active).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_id",
            "description": "<p>The ID of the token the person uses to pay for transactions (e.g. in the bar).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_iban",
            "description": "<p>The IBAN number of the bank account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_bic",
            "description": "<p>The BIC number of the bank the bank account is registred at.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection",
            "description": "<p>Whether or not automatic collection is active (0 = inactive, 1 = active).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_id",
            "description": "<p>An administrative reference ID of a possible form the person has signed to allow automatic collections.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_fee",
            "description": "<p>A custom fee the person might want to donate additionally to the association.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "automatic_collection_date",
            "description": "<p>The date the agreement form for the automatic ocllection was signed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/transaction_account/",
    "title": "Get account",
    "version": "1.1.0",
    "name": "Get_Account",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get an account record stating the current balance of money. For this to work you need to specify (1) the type of account (<code>first_balance</code>, <code>second_balance</code> or <code>general_balance</code>) and (2) the account identifier.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_account\n    ?transaction_account_name=first_balance\n    &transaction_account_id=57dk49sk3ks\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_account_name",
            "description": "<p>The account name identifies which account type to get. <code>first_balance</code>: payments associated with the first balance account (e.g. Bar Module). <code>second_balance</code>: payments associated with the second balance account. <code>general_balance</code>: payments associated with the general balance account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_account_id",
            "description": "<p>The account identifier requesting the specific account within the <code>transaction_account_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "account_record",
            "description": "<p>An account record containing the current balance for the <code>transaction_account_name</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"id\": \"1211337\",\n     \"active\": \"1\",\n     \"first_name\": \"John\",\n     \"infix\": \"\",\n     \"last_name\": \"Doe\",\n     \"initials\": \"J.\",\n     \"external_id\": \"757856\",\n     \"username\": \"s135118\",\n     \"create_timestamp\": \"2015-08-14 12:50:40\",\n     \"update_timestamp\": \"2015-08-14 12:51:09\",\n     \"token_active\": \"1\",\n     \"token_id\": \"57dk49sk3ks\",\n     \"first_balance\": 5.7,\n     \"owner_name\": \"John Doe\",\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountNameNotFound",
            "description": "<p>The <code>transaction_account_name</code> of the Model was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountIdNotFound",
            "description": "<p>The <code>transaction_account_id</code> of the Method was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid account name and account ID parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction_account/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/transaction_product_categories/",
    "title": "Get product categories",
    "version": "1.1.0",
    "name": "Get_Product_Categories",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get all the available product categories in the associated Module.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_product_categories\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product_category_records",
            "description": "<p>A collection of product categories active in the associated Module.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"1\": {\n         \"id\": \"1\",\n         \"active\": \"1\",\n         \"order_id\": \"4\",\n         \"name\": \"Food\",\n         \"__origin_table_name\": \"shop_product_categories\",\n         \"__origin_record_id\": \"1\"\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction_product_categories/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/transaction_products/",
    "title": "Get products",
    "version": "1.1.0",
    "name": "Get_Products",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get all the available products in the associated Module.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_products\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product_records",
            "description": "<p>A collection of products active in the associated Module.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"1\": {\n         \"id\": \"1\",\n         \"active\": \"1\",\n         \"order_id\": \"1\",\n         \"name\": \"Coca Cola\",\n         \"category_id\": \"5\",\n         \"purchase_price\": \"0.60\",\n         \"retail_price\": \"0.60\",\n         \"retail_quantity\": \"1\",\n         \"costcenter_id\": \"4110\",\n         \"image_path\": \"shop_products/image_path/logoshare.jpg\",\n         \"image_path_base_url\": \"http://lassie.example.com/uploads/\",\n         \"__origin_table_name\": \"shop_products\",\n         \"__origin_record_id\": \"1\",\n         \"quantity_properties\": {\n             \"total\": -13958,\n             \"increase\": 0,\n             \"sales\": -13958,\n             \"loss\": 0\n         }\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction_products/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/transaction/",
    "title": "Get transaction",
    "version": "1.1.0",
    "name": "Get_Transaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get a set of transaction by their request ID from the associated Module. This allows an external application to fetch the transactions after it has performed the transaction.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/transaction\n    ?request_id=29665e12d21685197e6034ab22257931\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_id",
            "description": "<p>The request ID of the required set of transactions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transaction",
            "description": "<p>records  A collection of transactions with this request ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n [{\n     \"109300\": {\n     \"id\": \"109300\",\n     \"active\": \"1\",\n     \"type_id\": \"3\",\n     \"source_id\": \"balance from Opendag 8-1-2016\",\n     \"product_id\": \"Coca Cola Zero\",\n     \"product_table_name\": \"shop_products\",\n     \"quantity\": \"1\",\n     \"delta_balance\": \"0.60\",\n     \"costcenter_id\": \"4110\",\n     \"request_id\": \"29665e12d21685197e6034ab22257931\",\n     \"create_timestamp\": \"2016-02-25 17:46:19\",\n     \"update_timestamp\": \"2016-02-25 17:46:19\",\n     \"unique_id\": \"3e0bb6ea22755f7b3f499ba054953105\",\n     ...\n  }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequestId",
            "description": "<p>The <code>request_id</code> was invalid or not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"status\": false,\n    \"error\": \"The request ID is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/transaction_types/",
    "title": "Get transaction types",
    "version": "1.1.0",
    "name": "Get_Transaction_Types",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get all the available transaction types active in the associated Module.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_types\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transaction_types",
            "description": "<p>A collection of transaction types active in the associated Module.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"1\": {\n         \"transaction_type_id\": \"1\",\n         \"transaction_type_name\": \"Token\",\n         \"source_type_id\": \"4\",\n         \"source_type_name\": \"token - bar\",\n         \"account_name\": \"first_balance\",\n         \"order_id\": \"2\"\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction_types/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/transaction/",
    "title": "Post transaction",
    "version": "1.1.0",
    "name": "Post_Transaction",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Creation of a new transaction containing one or more products at once. An account reference can also be specified.</p>",
    "examples": [
      {
        "title": "Basic usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_account --data\n    \"transaction_type_id=1\n    &transaction_products={\"1\":{\"product_price\":0.6,\"quantity\":1,\"product_id\":\"1\",\"product_table_name\":\"shop_products\"}}\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &transaction_signature=62455336e856422744675438a4f\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      },
      {
        "title": "Account usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_account --data\n    \"transaction_type_id=4\n    &transaction_source_id=0221365095\n    &transaction_products={\"1\":{\"product_price\":0.6,\"quantity\":1,\"product_id\":\"1\",\"product_table_name\":\"shop_products\"}}\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &transaction_signature=62455336e856422744675438a4f\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_type_id",
            "description": "<p>The record ID of the transaction type which identifies how you are paying (e.g. cash, card, with an account or something else). By getting the available transaction types first you are able to specify this ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_products",
            "description": "<p>JSON array of all the products that should be handled. One needs to specify at least the following parameters for each product: <code>product_id</code>, <code>product_table_name</code> and <code>quantity</code>. You can override the price by specifying the <code>product_price</code> property.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_request_id",
            "description": "<p>An unique ID that identifies this transaction. You should create a new unique ID for each transaction done. This ID helps us to identify whether a transaction is not handled more than one time. For example: when the successful response fails to be received the application is likely to ask for a retry. However the transaction is already handled. The success response will be given again when the same request ID is sent, because transactions are found with this ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_signature",
            "description": "<p>An additional hash to make sure nobody altered the transaction in the process. This hash should be created the same way as the <code>api_hash</code> (see Getting Started), but this time the <code>api_hash_content</code> should be a JSON string of the <code>api_key&gt;</code>:<code>transaction_products</code> (with colon!).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>An array identifying whether the transaction was successfully handled. When a <code>first_balance</code> or <code>second_balance</code> account is associated the new account balance is send along.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_name\": false,\n     \"account_balance\": false\n }",
          "type": "json"
        },
        {
          "title": "Account response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_name\": \"first_balance\",\n     \"account_balance\": 256.54\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountInvalid",
            "description": "<p>The provided account is unknown or is invalid after the transaction. This could be the case when the account doesn't have a high enough balance.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TransactionInvalid",
            "description": "<p>There are many different error responses when the transaction appears to be invalid. The error message elaborates on this.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n     \"module_name\": \"bar\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/transaction/",
    "title": "Upgrade account",
    "version": "1.1.0",
    "name": "Upgrade_account",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Short-hand function to upgrade a specific account.</p>",
    "examples": [
      {
        "title": "Basic usage:",
        "content": "curl -i http://lassie.example.com/api/transaction_upgrade_account --data\n    \"transaction_type_id=1\n    &transaction_account_name=first_balance\n    &transaction_account_id=0220673602\n    &transaction_upgrade_delta_balance=100\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &transaction_signature=62455336e856422744675438a4f\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_type_id",
            "description": "<p>The record ID of the transaction type which identifies how you are paying (e.g. cash, card, with an account or something else). By getting the available transaction types first you are able to specify this ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_account_name",
            "description": "<p>The account name identifies which account type to get. <code>first_balance</code>: payments associated with the first balance account (e.g. Bar Module). <code>second_balance</code>: payments associated with the second balance account. <code>general_balance</code>: payments associated with the general balance account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_account_id",
            "description": "<p>The account identifier requesting the specific account within the <code>transaction_account_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_upgrade_delta_balance",
            "description": "<p>The amount of value you want to increase the account with.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_request_id",
            "description": "<p>An unique ID that identifies this transaction. You should create a new unique ID for each transaction done. This ID helps us to identify whether a transaction is not handled more than one time. For example: when the successful response fails to be received the application is likely to ask for a retry. However the transaction is already handled. The success response will be given again when the same request ID is sent, because transactions are found with this ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_signature",
            "description": "<p>An additional hash to make sure nobody altered the transaction in the process. This hash should be created the same way as the <code>api_hash</code> (see Getting Started), but this time the <code>api_hash_content</code> should be a concatenation of <code>transaction_account_name</code>:<code>transaction_account_id</code>:<code>transaction_upgrade_delta_balance</code> (including the colons!).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>The API key identifying your application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash_content",
            "description": "<p>A random piece of content for a one-time usage that will verify your secret key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_hash",
            "description": "<p>The hash result of a combination of your <code>api_key</code>, <code>api_hash_content</code> and <code>api_secret</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": "<p>An array identifying whether the transaction was successfully handled. When a <code>first_balance</code> or <code>second_balance</code> account is associated the new account balance is send along.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTP/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_name\": false,\n     \"account_balance\": false\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccountInvalid",
            "description": "<p>The provided account is unknown or is invalid after the transaction. This could be the case when the account doesn't have a high enough balance.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TransactionInvalid",
            "description": "<p>There are many different error responses when the transaction appears to be invalid. The error message elaborates on this.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiKey",
            "description": "<p>The <code>api_key</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidApiHash",
            "description": "<p>The <code>api_hash</code> does not match the hash result of the calculation where <code>api_hash_content</code> is used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredApiHash",
            "description": "<p>The <code>api_hash</code> is already used and therefore expired.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n     \"module_name\": \"bar\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "http://188.166.115.34/dev/api/transaction/"
      }
    ]
  }
] });