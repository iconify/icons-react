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
		"content": `<style>.dx07b9_zf {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 9.969L14.58 4H9.42z");
}

.ft5dv1b6b {
  fill: none;
}

.gamng9bta {
  fill: var(--svg-color--34bde2, #34bde2);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w0e07hbxz {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.645 4L12 15.355L7.355 4H5.29L12 20l6.71-16z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="gamng9bta"/><path class="w0e07hbxz"/><path class="dx07b9_zf"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:xvg-background",
	});
}

export default Component;
