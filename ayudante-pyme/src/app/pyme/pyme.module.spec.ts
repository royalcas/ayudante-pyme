import { PymeModule } from './pyme.module';

describe('PymeModule', () => {
  let pymeModule: PymeModule;

  beforeEach(() => {
    pymeModule = new PymeModule();
  });

  it('should create an instance', () => {
    expect(pymeModule).toBeTruthy();
  });
});
