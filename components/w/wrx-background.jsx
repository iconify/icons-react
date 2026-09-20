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
		"content": `<style>.dtz_z2bgw {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.675 15.5L4 8l3.5 2.5zm.825 1L12.035 5l3.465 5.33l-7.835 6.17zM20 8L9.15 16.5h10.13zM4.5 17.5h15V19h-15z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xpsalxa6q {
  fill: var(--svg-color--3067f0, #3067f0);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xpsalxa6q"/><path class="dtz_z2bgw"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:wrx-background",
	});
}

export default Component;
