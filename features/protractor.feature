Feature: Blanco Regression Test
  Enter the basic personal information
  Upload passport and identification details

  Scenario: Happy flow for personal account
    Given choose personal account for myself
    When I enter the first name "Cosmo"
    And last name "Ding"
    And email address "Cosmo.Ding@dilatoit.com"
    And phone number "+86 18051970204"
    And I upload the passport
    Then site will collect my information and show on the screen
    When I fill in additional details
    Then server will received the information successfully