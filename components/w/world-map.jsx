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
		"content": `<style>.bfre3yvjw {
  d: path("M2.75 6.25L9 4l6 2.25L21.25 4v13.75L15 20l-6-2.25L2.75 20Zm6.25 8v3.5m6-11.5V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2m_23b0s {
  d: path("m7.35 7.9l.55-.3q1.1-.6 2.2 0l.55.3q1.1.6.73 1.73q-.38 1.12-1.62 1.28l-1.52.18q-1.24.16-1.57-1.05l-.09-.33q-.33-1.21.77-1.81m6.39 5.42l2.77-.39q1.24-.18 1.13 1.06l-.03.27q-.11 1.24-1.18 1.88l-.36.22q-1.07.64-2.16.03l-.07-.03q-1.09-.61-1.21-1.73q-.13-1.13 1.11-1.31");
}
</style><g class="hntgybcog"><path class="bfre3yvjw"/><path class="y2m_23b0s"/></g>`,
		"fallback": "iconoven:world-map",
	});
}

export default Component;
