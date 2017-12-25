$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "free-crm-login-feature",
  "description": "",
  "name": "Free CRM login feature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "description": "",
  "name": "Free CRM login test scenario",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" on login page",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "Browser is closed",
  "keyword": "Then ",
  "line": 8
});
formatter.examples({
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 11,
  "rows": [
    {
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1",
      "cells": [
        "username",
        "password"
      ],
      "line": 12
    },
    {
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
      "cells": [
        "rohanw",
        "John@028"
      ],
      "line": 13
    },
    {
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
      "cells": [
        "tom",
        "pass1"
      ],
      "line": 14
    }
  ]
});
formatter.scenario({
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "description": "",
  "name": "Free CRM login test scenario",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User enters \"rohanw\" and \"John@028\" on login page",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "Browser is closed",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 17122515060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rohanw",
      "offset": 13
    },
    {
      "val": "John@028",
      "offset": 26
    }
  ],
  "location": "loginStepDefinition.user_enters_username_and_password_on_login_page(String,String)"
});
formatter.result({
  "duration": 900987764,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 12902858979,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_navigated_to_Home_page()"
});
formatter.result({
  "duration": 15856513,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.browser_is_closed()"
});
formatter.result({
  "duration": 1554954043,
  "status": "passed"
});
formatter.scenario({
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "description": "",
  "name": "Free CRM login test scenario",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User enters \"tom\" and \"pass1\" on login page",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "Browser is closed",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10903659416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "pass1",
      "offset": 23
    }
  ],
  "location": "loginStepDefinition.user_enters_username_and_password_on_login_page(String,String)"
});
formatter.result({
  "duration": 783311169,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3714632612,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_navigated_to_Home_page()"
});
formatter.result({
  "duration": 22371970,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM for Any Business: Online Customer Relationship Software]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinition.loginStepDefinition.user_is_navigated_to_Home_page(loginStepDefinition.java:51)\r\n\tat ✽.And User is navigated to Home page(login.feature:7)\r\n"
});
formatter.match({
  "location": "loginStepDefinition.browser_is_closed()"
});
formatter.result({
  "status": "skipped"
});
});