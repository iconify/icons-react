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
		"content": `<style>.k426q6blp {
  d: path("M5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Zm6 3.25h.01");
}

.mzqq73dgo {
  d: path("M14.289 13.303a3.5 3.5 0 1 1-6.578 0");
}

.s84kxntrd {
  d: path("M11 9v3h3.5l1.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k426q6blp"/><path class="s84kxntrd"/><path class="mzqq73dgo"/></g>`,
		"fallback": "uix-sharp:wheelchair-accessible-sign",
	});
}

export default Component;
