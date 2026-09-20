import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrn8gobul.css';
import '../../css/d/dp_5ikbau.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrn8gobul"/><path class="dp_5ikbau"/>`,
		"fallback": "thesvg-color:zabbix",
	});
}

export default Component;
