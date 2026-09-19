import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xszgbmujs {
  fill: currentColor;
  d: path("M60 4v56H4V4zm2-2H2v60h60z");
}
</style><path class="xszgbmujs"/>`,
		"fallback": "emojione-monotone:white-large-square",
	});
}

export default Component;
