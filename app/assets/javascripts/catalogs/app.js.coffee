@HT = Handlebars.templates

class window.App
  @Models: {}
  @Views: {}
  @Collections: {}

class App.Views.IndexView extends Backbone.View
  el: '#app-container'

  events:
    'click a': ->
      e.preventDefault()
      Backbone.history.navigate(e.target.pathname, {trigger: true})

  start: ->
    console.log 'started...'
    Backbone.history.start(pushState: true)

  template: HT.application

  render: ->
    console.log 'rendered...'
    @.$el.append(@.template)
    @

class App.Models.Catalog extends Backbone.Model
  url: '/catalogs'
  defaults:
    name: 'Empty...'


class App.Views.Catalog extends Backbone.View
  tagName: 'li'
  attributes: ->
    id: 'catalog-item-' + @model.get('id')
  className: 'list-group-item'
  initialize: ->
    @model.on('all', @render, @)
    @model.on('destroy', @remove, @)
  template: HT.catalog
  render: ->
    @$el.html(@template(@model.attributes))
    @
  remove: ->
    @$el.remove()

class App.Collections.Catalogs extends Backbone.Collection
  url: '/catalogs'
  model: App.Models.Catalog
  parse: (response) ->
    response.catalogs

class App.Views.Catalogs extends Backbone.View
  el: '#catalogs'
  tagName: 'ul'
  className: "list-group"
  id: "catalogs-list"
  template: HT.catalogs
  initialize: ->
    @listenTo(@collection, 'add', @addOne)
    @listenTo(@collection, 'reset', @render)
  render: ->
    @.$el.find('#catalogs-list').append(@collection.forEach(@addOne, @))
  addOne: (catalog) ->
    catalogView = new App.Views.Catalog(model: catalog, collection: @collection)
    @.$el.append(catalogView.render().el)

class App.Views.CatalogForm extends Backbone.View
  el: '#catalogs-list'
  tagName: 'li'
  className: 'list-group'
  id: 'catalog-form'
  template: HT.catalog_new_form
  render: ->
    @.$el.append(@template(@model.attributes))

$ ->
  (new App.Views.IndexView()).render()

  @catalogs = new App.Collections.Catalogs
  @catalogsView = new App.Views.Catalogs(collection: @catalogs)
  @catalogs.fetch()

  @newCatalog = new App.Models.Catalog()
  @catalogForm = new App.Views.CatalogForm(model: @newCatalog)






