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

.jqnfz77nm {
  fill: var(--svg-color--fff, #fff);
  d: path("m14.465 10.148l-1.391 2.502l-1.392 2.501l-1.393 2.496l-1.391-2.5l1.391-2.5l1.393-2.5l-2.113-3.794h2.782l.723 1.296zm-7.68-3.795H4l3.505 6.295l1.393-2.5zm11.824 1.296l-.722-1.296h-2.783l2.114 3.795l-1.393 2.502l-1.392 2.501l1.392 2.496l1.392-2.5l1.392-2.5l1.391-2.5z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="jqnfz77nm"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:wing-background",
	});
}

export default Component;
