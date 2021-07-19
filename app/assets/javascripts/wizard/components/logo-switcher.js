import Component from "@ember/component";
import { observes } from "discourse-common/utils/decorators";

export default Component.extend({
  @observes("step.fieldsById.image_or_icon.value")
  optionChanged() {
    console.log(this.field);
  },
});
