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
		"content": `<style>.fcz-iccns {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("m14.52 10.5l2.522-1L12 6.5l-4.706 3v5L12 17l5.042-2.5l-2.69-1l-2.345 1.164l-.007.003l-2.35-1.331l-.003-.002L12 12l-2.353-1.333l.006-.003L12 9.334l.011.006zM12 4l7.059 4v8L12 20l-7.06-4V8l.009-.005z");
}

.ft5dv1b6b {
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
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path clip-rule="evenodd" class="fcz-iccns"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:wozx-background",
	});
}

export default Component;
