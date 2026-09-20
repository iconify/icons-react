import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":195};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pihg14bvq {
  fill: var(--svg-color--03363d, #03363d);
  d: path("M118.25 51.233v142.773H0zm0-51.233c0 32.644-26.481 59.125-59.125 59.125S0 32.645 0 0zm19.5 194.006c0-32.677 26.449-59.125 59.125-59.125S256 161.361 256 194.006zm0-51.266V0H256z");
}
</style><path class="pihg14bvq"/>`,
		"fallback": "logos:zendesk-icon",
	});
}

export default Component;
