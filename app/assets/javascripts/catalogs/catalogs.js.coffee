# Manifest file for catalogs
#
#= require ./vendor/handlebars-v1.2.0
#= require ./vendor/underscore
#= require ./vendor/backbone
#= require ./templates.js
#= require ./app

$ ->
  window.app = new App({el: $('#app-container')})
  app.render()
  app.start()