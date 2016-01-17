# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

  templateData:
    site:
      styles: [
        "/styles/lib.css"
        "/styles/style.css"
      ]
      scripts: [
        "/scripts/lib.js"
        "/scripts/script.js"
      ]

      title: "Brad Waropay"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

  collections:
    nav: ->
      @getCollection("html").findAllLive({
        isNavItem:true
        isPagedAuto: $ne: true
      })
    articles: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "articles"
        isPagedAuto: $ne: true
      },[{date:-1}]).on "add", (model) ->
        model.setMetaDefaults({layout:"article-full"})
    work: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "work"
      },[{date:-1}]).on "add", (model) ->
        model.setMetaDefaults({layout:"work-full"})


  plugins:
    moment:
      formats: [
        {raw: "date", format: "MMMM Do, YYYY", formatted: "humanDate"}
        {raw: "date", format: "YYYY-MM-DD", formatted: "computerDate"}
      ]

    rss:
      default:
        collection: "articles"
        url: "/rss.xml"
        title: "Brad Waropay | Articles"
}

# Export the DocPad Configuration
module.exports = docpadConfig
