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
		"content": `<style>.cnm-5-b6c {
  fill: var(--svg-color--fff, #fff);
  d: path("m16.7 4l-1.88 3h3.695l-4.765 7.5h1.34l1.96-3h2.3l-3.04 5h-3.825l-2.22 3.5h-2.25l2.19-3.5h-3.69L11.22 9H9.86l-2.15 3.32l-3.06-4.85L6.905 4h9.8zM7.935 6l-.97 1.5l.745 1.2L8.82 7h3.655l.63-1zm5.61 3l-3.505 5.5h1.42L14.905 9z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4ibq2e8e {
  fill: var(--svg-color--f8b003, #f8b003);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="r4ibq2e8e"/><path class="cnm-5-b6c"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:zyn-background",
	});
}

export default Component;
