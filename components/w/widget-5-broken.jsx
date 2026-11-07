import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fgrp_1b7a.css';
import '../../css/r/r01r-3bes.css';
import '../../css/w/wko_7ccxa.css';
import '../../css/o/o8ptejdcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fgrp_1b7a"/><path class="r01r-3bes"/><path class="wko_7ccxa"/><path class="o8ptejdcw"/></g>`,
		"fallback": "solar:widget-5-broken",
	});
}

export default Component;
