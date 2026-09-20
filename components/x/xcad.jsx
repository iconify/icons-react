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
		"content": `<style>.c3qkfdbnr {
  stop-color: var(--svg-color--9b2aa6, #9b2aa6);
}

.c57oaob7b {
  d: path("M9.666 11.49L6.324 4.571h4.837l1.701 4.053h.043l3.112-4.053H21l-5.994 7.21l3.553 7.647h-5.003l-1.83-4.655h-.042L8.13 19.43H3z");
}

.dvbvzjbsv {
  stop-color: var(--svg-color--fc125f, #fc125f);
}

.ft5dv1b6b {
  fill: none;
}

.vozw4vt_u {
  stop-color: var(--svg-color--fd6422, #fd6422);
}

.w00jeebov {
  stop-color: var(--svg-color--fc194a, #fc194a);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGjdJpzeMx)" class="c57oaob7b"/><defs><linearGradient id="SVGjdJpzeMx" x1="11.999" x2="11.999" y1="19.429" y2="4.57" gradientUnits="userSpaceOnUse"><stop offset=".015" class="vozw4vt_u"/><stop offset=".26" class="w00jeebov"/><stop offset=".605" class="dvbvzjbsv"/><stop offset="1" class="c3qkfdbnr"/></linearGradient></defs></g>`,
		"fallback": "token-branded:xcad",
	});
}

export default Component;
