import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/d/dudnyzbkc.css';
import '../../css/n/n9g_p9nwk.css';
import '../../css/e/eopj8uktn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="dudnyzbkc"/><circle class="n9g_p9nwk"/><path class="eopj8uktn"/></g>`,
		"fallback": "glyphs-poly:wink",
	});
}

export default Component;
