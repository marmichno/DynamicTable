# Dynamic table

![DynamicTable](https://user-images.githubusercontent.com/72525469/154860546-00306a24-5db5-4746-8d62-a50a3bc3f590.gif)

## About project

Dynamic table app with two pages ("/sign-in", "/")<br>
Login form with email and password validation.<br>
Table with sorting feature based on column (boolean, number, string, percentage value and date).<br>
Filters (Date from, Date to, availability, roles and input for name search).<br>

## Tech

- react.
- typeScript - type checking.
- axios - consuming api.
- redux - state management.
- redux thunk - async actions.
- materialUi - ui components.
- styled-components - css in js.
- react-router - navigation.
- react-hook-form - managing form inputs.
- yup/yup-reslover - validation.

## Installation

Run those comands in project directory:
```sh
git clone https://github.com/marmichno/dynamicTable.git
cd dynamic-table
npm install
```

## Available Scripts

For app to work correctly json-server must run on port 3000.<br>
db.json file is available in data folder.<br>

To run mock api server use:
```sh
json-server --watch db.json
```

To start app in development mode use:
```sh
npm start
```
