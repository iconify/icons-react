import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mumbkij2k.css';
import '../../css/e/e5heefbvr.css';
import '../../css/t/txh2c660v.css';
import '../../css/k/ksqm5cilc.css';

const viewBox = {"width":1024,"height":366};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mumbkij2k"/><path class="e5heefbvr"/><path class="txh2c660v"/><path class="ksqm5cilc"/>`,
		"fallback": "thesvg-color:zoho",
	});
}

export default Component;
