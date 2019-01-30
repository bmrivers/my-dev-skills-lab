

// removes a skill on the list using the button
$('.skill-list').on('click', 'button', function() {
    $(this).closest('div').fadeOut(500, function() {
        //removedSkills.push($(this).remove());
    })
});

$('#add-button').on('click', function(evt) {
    let inputSkill =  $('#skill-input').val();
    console.log(inputSkill);
    $('.skill-list').append(skillTemp);
    $('.skill-list div:last-child span').html(inputSkill);
    $('#skill-input').val('');
})


var skillTemp =
`
<div class="new-skill">
<button class="remove">X</button>
<span></span>
`;



