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
		"content": `<style>.bwdd5rb7e {
  d: path("M17.5 10.5C19.7091 10.5 21.5 8.70914 21.5 6.5C21.5 4.29086 19.7091 2.5 17.5 2.5C15.2909 2.5 13.5 4.29086 13.5 6.5C13.5 8.70914 15.2909 10.5 17.5 10.5Z");
}

.d_-sftbvq {
  d: path("M6.5 21.5C8.70914 21.5 10.5 19.7091 10.5 17.5C10.5 15.2909 8.70914 13.5 6.5 13.5C4.29086 13.5 2.5 15.2909 2.5 17.5C2.5 19.7091 4.29086 21.5 6.5 21.5Z");
}

.dij3yubmk {
  d: path("M17.5 21.5C15.2909 21.5 13.5 19.7091 13.5 17.5C13.5 15.2909 15.2909 13.5 17.5 13.5C19.7091 13.5 21.5 15.2909 21.5 17.5C21.5 19.7091 19.7091 21.5 17.5 21.5Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rkgpse_-a {
  d: path("M6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="rkgpse_-a"/><path class="dij3yubmk"/><path class="bwdd5rb7e"/><path class="d_-sftbvq"/></g>`,
		"fallback": "solar:widget-3-line-duotone",
	});
}

export default Component;
