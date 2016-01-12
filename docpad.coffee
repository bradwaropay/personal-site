# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

  templateData:

    site:

      styles: [
        '/styles/lib.css'
        '/styles/style.css'
      ]

      scripts: [
        '/scripts/lib.js'
        '/scripts/script.js'
      ]

  collections:

    nav: ->
      @getCollection("html").findAllLive({isNavItem:true})

    articles: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'articles'},[{date:-1}]).on "add", (model) ->
        model.setMetaDefaults({layout:"article"})
}

# Export the DocPad Configuration
module.exports = docpadConfig
