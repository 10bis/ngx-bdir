const sass = require('node-sass');

describe('mixins test', () => {
  function setup(source) {
    return sass
      .renderSync({
        data: `
        @import 'projects/ngx-bdir/src/lib/styles/bdir.mixins.scss';
        ${source}
      `
      })
      .css.toString();
  }

  it('should create an rtl ltr support for margin end', () => {
    const source = `
      h1 {
        @include margin-end(20px);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for padding start', () => {
    const source = `
      h1 {
        @include padding-start(20px);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for padding end without encapsulation', () => {
    const source = `
      h1 {
        @include padding-end(20px, false);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for float', () => {
    const source = `
      div {
        @include float();
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for dir without encapsulation', () => {
    const source = `
      div {
        @include dir(true, false);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for start (left / right) positioning', () => {
    const source = `
      div {
        @include start(40px);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for end (right / left) positioning without encapsulation', () => {
    const source = `
      div {
        @include end(20%, false);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for translating ', () => {
    const source = `
      div {
        @include transformTranslate(5px, 5px);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });

  it('should create an rtl ltr support for mirroring without encapsulation', () => {
    const source = `
      div {
        @include mirror(false);
      }
    `;
    const css = setup(source);
    expect(css).toMatchSnapshot();
  });
});
