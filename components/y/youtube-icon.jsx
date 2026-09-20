import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bji0pmblc {
  fill: var(--svg-color--red, red);
  d: path("M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134");
}

.yyxdkxbnm {
  fill: var(--svg-color--fff, #fff);
  d: path("m102.421 128.06l66.328-38.418l-66.328-38.418z");
}
</style><path class="bji0pmblc"/><path class="yyxdkxbnm"/>`,
		"fallback": "logos:youtube-icon",
	});
}

export default Component;
