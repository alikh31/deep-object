(function(root, factory){
  module.exports = factory(require('lodash').runInContext());
}(this, function(_, undefined){
    'use strict';
    const seperator = '___DOT__NIR#'
    var callCallback = function(object ,propertyPath, callback) {
      var pathArray = propertyPath.split(seperator);
      return callback(object, pathArray);
    };

    var mixins = {
      deepMapValues: function(object, callback, propertyPath){
        propertyPath = propertyPath || '';
        if(_.isArray(object)){
          callCallback(object, propertyPath, callback);
          return _.map(object, deepMapValuesIteratee);
        }
        else if(_.isObject(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isFunction(object)){
          callCallback(object, propertyPath, callback);
          return _.extend({}, object, _.mapValues(object, deepMapValuesIteratee));
        }
        else{
          return callCallback(object, propertyPath, callback);;
        }
        function deepMapValuesIteratee(value, key){
          var valuePath = propertyPath ? propertyPath + seperator + key: key;
          return _.deepMapValues(value, callback, valuePath);
        }
      }
    };

    _.mixin(mixins);
    return mixins;
}));
