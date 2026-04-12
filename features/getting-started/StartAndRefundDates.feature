@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
        Given user is on the enrollment page

    Scenario: Verify that program start dates and refund dates are displayed on the enrollment page 
        Then Program start date should be displayed
        Then Program refund date should be displayed

    Scenario: Verify that program start and refund dates are accurate
        Then the displayed program start date should be accurate
        Then the displayed refund date should be accurate

