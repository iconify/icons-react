import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/t/tufdhzbwd.css';
import '../../css/r/r-ud0xybx.css';
import '../../css/d/drt7lkbor.css';
import '../../css/w/w0aobzb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGOxAULdLC" class="i7sr6ubzr"/></defs><use href="#SVGOxAULdLC"/><use href="#SVGOxAULdLC"/><path class="tufdhzbwd"/><path class="r-ud0xybx"/><path class="drt7lkbor"/><path class="w0aobzb8g"/>`,
		"fallback": "gcp:web-risk",
	});
}

export default Component;
