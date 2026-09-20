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
		"content": `<style>.a1pxfq_ei {
  fill-rule: evenodd;
  d: path("M10.707 8.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414");
}

.ag2kz-bnv {
  fill-rule: evenodd;
  d: path("M10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ghai0fb8e {
  fill-rule: evenodd;
  d: path("M4 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1");
}

.o9nowibly {
  fill-rule: evenodd;
  d: path("M9.293 8.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="a1pxfq_ei"/><path clip-rule="evenodd" class="o9nowibly"/><path clip-rule="evenodd" class="ghai0fb8e"/><path clip-rule="evenodd" class="ag2kz-bnv"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:yen-off",
	});
}

export default Component;
