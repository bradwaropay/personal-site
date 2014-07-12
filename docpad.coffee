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
        model.setMetaDefaults({layout:"page"})

    posts: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'blog/posts'}).on "add", (model) ->
        model.setMetaDefaults({layout:"post",section:"blog"})

    entries: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'work/entries'}).on "add", (model) ->
        model.setMetaDefaults({layout:"page",section:"work"})
}

# Export the DocPad Configuration
module.exports = docpadConfig
