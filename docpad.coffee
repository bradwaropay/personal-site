# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    ghpages:
      deployRemote: 'origin'
      deployBranch: 'master'

  templateData:
    site:
      title: "Brad Waropay"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

  collections:
    pages: ->
      @getCollection("html").findAllLive({isPage:true}).on "add", (model) ->
        model.setMetaDefaults({layout:"default"})

    work: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'work'}).on "add", (model) ->
        model.setMetaDefaults({layout:"default"})
}

# Export the DocPad Configuration
module.exports = docpadConfig
