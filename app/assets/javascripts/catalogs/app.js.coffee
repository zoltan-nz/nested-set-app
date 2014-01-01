Ember.ENV.EXPERIMENTAL_CONTROL_HELPER = true

window.CatalogApp = Em.Application.create
  LOG_TRANSITIONS: true
  LOG_TRANSITIONS_INTERNAL: true
  LOG_VIEW_LOOKUPS: true
  LOG_BINDINGS: true
  LOG_ACTIVE_GENERATION: true
  RAISE_ON_DEPRECATION: true
  LOG_STACKTRACE_ON_DEPRECATION: true
  DEBUG: true

  rootElement: '#app-container'


CatalogApp.Router.reopen
  rootURL: '/catalogs/'

CatalogApp.Router.map ->
  @resource 'categories', ->
    @route 'category', path: '/:category_id'
  @resource 'catalogs'

CatalogApp.IndexRoute = Em.Route.extend
  setupController: (controller, model) ->
    @controllerFor('catalogs').set('content', @get('store').findAll('catalog'))
    @controllerFor('categories').set('content', @get('store').findAll('category'))


  renderTemplate: ->
    @render('catalogs', {into: 'application', outlet: 'catalogs', controller: 'catalogs'})
    @render('categories', {into: 'application', outlet: 'categories', controller: 'categories'})

CatalogApp.ApplicationAdapter = DS.RESTAdapter.extend()

CatalogApp.Store = DS.Store.extend()

CatalogApp.Catalog = DS.Model.extend
  name: DS.attr()

CatalogApp.Category = DS.Model.extend
  name: DS.attr()
  depth: DS.attr()
  products: DS.hasMany('product', async: true)
  children: DS.hasMany('category')
  parent: DS.belongsTo('category')

CatalogApp.Product = DS.Model.extend
  name: DS.attr()
  price: DS.attr()
  category: DS.belongsTo('category', async: true)


CatalogApp.CatalogsRoute = Ember.Route.extend
  model: ->
    store = @get('store')
    store.findAll('catalog')

CatalogApp.CategoriesRoute = Ember.Route.extend
  model: ->
    store = @get('store')
    store.findAll('category')

CatalogApp.CategoriesCategoryRoute = Ember.Route.extend
  model: (params) ->
    store = @get('store')
    store.find('category', params.category_id)

CatalogApp.CatalogsController = Em.ArrayController.extend
  disabled: (->
    Ember.isEmpty(@get('newCatalog'))
  ).property 'newCatalog'
  actions:
    createCatalog: ->
      store = @store
      catalog = store.createRecord 'catalog',
        name: @get 'newCatalog'
      catalog.save()
      @.set 'newCatalog', ''

CatalogApp.CategoriesController = Em.ArrayController.extend()

CatalogApp.CategoriesCategoryController = Em.ObjectController.extend()

CatalogApp.CategoriesCategoryView = Em.View.extend()