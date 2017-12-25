Feature: Free CRM login feature

  Scenario Outline: Free CRM login test scenario
    Given User is already on login page
    When User enters "<username>" and "<password>" on login page
    And User clicks on Login button
    And  User is navigated to Home page
    Then Browser is closed
    
    
Examples:
|username|password|
|rohanw|John@028|
|tom|pass1|