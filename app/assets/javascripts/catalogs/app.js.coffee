window.App = Backbone.View.extend
  Models: {}
  Views: {}
  Collections: {}
  events:
    'click a': ->
      e.preventDefault()
      Backbone.history.navigate(e.target.pathname, {trigger: true})

  start: ->
    console.log 'started...'
    Backbone.history.start(pushState: true)


  template: Handlebars.templates.application

  render: ->
    console.log 'rendered...'
    @.$el.append(@.template)
    @



