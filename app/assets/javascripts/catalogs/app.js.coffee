@HT = Handlebars.templates

class window.App
  @Models: {}
  @Views: {}
  @Collections: {}
  start: ->
    console.log 'started...'
    Backbone.history.start(pushState: true)
    (new App.Views.IndexView()).render()
    @catalogs = new App.Collections.Catalogs
    @catalogsView = new App.Views.Catalogs(collection: @catalogs)
    @catalogs.fetch()



class App.Views.IndexView extends Backbone.View
  el: '#app-container'

  events:
    'click a': ->
      e.preventDefault()
      Backbone.history.navigate(e.target.pathname, {trigger: true})

  template: HT.application

  render: ->
    console.log 'rendered...'
    @.$el.append(@.template)
    @

class App.Models.Catalog extends Backbone.Model
  url: '/catalogs'
  defaults:
    name: 'Empty...'
  toJSON: ->
    attrs = _.clone(@attributes)
    return{catalog: attrs}

class App.Collections.Catalogs extends Backbone.Collection
  url: '/catalogs'
  model: App.Models.Catalog
  parse: (response) ->
    response.catalogs

class App.Views.Catalog extends Backbone.View
  tagName: 'li'
  attributes: ->
    id: 'catalog-item-' + @model.get('id')
  className: 'list-group-item'
  initialize: ->
    @model.on('all', @render, @)
    @model.on('all', @log, @)
    @model.on('destroy', @remove, @)
  log: (params) ->
    console.log
  template: HT.catalog
  render: ->
    @$el.html(@template(@model.attributes))
    @
  remove: ->
    @$el.remove()

class App.Views.Catalogs extends Backbone.View
  el: '#catalogs'
  template: HT.catalogs

  events:
    'submit': 'save'
    'click button': 'save'

  save: (e) ->
    e.preventDefault()
    newCatalogName = $('input[name=catalog-name]').val()
    @collection.create(name: newCatalogName)
    @.$('input').val('')

  initialize: ->
    @listenTo(@collection, 'add', @addOne)
    @listenTo(@collection, 'sync', @render)
  log: (params) ->
    console.log params
  render: ->
    newCatalog = new App.Models.Catalog()
    catalogForm = new App.Views.CatalogForm(model: newCatalog)
    @.$el.html(@template)
    @.$el.find('#catalogs-list').append(catalogForm.render())
    @collection.forEach(@addOne, @)
  addOne: (catalog) ->
    catalogView = new App.Views.Catalog(model: catalog, collection: @collection)
    @.$el.find('#catalogs-list').append(catalogView.render().el)
  attacheSortable: ->
  @$('ul').addClass('sortable-binded').sortable
    items: 'li'
    placeholder: 'sortable-placeholder'
    dropOnEmpty: false
    cancel: '',
    start: (event, ui) ->
      $('.sortable-placeholder').html($(ui.item).html())
    update: (event, ui) ->
      ui.item.trigger('drop', ui.item)


class App.Views.CatalogForm extends Backbone.View
  tagName: 'li'
  className: 'list-group-item'
  id: 'catalog-form'
  template: HT.catalog_new_form

  events:
    'click button': 'button_enable'
    'keyup input': 'button_enable'
    'submit form': 'button_enable'
    'blur input': 'button_enable'

  initialize: ->
    @$el.on('all', @log)

  log: (params) ->
    console.log params

  render: ->
    @.$el.html(@template(@model.attributes))
    @$input = @$('.edit')
    @$button = @$('.submit')
    @.$el

  button_enable: ->
    if _.isEmpty(@$input.val().trim())
      @$button.attr('disabled', 'disabled')
    else
      @$button.removeAttr('disabled')



$ ->
  window.app = new App
  app.start()









