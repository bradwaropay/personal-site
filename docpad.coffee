# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    ghpages:
      deployRemote: "origin"
      deployBranch: "master"

  templateData:
    site:
      title: "Brad Waropay"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

  collections:
    navLinks: ->
      @getCollection('html').findAllLive({isNavLink:true},[{title:1}])
    articles: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'articles'},[{date:-1}]).on "add", (model) ->
        model.setMetaDefaults({layout:"article"})
}

# Export the DocPad Configuration
module.exports = docpadConfig
