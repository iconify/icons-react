import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p888sqb4d {
  d: path("M17.226 3L12 15.774L6.774 3H4.452L12 21l7.55-18z");
}

.rs-8xcc2v {
  d: path("M12 9.715L14.903 3H9.097z");
}

.xt41kvbyw {
  fill: var(--svg-color--34bde2, #34bde2);
}
</style><g class="xt41kvbyw"><path class="p888sqb4d"/><path class="rs-8xcc2v"/></g>`,
		"fallback": "token-branded:xvg",
	});
}

export default Component;
