Parse.initialize("LO0EWUNNFz3ovQ1nHiv54s4Wc8YHBB4GjcorZI8B", "e33BCEwSf0Muc2AQqTsjqcGQNxgtrF6lkepB7hyc")

$("form.parse-form").on("submit", (e) ->
  e.preventDefault()
  unless !checkIfFormIsValid()
    console.log "submit"
    ##createParseFormObject($(@).attr('data-object-name'), {name: 'Guy2'})
)

createParseFormObject = (Name, options) ->
  FormObject = Parse.Object.extend("#{Name}")
  formObject = new FormObject()

  formObject.save(options)

checkIfFormIsValid = () ->
  return true
