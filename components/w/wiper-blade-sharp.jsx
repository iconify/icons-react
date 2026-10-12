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
		"content": `<style>.i1ovlac-p {
  d: path("m6.6 17.4l6.65-6.65m-1.9-1.7l7.55-5.6l.6-.45l.49.57l.52.61l.49.57l-.6.45l-7.55 5.6l-.6.45l-.49-.57l-.52-.61l-.49-.57z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="yohxqabuf"/><path class="i1ovlac-p"/></g>`,
		"fallback": "iconoven:wiper-blade-sharp",
	});
}

export default Component;
