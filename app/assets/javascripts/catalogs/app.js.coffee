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
    @resource 'products', path: ':id'
  @resource 'catalogs'

CatalogApp.IndexRoute = Em.Route.extend
  setupController: (controller, model) ->
    @controllerFor('catalogs').set('content', @get('store').findAll('catalog'))


  renderTemplate: ->
    @render('catalogs', {into: 'application', outlet: 'catalogs', controller: 'catalogs'})

CatalogApp.ApplicationAdapter = DS.RESTAdapter.extend()

CatalogApp.Store = DS.Store.extend()

CatalogApp.Catalog = DS.Model.extend
  name: DS.attr()

CatalogApp.Category = DS.Model.extend
  name: DS.attr()

CatalogApp.Product = DS.Model.extend
  name: DS.attr()
  category: DS.belongsTo('category', async: true)

CatalogApp.CatalogsRoute = Ember.Route.extend
  model: ->
    store = @get('store')
    store.findAll('catalog')

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

