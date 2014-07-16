# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    ghpages:
      deployRemote: "origin"
      deployBranch: "master"

    moment:
      formats: [
        {raw: 'date', format: 'MMMM Do YYYY', formatted: 'humanDate'}
        {raw: 'date', format: 'YYYY-MM-DD', formatted: 'robotDate'}
      ]

    datefromfilename:
      removeDate: true

  templateData:
    site:
      title: "Brad Waropay"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

  collections:
    navLinks: ->
      @getCollection('html').findAllLive({isNavLink:true})

    posts: ->
      @getCollection('html').findAllLive({relativeOutDirPath: 'blog/posts'}).on 'add', (model) ->
        model.setMetaDefaults({layout: 'post', section: 'blog'})

    entries: ->
      @getCollection('html').findAllLive({relativeOutDirPath: 'work/entries'}).on 'add', (model) ->
        model.setMetaDefaults({layout: 'page', section: 'work'})
}

# Export the DocPad Configuration
module.exports = docpadConfig
