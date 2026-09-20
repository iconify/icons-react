import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v1hxlwv6i.css';
import '../../css/o/ol3h0nbuk.css';
import '../../css/y/yzz1069tg.css';
import '../../css/q/q4j6-ybfy.css';
import '../../css/b/b-b36v-ia.css';
import '../../css/r/r-do9_buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><g class="mc2zb0bvp"><path class="v1hxlwv6i"/><path class="ol3h0nbuk"/><path class="yzz1069tg"/><path class="q4j6-ybfy"/><path class="b-b36v-ia"/></g><path class="r-do9_buf"/></g>`,
		"fallback": "solar:zip-file-line-duotone",
	});
}

export default Component;
