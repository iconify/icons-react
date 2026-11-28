import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6hntubbs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q6fepbcme.css';
import '../../css/s/sy986tb5k.css';
import '../../css/w/wrum7db2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6hntubbs secondary"/><g class="dt0cm9dhy primary"><path class="q6fepbcme"/><path class="sy986tb5k"/><path class="wrum7db2o"/></g>`,
		"fallback": "iconaut:wine-duo",
	});
}

export default Component;
