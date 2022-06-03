# Zero One Technical Test
This API is intended to complete the test given by the ZeroOne company

## Installation
1. Clone this repository to your wanted directory and enter into that folder. 
    Example:
    ```
    usr
    cd var
    usr/var> git clone https://github.com/disinibale/zeroone-assignment.git
    usr/var> cd zeroone-assignment
    ```
2. Install using NPM  
    ```
    usr/var/zeroone-assignment> npm install
    ```
3. After installing the dependency, now we should create a .env file that contains the database URL
    ```
    DATABASE_URL="postgresql://<database user>:<password>@<database host>:<database port>/<database name>?schema=<database schema>"
    ```
    Copy the code above to your .env file and change the credentials using your database user configurations

4. Then we can migrate the table to the database by using this command below
    ```
    usr/var/zeroone-assignment> npx prisma migrate dev --name init
    usr/var/zeroone-assignment> npx prisma generate
    ```

## Usage
After all the installation is completed, now we can run this API by using the following command: 
1. Development Command
    ```
    npm run start:dev
    ```
2. Production Command
    ```
    npm run start
    ````

## API Search Params
The search parameter can be used by adding the URL query after the url instance, example :
-   News Search Parameters :
    ```
    http://localhost:3000/news?status=<News Status>&topics=<Topics Name>
    ```