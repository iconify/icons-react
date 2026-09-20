import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/g/g626xxb-k.css';
import '../../css/g/gms528h1j.css';
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
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="g626xxb-k"/><path class="gms528h1j"/><path class="qdnildxhg"/><path class="yup5k1aiy"/><path class="aqe2mdwjw"/></g>`,
		"fallback": "solar:window-frame-linear",
	});
}

export default Component;
