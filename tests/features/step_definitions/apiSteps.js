import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

let response;

When('I send a GET request to {string} with id {string}', async function (endpoint, id) {
    const url = `https://fake-json-api.mock.beeceptor.com${endpoint.replace('{id}', id)}`;
    response = await this.context.request.get(url);
});

Then('the response status should be {string}', async function (status) {
    expect(response.status()).toBe(parseInt(status));
});

Then('the response should contain a user with id {string}', async function (id) {
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', parseInt(id));
});

When('I send a POST request to {string} with payload:', async function (endpoint, dataTable) {
    const payload = dataTable.rowsHash();
    payload.age = parseInt(payload.age);
    payload.user_type = payload.user_type === 'true';

    const url = `https://fake-json-api.mock.beeceptor.com${endpoint}`;
    response = await this.context.request.post(url, {
        data: payload,
    });
});

Then('the response should contain the username {string}', async function (username) {
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('username', username);
});