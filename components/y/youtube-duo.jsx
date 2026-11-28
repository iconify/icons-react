import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqp4n6_wf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g2f38_bgz.css';
import '../../css/x/xgirfrbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zqp4n6_wf"/><g class="dt0cm9dhy primary"><path class="g2f38_bgz"/><path class="xgirfrbpu"/></g>`,
		"fallback": "iconaut:youtube-duo",
	});
}

export default Component;
