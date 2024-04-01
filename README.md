I created an application for a company that provides camper van rental services in Ukraine. The application consists of 3 pages:

home page with a general description of the services provided by the company. a page containing a catalog of campers of various configurations, which the user can filter by location, equipment and type, a page with ads that have been added by the user to favorites The appearance of the program consists of navigation and a viewing area.

Technical task

According to the layout, I implemented a card announcing the rental of a camper.

4 ads will be rendered on the first page of the catalog, and the rest of them - by clicking on the Load more button.

If you click on the button in the form of a "heart" on the ad card, it is added to the list of favorites, and the color of the button changes.

When the page is updated, the final result of the user's actions is fixed. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.

If you click the heart button again, the ad is removed from the list of favorites, and the color of the button changes to its original state.

Clicking the Show more button opens a modal window with detailed information about the camper.

The modal window is closed by clicking on the button in the form of a "cross", by clicking on the backdrop and pressing the Esc key.

The modal window contains information about the characteristics of the camper and reviews about it. Drawing information depends on the state of the active tab.

The modal window also contains a form for making a camper reservation, consisting of the fields name, email, booking date and comment. The fields name, email, and booking date are required to be filled in and are checked for the validity of the entered values.

The rental price is written in one value (for example, 8000). In the UI - displayed with a comma (8000.00).

To work with the list of ads, I created my personal backend for development using the UI service https://mockapi.io/.

I created an advert in Mockapi with the following fields: _id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews. To fill the collection, I took adverts.json

The database contains from 13 ads with different meanings. Implemented pagination, where one pagination page should contain 4 ads.

Created routing using React Router.

The application has the following routes:

"/" - home page with a general description of services provided by the company

"/catalog" - a page containing a catalog of campers of various configurations

“/favorites” - a page with ads that have been added to favorites by the user

If the user entered by a route that does not exist, he is redirected to the home page.

Added filtering

The layout is fixed in rh, semantic and valid.

I use Redux.

The Axios library is used for queries

The work is done on React.

Interactivity works according to the terms of reference.
