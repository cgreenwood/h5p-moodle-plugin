(function ($) {
  function getRow ($el) {
    return $el.closest('.fitem');
  }

  function init () {
    var $editor = $('.h5p-editor');
    var $fileField = $('input[name="h5pfile"]');

    if (H5PIntegration.hubIsEnabled) {
      $('input[name="h5paction"]').closest('.form-group.row.fitem').hide();
    }

    H5PEditor.init(
      $('#mform1'),
      $('input[name="h5paction"]'),
      getRow($fileField),
      getRow($editor),
      $editor,
      $('input[name="h5plibrary"]'),
      $('input[name="h5pparams"]')
    );
  }

  $(document).ready(init);
})(H5P.jQuery);
