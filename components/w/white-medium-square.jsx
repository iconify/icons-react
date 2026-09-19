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
		"content": `<style>.skgal-bib {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M8 8h48v48H8z");
}
</style><path class="skgal-bib"/>`,
		"fallback": "emojione:white-medium-square",
	});
}

export default Component;
