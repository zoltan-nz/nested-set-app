@HT = Handlebars.templates
class window.MenuApp
  @Models: {}
  @Views: {}
  @Collections: {}
  start: ->
    Backbone.history.start(root: '/backoffice/edit_menus')
    @indexView = new MenuApp.Views.IndexView()
    @indexView.render()
    @categories = new MenuApp.Collections.Categories()
    @depView = new MenuApp.Views.Categories(collection: @categories)
    $('#menu_management_content').append(@depView.render().el)
    @categories.fetch()



class MenuApp.Views.IndexView extends Backbone.View
  el: '#menu_management'
  template: HT.index
  render: ->
    @$el.append(@.template)
    @

class MenuApp.Models.Category extends Backbone.Model
  url: '/backoffice/edit_menus/categories/'
  getChildren: ->
    @.get('children').map(@child, @)
  child: (id) ->
    if @.collection.get(id)
      @.collection.get(id)

class MenuApp.Collections.Categories extends Backbone.Collection
  model: MenuApp.Models.Category
  comparator: 'sort_order'
  url: '/backoffice/edit_menus/categories/'
  parse: (response) ->
    response.product_categories
  updateAll: ->
    Backbone.sync('update', @)
  toJSON: ->
    attrs = @models.map (m) ->
      'id: ' + m.get('id') + ', sort_order: ' + m.get('sort_order')
    {categories: attrs}



class MenuApp.Views.Category extends Backbone.View
  tagName: 'li'
  events:
    'drop': 'drop'
  drop: (e, i) ->
    e.stopPropagation()
    ids = _.map $(i).parent().find('> li') , (ui) ->
      $(ui).data('id')
    _.each(ids, (id, index) ->
      @collection.get(id).set('sort_order', index+1)
    , @)
    @collection.sort()
  attributes: ->
    id: 'category-item-' + @model.get('id')
    'data-id': @model.get('id')
  initialize: ->
    @listenTo(@model, 'all', @render)
    @listenTo(@model, 'all', @log)
    @collapsed = true
  log: (p) ->
    console.log 'Views Category event:' + p
  setupEvents: ->
    that = this
    @$('> .node-collapse').addClass('click-binded').click( (e) -> that.toggleCollapse(e))
  template: HT.category_button
  toggleCollapse: (e) ->
    e.preventDefault()
    @collapsed = !@collapsed
    if @collapsed
      @.$('> .node-tree').hide()
    else
      @.$('> .node-tree').show()
  render: ->
    @$el.html(@template(@model.attributes))
    @.setupEvents()
    tree = @$('> .node-tree')
    childView = null
    @.model.getChildren().map (m) ->
      childView = new MenuApp.Views.Category model: m, collection: @collection
      tree.append(childView.render().$el)
    , @
    if childView
      @$('> .node-collapse').prepend($('<strong> > </strong>'))
    @

class MenuApp.Views.Categories extends Backbone.View
  tagName: 'ul'
  className: 'node-tree'
  initialize: ->
    @listenTo(@collection, 'sync', @render)
    @listenTo(@collection, 'all', @log)
    @listenTo(@collection, 'sort', @save)
  log: (p) ->
    console.log "Views Categories event: " + p
  template: HT.categories
  save: ->
    @collection.updateAll()
  render: ->
    @$el.html('')
    list = @collection.where(depth: 0)
    list.forEach(@addOne, @)
    @attacheSortable()
    @
  addOne: (value, key, list) ->
    catView = new MenuApp.Views.Category(model: value, collection: @collection)
    @$el.append(catView.render().el)
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



$ ->
  if $('#menu_management').length
    @menuapp = new MenuApp()
    @menuapp.start()