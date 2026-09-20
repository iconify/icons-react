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

.o0xc09b1y {
  fill: var(--svg-color--03f, #03f);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.zui-labwq {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 6.947l-8 3.369v3.368l8 3.368l8-3.368v-3.368zm0 1.263l6.737 2.809L12 14.105L5.263 11.02z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="o0xc09b1y"/><path class="zui-labwq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:wrld-background",
	});
}

export default Component;
