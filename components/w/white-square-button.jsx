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
		"content": `<style>.lu1px_bac {
  fill: currentColor;
  d: path("M2 2v60h60V2zm58 58H4V4h56z");
}

.z79lwxbrh {
  fill: currentColor;
  d: path("M10 10h44v44H10z");
}
</style><path class="lu1px_bac"/><path class="z79lwxbrh"/>`,
		"fallback": "emojione-monotone:white-square-button",
	});
}

export default Component;
