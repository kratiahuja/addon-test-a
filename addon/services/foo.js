import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class FooService extends Service {
  @service('bar') barManager;

  fooFunc() {
    console.log('I am being called from addon-test-a');
  }

  testFunc() {
    this.barManager.newFunc();
  }
}
