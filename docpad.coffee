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

    notes: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "published/notes"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout:"_post-full"
          siteNavOrder: 1.1
        })

    articles: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "published/articles"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout: "_post-full"
          siteNavOrder: 2.1
        })

    posts: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "published/notes"
        isPagedAuto: $ne: true
      }, [date: -1])

    work: ->
      @getCollection("html").findAllLive({
        relativeOutDirPath: "published/work"
        isPagedAuto: $ne: true
      }, [date: -1]).on "add", (model) ->
        model.setMetaDefaults({
          layout: "_work-full"
          siteNavOrder: 3.1
        })

    sitemap: ->
      @getCollection("html").findAllLive({
        isSitemap: true
        isPagedAuto: $ne: true
      })

  environments:
    development:
      collections:
        notes: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["published/notes", "drafts/notes"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_post-full"
              siteNavOrder: 1.1
            })

        articles: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["published/articles", "drafts/articles"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_post-full"
              siteNavOrder: 1.1
            })

        posts: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["published/articles", "drafts/articles", "published/notes", "drafts/notes"]}
            isPagedAuto: $ne: true
          }, [date:- 1])

        work: ->
          @getCollection("html").findAllLive({
            relativeDirPath: {"$in" : ["published/work", "drafts/work"]}
            isPagedAuto: $ne: true
          }, [date: -1]).on "add", (model) ->
            model.setMetaDefaults({
              layout: "_work-full"
              siteNavOrder: 3.1
            })

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

    gulp:
      writeAfter: false
      generateAfter: ["default"]

    ghpages:
      deployRemote: "origin"
      deployBranch: "master"
}

# Export the DocPad Configuration
module.exports = docpadConfig
