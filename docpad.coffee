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

  # ignoreCustomPatterns: /\b_.*\.css/
}

# Export the DocPad Configuration
module.exports = docpadConfig
