# Cloud CMS UI Sample Addon

**Updated for Version 3.2**

This GitHub repository provides a sample UI extension for the Cloud CMS user interface.  UI extensions consists of
JavaScript, CSS and HTML templates that are bundled together as a module and deployed to your tenant.  Once deployed,
the module is served alongside the rest of the Cloud CMS user interface.

The content defintions used by this sample are available in Cloud CMS when using the "Sample Web Project" project.
Create a new project and select "Sample Web Project".

Modules are able to do the following:

- introduce new user interface components
- override configuration and behaviors of existing user interface components
- change labels and placement of buttons
- add new form fields or modify existing form fields
- bind in new actions, modals and wizards

All of the module code itself is available in the /sample directory.  The /data directory holds some sample data
this is used by one of the sample fields but it isn't required.

## What's Included

The following examples are included:

### Create Sample Space Action

This action provides a form that lets a user type in a name.  A folder is then created in the current directory with
that name.  A default folder structure is built out.  This effectively lets you build out templated structures
with only a single click.

The action code is here:
    /sample/actions/sample/create-sample-space.js

The action is configured into the documents list page here:
    /sample/config/sample/blocks/default/documents-list-buttons/folder.json

### Catalog / Products Page

This is an example of a custom page that appears in the left-hand menu.  It is a standalone page that you can do
anything you'd like with.  In this case, we show a list of products and allow the media for the products to be
displayed with a click.

The products list gadget code is here:
    /sample/gadgets/sample-products-list/sample-products-list.js
    /sample/gadgets/sample-products-list/sample-products-list.css
    /sample/gadgets/sample-products-list/sample-products-list.html

The products page is configured into the framework here:
    /sample/config/sample/pages/sample-products-page/page.json (defines the page)
    /sample/config/sample/pages/sample-products-page/center.json (binds the list gadget into the page's template)

The products page is wired into the left-hand navigation here:
    /sample/config/sample/blocks/default/context/project.json

### Random Product Dashlet

One of the things you'll often want to do is introduce a new dashlet into dashboard pages.  This is a custom dashlet
which displays a random product from the catalog.

The dashlet gadget code is here:
    /sample/gadgets/sample-random-product-dashlet/sample-random-product-dashlet.js
    /sample/gadgets/sample-random-product-dashlet/sample-random-product-dashlet.css
    /sample/gadgets/sample-random-product-dashlet/sample-random-product-dashlet.html

The dashlet is wired into the project dashboard here:
    /sample/config/sample/blocks/default/dashboards/project.json

### Custom Document Properties

This is an example of overriding the document properties section of the document overview page.  This is the section
that lists properties.  In this case, we want to special handle one of the properties to make it clickable so that we
are taken somewhere.

The gadget code is here:
    /sample/gadgets/sample-product-document-properties/sample-product-document-properties.js

The document page template region is overridden to use our gadget here:
    /sample/config/sample/blocks/default/regions/document-properties.json

### Hiding Document Actions based on Roles

This is an example of changing the availability of UI functionality based on role-based priviledges.  In this case,
we hide the "Touch Document" action for users who have the CONSUMER, CONTRIBUTOR, COLLABORATOR or EDITOR roles against
the viewed document.

The configuration code is here:
    /sample/config/sample/blocks/default/document-actions/actions.json

### Hiding Document sub-pages based on Roles

You can also show or hide navigation elements as well as sub-navigation elements based on the current user's role
against the currently viewed document.  In this case, we hide the Document's JSON viewer page for anyone who has
the CONSUMER, CONTRIBUTOR, COLLABORATOR or EDITOR role against the viewed document.

The configuration code is here:
    /sample/config/sample/blocks/default/subcontext/document.json

### Sample City Picker Form Field

This is a custom Alpaca form field that loads it's data from the /data/cities.json file and provides a dropdown
selection list.  To use it, just specify the form option type of "sample-city-picker".

The Alpaca code is here:
    /sample/fields/sample-city-picker.js

### Sample Content Picker Form Field

This is a custom Alpaca form field that loads it's data from a Cloud CMS query.  It provides a dropdown selection
list of content items of type "catalog:product".

The Alpaca code is here:
    /sample/fields/sample-content-picker.js


## Deploying to Cloud CMS

To deploy to the Cloud CMS user interface, please take a look at the instructions provided here:
    https://www.cloudcms.com/documentation/modules.html


## Building for Production

You may optionally wish to build for production.  A production build consists of an optimized and minified index.js with its dependencies included.

To build, make sure Node.js is installed, and then, from a command line, do the following:

3.  Run '''npm install'''
4.  Run '''npm run build'''

Once finished, your build should be in /dist. Be sure to set your source path to /dist when registering your module.


## How do I get help?

For help with these UI extensions, please contact support@cloudcms.com.
