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
		"content": `<style>.bov2gvl_n {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.235 12.941L15.308 4l-2.842 7.059h3.299L8.758 20l2.819-7.059z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qkmr-kbck {
  fill: var(--svg-color--28dbd1, #28dbd1);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="qkmr-kbck"/><path class="bov2gvl_n"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:xrune-background",
	});
}

export default Component;
