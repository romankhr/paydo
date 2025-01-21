Feature: Paydo API Tests

    @api
    @smoke
    @paydo-003
    Scenario: Get user by ID
        When I send a GET request to "/users/{id}" with id "1"
        Then the response status should be "200"
        And the response should contain a user with id "1"

    @api
    @paydo-004
    Scenario: Create a new user
        When I send a POST request to "/user" with payload:
        | username   | age | user_type |
        | test_user  | 25  | true      |
        Then the response status should be "201"
        And the response should contain the username "test_user"