import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a3ij4ee4d.css';
import '../../css/x/x2xetcbew.css';
import '../../css/i/izb9cccdy.css';
import '../../css/j/jfru2eb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a3ij4ee4d wm-k"/><path class="wm-shadow x2xetcbew"/><path class="izb9cccdy wm-k"/><path class="jfru2eb2v wm-a"/></g>`,
		"fallback": "withicons:weight-engrave",
	});
}

export default Component;
