# Bossjob Frontend Test

By [Bill Ivan Kooslarto](mailto:kooslarto.bill.ivan@gmail.com)

## Instructions
1. Navigate to [repo](https://github.com/BillIvanKoo/Bossjob-Frontend-Test)
2. Clone locally using `git clone git@github.com:BillIvanKoo/Bossjob-Frontend-Test.git`
3. Install dependencies using `npm install`
4. Run test using `npm test`
5. Start the server using `npm start`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!

## Requirements
#### Listing the first 12 jobs
When the app is first mounted or when the active page is changed, an action is dispatched to make an API call to get the corresponding job data. The data is then stored in the redux store. The `JobList` component access the redux store and display the data.
#### Able to search for job by title or company name
Component `QueryForm` has an input and a submit button. Upon pressing enter in the input or clicking the button, an action will be dispatched to get the corresponding jobs to be displayed.
#### Use redux && (redux-saga ~~|| redux-thunk~~) to store the application states
Redux is used as the state management. Redux saga is used as a middleware to handle the asynchronous API calls.
#### Pagination is neccessary - reusable component
Component `Pagination` displays:
* the first and last page
* previous/next arrow where applicable
* +-2 range of the current page, or 5 earliest/latest pages where applicable.

When a page number / an arrow is clicked. Action is dispatched to get the corresponding jobs to be displayed.

## Extras
* Throttle on the submission process in the `QueryForm` (when searching based on job title/company name), can only make at most 1 submission per second.
* Error handling for when there is something wrong when calling the API.
* Loading spinner when the API is making request.
* Updated header title and favicon.ico.
