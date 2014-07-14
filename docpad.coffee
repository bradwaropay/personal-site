# DocPad Configuration File
# http://docpad.org/docs/config

# Import
moment = require('moment')

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    ghpages:
      deployRemote: "origin"
      deployBranch: "master"

  templateData:
    site:
      title: "Brad Waropay"

    robotDate: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
    humanDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

  collections:
    navLinks: ->
      @getCollection('html').findAllLive({isNavLink:true})

    posts: ->
      @getCollection('html').findAllLive({relativeOutDirPath: 'blog/posts'}, [{date: -1}]).on 'add', (model) ->
        model.setMetaDefaults({layout: 'post', section: 'blog'})

    entries: ->
      @getCollection('html').findAllLive({relativeOutDirPath: 'work/entries'}).on 'add', (model) ->
        model.setMetaDefaults({layout: 'page', section: 'work'})
}

# Export the DocPad Configuration
module.exports = docpadConfig
