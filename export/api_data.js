define({ "api": [
  {
    "type": "get",
    "url": "api/v2/get_validity/",
    "title": "Check for valid API key",
    "version": "2.0.0",
    "name": "Upgrade_account",
    "group": "General",
    "permission": [
      {
        "name": "All"
      }
    ],
    "description": "<p>Use this method to quickly check whether an API is still valid.</p>",
    "examples": [
      {
        "title": "Basic usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/valid --data\n    \"api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "response",
            "description": "<p>An array identifying whether the transaction was successfully handled. The new balance is send along in the response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n }",
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
            "field": "ApiKeyInvalid",
            "description": "<p>The provided API key and API hash are invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The API key or hash is invalid\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "General",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/get_validity/"
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
    "url": "api/v2/lassie/app/key",
    "title": "Get Lassie App key",
    "version": "2.0.0",
    "name": "Lassie_Get_App_Key",
    "group": "Lassie",
    "permission": [
      {
        "name": "Lassie Auth Token"
      }
    ],
    "description": "<p>Get the API key used by the organisation to perform authentication requests and retrieve public information for their app.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/lassie/app/key?auth_token=SECRET",
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
            "field": "auth_token",
            "description": "<p>Authentication token specifically designed for the Lassie App to get the configured Person Auth API key from each instance. Please note that if you remove this Person Auth API key the Lassie App will become unusable. You can configure the key in the administration/settings section.</p>"
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
            "field": "API",
            "description": "<p>key record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"api_key\":\n     {\n         \"id\": \"46\",\n         \"active\": \"1\",\n         \"api_key\": \"28bdccc9cd9792c6e37dda66372620b7\",\n         \"api_secret\": \"53b60f95789b3a43edc5fc9aac8618c7\",\n         \"name\": \"Person Auth API for Demo Lassie\",\n         \"type_id\": \"2\",\n         \"person_id\": \"0\",\n         \"description\": \"Public API key to authorize the organisation app\",\n         \"responsible_name\": \"John Doe\",\n         \"responsible_email\": \"example@gmail.com\",\n         \"create_timestamp\": \"2016-02-26 22:31:10\",\n         \"update_timestamp\": \"2016-02-26 22:31:10\",\n         ...\n     },\n }",
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
            "field": "NoAppConfigured",
            "description": "<p>When there is no App API key record configured.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"There is no App API configured\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Lassie",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/lassie/app/key"
      }
    ]
  },
  {
    "type": "get/post",
    "url": "api/v2/model/",
    "title": "Execute model method",
    "version": "2.0.0",
    "name": "Get_post_Model",
    "group": "Model",
    "permission": [
      {
        "name": "Model API"
      }
    ],
    "description": "<p>Execution of a public or protected method found in a specific model. Private methods are not accessible through the api.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/model\n    ?model_name=group_model\n    &method_name=get_groups\n    &active_only=true\n    &order_column=name\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
            "field": "model_name",
            "description": "<p>The name of the Model.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method_name",
            "description": "<p>The Method you want to execute.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
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
          "content": "HTTPS/1.1 200 Success\n{\n    \"183\": {\n        \"id\": \"183\",\n        \"active\": \"1\",\n        \"name\": \"Bar Management\",\n        \"__origin_table_name\": \"rights_def_groups\",\n        \"__origin_record_id\": \"183\"\n    }\n}",
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
            "description": "<p>The <code>model_name</code> of the Model was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MethodNotFound",
            "description": "<p>The <code>method_name</code> of the Model was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid method name and model name parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Model",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/model/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/accept/",
    "title": "Accept payment account invitation",
    "version": "2.0.0",
    "name": "Accept_Invitation_To_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Accept the invitation the person has gotten for a payment account.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/accept --data\n    \"account_id=10\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_id",
            "description": "<p>The unique ID of the account you want to invite the person to.</p>"
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
            "field": "account",
            "description": "<p>The new account record with the updated rights information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"The requested account could not be found.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/accept/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/create/",
    "title": "Create payment account",
    "version": "2.0.0",
    "name": "Create_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Create a new account this person can use to pay with and whare with other members. You can optionally add parameters for the initial balance upgrade. Please note that no transaction type ID is passed along because only Mollie payments are allowed. This is due to security reasons to prevent people to use their Person API to upgrade various accounts. Mollie payments need a third-party to verify all the payments.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/create --data\n    \"account_name=Test\n    &transaction_upgrade_delta_balance=10\n    &transaction_request_id=tr_1058968389\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "account_name",
            "description": "<p>The name given to the account in order to be identified by the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
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
            "field": "account_balance",
            "description": "<p>The new balance on the account</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "account",
            "description": "<p>The new account record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account_balance\" : 10,\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/create/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/deactivate/",
    "title": "Deactivate payment account",
    "version": "2.0.0",
    "name": "Deactivate_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Deactivates a payments account. Please note that this can be only done by the current owner and only when the account has no money on it. Processes to flag this money as a donation towards the organisation are on the roadmap, because ending at exactly 0,00 is often not possible.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/deactivate --data\n    \"account_id=1337\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "account_id",
            "description": "<p>The unique ID of the account to deactivate owned by the current person.</p>"
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
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"This person does not have the proper owner rights for this account.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/deactivate/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/v2/person/groups/",
    "title": "Get groups",
    "version": "2.0.0",
    "name": "Get_Person_Groups",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Get all the groups this person is currently in</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/groups\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
            "field": "groups",
            "description": "<p>A list of all the groups the person has ever been in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n[\n    131 : {\n     \"id\": \"131\",\n       \"status_id\": \"4\",\n       \"person_id\": \"1201717\",\n       \"group_id\": \"152\",\n       \"function_id\": \"4\",\n       \"issue_date\": \"2013-08-01 00:00:00\",\n       \"expiry_date\": \"2014-08-01 00:00:00\",\n       \"year_id\": \"2013-2014\",\n       \"create_timestamp\": \"2015-08-17 17:14:28\",\n       \"name\": \"Board 2013-2014\",\n       \"active\": \"1\",\n       \"rights_def_groups_id\": \"152\",\n       \"__origin_table_name\": \"rights_person\",\n       \"__origin_record_id\": \"131\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/groups/"
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
    "url": "api/v2/person/information/",
    "title": "Get personal information",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/information\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": true,
            "field": "optional",
            "description": "<p>organisation_information add this parameter in order to request additional information about the organisation. Among this info is name and contact details. But also the Mollie Api Key to process new payments.</p>"
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
            "field": "person_record",
            "description": "<p>A populated person record containing personal details, bank information and current account balances. Note that the <code>cached_balance</code> in the accounts is a last known state of the account. It is possible this value is different from the actual balance also available as the field <code>balance</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"id\": \"1202274\",\n    \"create_timestamp\": \"2015-08-14 12:26:04\",\n    \"update_timestamp\": \"2015-08-18 09:15:15\",\n    \"phone_mobile\": \"06-12345678\",\n    \"email_primary\": \"example@gmail.com\",\n    \"birthdate\": \"1997-03-07 00:00:00\",\n    \"bank_iban\": \"NL80SNSB0969365480\",\n    \"accounts\": [\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Shared Bar Account\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 2.75,\n         \"cached_balance\" : 2.75,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n    ],\n    ...\n}",
          "type": "json"
        },
        {
          "title": "Organisation response:",
          "content": "HTTPS/1.1 200 Success\n{\n   \"id\": \"1202274\",\n    ...\n    \"organisation\": {\n        \"name\": \"Study Association Demo\",\n        \"short_name\": \"Demo\",\n        \"department\": \"Department of Testing Engineers\",\n        \"phone\": \"(+31) 403690027\",\n        \"email\": \"bureau@moeilijkedingen.nl\",\n        \"iban\": \"NL00RABO0124578963\",\n        \"bic\": \"RABONL2U\",\n        \"street\": \"Heezerweg 343\",\n        \"street_additional\": \"Gebouw B\",\n        \"postal_address\": \"5643 KG\",\n        \"city\": \"Eindhoven\",\n        \"country_code\": \"Netherlands\",\n        \"mollie_api_key\": \"\"\n    }\n}",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 204 No Content\n{\n    \"status\": false,\n    \"error\": \"Unknown person\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/information/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/v2/person/payments/",
    "title": "Get payments",
    "version": "2.0.0",
    "name": "Get_Person_Payments",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Fetches a limited amount of payments that were most recently received by a specific person.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/payments\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "optional",
            "description": "<p>selection Defines which associated payments one wants to fetch. <code>account</code>: payments associated with any accounts. <code>subscriptions</code>: payments associated with events and memberships. <code>all</code>: all payments associated with this person.</p>"
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
          "content": "HTTPS/1.1 200 Success\n[\n    {\n        \"id\": \"37281\",\n        \"active\": \"1\",\n        \"product_id\": \"Grolsch Pilsner\",\n        \"product_table_name\": \"bar_products\",\n        \"target_type_id\": \"0\",\n        \"target_id\": \"0\",\n        \"source_id\": \"none\",\n        \"costcenter_number\": \"1140\",\n        \"quantity\": \"4\",\n        \"delta_balance\": \"3.56\",\n        \"request_id\": \"7a8ab39e3f05c76dcde5d54a0687bab2\",\n        \"create_timestamp\": \"2015-02-02 19:27:42\",\n        \"type_id\": \"Token\",\n        \"has_refund_request\": 0,\n        \"__origin_record_id\": \"37281\",\n        \"__origin_table_name\": \"bar_transactions\",\n        \"__module_name\": \"bar\",\n        \"__type_id\": \"1\",\n        \"__source_id\": \"1202274\",\n        \"__product_id\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/payments/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/invite/",
    "title": "Invite to payment account",
    "version": "2.0.0",
    "name": "Invite_To_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Invite a person to join an account by its login identity (e.g. username, primary email adress or person ID)</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/invite --data\n    \"account_id=10\n    &username=jane.doe@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_id",
            "description": "<p>The unique ID of the account you want to invite the person to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The identification of the user. This can be either the username, primary email address or the person ID.</p>"
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
            "field": "account",
            "description": "<p>The new account record with the updated rights information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"The requested person could not be found.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/invite/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/events/pay/",
    "title": "Pay for an event",
    "version": "2.0.0",
    "name": "Person_Pay_Event",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Pay for an event using either an account or by a Mollie transaction. The person is auto subscribed to the event, when the he or she is not yet subscribed.</p>",
    "examples": [
      {
        "title": "Pay by account:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/events/pay --data\n    &event_id=934\n    &account_id=5\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      },
      {
        "title": "Pay by transaction:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/events/pay --data\n    &event_id=934\n    &transaction_request_id=tr_1058968389\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "response",
            "description": "<p>Whether the payment was succesful or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"account_balance\": false\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/events/pay/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaction_account_id",
            "description": "<p>The account identifier requesting the specific account.</p>"
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
    "url": "api/v2/person/update/",
    "title": "Update personal information",
    "version": "2.0.0",
    "name": "Post_Update_Person",
    "group": "Person",
    "permission": [
      {
        "name": "Person"
      }
    ],
    "description": "<p>Update the person record associated with the API key.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/update --data\n    \"first_name=Pieter\n    &last_name=Jansen\n    &external_id=9039493\n    &email_primary=pieter.jansen@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"person_id\": 12345,\n     \"error\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": [\n       \"The primary email field is required.\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/update/"
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
            "description": "<p>An alternative email address (e.g. private or company email address).</p>"
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
            "field": "pref_magazine",
            "description": "<p>The preference whether or not to receive a magazine. Please note this should be an ID identifying one of the settings in: administration/magazine_preferences/</p>"
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
            "field": "picture_data",
            "description": "<p>Base64 representation of the profile picture image. Please note this should include the base64 MIME type prefixed to the data (e.g. <code>data:image/gif;base64,</code>).</p>"
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
            "field": "token_identifier",
            "description": "<p>A unique identifier of a physical token to link to the active payment account. An account is created when none exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_password",
            "description": "<p>The current password linked to the person login account. This needs to be valid to allow password changes made with <code>password</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password you want to set the person login account to. The minimum length of a password is 8 characters. Note that it is required to pass along <code>current_password</code> when using this parameter.</p>"
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
    "url": "api/v2/person/account/revoke/",
    "title": "Revoke payment account access",
    "version": "2.0.0",
    "name": "Revoke_Access_To_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Revoke a certain person or yourself from a payment account. This is also used to decline an invitation request, because they are basically the same.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/revoke --data\n    \"account_id=10\n    &person_id=14952\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_id",
            "description": "<p>The unique ID of the account you want to remove someone from.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>[optional] The unique ID of the person you want to remove. It will remove yourself / the owner of the API key if this parameter is not specified.</p>"
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
            "field": "account",
            "description": "<p>The new account record with the updated rights information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"The requested account could not be found.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/revoke/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/api/revoke/",
    "title": "Revoke personal API keys",
    "version": "2.0.0",
    "name": "Revoke_Personal_API",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Disable all the personal API keys for this person</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/api/revoke --data\n    \"api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "key_id",
            "description": "<p>ID of the API key you want to disable that is linked to this person. If none is specified all personal API keys are disabled.</p>"
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
            "field": "revoked_amount",
            "description": "<p>The total amount of revoked API keys</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"revoked_amount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/api/revoke/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/select/",
    "title": "Select payment account",
    "version": "2.0.0",
    "name": "Select_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Selects the account the user wants to perform payments with. All existing tokens are also linked to this account.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/select --data\n    \"account_id=1337\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "account_id",
            "description": "<p>The unique ID of the account to select. Note that this accounts requires the user to have rights on.</p>"
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
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"This person does not have the proper rights for this account.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/select/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/transfer/",
    "title": "Transfer payment account ownership",
    "version": "2.0.0",
    "name": "Transer_Payment_Account_Ownership",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Revoke a certain person or yourself from a payment account. This is also used to decline an invitation request, because they are basically the same.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/transfer --data\n    \"account_id=10\n    &person_id=14952\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_id",
            "description": "<p>The unique ID of the account the ownership needs to be changed of.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>The unique ID of the person receiving the ownership.</p>"
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
            "field": "account",
            "description": "<p>The new account record with the updated rights information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"The requested account could not be found.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/transfer/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/update/",
    "title": "Update payment account",
    "version": "2.0.0",
    "name": "Update_Payment_Account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Update the payment account information. For now renaming is the only supported feature. Down the road more features might be added.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/create --data\n    \"account_id=2039\n    &account_name=Test2\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "account_id",
            "description": "<p>The unique ID of the account to select. Note that this accounts requires the user to have rights on.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_name",
            "description": "<p>The name given to the account in order to be identified by the user.</p>"
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
            "field": "account_balance",
            "description": "<p>The new balance on the account</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "account",
            "description": "<p>The new account record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"account_balance\" : 10,\n    \"account\" :\n      {\n         \"id\": 136,\n         \"active\": 1,\n         \"type_id\": 1,\n         \"name\": \"Test\",\n         \"owner_person_id\" : 91532,\n         \"minimum_balance\" : NULL,\n         \"show_alternative_prices\": 0,\n         \"module_access\": \"\",\n         \"owner_name\": \"John Doe\",\n         \"balance\": 10,\n         \"cached_balance\" : 10,\n         \"usage_timestamp\": \"2017-08-12 00:55:10\",\n         \"create_timestamp\": \"2017-08-12 00:55:10\",\n         \"update_timestamp\": \"2017-08-12 00:55:10\",\n         \"rights\": [\n             2250 : {\n                 \"id\": \"2250\"\n                 \"active\": \"1\"\n                 +\"accepted\": \"1\"\n                 +\"account_id\": \"2407\"\n                 +\"issuer_person_id\": \"1\"\n                 +\"person_id\": \"1\"\n                 +\"issue_date\": \"2017-09-06 16:56:42\"\n                 +\"expiry_date\": \"0000-00-00 00:00:00\"\n                 +\"create_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"update_timestamp\": \"2017-09-06 16:56:43\"\n                 +\"unique_id\": \"b87e11a09111b4132ac457c15060c53a\"\n                 +\"__origin_table_name\": \"rights_accounts\"\n                 +\"__origin_record_id\": \"2250\"\n                 +\"issuer_person_name\": \"John Doe\"\n                 +\"person_name\": \"Jane Doe\"\n             },\n             ...\n         ],\n         \"rights_summary\" : \"You, Jane Doe\",\n         ...\n         }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 403 Forbidden\n{\n    \"status\": false,\n    \"error\": \"Invalid API key\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/update/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/person/account/upgrade/",
    "title": "Upgrade personal account",
    "version": "2.0.0",
    "name": "Upgrade_personal_account",
    "group": "Person",
    "permission": [
      {
        "name": "Person API"
      }
    ],
    "description": "<p>Short-hand function to upgrade a specific personal account. Please note that no transaction type ID is passed along because only Mollie payments are allowed. This is due to security reasons to prevent people to use their Person API to upgrade various accounts. Mollie payments need a third-party to verify all the payments.</p>",
    "examples": [
      {
        "title": "Basic usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/account/upgrade --data\n    &transaction_account_id=0220673602\n    &transaction_upgrade_delta_balance=100\n    &transaction_request_id=tr_1058968389\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "response",
            "description": "<p>An array identifying whether the transaction was successfully handled. The new balance is send along in the response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"account_balance\": false\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/person/account/upgrade/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaction_account_id",
            "description": "<p>The account identifier requesting the specific account.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
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
    "url": "api/v2/auth/login/check/",
    "title": "Verify person authentication",
    "version": "2.0.0",
    "name": "Peron_Auth_Login_Check",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/auth/login/check --data\n    \"username=example@gmail.com\n    &password=952bf87c967660b7bbd4e1eb08cefc92\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\"\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username and password parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/auth/login/check/"
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
            "description": "<p>The login identity associated with the targeted person. This can be: the username, the primary email address or the person ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password credentials. Please note the plain-text password can be used, because we are using a secure connection.</p>"
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
    "url": "api/v2/auth/login/create/",
    "title": "Create person login account",
    "version": "2.0.0",
    "name": "Person_Auth_Login_Create",
    "group": "Person_Auth",
    "permission": [
      {
        "name": "Person Auth API"
      }
    ],
    "description": "<p>Creates a login account for a specific person to login with.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/auth/login/create --data\n    \"username=example@gmail.com\n    &password=thisismypassword\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "api_key_record",
            "description": "<p>An API Key Record containing all the Person API credentials and details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"id\": \"46\",\n     \"active\": \"1\",\n     \"api_key\": \"28bdccc9cd9792c6e37dda66372620b7\",\n     \"api_secret\": \"53b60f95789b3a43edc5fc9aac8618c7\",\n     \"name\": \"Person API for John Doe\",\n     \"type_id\": \"2\",\n     \"person_id\": \"1201717\",\n     \"description\": \"Personal data API for John Doe requested by 127.0.0.1 using windows\",\n     \"responsible_name\": \"John Doe\",\n     \"responsible_email\": \"example@gmail.com\",\n     \"create_timestamp\": \"2016-02-26 22:31:10\",\n     \"update_timestamp\": \"2016-02-26 22:31:10\",\n     ...\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username and password parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/auth/login/create/"
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
            "description": "<p>The login identity associated with the targeted person. This can be: the username, the primary email address or the person ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password credentials. Please note the plain-text password can be used, because we are using a secure connection.</p>"
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
    "url": "api/v2/auth/login/reset/",
    "title": "Reset Password",
    "version": "2.0.0",
    "name": "Person_Auth_Login_Reset",
    "group": "Person_Auth",
    "permission": [
      {
        "name": "Person Auth API"
      }
    ],
    "description": "<p>Send a reset password request to the primary email address attached to the login account.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/auth/login/reset --data\n    \"username=example@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "description": "<p>The login identity associated with the targeted person. This can be: the username, the primary email address or the person ID.</p>"
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
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": \"true\",\n     \"error\": \"\",\n }",
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
            "field": "InvalidUsername",
            "description": "<p>The <code>username</code> was invalid or not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username parameter\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/auth/login/reset/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/auth/login/",
    "title": "Create person API key",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/auth/login/ --data\n    \"username=example@gmail.com\n    &password=thisismypassword\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "api_key_record",
            "description": "<p>An API Key Record containing all the Person API credentials and details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"id\": \"46\",\n     \"active\": \"1\",\n     \"api_key\": \"28bdccc9cd9792c6e37dda66372620b7\",\n     \"api_secret\": \"53b60f95789b3a43edc5fc9aac8618c7\",\n     \"name\": \"Person API for John Doe\",\n     \"type_id\": \"2\",\n     \"person_id\": \"1201717\",\n     \"description\": \"Personal data API for John Doe requested by 127.0.0.1 using windows\",\n     \"responsible_name\": \"John Doe\",\n     \"responsible_email\": \"example@gmail.com\",\n     \"create_timestamp\": \"2016-02-26 22:31:10\",\n     \"update_timestamp\": \"2016-02-26 22:31:10\",\n     ...\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid username and password parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Auth",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/auth/login/"
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
            "description": "<p>The login identity associated with the targeted person. This can be: the username, the primary email address or the person ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password credentials. Please note the plain-text password can be used, because we are using a secure connection.</p>"
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
    "url": "api/v2/management/person/create/",
    "title": "Create new person record",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/management/person/create --data\n    \"first_name=Pieter\n    &last_name=Jansen\n    &external_id=9039493\n    &email_primary=pieter.jansen@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"person_id\": 12345,\n     \"error\": \"\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": [\n       \"The primary email field is required.\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Management",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/management/person/create/"
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
            "description": "<p>An alternative email address (e.g. private or company email address).</p>"
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
            "field": "pref_magazine",
            "description": "<p>The preference whether or not to receive a magazine. Please note this should be an ID identifying one of the settings in: administration/magazine_preferences/</p>"
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
            "field": "picture_data",
            "description": "<p>Base64 representation of the profile picture image. Please note this should include the base64 MIME type prefixed to the data (e.g. <code>data:image/gif;base64,</code>).</p>"
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
            "field": "token_identifier",
            "description": "<p>A unique identifier of a physical token to link to the active payment account. An account is created when none exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_password",
            "description": "<p>The current password linked to the person login account. This needs to be valid to allow password changes made with <code>password</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password you want to set the person login account to. The minimum length of a password is 8 characters. Note that it is required to pass along <code>current_password</code> when using this parameter.</p>"
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
    "url": "api/v2/management/person/update/",
    "title": "Update existing person record",
    "version": "2.0.0",
    "name": "Post_Update_Person",
    "group": "Person_Management",
    "permission": [
      {
        "name": "Person Management"
      }
    ],
    "description": "<p>Update an existing person record by the passed person ID or external ID.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/person/update --data\n    \"first_name=Pieter\n    &last_name=Jansen\n    &external_id=9039493\n    &email_primary=pieter.jansen@gmail.com\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"person_id\": 12345,\n     \"error\": \"\"\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": [\n       \"The primary email field is required.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Person_Management",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/management/person/update/"
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
            "description": "<p>An alternative email address (e.g. private or company email address).</p>"
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
            "field": "pref_magazine",
            "description": "<p>The preference whether or not to receive a magazine. Please note this should be an ID identifying one of the settings in: administration/magazine_preferences/</p>"
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
            "field": "picture_data",
            "description": "<p>Base64 representation of the profile picture image. Please note this should include the base64 MIME type prefixed to the data (e.g. <code>data:image/gif;base64,</code>).</p>"
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
            "field": "token_identifier",
            "description": "<p>A unique identifier of a physical token to link to the active payment account. An account is created when none exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_password",
            "description": "<p>The current password linked to the person login account. This needs to be valid to allow password changes made with <code>password</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password you want to set the person login account to. The minimum length of a password is 8 characters. Note that it is required to pass along <code>current_password</code> when using this parameter.</p>"
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
    "url": "api/v2/transaction/account/",
    "title": "Get account",
    "version": "2.0.0",
    "name": "Get_Account",
    "group": "Transaction",
    "permission": [
      {
        "name": "Transaction API"
      }
    ],
    "description": "<p>Get an account record stating the current balance of money. For this to work you need to pass the account identifier, which is either the ID of the account in the database or the ID of a physical identification token (e.g. RFID).</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction/account\n    ?transaction_account_id=57dk49sk3ks\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
            "field": "transaction_account_id",
            "description": "<p>The account identifier (either a record ID or a token ID).</p>"
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
            "description": "<p>An account record containing the current balance for the <code>transaction_account_id</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"id\": \"1211337\",\n     \"active\": \"1\",\n     \"type_id\": \"1\",\n     \"balance\": 5.7,\n     \"owner_person_id\": \"John Doe\",\n     \"minimum_balance\": 0,\n     \"show_alternative_prices\": 0,\n     \"module_access\": 0,\n     \"usage_timestamp\": \"2017-07-11 16:01:22\",\n     \"create_timestamp\": \"2015-08-14 12:50:40\",\n     \"update_timestamp\": \"2015-08-14 12:51:09\",\n     ...\n }",
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
            "field": "AccountIdNotFound",
            "description": "<p>The <code>transaction_account_id</code> of the Method was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 406 Not Acceptable\n{\n    \"status\": false,\n    \"error\": \"Invalid account name and account ID parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/account/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/v2/transaction/product_categories/",
    "title": "Get product categories",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction/product_categories\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"1\": {\n         \"id\": \"1\",\n         \"active\": \"1\",\n         \"order_id\": \"4\",\n         \"name\": \"Food\",\n         \"__origin_table_name\": \"shop_product_categories\",\n         \"__origin_record_id\": \"1\"\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/product_categories/"
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    }
  },
  {
    "type": "get",
    "url": "api/v2/transaction/products/",
    "title": "Get products",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction/products\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"1\": {\n         \"id\": \"1\",\n         \"active\": \"1\",\n         \"order_id\": \"1\",\n         \"name\": \"Coca Cola\",\n         \"category_id\": \"5\",\n         \"purchase_price\": \"0.60\",\n         \"retail_price\": \"0.60\",\n         \"retail_quantity\": \"1\",\n         \"costcenter_number\": \"4110\",\n         \"image_path\": \"shop_products/image_path/logoshare.jpg\",\n         \"image_path_base_url\": \"https://demo.lassie.cloud/uploads/\",\n         \"__origin_table_name\": \"shop_products\",\n         \"__origin_record_id\": \"1\",\n         \"quantity_properties\": {\n             \"total\": -13958,\n             \"increase\": 0,\n             \"sales\": -13958,\n             \"loss\": 0\n         }\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/products/"
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    }
  },
  {
    "type": "get",
    "url": "api/v2/transaction/",
    "title": "Get transaction",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction\n    ?request_id=29665e12d21685197e6034ab22257931\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
          "content": "HTTPS/1.1 200 Success\n [{\n     \"109300\": {\n     \"id\": \"109300\",\n     \"active\": \"1\",\n     \"type_id\": \"3\",\n     \"source_id\": \"balance from Opendag 8-1-2016\",\n     \"product_id\": \"Coca Cola Zero\",\n     \"product_table_name\": \"shop_products\",\n     \"quantity\": \"1\",\n     \"delta_balance\": \"0.60\",\n     \"costcenter_number\": \"4110\",\n     \"request_id\": \"29665e12d21685197e6034ab22257931\",\n     \"create_timestamp\": \"2016-02-25 17:46:19\",\n     \"update_timestamp\": \"2016-02-25 17:46:19\",\n     \"unique_id\": \"3e0bb6ea22755f7b3f499ba054953105\",\n     ...\n  }]",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n{\n    \"status\": false,\n    \"error\": \"The request ID is invalid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/v2/transaction/types/",
    "title": "Get transaction types",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction/types\n    ?api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939",
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
          "content": "HTTPS/1.1 200 Success\n {\n     \"1\": {\n         \"transaction_type_id\": \"1\",\n         \"transaction_type_name\": \"Token\",\n         \"source_type_id\": \"4\",\n         \"source_type_name\": \"token - bar\",\n         \"order_id\": \"2\"\n     },\n     ...\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/types/"
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
      }
    }
  },
  {
    "type": "post",
    "url": "api/v2/transaction/",
    "title": "Post transaction",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction --data\n    \"transaction_type_id=1\n    &transaction_products={\"1\":{\"product_price\":0.6,\"quantity\":1,\"product_id\":\"1\",\"product_table_name\":\"shop_products\"}}\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      },
      {
        "title": "Account usage:",
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction --data\n    \"transaction_type_id=4\n    &transaction_source_id=0221365095\n    &transaction_products={\"1\":{\"product_price\":0.6,\"quantity\":1,\"product_id\":\"1\",\"product_table_name\":\"shop_products\"}}\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
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
            "field": "transaction_source_type_id",
            "description": "<p>You can also directly specify the actual source type ID and not the module specific one (transaction_type_id). This will automatically look for the related transaction type ID and uses that ID. This makes it easier when it is a hassle for you to fetch all the available transaction types first. The available types are: <code>cash</code>, <code>pin</code>, <code>bank</code>, <code>account</code>, <code>bill</code>, <code>update_stock</code>, <code>ticket</code>, <code>free</code> and <code>mollie</code>.</p>"
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
            "description": "<p>An unique ID that identifies this transaction (NOTE: max length is 32 characters!). You should create a new unique ID for each transaction done. This ID helps to identify whether a transaction is not handled more than one time. For example: when the response fails to transit, the application is likely to retry. However the transaction is already handled by Lassie. The success response will be given again when the same request ID is sent, because transactions are found with this ID.</p>"
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
            "description": "<p>An array identifying whether the transaction was successfully handled. When an account is associated the new balance is send along in the response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_balance\": false\n }",
          "type": "json"
        },
        {
          "title": "Account response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_balance\": 256.54\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n     \"module_name\": \"bar\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/v2/transaction/account/upgrade/",
    "title": "Upgrade account",
    "version": "2.0.0",
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
        "content": "curl -i https://demo.lassie.cloud/api/v2/transaction/account/upgrade --data\n    \"transaction_source_type_id=mollie\n    &transaction_account_id=0220673602\n    &transaction_person_id=1273059\n    &transaction_upgrade_delta_balance=100\n    &transaction_request_id=f7ce3b60b09a265df3d6b4010df606a2\n    &api_key=6fef96409095ac681a2f7e5baa07a7c1\n    &api_hash=51aeff8712ff502bf3c2df71025ad2d3\n    &api_hash_content=149394939\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaction_person_id",
            "description": "<p>The person who is upgrading this account. This is required for a papertrail when dealing with shared accounts. If not specified the owner of the account will be set af the person performing the upgrade.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "optional",
            "description": "<p>transaction_type_id The record ID of the transaction type which identifies how you are paying (e.g. cash, card, with an account or something else). By getting the available transaction types first you are able to specify this ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaction_account_id",
            "description": "<p>The account identifier requesting the specific account.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
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
            "description": "<p>An array identifying whether the transaction was successfully handled. The new balance is send along in the response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Basic response:",
          "content": "HTTPS/1.1 200 Success\n {\n     \"status\": true,\n     \"error\": \"\",\n     \"module_name\": \"bar\",\n     \"account_balance\": false\n }",
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
            "field": "ApiDisabled",
            "description": "<p>The API is disabled for your distribution of Lassie.</p>"
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
          "content": "HTTPS/1.1 400 Bad Request\n {\n     \"status\": false,\n     \"error\": \"The associated account is unknown or is not valid after this transaction.\",\n     \"module_name\": \"bar\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "/home/pep/htdocs/lassie-core/app/application/controllers/Api.php",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://demo.lassie.cloud/api/v2/transaction/account/upgrade/"
      }
    ]
  }
] });
