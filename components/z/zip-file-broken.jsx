import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wk0iqkb3f.css';
import '../../css/v/v1hxlwv6i.css';
import '../../css/o/ol3h0nbuk.css';
import '../../css/y/yzz1069tg.css';
import '../../css/q/q4j6-ybfy.css';
import '../../css/b/b-b36v-ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wk0iqkb3f"/><path class="v1hxlwv6i"/><path class="ol3h0nbuk"/><path class="yzz1069tg"/><path class="q4j6-ybfy"/><path class="b-b36v-ia"/></g>`,
		"fallback": "solar:zip-file-broken",
	});
}

export default Component;
