# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

  templateData:
    site:
      url: "http://bradwaropay.com"

      title: "Brad Waropay"

      styles: [
        # "/styles/lib.css"
        "/styles/style.css"
      ]

      scripts: [
        "/scripts/lib.js"
        "/scripts/script.js"
      ]

    getPageUrlWithHostname: ->
      "#{@site.url}#{@document.url}"

    getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

    getPageID: ->
      "#{@document.robotDate}-#{@document.basename}"

    googleAnalyticsID: "43111430-1"

    disqusShortName: "bradwaropay"

    getYaml: () ->
      @yaml or= require "js-yaml"

  collections:
    siteNav: ->
      @getCollection("html").findAllLive({
        isSiteNavItem: true
        isPagedAuto: $ne: true
      }, [siteNavOrder: 1])

    postNav: ->
      @getCollection("html").findAllLive({
        isPostNavItem: true
        isPagedAuto: $ne: true
      }, [postNavOrder: 1])

    articles: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "articles"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout: "_post-full"
          sitemap: false
        })

    notes: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "notes"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout:"_post-full"
          sitemap: false
        })

    posts: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "notes"
        isPagedAuto: $ne: true
      }, [date: -1])

    work: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "work"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout: "_work-full"
          sitemap: false
        })

    sitemap: ->
      @getCollection("html").findAllLive({
        isSitemap: true
        isPagedAuto: $ne: true
      })

  environments:
    development:
      collections:
        articles: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["articles", "drafts/articles"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_post-full"
              sitemap: false
            })

        notes: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["notes", "drafts/notes"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_post-full"
              sitemap: false
            })

        posts: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["articles", "drafts/articles", "notes", "drafts/notes"]}
            isPagedAuto: $ne: true
          }, [date:- 1])

        work: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["work", "drafts/work"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_work-full"
              sitemap: false
            })

    static:
      plugins:
        cleanurls:
          enabled: false

  plugins:
    moment:
      formats: [
        {raw: "date", format: "MMMM Do, YYYY", formatted: "humanDate"}
        {raw: "date", format: "YYYY-MM-DD", formatted: "robotDate"}
      ]

    rss:
      default:
        collection: "posts"
        url: "/rss.xml"
        title: "Brad Waropay | Posts"

    sitemap:
      collectionName: "sitemap"

    ghpages:
        deployRemote: "origin"
        deployBranch: "master"
}

# Export the DocPad Configuration
module.exports = docpadConfig
