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
		"content": `<style>.wd7se7_wa {
  fill: currentColor;
  d: path("M32 4c15.439 0 28 12.561 28 28S47.439 60 32 60S4 47.439 4 32S16.561 4 32 4m0-2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2");
}
</style><path class="wd7se7_wa"/>`,
		"fallback": "emojione-monotone:white-circle",
	});
}

export default Component;
