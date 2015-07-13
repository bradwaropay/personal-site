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
      @getCollection('html').findAllLive({isNavLink:true})
}

# Export the DocPad Configuration
module.exports = docpadConfig
