import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ag2kz-bnv {
  fill-rule: evenodd;
  d: path("M10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nx53exbvi {
  fill-rule: evenodd;
  d: path("M4.5 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1");
}

.p9w_x75yf {
  fill-rule: evenodd;
  d: path("M15.581 2.186a1 1 0 0 0-1.395.233l-5 7a1 1 0 0 0 1.628 1.162l5-7a1 1 0 0 0-.233-1.395");
}

.ude7twc4s {
  fill-rule: evenodd;
  d: path("M4.419 2.186a1 1 0 0 1 1.395.233l5 7a1 1 0 1 1-1.628 1.162l-5-7a1 1 0 0 1 .233-1.395");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="ude7twc4s"/><path clip-rule="evenodd" class="p9w_x75yf"/><path clip-rule="evenodd" class="nx53exbvi"/><path clip-rule="evenodd" class="ag2kz-bnv"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:yuan-off",
	});
}

export default Component;
