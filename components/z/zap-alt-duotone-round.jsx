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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.kh_hyc6id {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 15l-4.586 4.586c-.412.412-1.107.03-.98-.538l1.24-5.584A1.203 1.203 0 0 0 7.5 12a.975.975 0 0 1-.89-1.37l2.862-6.442A2 2 0 0 1 11.3 3H15c.891 0 1.45.963 1.008 1.736l-2.016 3.528A1.16 1.16 0 0 0 15 10h1a.828.828 0 0 1 .586 1.414z");
}

.n7mwmjb2o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 15l-4.586 4.586a.581.581 0 0 1-.98-.538l1.241-5.584A1.206 1.206 0 0 0 7.5 12a.974.974 0 0 1-.891-1.371l2.863-6.441A2 2 0 0 1 11.3 3H15a1.16 1.16 0 0 1 1.008 1.736l-2.016 3.528A1.16 1.16 0 0 0 15 10h1a.828.828 0 0 1 .586 1.414Z");
}
</style><g class="ft5dv1b6b"><path class="n7mwmjb2o"/><path class="kh_hyc6id"/></g>`,
		"fallback": "coolicons:zap-alt-duotone-round",
	});
}

export default Component;
