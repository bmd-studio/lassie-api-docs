# Introduction
The Lassie API application enables external systems to get, create, edit, delete and synchronize data from various sources in the Lassie system. For example, you can request which events are open for subscriptions, get which bartenders are checked into the Bar Module, perform transactions and even manage personal payments accounts.

## API Types
Each <code>api_key</code> has a single type giving rights to specific functionality within the API. You need to create multiple keys if an application needs multiple types. There are a total of four types:
1. <b>Model API.</b> A Model API is able to request data directly from methods allocated in the data structure classes of Lassie. Rights to do this should be enabled for each individual method. Managing these rights is done in the API Rights Section of the Rights Module by one of the administrators of Lassie.
2. <b>Person API.</b> A Person API is able to get and update person specific information, such as addresses, emails, payments, etc. Furthermore, payment accounts can be managed. This API Key is linked to one specific person ID limiting it to the information of one person. It is not required to provide additional rights to these keys for specific Person API functionality.
3. <b>Person Auth API.</b> The Person Auth API enables you to create new Person API Keys. Most of the time Person API’s are created through logging into an app that need to show personal data. With a Person Auth API Key you can authorize such an app to login persons, get new Person API Keys and fetch their data. This way you only allow apps to handle person logins you trust.
4. <b>Person Management API.</b> The Person Management API allows you to create new person records and update existing information. Please note that this API has access to all the personal information. It is not required to provide additional rights to these keys for specific Person Management API functionality.
5. <b>Transaction API.</b> A Transaction API is meant to send transactional data to Lassie. This API Key gives rights to transactional functionalities for a single Transaction Module (e.g. Bar or Shop Module). You can fetch the current products, product categories, transaction types (e.g. PIN / Cash). This information can then be used to post a transaction to Lassie. It is not required to provide additional rights to these keys for specific Transaction API functionality.

## Getting an API Key
You should contact one of the administrators of your Lassie system to get a new API Key for one or more of the above types. Distribution of the credentials is the responsibility of your own and should be handled carefully.

# Performing Requests
The credentials you receive from the administrator of your Lassie system consist of an <code>api_key</code> and <code>api_secret</code>. The <code>api_key</code> is used to identify your application and the <code>api_secret</code> is used to hash or sign parts of your requests to verify that the sender is truly the source Lassie expects it to be. With each request you need to send an <code>api_hash</code> representing a mix of your <code>api_key</code>, <code>api_secret</code> and a piece of content to verify your credentials. When using an existing library the hashing is done for you and you will only need to think about the validity of the <code>api_key</code> and <code>api_secret</code>.

## Libraries
Several Lassie API Libraries have been written for a variety of programming languages to speed up your development a bit. You should carefully read through the rest of this chapter on how to perform requests if these libraries don't support your development platform.

Available libraries (under construction):
1. PHP
2. NodeJS
2. Java
3. Android
4. iOS
5. Python
6. Arduino

## Request Structure
All requests have a set of required parameters that should be found in the <code>query</code> or <code>post</code> parameters (depending on the request):
1. <code>api_key</code>. The public API key used for identifying the application and defining which rights should be associated with it.
3. <code>api_hash</code>. A HMAC SHA256 BASE64 hash of a piece of content combined with the <code>api_key</code> and the <code>api_secret</code>. The server will create the same hash with its own stored <code>api_secret</code> to see whether the provided <code>api_hash</code> matches this hash.
4. <code>api_hash_content</code>. A (random) piece of content that has been hashed along with the <code>api_key</code> and the <code>api_secret</code>. It is important to note that this random piece of content can only be used for one request per API Key. This means you will need to find a way in your application to create a new piece of content for each request where you are sure of its uniqueness. It is advised to use timestamps (possibly with microseconds) or randomly seeding an analog pin when working with a microcontroller.

Example of the required parameters:

    {
      "api_key": "6fef96409095ac681a2f7e5baa07a7c1",
      "api_hash": "51aeff8712ff502bf3c2df71025ad2d3",
      "api_hash_content": "149394939"
    }

There are some parameters that are not required, but might come in handy for you:
1. <code>format</code>. Specifies in which format you want to receive a response.
Options are: <code>json</code>, <code>xml</code>, <code>html</code>, <code>csv</code>, <code>jsonp</code>, <code>php</code> and <code>serialized</code>.

Example output for <code>json</code>:

    {
      "id": 1,
      "name": "example"
    }

Example output for <code>xml</code>:

    <element>
        <id>1</id>
        <name>example</name>
    </element>

## Hash Calculations
The implementation to determine the <code>api_hash</code> might vary per programming language, but here we will briefly specify what is expected.

A <code>hmac</code> hash is required with a <code>sha256</code> hashing algorithm. The input content consists of a concatenation of the public <code>api_key</code> and the <code>api_hash_content</code> separated with a colon (':'). The output hash is then converted to a <code>base64</code> string to make it and URL-safe string.

Example methods for PHP implementation:

    base64_encode(hash_hmac('sha256', $api_key .':'. $api_hash_content, $api_secret));

## Testing
Each end-point listed below provides a test script to send API requests to <code>https://demo.lassie.cloud/</code>. You can make an API key for testing purposes by visiting <code>https://demo.lassie.cloud/apps</code>. Note that the mentioned hash protection is disabled for this instance to make sure you are not required to calculate a new hash yourself each time you want to make a request. This means only the API key is required for valid authentication. This protection is required when you want to switch to your own Lassie instance.
