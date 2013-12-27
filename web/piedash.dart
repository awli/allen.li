import 'dart:html';

void main() {
  querySelector("#nav-home").attributes['class'] = 'active';
  querySelector("#nav-settings").onClick.listen(toggleSettingsDisplay);
}

/**
 * Event handler for when someone clicks the settings button. 
 */
void toggleSettingsDisplay(Event e) {
  
}