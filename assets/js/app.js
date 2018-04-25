$( document ).ready(function() {
  
  /* Tooltips */
  
  $('[data-toggle="tooltip"]').tooltip();
  
  /* Subnavigation accordion 
  
  $(".panel-navigation .list-group-item").click(function(){
    // Is it collapsed?
    if ($(this).hasClass("collapsed")) {
      // Collapse all
      $(".panel-navigation .list-group > .list-group-item").addClass('collapsed').next('.collapse.in').collapse('hide');
      // Expand selected
      $(this).removeClass('collapsed').next('.collapse').collapse('show');      
    }
 
    return false;  
  });
  
  $(".panel-navigation .list-group-item").click(function(){
    // All inactive
    $(".panel-navigation .list-group-item").removeClass('active');
    // Selected active
    $(this).addClass('active');
    
    return false;  
  });
  
  */
  
  /* Add Key form */
  
  // Type set?
  function checkKeyType() {
    if ( $("#addKeyFormType select option:selected").attr('disabled') == 'disabled') {
      $("#addKeyFormRights").hide();
    } else {
      $("#addKeyFormRights").show();
    }
  }
  checkKeyType();
  $( "#addKeyFormType select" ).change(function() {
    checkKeyType();
  });
  
  // Rights set?
  function checkKeyRights() {
    if ( $("#addKeyFormRights select option:selected").attr('disabled') == 'disabled') {
      $("#addKeyFormConfirm").hide();
    } else {
      $("#addKeyFormConfirm").show();
    }
  }
  checkKeyRights();
  $( "#addKeyFormRights select" ).change(function() {
    checkKeyRights();
  });
  
  // Show Key
  
  $('#addKeyFormConfirm').click(function() {
    $("#addKeyForm").collapse("hide");
    $("#addKeyShow").collapse("show");
  });
  
  
  $(".nav-tabs-accounts").click(function() {
    //$(this).tab("show");
  });
  
  
  // ACCOUNT CONTACTS

  // Toggle if "Same as..." checkbox clicked
  $(".account-contact-toggle").change(function() {
    $isChecked = $(this).is(':checked');
    $details = $(this).parents(".account-contact").find(".collapse");
    if ($isChecked == true) {
      $details.collapse("hide"); 
    } else {
      $details.collapse("show");
    }
  });
  
  
  
  // VOICEMAIL
  
  // Hide/show Add button when Add form appears/disappears
  $('#addVoicemail').on('show.bs.collapse', function () {
    $("#addVoicemailButton").hide();
  });
  $('#addVoicemail').on('hide.bs.collapse', function () {
    $("#addVoicemailButton").show();
  });
  
  // Voicemail accordion
  //$('.panel-voicemails .list-group-item').on('click', function () {
  //  // Collapse all
  //  $(this).collapse('hide');
 //});
  
  
});