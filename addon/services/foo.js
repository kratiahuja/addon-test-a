import Service from '@ember/service';

export default class FooService extends Service {
  fooFunc() {
    console.log('I am being called from addon-test-a');
  }
}
