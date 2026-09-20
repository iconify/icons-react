import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":228};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m-pnz74ui {
  d: path("M128 0l128 227.093H0z");
}

.tlcmntu3e {
  stop-color: var(--svg-color--fff, #FFF);
}
</style><defs><linearGradient x1="100.93%" y1="181.283%" x2="41.769%" y2="100%" id="ssvg-id-zeit-icona"><stop offset="0%" class="tlcmntu3e"/><stop offset="100%"/></linearGradient></defs><path fill="url(#ssvg-id-zeit-icona)" class="m-pnz74ui"/>`,
		"fallback": "logos:zeit-icon",
	});
}

export default Component;
