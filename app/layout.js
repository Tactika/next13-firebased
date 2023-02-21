'use client';
"use strict";
exports.__esModule = true;
require("./globals.css");
var AuthContext_1 = require("@/context/AuthContext");
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <head />
      <body>
        <AuthContext_1.AuthContextProvider>
          {children}
        </AuthContext_1.AuthContextProvider>
      </body>
    </html>);
}
exports["default"] = RootLayout;
