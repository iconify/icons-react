import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/k/kjetambwk.css';
import '../../css/t/tsqcps7zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><path class="kjetambwk"/><path class="tsqcps7zx"/></g>`,
		"fallback": "circle-flags:xk",
	});
}

export default Component;
