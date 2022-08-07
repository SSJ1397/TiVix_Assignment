Feature: tivixlabs

    Scenario: User is able to search cars by filling valid data

        Given User visit tivixlabs Site

        And User click for select country and city from the dropdown

        And User type model name in the model

        And User click for select pick-up and drop-of date

        When User click on search button

        Then User click for validate the url

    Scenario: User is unable to search cars with invalid data entry

        Given User visit tivixlabs Site

        And User click for select country and city from the dropdown

        And User type model name in the model

        And User click for select incorrect pick-up and drop-of date

        When User click on search button

        Then User click for validate the text

    Scenario: User is able to fill a rent form

        Given User visit tivixlabs Site

        And User click for select country and city from the dropdown

        And User type model name in the model

        And User click for select pick-up and drop-of date

        When User click on search button

        And User click on selected model rent button

        Then User click on selected car rent button to fill the personal data

        Then User fill the personal data