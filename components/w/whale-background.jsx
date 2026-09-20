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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.sxiqbpl5l {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M4 12q0-.252.015-.5H4V10h14.186A6.5 6.5 0 0 0 11.5 5.519V4.015Q11.748 4 12 4a8 8 0 1 1-8 8m1.5 0q0-.252.019-.5h1.003a5.5 5.5 0 0 0 5.969 5.979V15.97a4 4 0 0 1-4.46-4.47h10.45q.018.248.019.5a6.5 6.5 0 1 1-13 0m6.5 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path clip-rule="evenodd" class="sxiqbpl5l"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:whale-background",
	});
}

export default Component;
