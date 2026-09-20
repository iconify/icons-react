import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g626xxb-k.css';
import '../../css/j/jeqg33j2w.css';
import '../../css/e/e6bz15b5n.css';
import '../../css/q/qdnildxhg.css';
import '../../css/y/yup5k1aiy.css';
import '../../css/a/aqe2mdwjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g626xxb-k"/><path class="jeqg33j2w"/><path class="e6bz15b5n"/><path class="qdnildxhg"/><path class="yup5k1aiy"/><path class="aqe2mdwjw"/></g>`,
		"fallback": "solar:window-frame-broken",
	});
}

export default Component;
