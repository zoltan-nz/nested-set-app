CatalogApp = Em.Application.create
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