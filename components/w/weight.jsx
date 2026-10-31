import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/srmgpib9i.css';
import '../../css/n/narsbab6v.css';
import '../../css/m/mg9yxp6gq.css';
import '../../css/j/jp34jrmeq.css';
import '../../css/x/xusfllshu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="srmgpib9i wm-shadow"/><path class="narsbab6v wm-shadow"/><path class="mg9yxp6gq"/><path class="jp34jrmeq"/><path class="xusfllshu"/></g>`,
		"fallback": "withicons-brutal:weight",
	});
}

export default Component;
