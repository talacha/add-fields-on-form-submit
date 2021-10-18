/**
 * @file
 * Contains the node_add_sales JS behavior.
 */

 (function ($, Drupal) {

  'use strict';

  Drupal.behaviors.nodeAddSales = {
    attach: function (context, settings) {
      var addition = function() {    
        var sum = 0;    
        settings.node_add_settings.sum_fields.forEach(field => {
          var instances = $(`input[name^="${field}"]`);
          for (var i = 0; i <= instances.length; i++) {
            var value = $(`input[name="${field}[${i}][value]"]`).val();
            if (value) {
              sum += parseFloat(value);
            }
          }
        });

        $(`input[name^='${settings.node_add_settings.total_field}']`).val(sum);
      };

      settings.node_add_settings.sum_fields.forEach(field => {
        $(`input[name^="${field}"]`).once('bind-addition').keyup(addition);
      });

    }
  };

})(jQuery, Drupal);
