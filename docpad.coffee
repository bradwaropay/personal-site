# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

  templateData:
    site:
      url: "http://bradwaropay.com"

      title: "Brad Waropay"

      styles: [
        "/styles/lib.css"
        "/styles/style.css"
      ]

      scripts: [
        "/scripts/lib.js"
        "/scripts/script.js"
      ]

    getPageUrlWithHostname: ->
      "#{@site.url}#{@document.url}"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

    disqusShortName: 'bradwaropay'

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
        model.setMetaDefaults({
          layout:"article-full"
          sitemap: false
        })

    sitemap: ->
      @getCollection("html").findAllLive({
        isSitemap:true
        isPagedAuto: $ne: true
      })

  environments:
    development:
      collections:
        articles: ->
          @getCollection('html').findAllLive({
            relativeDirPath: {'$in' : ['articles', 'drafts']}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout:"article-full"
              sitemap: false
            })

  plugins:
    moment:
      formats: [
        {raw: "date", format: "MMMM Do, YYYY", formatted: "humanDate"}
        {raw: "date", format: "YYYY-MM-DD", formatted: "robotDate"}
      ]

    rss:
      default:
        collection: "articles"
        url: "/rss.xml"
        title: "Brad Waropay | Articles"

    sitemap:
      collectionName: 'sitemap'

    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'
}

# Export the DocPad Configuration
module.exports = docpadConfig
